import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { route } from '@/routes'

export function useTournament(id = null) {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (id !== null) {
      const controller = new AbortController()
      getTournament(id, { signal: controller.signal })
      return () => controller.abort()
    }
  }, [id])

  async function createTournament(tournament) {
    setLoading(true)
    setErrors({})

    return axios.post('tournaments', tournament)
      .then(() => navigate(route('tournaments.index')))
      .catch(error => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      })
      .finally(() => setLoading(false))
  }

  async function getTournament(id, { signal } = {}) {
    setLoading(true)

    return axios.get(`tournaments/${id}`, { signal })
      .then(response => setData(response.data.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  async function updateTournament(tournament) {
    setLoading(true)
    setErrors({})

    return axios.put(`tournaments/${tournament.id}`, tournament)
      .then(() => navigate(route('tournaments.index')))
      .catch(error => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      })
      .finally(() => setLoading(false))
  }

  async function destroyTournament(tournament) {
    return axios.delete(`tournaments/${tournament.id}`)
  }

  return {
    tournament: { data, setData, errors, loading },
    createTournament,
    updateTournament,
    destroyTournament,
  }
}

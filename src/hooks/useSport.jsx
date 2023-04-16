import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { route } from '@/routes'

export function useSport(id = null) {
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (id !== null) {
      const controller = new AbortController()
      getSport(id, { signal: controller.signal })
      return () => controller.abort()
    }
  }, [id])

  async function createSport(sport) {
    setLoading(true)
    setErrors({})

    return axios.post('sports', sport)
      .then(() => navigate(route('sports.index')))
      .catch(error => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      })
      .finally(() => setLoading(false))
  }

  async function getSport(id, { signal } = {}) {
    setLoading(true)

    return axios.get(`sports/${id}`, { signal })
      .then(response => setData(response.data.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  async function updateSport(sport) {
    setLoading(true)
    setErrors({})

    return axios.put(`sports/${sport.id}`, sport)
      .then(() => navigate(route('sports.index')))
      .catch(error => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      })
      .finally(() => setLoading(false))
  }

  async function destroySport(sport) {
    return axios.delete(`sports/${sport.id}`)
  }

  return {
    sport: { data, setData, errors, loading },
    createSport,
    updateSport,
    destroySport,
  }
}

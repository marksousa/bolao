import { useState, useEffect } from 'react'

export function useTournaments() {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    getTournaments({ signal: controller.signal })
    return () => { controller.abort() }
  }, [])

  async function getTournaments({ signal } = {}) {
    return axios.get('tournaments', { signal })
      .then(response => setTournaments(response.data.data))
      .catch(() => {})
  }

  return { tournaments, getTournaments }
}

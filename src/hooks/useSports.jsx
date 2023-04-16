import { useState, useEffect } from 'react'

export function useSports() {
  const [sports, setSports] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    getSports({ signal: controller.signal })
    return () => { controller.abort() }
  }, [])

  async function getSports({ signal } = {}) {
    return axios.get('sports', { signal })
      .then(response => setSports(response.data.data))
      .catch(() => {})
  }

  return { sports, getSports }
}

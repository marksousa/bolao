import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { route } from '@routes'

export function useAuth() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState()

  async function register(data) {
    setErrors({})

    return axios.post('auth/register', data)
      .then(() => {
        navigate(route('sports.index'))
      })
      .catch(error => {
        if(error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      })
  }

  return { register, errors }
}

import { useNavigate, useParams } from 'react-router-dom'
import { useSport } from '@/hooks/useSport'
import { route } from '@/routes'
import ValidationError from '@/components/ValidationError'
import IconSpinner from '@/components/IconSpinner'

function EditSport() {
  const params = useParams()
  const { sport, updateSport } = useSport(params.id)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    await updateSport(sport.data)
  }

  return (
    <form onSubmit={ handleSubmit } noValidate>
      <div className="flex flex-col mx-auto md:w-96 w-full">

        <h1 className="heading">Edit Sport</h1>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="required">Sport Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={ sport.data.name ?? '' }
            onChange={ event => sport.setData({
              ...sport.data,
              name: event.target.value,
            }) }
            className="form-input plate"
            disabled={ sport.loading }
          />
          <ValidationError errors={ sport.errors } field="name" />
        </div>

        <div className="border-t h-[1px] my-6"></div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={ sport.loading }
          >
            { sport.loading && <IconSpinner /> }
            Update Sport
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            disabled={ sport.loading }
            onClick={ () => navigate(route('sports.index')) }
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default EditSport

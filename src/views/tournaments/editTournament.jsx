import { useNavigate, useParams } from 'react-router-dom'
import { useTournament } from '@/hooks/useTournament'
import { route } from '@/routes'
import ValidationError from '@/components/ValidationError'
import IconSpinner from '@/components/IconSpinner'

function EditTournament() {
  const params = useParams()
  const { tournament, updateTournament } = useTournament(params.id)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    await updateTournament(tournament.data)
  }

  return (
    <form onSubmit={ handleSubmit } noValidate>
      <div className="flex flex-col mx-auto md:w-96 w-full">

        <h1 className="heading">Edit Tournament</h1>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="required">Tournament Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={ tournament.data.name ?? '' }
            onChange={ event => tournament.setData({
              ...tournament.data,
              name: event.target.value,
            }) }
            className="form-input plate"
            disabled={ tournament.loading }
          />
          <ValidationError errors={ tournament.errors } field="name" />
        </div>

        <div className="border-t h-[1px] my-6"></div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={ tournament.loading }
          >
            { tournament.loading && <IconSpinner /> }
            Update Tournament
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            disabled={ tournament.loading }
            onClick={ () => navigate(route('tournaments.index')) }
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default EditTournament

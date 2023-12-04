import { useNavigate } from 'react-router-dom'
import { useTournament } from '@/hooks/useTournament'
import { route } from '@/routes'
import ValidationError from '@/components/ValidationError'
import IconSpinner from '@/components/IconSpinner'
import { useSports } from '@/hooks/useSports'

function CreateTournament() {
  const { tournament, createTournament } = useTournament()
  const { sports } = useSports()
  const navigate = useNavigate()
  const [sport_id, setSportId] = useState()

  async function handleSubmit(event) {
    event.preventDefault()

    await createTournament(tournament.data)
  }

  return (
    <form onSubmit={ handleSubmit } noValidate>
      <div className="flex flex-col mx-auto md:w-96 w-full">

        <h1 className="heading">Add Tournament</h1>

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

        <div className="flex flex-col gap-2">
          <label htmlFor="sport_id" className="required">Sport</label>
          <select
            name="sport_id"
            id="sport_id"
            value={ sport_id }
            className="form-input"
            onChange={ (event) => setSportId(event.target.value) }
            disabled={ loading }
          >
            { sports.length > 0 && sports.map((sport) => {
              return <option key={ sport.id } value={ sport.id }>
                { sport.name }{' '}
                ({ (sport.price_per_hour / 100).toFixed(2) } &euro;/h)
              </option>
            }) }
          </select>
          <ValidationError errors={ errors } field="sport_id" />
          <ValidationError errors={ errors } field="general" />
        </div>

        <div className="border-t h-[1px] my-6"></div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={ tournament.loading }
          >
            { tournament.loading && <IconSpinner /> }
            Save Tournament
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

export default CreateTournament

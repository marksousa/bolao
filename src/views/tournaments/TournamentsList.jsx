import { Link } from 'react-router-dom'
import { route } from '@/routes'
import { useTournaments } from '@/hooks/useTournaments'
import { useTournament } from '@/hooks/useTournament'

function TournamentsList() {
  const { tournaments, getTournaments } = useTournaments()
  const { destroyTournament } = useTournament()

  return (
    <div className="flex flex-col mx-auto md:w-96 w-full">

      <h1 className="heading">My Tournaments</h1>

      <Link to={ route('tournaments.create') } className="btn btn-primary">
        Add Tournament
      </Link>

      <div className="border-t h-[1px] my-6"></div>

      <div className="flex flex-col gap-2">
        { tournaments.length > 0 && tournaments.map(tournament => {
          return (
            <div
              key={ tournament.id }
              className="flex bg-gray-100 w-full p-2 justify-between"
            >
              <div className="flex items-center overflow-hidden w-full">
                <div className="text-xl plate">
                  { tournament.name }
                </div>
              </div>
              <div className="flex gap-1">
                <Link
                  to={ route('tournaments.edit', { id: tournament.id }) }
                  className="btn btn-secondary text-sm"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn text-white bg-red-600 hover:bg-red-500 text-sm"
                  onClick={ async () => {
                    await destroyTournament(tournament)
                    await getTournaments()
                  } }
                >
                  X
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TournamentsList

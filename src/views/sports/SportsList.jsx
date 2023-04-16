import { Link } from 'react-router-dom'
import { route } from '@/routes'
import { useSports } from '@/hooks/useSports'
import { useSport } from '@/hooks/useSport'

function SportsList() {
  const { sports, getSports } = useSports()
  const { destroySport } = useSport()

  return (
    <div className="flex flex-col mx-auto md:w-96 w-full">

      <h1 className="heading">My Sports</h1>

      <Link to={ route('sports.create') } className="btn btn-primary">
        Add Sport
      </Link>

      <div className="border-t h-[1px] my-6"></div>

      <div className="flex flex-col gap-2">
        { sports.length > 0 && sports.map(sport => {
          return (
            <div
              key={ sport.id }
              className="flex bg-gray-100 w-full p-2 justify-between"
            >
              <div className="flex items-center overflow-hidden w-full">
                <div className="text-xl plate">
                  { sport.name }
                </div>
              </div>
              <div className="flex gap-1">
                <Link
                  to={ route('sports.edit', { id: sport.id }) }
                  className="btn btn-secondary text-sm"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn text-white bg-red-600 hover:bg-red-500 text-sm"
                  onClick={ async () => {
                    await destroySport(sport)
                    await getSports()
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

export default SportsList

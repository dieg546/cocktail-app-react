
import { useAppStore } from '../stores/useAppStore'
import CardRecipe from '../components/CardRecipe'

export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)

  return (
    <>
    
      <h1 className='text-6xl font-bold mb-10'>
        Favoritos
      </h1>


      <div className=" grid grid-cols-3 gap-5">

        {favorites.map((drink)=>(

            <CardRecipe

              key={drink.idDrink}
              recipe={drink}
              comesFavoritesPage={true}
            />

        ))}

      </div>

    </>
  )
}

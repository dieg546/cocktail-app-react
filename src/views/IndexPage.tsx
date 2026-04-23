import { useEffect, useMemo} from "react";
import { useAppStore } from "../stores/useAppStore"
import CardRecipe from "../components/CardRecipe";

export default function IndexPage() {

    const recipes = useAppStore((state) => state.recipes);
    const hasDrinks = useMemo(()=> recipes.drinks.length !== 0,[recipes])


    useEffect(()=>{
        console.log(hasDrinks);
        console.log(recipes);

    },[recipes])

    return (
        <>

            <h1

                className="text-4xl font-bold mb-5"
            >
                Recetas
            </h1>

            {hasDrinks && (
                <div className=" grid grid-cols-3 gap-5">

                    {recipes.drinks.map((recipe)=>(

                        <CardRecipe
                            key={recipe.idDrink}
                            {...recipe}
                        />

                    ))}

                </div>
            )}

            

        </>
    )
}

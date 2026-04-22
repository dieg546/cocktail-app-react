import { useEffect, useMemo } from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    const {pathname} = useLocation();

    const isHome = useMemo(() => pathname ==='/' ,[pathname])
    const fetchCategories = useAppStore((state)=> state.fetchCategories);

    useEffect(()=>{

        fetchCategories()

    },[])

    return (
        <header className={isHome?' bg-header bg-cover bg-center':'bg-slate-800'}>

            <div className="mx-auto container px-5 py-16">

                <div className="flex justify-between items-center">

                    <div >
                        <img 
                            src="/logo.svg" 
                            alt="Imagen Logotipo" 
                            className="w-25"
                        />

                    </div>

                    <nav className=" flex gap-3 text-white font-bold">

                        <NavLink 
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-amber-500 text-lg" : "text-lg"
                            }
                        >
                            Main Menu
                        </NavLink>

                        <NavLink 
                            to="/Favorites"
                            className={({ isActive }) =>
                                isActive ? "text-amber-500 text-lg" : "text-lg"
                            }
                        >
                            Favorites
                        </NavLink>

                    </nav>

                </div>
                

                {isHome &&(

                    <form 
                        action=""
                        className="mt-5 w-full md:w-1/2 lg:w-1/3 space-y-5"
                    >

                        <div className="space-y-2 flex flex-col">

                            <label 
                                htmlFor="ingredient"
                                className="text-white font-bold"
                            >
                                Nombre o Ingrediente
                            </label>

                            <input 
                                id="ingredient"
                                type="text" 
                                className="p-3 w-full outline-none bg-white rounded-lg"
                                placeholder="Nombre o Ingrediente."
                            />

                        </div> 

                        <div className="space-y-2 flex flex-col">

                            <label 
                                htmlFor="category"
                                className="text-white font-bold"
                            >
                                Categoria
                            </label>

                            <select 
                                name="category" 
                                id="category"
                                className="p-3 w-full outline-none bg-white rounded-lg"
                            >
                                <option value="">-- Seleccione--</option>
                            </select>

                          

                        </div>

                        <input 
                            type="submit" 
                            value='Buscar Recetas'
                            className="bg-orange-800 hover:bg-orange-900 p-2 w-full text-white font-bold rounded-lg cursor-pointer"
                        />

                    </form>

                )}

            </div>

        </header>
    )
}

import type {StateCreator} from 'zustand'
import type { Drink } from "../types";
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice';

export type FavoriteSliceType={

    favorites : Drink[],
    handleClickFavorite: (drink: Drink) => void,
    isFavorite: (drink: Drink) => boolean,
    loadFromStorage: () => void

}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & NotificationSliceType, [], [], FavoriteSliceType>=(set,get, api)=>({

    favorites:[] as Drink[],
    
    handleClickFavorite:(drink)=>{

        
        if(get().isFavorite(drink)){

            set({

                favorites: get().favorites.filter((favorite)=>favorite.idDrink!== drink.idDrink)

            })
            
            createNotificationSlice(set, get, api).showNotification({text:'Se elimino de Favoritos',error:false})

        }else{

            set({
                favorites: [...get().favorites,drink]
            })

            createNotificationSlice(set, get, api).showNotification({text:'Se Agregó a Favoritos',error:false})

        }

        
        localStorage.setItem('favorites', JSON.stringify(get().favorites));

    },

    isFavorite:(drink)=>{

        return get().favorites.some((favorite)=> favorite.idDrink === drink.idDrink)

    },

    loadFromStorage : ()=>{

        const storedFavorites = localStorage.getItem('favorites');

        if(storedFavorites){
            set({

                favorites: JSON.parse(storedFavorites)

            })
        }

    }   

})

//Slice Pattern
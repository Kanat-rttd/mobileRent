import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    addToFavorites = (item) => {
        setFavorites((prev) => [...prev, item]);
    };

    removeFromFavorites = (itemId) => {
        setFavorites((prev) => prev.filter((favorite) => favorite.id !== itemId));
    };

    const isFavorite = (itemId) => {
        return favorites.some((favorite) => favorite.id === itemId)
    };

    return (
        <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
}
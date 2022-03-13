import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  favored: number[]
}

const initialState: InitialState = {
  favored: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite:  (favorites, action: PayloadAction<number>) => {
      favorites.favored.push(action.payload)
    },
    deleteFavorite: (favorites, action: PayloadAction<number>) => {
      favorites.favored = favorites.favored.filter(favorite => favorite !== action.payload)
    }
  }
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
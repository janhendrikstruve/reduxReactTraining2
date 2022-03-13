import { configureStore } from '@reduxjs/toolkit'
import { api } from '../features/api/apiSlice'
import pageReducer from '../features/page/pageSlice'
import detailCardReducer from '../features/detailCard/detailCardSlice'
import favoriteSlice from '../features/favorite/favioriteSlice'
import ratingSlice from '../features/rating/ratingSlice'

export const store = configureStore({
  reducer: {
    // example: exampleReducer,
    page: pageReducer,
    detailCard: detailCardReducer,
    favorite: favoriteSlice,
    rating: ratingSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(api.middleware)
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
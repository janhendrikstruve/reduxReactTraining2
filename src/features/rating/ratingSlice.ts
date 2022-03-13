import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RatingObject {
    id: number,
    value: number
  }
  


const initialState: {ratings: RatingObject[]} = {
  ratings: []
}

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<RatingObject>) => {
      if (state.ratings.find(rating => rating.id === action.payload.id)) {
        state.ratings.map(rating => {
          if (rating.id === action.payload.id) {
            return rating.value = action.payload.value
          }
        })
      }
      else state.ratings.push(action.payload) 
    },
    unsetRating: (state, action: PayloadAction<number>) => {
      state.ratings = state.ratings.filter(rating => rating.id !== action.payload)
    }
  }
});

export const { setRating, unsetRating } = ratingSlice.actions

export default ratingSlice.reducer
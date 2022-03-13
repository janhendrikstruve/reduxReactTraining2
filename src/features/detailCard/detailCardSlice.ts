import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { characterType } from '../../types'

interface InitialState {
  showDetailCard: boolean,
  detailCardData: characterType
}

const initialState = {
  show: false,
  data: { 
    id: 0, 
    name: '', 
    status: '', 
    species: '', 
    gender: '', 
    image: ''
  }
}

const detailCardSlice = createSlice({
  name: 'deatailCard',
  initialState,
  reducers: {
    showDetailCard: (card) => {
      card.show = true
    },
    hideDetailCard: (card) => {
      card.show = false
    },
    setDetailCardData: (card, action: PayloadAction<characterType>) => {
      card.data = action.payload
    }
  }
});

export const { showDetailCard, hideDetailCard, setDetailCardData } = detailCardSlice.actions

export default detailCardSlice.reducer
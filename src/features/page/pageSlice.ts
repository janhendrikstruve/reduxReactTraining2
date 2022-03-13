import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  value: number
}

const initialState = {
  value: 1
}

const page = createSlice({
  name: 'page',
  initialState,
  reducers: {
    goPageUp: (page) => {
      page.value++
    },
    goPageDown: (page) => {
      page.value--
    },
  }
});

export const { goPageUp, goPageDown } = page.actions

export default page.reducer
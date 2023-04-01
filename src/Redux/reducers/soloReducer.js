import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  poster: '',
  title: '',
  stars: 4.5,
}

export const soloSlice = createSlice({
  name: 'solo',
  initialState,
  reducers: {
	setTitle: (state, action) => {
		state.title = action.payload;
	},
	setPoster: (state, action) => {
		state.poster = action.payload;
	}
  },
})

// Action creators are generated for each case reducer function
export const {setTitle, setPoster} = soloSlice.actions

export default soloSlice.reducer
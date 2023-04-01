import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  originals: [],
  trending: [],
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
}

export const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
	setOriginals: (state, action) => {
		state.originals = action.payload;
	},
  setTrending: (state, action) => {
		state.trending = action.payload;
	},
  setNowPlaying: (state, action) => {
		state.nowPlaying = action.payload;
	},
  setPopular: (state, action) => {
		state.popular = action.payload;
	},
  setTopRated: (state, action) => {
		state.topRated = action.payload;
	},
  setUpComing: (state, action) => {
		state.upComing = action.payload;
	}
  },
})

// Action creators are generated for each case reducer function
export const {setOriginals, setTrending, setNowPlaying, setPopular, setTopRated, setUpComing} = filmSlice.actions

export default filmSlice.reducer
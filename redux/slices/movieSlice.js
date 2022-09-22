import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "../../axios/axios";

export const MovieDetail = createAsyncThunk(
  "movieDetails",
  async (id, { rejectWithValue }) => {
    console.log(id, "---id");
    try {
      const { data } = await axios.get(`/movie/${id}`, {
        params: {
          api_key: process.env.TMBD_API_KEY,
          // language: "en-US",
        },
      });
      return {
        MovieDetail: data,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    MovieDetail: null,
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action?.payload["movieDetail"],
      };
    },
    [MovieDetail.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action?.payload,
      };
    },
  },
});

export const getMovieDetaitState = (state) => state[movieDetailSlice.name];

export default movieDetailSlice;

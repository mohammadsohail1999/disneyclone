import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "../../axios/axios";

export const getseriesDetail = createAsyncThunk(
  "SeriesDetail",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/tv/${id}`, {
        params: {
          api_key: process.env.TMBD_API_KEY,
        },
      });
      return {
        seriesDetail: data,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

const seriesDetailSlice = createSlice({
  name: "SeriesDetail",
  initialState: {
    seriesDetail: null,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action?.payload?.SeriesDetail,
      };
    },
    [getseriesDetail.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const getSeriesState = (state) => state[seriesDetailSlice.name];

export default seriesDetailSlice;

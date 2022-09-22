import { async } from "@firebase/util";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "../../axios/axios";

export const GetHomePageData = createAsyncThunk(
  "homepage/getHomepPageDate",
  async (obj, { rejectWithValue }) => {
    try {
      const popularMovies = axios.get("/movie/popular", {
        params: {
          api_key: process.env.TMBD_API_KEY,
          language: "en-US",
        },
      });
      const popuplarShows = axios.get("/tv/popular", {
        params: {
          api_key: process.env.TMBD_API_KEY,
          language: "en-US",
        },
      });

      const topRatedShows = axios.get("/tv/top_rated", {
        params: {
          api_key: process.env.TMBD_API_KEY,
          language: "en-US",
        },
      });

      const topRatedMovies = axios.get("/movie/top_rated", {
        params: {
          api_key: process.env.TMBD_API_KEY,
          language: "en-US",
        },
      });

      const res = await Promise.all([
        popuplarShows,
        popularMovies,
        topRatedShows,
        topRatedMovies,
      ]);

      const [ptv, pmovies, trtv, trmovies] = res?.map(
        (el) => el?.data?.results
      );

      return {
        popularMovies: pmovies,
        popularShows: ptv,
        topRatedShows: trtv,
        topRatedMovies: trmovies,
      };
    } catch (error) {
      console.log(error, "----error");
      return rejectWithValue(error);
    }
  }
);

const HomepageSlice = createSlice({
  name: "homepage",
  initialState: {
    popularMovies: [],
    popularShows: [],
    topRatedMovies: [],
    topRatedShows: [],
  },
  reducers: {},

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload?.homepage,
      };
    },
    [GetHomePageData.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action?.payload,
      };
    },
  },
});

export default HomepageSlice;

export const getHomePageState = (state) => state[HomepageSlice.name];

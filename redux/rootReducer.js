import HomepageSlice from "./slices/homepageSlice";
import movieDetailSlice from "./slices/movieSlice";
import seriesDetailSlice from "./slices/seriesSlice";

export default {
  [HomepageSlice.name]: HomepageSlice.reducer,
  [movieDetailSlice.name]: movieDetailSlice.reducer,
  [seriesDetailSlice.name]: seriesDetailSlice.reducer,
};

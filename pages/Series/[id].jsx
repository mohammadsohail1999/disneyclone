import { unstable_getServerSession } from "next-auth";
import React from "react";
import { useSelector } from "react-redux";
import DetailPage from "../../components/DetailPage";
import Layout from "../../components/layout";
import {
  getMovieDetaitState,
  MovieDetail,
} from "../../redux/slices/movieSlice";
import {
  getseriesDetail,
  getSeriesState,
} from "../../redux/slices/seriesSlice";
import { wrapper } from "../../redux/store";
import { AuthOptions } from "../api/auth/[...nextauth]";

const Series = ({ user }) => {
  const { seriesDetail } = useSelector(getSeriesState);
  return (
    <Layout user={user} title={seriesDetail?.original_name}>
      <DetailPage detailData={seriesDetail} />
    </Layout>
  );
};

export default Series;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await unstable_getServerSession(
      context.req,
      context.res,
      AuthOptions
    );

    await store.dispatch(getseriesDetail(context?.params?.id));

    return {
      props: {
        user: session,
      },
    };
  }
);

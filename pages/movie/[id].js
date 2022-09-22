import { unstable_getServerSession } from "next-auth";
import React from "react";
import { useSelector } from "react-redux";
import DetailPage from "../../components/DetailPage";
import Layout from "../../components/layout";
import {
  getMovieDetaitState,
  MovieDetail,
} from "../../redux/slices/movieSlice";
import { wrapper } from "../../redux/store";
import { AuthOptions } from "../api/auth/[...nextauth]";

const Movie = ({ user }) => {
  const { MovieDetail } = useSelector(getMovieDetaitState);

  return (
    <Layout user={user} title={MovieDetail?.original_title}>
      <DetailPage detailData={MovieDetail} />
    </Layout>
  );
};

export default Movie;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await unstable_getServerSession(
      context.req,
      context.res,
      AuthOptions
    );

    await store.dispatch(MovieDetail(context?.params?.id));

    return {
      props: {
        user: session,
      },
    };
  }
);

import { unstable_getServerSession } from "next-auth/next";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import Brand from "../components/Brand";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import MoviesCollection from "../components/MoviesCollection";
import ShowsCollection from "../components/ShowsCollection";
import Slider from "../components/Slider";
import {
  GetHomePageData,
  getHomePageState,
} from "../redux/slices/homepageSlice";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";
import { AuthOptions } from "./api/auth/[...nextauth]";

export default function Home({ user }) {
  const { popularMovies, popularShows, topRatedMovies, topRatedShows } =
    useSelector(getHomePageState);

  return (
    <Layout user={user}>
      {!user ? (
        <Hero />
      ) : (
        <main className="relative after:bg-home  after:bg-center min-h-screen  bg-fixed after:bg-cover after:bg-no-repeat after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brand />
          <MoviesCollection
            topRatedMovies={topRatedMovies}
            title="Top Rated Movies"
          />
          <ShowsCollection
            topRatedShow={topRatedShows}
            title="Top Rated Shows"
          />
          <MoviesCollection
            topRatedMovies={popularMovies}
            title="Popular Movies"
          />
          <ShowsCollection topRatedShow={popularShows} title="Popular Shows" />
        </main>
      )}
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await unstable_getServerSession(
      context.req,
      context.res,
      AuthOptions
    );
    await store.dispatch(GetHomePageData());

    return {
      props: {
        user: session,
      },
    };
  }
);

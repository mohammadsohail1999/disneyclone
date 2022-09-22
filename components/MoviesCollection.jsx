import { useRouter } from "next/router";
import React from "react";
import MovieImage from "./MovieImage";

const MoviesCollection = ({ topRatedMovies, title }) => {
  const Router = useRouter();

  const routeToDetail = (id) => {
    Router.push(`/movie/${id}`);
  };

  return (
    <>
      <div className="mx-5 mt-6">
        <p className="font-bold text-2xl px-4">{title}</p>
        <div className="p-4 flex space-x-4 overflow-x-auto no-scrollbar">
          {topRatedMovies?.length
            ? topRatedMovies?.map((el) => {
                return (
                  <MovieImage
                    movie={el}
                    key={el?.id}
                    routeToDetail={routeToDetail}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default MoviesCollection;

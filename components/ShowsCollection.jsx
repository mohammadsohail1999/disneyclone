import { useRouter } from "next/router";
import React from "react";
import MovieImage from "./MovieImage";

const ShowsCollection = ({ topRatedShow, title }) => {
  const Router = useRouter();

  const routeToDetail = (id) => {
    Router.push(`/Series/${id}`);
  };

  return (
    <>
      <div className="mx-5 mt-6">
        <p className="font-bold text-2xl px-4">{title}</p>
        <div className="p-4 flex space-x-4 overflow-x-auto no-scrollbar">
          {topRatedShow?.length
            ? topRatedShow?.map((el) => {
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

export default ShowsCollection;

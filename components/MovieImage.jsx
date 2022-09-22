import React from "react";
import Image from "next/image";

const MovieImage = ({ movie, routeToDetail }) => {
  return (
    <div
      onClick={() => {
        routeToDetail(movie?.id);
      }}
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 relative"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie?.poster_path || movie?.backdrop_path
        }`}
        alt="poster"
        layout="fill"
        // objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieImage;

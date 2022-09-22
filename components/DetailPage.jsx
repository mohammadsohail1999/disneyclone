import React from "react";

const DetailPage = ({ detailData }) => {
  console.log("detailData", detailData);
  return (
    <div
      className="h-[calc(100vh-72px)] bg-cover bg-no-repeat bg-center overflow-hidden flex flex-col md:justify-end justify-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailData?.backdrop_path})`,
      }}
    >
      <div className="px-8 mb-8  space-y-5">
        <p className="md:text-7xl text-3xl font-extrabold">
          {detailData?.original_title || detailData?.original_name}
        </p>
        <div className="flex space-x-4 items-center">
          <button className="outline-none text-sm md:text-base flex items-center font-medium bg-slate-100 text-black  px-2 py-3 md:px-4 md:py-3 uppercase hover:scale-105 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 md:mr-2 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
            Play
          </button>
          <button className="border-white border outline-none text-sm md:text-base flex items-center font-medium bg-black text-white bg-opacity-60  px-2 py-3 md:px-4 md:py-3 uppercase hover:scale-105 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 md:mr-2 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
            Trailer
          </button>
          <button className="bg-black bg-opacity-60 rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button className="bg-black bg-opacity-60 rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
          </button>
        </div>
        <p className="md:text-xl">{detailData?.overview}</p>
      </div>
    </div>
  );
};

export default DetailPage;

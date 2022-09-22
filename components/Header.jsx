import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Header = ({ session: data }) => {
  const router = useRouter();

  return (
    <header className="z-50 sticky top-0 bg-[#000103] h-[72px] flex  px-10 items-center md:px-12">
      <Image
        className="cursor-pointer"
        src={"/images/logo.svg"}
        alt={80}
        height={80}
        width={80}
        onClick={() => router.push("/")}
      />
      {data ? (
        <div className="ml-9 md:flex space-x-5 hidden">
          <a className="text-white flex items-center" href="">
            <HomeIcon className="h-4" />
            <div className="header-style">Home</div>
          </a>
          <a className="text-white flex items-center" href="">
            <SearchIcon className="h-4" />
            <div className="header-style">Search</div>
          </a>
          <a className="text-white flex items-center" href="">
            <PlusIcon className=" h-4" />
            <div className="header-style">Watchlist</div>
          </a>
          <a className="text-white flex items-center" href="">
            <StarIcon className="h-4" />
            <div className="header-style">Originals</div>
          </a>
          <a className="text-white flex items-center" href="">
            <img src="/images/movie-icon.svg" alt="movie" className=" h-4" />
            <div className="header-style">Movies</div>
          </a>
        </div>
      ) : null}

      {!data ? (
        <button
          onClick={() => signIn()}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-200"
        >
          Login
        </button>
      ) : (
        <div className="ml-auto relative">
          <Image
            src={data?.user?.image}
            className="rounded-full object-cover cursor-pointer"
            height={"40px"}
            width={"40px"}
            alt="pic"
            onClick={signOut}
          />
        </div>
      )}
    </header>
  );
};

export default Header;

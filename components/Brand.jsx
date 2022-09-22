import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center  my-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group relative">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:block object-cover"
        >
          <source src="/videos/disney.mp4" />
        </video>
      </div>

      <div className="brand group relative">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:block object-cover"
        >
          <source src="/videos/pixar.mp4" />
        </video>
      </div>
      <div className="brand group relative">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:block object-cover"
        >
          <source src="/videos/marvel.mp4" />
        </video>
      </div>
      <div className="brand group relative">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:block object-cover"
        >
          <source src="/videos/star-wars.mp4" />
        </video>
      </div>
      <div className="brand group relative">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:block object-cover"
        >
          <source src="/videos/national-geographic.mp4" />
        </video>
      </div>
    </section>
  );
};

export default Brand;

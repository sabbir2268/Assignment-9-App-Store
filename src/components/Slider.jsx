import React, { useEffect, useState } from "react";

const Slider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("/banners.json")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return (
    <div className="carousel w-full rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img
            src={banner.thumbnail}
            alt={banner.title}
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] shrink-1"
          />

          {/* Navigation buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? banners.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > banners.length ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

 const {images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__headShake">{category}</h3>
      {loading && <h1>Loading...</h1>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

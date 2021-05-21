import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One punch man"
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {categories.map((category, index) => <GifGrid key={index} category={category}/>)}
      </ol>
    </>
  );
};

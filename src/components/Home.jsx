
import React from "react";
import ProductBox from "./ProductBox";

const Home = () => {
  const product = [{},{},{},{},{},{}];

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex flex-wrap">
        {product.map((d, i) => {
          return (
              <ProductBox {...d} index={i}/>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

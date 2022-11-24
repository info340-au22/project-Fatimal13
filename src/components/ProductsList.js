import React from "react";
import Product from "./Product";

const ProductsList = props => {
  const { products } = props;
  console.log(products, "product props")



  // const renderProducts = products.map(({ id, title, category }) => {
    return (
      <>      
      {products.map((product, key) => {
        return <Product product={product} key={key}/>
      })}
   </>

    );
  // });

  // return <ul>{renderProducts}</ul>;
};
export default ProductsList
import React from "react";
import useFetchProduct from "./Hooks/useFetchProduct";
const FetchProduct = (categorys) => {
  const products = useFetchProduct();
  console.log(categorys.category);

  const filters = products.filter((product) =>
    categorys.category === ""
      ? true
      : product.category
          .toLowerCase()
          .startsWith(categorys.category.toLowerCase()) ||
        categorys.category === ""
      ? true
      : product.name.toLowerCase().startsWith(categorys.category.toLowerCase())
  );
  console.log(filters);

  return (
    <div className="container">
      {filters.map((product) => (
        <div className="card" key={product.id}>
          <div className="img-container">
            <img className="card-img" src={product.image} alt="" />
          </div>
          <div className="content">
            <h2>{product.name}</h2>
            <p>
              <span className="price">price</span> : Rs {product.price}
            </p>
            <div className="desc">{product.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchProduct;

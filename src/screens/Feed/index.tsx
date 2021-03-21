import React from "react";
import ProductItem from "../../components/Product";
import { products } from "../../data/products.json";

import * as S from "./styles";

const Feed: React.FC = () => {
  return (
    <S.Container>
      <S.headerContainer />
      <S.ContainerScroll>
        <S.ContainerItem>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              descriptionFull={product.descriptionFull}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageURL={product.imageURL}
            />
          ))}
        </S.ContainerItem>
      </S.ContainerScroll>
    </S.Container>
  );
};

export default Feed;

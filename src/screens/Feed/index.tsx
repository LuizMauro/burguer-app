import React from "react";
import ProductItem from "../../components/Product";
import { products } from "../../data/products.json";

import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";
import { colors } from "../../@styles/colors";

const Feed: React.FC = () => {
  // '\u2B24'

  return (
    <S.Container>
      <S.headerContainer>
        <S.Title>Every Bite a</S.Title>
        <S.SubTitle>Better buger!</S.SubTitle>

        <S.ContainerFilterTag>
          <S.ButtonFilterTag>
            <S.TextBulletTag>{"\u2B24"}</S.TextBulletTag>
            <S.TextButtonFilterTag>Burger</S.TextButtonFilterTag>
          </S.ButtonFilterTag>

          <S.ButtonFilterTag>
            <S.TextButtonFilterTag>Pasta</S.TextButtonFilterTag>
          </S.ButtonFilterTag>

          <S.ButtonFilterTag>
            <S.TextButtonFilterTag>Salads</S.TextButtonFilterTag>
          </S.ButtonFilterTag>

          <S.ButtonMoreFilters>
            <FontAwesome name="sliders" color={colors.fontColor} size={18} />
          </S.ButtonMoreFilters>
        </S.ContainerFilterTag>
      </S.headerContainer>
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

import React from "react";
import { useNavigation } from "@react-navigation/native";

import { IProduct } from "../../@interfaces/product";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as S from "./styles";

const Product: React.FC<IProduct> = ({
  name,
  description,
  price,
  imageURL,
}) => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.ButtonImage onPress={() => navigate("DetailsProduct", { imageURL })}>
        <S.Image
          source={{
            uri: imageURL,
          }}
        />
      </S.ButtonImage>

      <S.DetailsContainer>
        <S.NameProduct>{name}</S.NameProduct>
        <S.DescriptionProduct>{description}</S.DescriptionProduct>
        <S.BuyContainer>
          <S.PriceText>R$ {price}</S.PriceText>
          <S.ButtonAddCart>
            <MaterialCommunityIcons name="plus" color="#f9f9fb" size={12} />
          </S.ButtonAddCart>
        </S.BuyContainer>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default Product;

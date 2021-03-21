import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { IProduct } from "../../@interfaces/product";
import FormatMoney from "../../utils/FormatMoney";

import * as S from "./styles";
import { colors } from "../../@styles/colors";

interface IParams {
  product: IProduct;
}

const DetailsProduct: React.FC = () => {
  const route = useRoute();
  const params = route.params as IParams;
  const [product] = useState(params.product);
  const [quantity, setQuantity] = useState(0);

  const controllQuantityPluss = () => {
    setQuantity(quantity + 1);
  };

  const controllQuantityMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <S.Container>
      <S.Image source={{ uri: product.imageURL }} />
      <S.DetailsContainer>
        <S.NameProduct>{product.name}</S.NameProduct>
        <S.PriceText>{FormatMoney(product.price)}</S.PriceText>
        <S.DescriptionProduct>{product.descriptionFull}</S.DescriptionProduct>
      </S.DetailsContainer>

      <S.BottomContainer>
        <S.ContainerButtonQuantity>
          <S.ButtonControllQuantity onPress={controllQuantityMinus}>
            <MaterialCommunityIcons name="minus" size={25} />
          </S.ButtonControllQuantity>

          <S.QuantityText>{quantity}</S.QuantityText>

          <S.ButtonControllQuantity onPress={controllQuantityPluss}>
            <MaterialCommunityIcons name="plus" size={25} />
          </S.ButtonControllQuantity>
        </S.ContainerButtonQuantity>

        <S.ContainerPriceCheckout>
          <S.PriceFinal>{FormatMoney(product.price * quantity)}</S.PriceFinal>
          <S.ButtonCheckout>
            <S.TextButtonCheckout>Checkout</S.TextButtonCheckout>
            <MaterialCommunityIcons
              name="chevron-right"
              color={colors.fontColor}
              size={30}
            />
          </S.ButtonCheckout>
        </S.ContainerPriceCheckout>
      </S.BottomContainer>
    </S.Container>
  );
};

export default DetailsProduct;

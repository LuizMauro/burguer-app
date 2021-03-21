import styled from "styled-components/native";

import { colors } from "../../@styles/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bg};
`;

export const Image = styled.Image`
  width: 90%;
  height: 260px;
  top: 30px;
  position: absolute;
  z-index: 999;
`;

export const DetailsContainer = styled.ScrollView`
  width: 95%;
  margin-top: 200px;
  background-color: ${colors.cardBG};
  border-radius: 15px;
`;

export const NameProduct = styled.Text`
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 41px;
  padding: 20px;
  margin-top: 80px;
`;

export const DescriptionProduct = styled.Text`
  color: ${colors.fontColorDark};
  padding-top: 10px;
  font-size: 16px;
  padding: 20px;
  padding-top: 0px;
`;

export const PriceText = styled.Text`
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 12px;
`;

export const BottomContainer = styled.View`
  height: 150px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ContainerButtonQuantity = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonControllQuantity = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: ${colors.fontColor};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
`;

export const QuantityText = styled.Text`
  color: ${colors.fontColor};
  font-weight: bold;
  font-size: 18px;
`;

export const ContainerPriceCheckout = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceFinal = styled.Text`
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonCheckout = styled.TouchableOpacity`
  width: 130px;
  height: 50px;
  background-color: ${colors.yellow};
  border-top-left-radius: 0px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextButtonCheckout = styled.Text`
  color: ${colors.fontColor};
  font-size: 16px;
  font-weight: bold;
`;

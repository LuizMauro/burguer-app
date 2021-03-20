import styled from "styled-components/native";
import { darken } from "polished";

import { colors } from "../../@styles/colors";

export const Container = styled.View``;

export const ButtonImage = styled.TouchableOpacity``;

export const Image = styled.Image`
  height: 130px;
  width: 180px;
`;

export const DetailsContainer = styled.View`
  margin: 5px;
  padding: 10px;
`;

export const NameProduct = styled.Text`
  color: ${colors.fontColor};
  font-weight: bold;
  font-size: 14px;
`;

export const DescriptionProduct = styled.Text`
  padding-top: 5px;
  padding-bottom: 10px;
  color: ${darken(0.1, colors.fontColor)};
  font-size: 12px;
`;

export const BuyContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceText = styled.Text`
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 12px;
`;

export const ButtonAddCart = styled.TouchableOpacity`
  border-radius: 12px;
  width: 20px;
  height: 20px;
  background-color: ${darken(1, colors.bg)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

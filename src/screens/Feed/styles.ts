import { darken } from "polished";
import styled from "styled-components/native";

import { colors } from "../../@styles/colors";

export const headerContainer = styled.View`
  flex-direction: column;
  height: 230px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bg};
  justify-content: center;
  align-items: center;
`;

export const ContainerItem = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${colors.bg};
  justify-content: space-around;
  align-items: center;
`;

export const ContainerScroll = styled.ScrollView`
  margin-bottom: 90px;
`;

export const Title = styled.Text`
  color: ${colors.fontColor};
  font-weight: bold;
  font-size: 30px;
`;

export const SubTitle = styled.Text`
  color: ${darken(0.1, colors.fontColor)};
  font-size: 25px;
`;

export const ContainerFilterTag = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonFilterTag = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextButtonFilterTag = styled.Text`
  color: ${colors.fontColor};

  font-size: 15px;
  padding: 5px;
`;

export const TextBulletTag = styled.Text`
  color: ${colors.yellow};
  font-weight: bold;
  font-size: 10px;
  padding: 5px;
`;

export const ButtonMoreFilters = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${colors.fontColor};
  justify-content: center;
  align-items: center;
`;

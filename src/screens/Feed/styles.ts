import styled from "styled-components/native";

import { colors } from "../../@styles/colors";

export const headerContainer = styled.View`
  height: 250px;
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

export const Text = styled.Text`
  color: ${colors.fontColor};
  font-weight: 600;
`;

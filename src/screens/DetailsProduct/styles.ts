import styled from "styled-components/native";

import { colors } from "../../@styles/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bg};
`;

export const Image = styled.Image`
  width: 80%;
  height: 220px;
`;

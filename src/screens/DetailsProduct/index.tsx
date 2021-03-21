import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

import * as S from "./styles";

interface IParams {
  imageURL: string;
}

const DetailsProduct: React.FC = () => {
  const route = useRoute();
  const params = route.params as IParams;

  const [imageURL, setImageUrl] = useState(params.imageURL);

  return (
    <S.Container>
      <S.Image source={{ uri: imageURL }} />
    </S.Container>
  );
};

export default DetailsProduct;

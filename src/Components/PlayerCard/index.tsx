import React from "react";
import { PlayerProps } from "../interfaces";
import { PlayerCardContainer, PlayerDataContainer, PlayerImage, TextName } from "./StyledComponents";

const PlayerCard: React.FC<PlayerProps> = props => {
  const { firstName, lastName, ffpg, showResult, handlePlayerClick, imageSource } = props;
  const name = firstName + " " + lastName;
  return (
    <PlayerCardContainer>
      <PlayerDataContainer onClick={handlePlayerClick}>
        <PlayerImage src={imageSource.uri} />
        <TextName>Name: {name}</TextName>
        {showResult && ffpg && <TextName>FFPG: {ffpg.toPrecision(10)}</TextName>}
      </PlayerDataContainer>
    </PlayerCardContainer>
  );
};
export default PlayerCard;

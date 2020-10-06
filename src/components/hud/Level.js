import React from 'react';
import styled from 'styled-components';

import { gameStore } from '../../stores/gameStore';
import { playerStore } from '../../stores/playerStore';

import { Button } from './common/Button';

export const LevelContainer = styled.div`
  justify-content: space-evenly;
  margin-bottom: 0.5em;
  grid-row: 1;
`;

export const LevelLocked = styled.div`
  grid-row: 1;
  margin: -3.5em auto;
  width: 88%;
  max-width: 26em;
  font-size: 2em;
  color: rgba(255, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  height: 3.5em;
  transition: 0.5s all ease-out;
  align-items: center;gameStore
  justify-content: center;
  &:hover {
    color: rgba(255, 0, 0, 1);
    border: red solid;
  }
`;

export const Level = ({ levelId, unlocked, highscoreValue }) => {
  return (
    <div>
      {unlocked ? (
        <LevelContainer>
          <div>
            <h2>Level {levelId + 1}</h2>
            {unlocked && <h3>HighscoreValue: {highscoreValue}</h3>}
          </div>
          <Button
            callback={() => {
              gameStore.launchLevel(levelId);
            }}
            text="Play"
          />
        </LevelContainer>
      ) : (
        <LevelLocked>
          <div>FINISH LEVEL {levelId} TO UNLOCK</div>
        </LevelLocked>
      )}
    </div>
  );
};
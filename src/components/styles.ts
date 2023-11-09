import styled from "styled-components";
import { colors } from "../GlobalStyles/globalValues";

export const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: white;
`;

export const H2 = styled.h2`
  color: white;
`;

export const InputContainer = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Party = styled.span`
  color: white;
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: #333; /* Cor de fundo da navbar */
  color: white; /* Cor do texto */
  padding: 40px 20px; /* Espaçamento interno */
`;

export const ButtonContainer = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonStyle = styled.button<{ isDisabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${colors.white};
  border-radius: 4px;
  outline: none;
  width: 200px;
  cursor: pointer;
  background: none;
  margin-right: 2%;
  color: white;
  cursor: ${({ isDisabled }) => isDisabled && "not-allowed"};
  color: ${({ isDisabled }) => isDisabled && `${colors.grey}`};
  border: ${({ isDisabled }) => isDisabled && `2px solid ${colors.grey}`};
`;

export const InputStyled = styled.input<{ isProblem: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #00ff7f;
  border: ${({ isProblem }) => isProblem && "2px solid #dc143c"};
  border-radius: 4px;
  outline: none;
  width: 200px;
  margin-right: 1%;

  &:focus {
    border-color: white;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

//game

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PartyCard = styled.article`
  width: 200px;
  height: 160px;
  border: 2px solid ${colors.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const CandidateInfo = styled.div`
  width: 19%;
  height: 100px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CandidateName = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  color: ${colors.white};
  background-color: transparent;

  @media (max-width: 541px) {
    font-size: 0.8rem;
  }
`;
export const CandidatePointsContainer = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  background: purple;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 5px;
  align-items: center;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  background-color: white;

  @media (max-width: 541px) {
    flex-direction: column;
  }
`;

const getPartyColor = (party: Party) => {
  if (party === "Partido Nacionalista") return "#EFD705";
  if (party === "Partido da Árvore") return "#29BE12";
  if (party === "Partido da Agropecuária") return "#F21B1B";
  if (party === "Unidade Estudantil") return "#0866BD";
  if (party === "Partido do Esporte") return "#FE9814";
};

export const Icon = styled.div<{ party: Party }>`
  width: 25px;
  height: 25px;
  border-radius: 999px;
  background: black;
  background: ${({ party }) => getPartyColor(party)};

  @media (max-width: 541px) {
    width: 15px;
    height: 15px;
  }
`;

export const PointsText = styled.span<{ party: Party }>`
  color: ${({ party }) => getPartyColor(party)};
  font-weight: bold;

  @media (max-width: 541px) {
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  border: 2px solid ${colors.white};
  border-radius: 10px;
  cursor: pointer;
`;

export const Spacer = styled.div`
  width: 2px;
  height: 80%;
  background-color: ${colors.white};
`;

export const ProjectsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1012px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ProjectInputContainer = styled.div`
  width: 190px;

  @media (max-width: 541px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const LabelProject = styled.span`
  color: white;

  @media (max-width: 1012px) {
    font-size: 0.8rem;
  }
`;

export const InputProject = styled.input`
  margin-top: 5px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
  margin-right: 1%;

  &:focus {
    border-color: white;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const ButtonVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const ButtonVote = styled.button<{ isDisabled?: boolean }>`
  border: 2px solid ${colors.white};
  width: 48%;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  color: white;
  transition: 0.2s all ease-in-out;
  color: ${({ isDisabled }) => isDisabled && `${colors.grey}`};
  border: ${({ isDisabled }) => isDisabled && `2px solid ${colors.grey}`};
  cursor: ${({ isDisabled }) => isDisabled && `not-allowed`};
`;

export const AcceptVote = styled(ButtonVote)`
  &:hover {
    color: black;
    background-color: #00ff7f;
    color: ${({ isDisabled }) => isDisabled && `${colors.grey}`};
    border: ${({ isDisabled }) => isDisabled && `2px solid ${colors.grey}`};
    cursor: ${({ isDisabled }) => isDisabled && `not-allowed`};
    background-color: ${({ isDisabled }) => isDisabled && `transparent`};

 
  }
`;

export const RejectVote = styled(ButtonVote)`
  &:hover {
    background-color: #dc143c;
  }
`;

export const RoundPointsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PartyContainer = styled.div`
  width: 18%;
  height: 150px;
  border: 2px solid white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Circle = styled.div<{ party: Party }>`
  width: 30px;
  height: 30px;
  background: black;
  background: ${({ party }) => getPartyColor(party)};
  border-radius: 50%;
  border: 2px solid ${colors.white};
`;

export const Points = styled.div<{ isNegative: boolean }>`
  color: white;
  font-size: 2rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-left: auto;

  @media (max-width: 1012px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

export const HeaderMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

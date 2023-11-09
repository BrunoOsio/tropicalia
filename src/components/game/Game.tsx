import { ChangeEvent, useEffect, useState } from "react";
import {
  AcceptVote,
  ButtonVoteContainer,
  CandidateInfo,
  CandidateName,
  Container,
  Header,
  InputProject,
  LabelProject,
  PartyContainer,
  ProjectInputContainer,
  ProjectsContainer,
  RejectVote,
  RoundPointsContainer,
  Circle,
  Points,
  MainContainer,
  HeaderMainContainer,
} from "../styles";
import {
  getCandidate1Name,
  getCandidate1Party,
  getCandidate2Name,
  getCandidate2Party,
  getCandidate3Name,
  getCandidate3Party,
  getCandidate4Name,
  getCandidate4Party,
  getCandidate5Name,
  getCandidate5Party,
} from "../../localStorage/localStorage";
import { CandidatePoints } from "./CandidatePoints";
import { getProject } from "../../service/getProject";
import { Project } from "../../types/Project";

export const Game = () => {
  const MONEY_SELECTED = 300000;

  const [projectNumber, setProjectNumber] = useState<number | undefined>();
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [acceptedProjects, setAcceptedProjects] = useState<Project[]>([]);
  const [pinas, setPinas] = useState(MONEY_SELECTED);

  const rawCandidates: Candidate[] = [
    {
      name: getCandidate1Name(),
      party: getCandidate1Party() as Party,
      points: 0,
    },
    {
      name: getCandidate2Name(),
      party: getCandidate2Party() as Party,
      points: 0,
    },
    {
      name: getCandidate3Name(),
      party: getCandidate3Party() as Party,
      points: 0,
    },
    {
      name: getCandidate4Name(),
      party: getCandidate4Party() as Party,
      points: 0,
    },
    {
      name: getCandidate5Name(),
      party: getCandidate5Party() as Party,
      points: 0,
    },
  ];

  function getOrderCandidates() {
    let ordered: Candidate[] = [];
    const nationalistParty = rawCandidates.find(
      (candidate: Candidate) => candidate.party == "Partido Nacionalista"
    )!;
    const sportsParty = rawCandidates.find(
      (candidate: Candidate) => candidate.party == "Partido do Esporte"
    )!;
    const treeParty = rawCandidates.find(
      (candidate: Candidate) => candidate.party == "Partido da Árvore"
    )!;
    const agroParty = rawCandidates.find(
      (candidate: Candidate) => candidate.party == "Partido da Agropecuária"
    )!;
    const studentsParty = rawCandidates.find(
      (candidate: Candidate) => candidate.party == "Unidade Estudantil"
    )!;

    ordered[0] = nationalistParty;
    ordered[1] = treeParty;
    ordered[2] = agroParty;
    ordered[3] = studentsParty;
    ordered[4] = sportsParty;

    return ordered;
  }

  const [candidates, setCandidates] = useState(getOrderCandidates());

  const changeProjectNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue === "") {
      setProjectNumber(undefined);
      return;
    }

    const isAllDigits = /^\d+$/.test(newValue);

    if (!isAllDigits) return;

    setProjectNumber(Number(newValue));
  };

  useEffect(() => {
    setSelectedProject(getProject(projectNumber || 0));
  }, [projectNumber]);

  const acceptProject = () => {
    if (selectedProject == undefined) return;

    setAcceptedProjects([...acceptedProjects, selectedProject]);
    addPointsToParties();
    setProjectNumber(0);
    setSelectedProject(undefined);
  };

  const addPointsToParties = () => {
    setCandidates([
      {
        ...candidates[0],
        points:
          candidates[0].points + selectedProject?.roundPoints.nationalist!,
      },
      {
        ...candidates[1],
        points: candidates[1].points + selectedProject?.roundPoints.tree!,
      },
      {
        ...candidates[2],
        points: candidates[2].points + selectedProject?.roundPoints.economy!,
      },
      {
        ...candidates[3],
        points: candidates[3].points + selectedProject?.roundPoints.student!,
      },
      {
        ...candidates[4],
        points: candidates[4].points + selectedProject?.roundPoints.sport!,
      },
    ]);
  };

  const rejectProject = () => {
    setProjectNumber(0);
    setSelectedProject(undefined);
  };

  const calculateRemainingMoney = (): void => {
    const remainingMoney = acceptedProjects.reduce(
      (remainingMoney, project) => {
        return remainingMoney - project.price;
      },
      MONEY_SELECTED
    );

    setPinas(remainingMoney);
  };

  useEffect(() => {
    calculateRemainingMoney();
  }, [acceptedProjects]);

  const hasMoneyForSelectedProject = pinas >= selectedProject?.price!;

  function formatCurrency(valor: number): string {
    const numeroFormatado = valor.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return numeroFormatado;
  }

  return (
    <Container>
      <LabelProject>Pinas Restantes: ₽{formatCurrency(pinas)}</LabelProject>
      <Header>
        {candidates.map((candidate: Candidate) => {
          return (
            <CandidateInfo>
              <CandidateName>{candidate.name}</CandidateName>
              <CandidatePoints candidate={candidate} />
            </CandidateInfo>
          );
        })}
      </Header>

      {pinas > 0 && (
        <ProjectsContainer>
          <ProjectInputContainer>
            <LabelProject>Número do projeto de lei</LabelProject>
            <InputProject
              placeholder="Número do projeto"
              onChange={changeProjectNumber}
              value={projectNumber}
            />
            {selectedProject != null && (
              <ButtonVoteContainer>
                <AcceptVote
                  onClick={acceptProject}
                  isDisabled={!hasMoneyForSelectedProject}
                  disabled={!hasMoneyForSelectedProject}
                >
                  Aprovar
                </AcceptVote>
                <RejectVote onClick={rejectProject}>Rejeitar</RejectVote>
              </ButtonVoteContainer>
            )}
          </ProjectInputContainer>

          {selectedProject != undefined && (
            <MainContainer>
              <HeaderMainContainer>
                <LabelProject>
                  Projeto de Lei n° {selectedProject.number}
                </LabelProject>

                <LabelProject>
                  Custo de pinas: ₽{formatCurrency(selectedProject.price)}
                </LabelProject>
              </HeaderMainContainer>

              <RoundPointsContainer>
                <PartyContainer>
                  <Circle party={"Partido Nacionalista"} />
                  <Points
                    isNegative={selectedProject.roundPoints.nationalist < 0}
                  >
                    {selectedProject.roundPoints.nationalist}
                  </Points>
                </PartyContainer>

                <PartyContainer>
                  <Circle party={"Partido da Árvore"} />
                  <Points isNegative={selectedProject.roundPoints.tree < 0}>
                    {selectedProject.roundPoints.tree}
                  </Points>
                </PartyContainer>

                <PartyContainer>
                  <Circle party={"Partido da Agropecuária"} />
                  <Points isNegative={selectedProject.roundPoints.economy < 0}>
                    {selectedProject.roundPoints.economy}
                  </Points>
                </PartyContainer>

                <PartyContainer>
                  <Circle party={"Unidade Estudantil"} />
                  <Points isNegative={selectedProject.roundPoints.student < 0}>
                    {selectedProject.roundPoints.student}
                  </Points>
                </PartyContainer>

                <PartyContainer>
                  <Circle party={"Partido do Esporte"} />
                  <Points isNegative={selectedProject.roundPoints.sport < 0}>
                    {selectedProject.roundPoints.sport}
                  </Points>
                </PartyContainer>
              </RoundPointsContainer>
            </MainContainer>
          )}
        </ProjectsContainer>
      )}

      {pinas == 0 && <LabelProject>Fim de jogo!</LabelProject>}
    </Container>
  );
};

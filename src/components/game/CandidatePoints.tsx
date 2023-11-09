import { FC } from "react";
import { CandidatePointsContainer, Icon, PointsText } from "../styles";

type CandidatePointsProps = {
    candidate: Candidate
}

export const CandidatePoints: FC<CandidatePointsProps> = ({candidate}) => {

    return (
        <CandidatePointsContainer>
            <Icon party={candidate.party}></Icon>
            <PointsText party={candidate.party}>{candidate.points}Pts</PointsText>
        </CandidatePointsContainer>
    );  
}
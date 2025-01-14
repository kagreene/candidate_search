import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface SavedCandidateListProps {
    savedCandidates: Candidate[];
    removeCandidate:
    | ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnSavedList: boolean | null | undefined,
        name: string | null
    ) => void) | null;
}

const SavedCandidatesList = ({ savedCandidates, removeCandidate }: SavedCandidateListProps) => {
    return (
        <>
        <div>
            {savedCandidates.map((candidate) => (
                <CandidateCard
                    key={candidate.name}
                    currentCandidate={candidate}
                    removeCandidate={removeCandidate}
                    savedCandidate={true}
                />
            ))}
        </div>
        </>
    );
}
export default SavedCandidatesList; 
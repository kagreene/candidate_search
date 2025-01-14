import React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { CgAdd, CgRemove } from 'react-icons/cg';

type CandidateCardProps = {
  currentCandidate: Candidate;
  saveCandidate?: (() => void) | null;
  savedCandidate?: boolean;
  removeCandidate?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, currentlyOnSavedList: boolean | null | undefined, name: string | null) => void) | null;
};

const CandidateCard = ({ currentCandidate, saveCandidate, savedCandidate, removeCandidate }: CandidateCardProps) => {
  return (
    <div>
      <img src={currentCandidate.avatar} alt={currentCandidate.name} />
      <h2>{currentCandidate.name}</h2>
      <p>{currentCandidate.location}</p>
      <p>{currentCandidate.company}</p>
      <p>{currentCandidate.email}</p>
      <a href={currentCandidate.html_url}>{currentCandidate.username}</a>
      {saveCandidate && (
        <button onClick={saveCandidate}>
          <CgAdd /> Save
        </button>
      )}
      {removeCandidate && (
        <button onClick={(e) => removeCandidate(e, savedCandidate ?? false, currentCandidate.name)}>
          <CgRemove /> Reject
        </button>
      )}
    </div>
  );
};

export default CandidateCard;
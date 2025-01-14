import React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { CgAdd, CgRemove } from 'react-icons/cg';

// type CandidateCardProps = {
//   currentCandidate: Candidate;
//   saveCandidate?: (() => void) | null;
//   savedCandidate?: boolean;
//   removeCandidate?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>, currentlyOnSavedList: boolean | null | undefined, name: string | null) => void) | null;
// };

// const CandidateCard = ({ currentCandidate, saveCandidate, savedCandidate, removeCandidate }: CandidateCardProps) => {
//   return (
//     <div>
//       <img src={currentCandidate.avatar} alt={currentCandidate.name} />
//       <h2>{currentCandidate.name}</h2>
//       <p>Location: {currentCandidate.location}</p>
//       <p>Company: {currentCandidate.company}</p>
//       <p>Email: {currentCandidate.email}</p>
//       <a href={currentCandidate.html_url}>{currentCandidate.username}</a>
//       {saveCandidate && (
//         <button onClick={saveCandidate}>
//           <CgAdd /> 
//         </button>
//       )}
//       {removeCandidate && (
//         <button onClick={(e) => removeCandidate(e, savedCandidate ?? false, currentCandidate.name)}>
//           <CgRemove /> 
//         </button>
//       )}
//     </div>
//   );
// };

// export default CandidateCard;


type CandidateCardProps = {
  currentCandidate: Candidate;
  saveCandidate?: (() => void) | null;
  savedCandidate?: boolean;
  removeCandidate?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentlyOnSavedList: boolean | null | undefined,
    name: string | null
  ) => void;
};

const CandidateCard = ({
    currentCandidate,
    saveCandidate,
    removeCandidate,
  }: CandidateCardProps) => {
    return (
      <div className="candidate-card">
        <img
          src={currentCandidate.avatar_url}
          alt={`${currentCandidate.name}'s avatar`}
          className="candidate-avatar"
        />
        <div className="candidate-details">
          <h2>{currentCandidate.name || 'N/A'}</h2>
          <p><strong>Username:</strong> {currentCandidate.username || 'N/A'}</p>
          <p><strong>Location:</strong> {currentCandidate.location || 'N/A'}</p>
          <p><strong>Email:</strong> <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email || 'N/A'}</a></p>
          <p><strong>Company:</strong> {currentCandidate.company || 'N/A'}</p>
          <p><strong>Bio:</strong> {currentCandidate.bio || 'N/A'}</p>
          <div className="action-buttons">
            {saveCandidate && (
              <button onClick={saveCandidate} className="save-button">
                <CgAdd /> Save
              </button>
            )}
            {removeCandidate && (
              <button onClick={(e) => removeCandidate && removeCandidate(e, false, currentCandidate.name)} className="reject-button">
                <CgRemove /> Reject
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

export default CandidateCard;

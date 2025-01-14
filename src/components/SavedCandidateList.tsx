import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
//import CandidateCard from './CandidateCard';

interface SavedCandidateListProps {
    savedCandidates: Candidate[];
    removeCandidate:
    | ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnSavedList: boolean | null | undefined,
        name: string | null
    ) => void) ;
}

// const SavedCandidatesList = ({ savedCandidates, removeCandidate }: SavedCandidateListProps) => {
//     return (
//         <>
//         <div>
//             {savedCandidates.map((candidate) => (
//                 <CandidateCard
//                     key={candidate.name}
//                     currentCandidate={candidate}
//                     removeCandidate={removeCandidate}
//                     savedCandidate={true}
//                 />
//             ))}
//         </div>
//         </>
//     );
// }
// export default SavedCandidatesList; 

const SavedCandidatesList = ({ savedCandidates, removeCandidate }: SavedCandidateListProps) => {
    return (
      <div className="table-container">
        <table className="saved-candidates-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.name}>
                <td>
                  <img
                    src={candidate.avatar_url}
                    alt={`${candidate.name}'s avatar`}
                    className="candidate-avatar"
                  />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.location || 'N/A'}</td>
                <td>
                  <a href={`mailto:${candidate.email}`}>{candidate.email || 'N/A'}</a>
                </td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
                <td>
                  <button
                    className="reject-button"
                    onClick={(e) => removeCandidate(e, true, candidate.name)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default SavedCandidatesList;
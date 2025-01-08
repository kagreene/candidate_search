import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';

//FINISH CANDIDATE CARD COMPONENT 

type CandidateCardProps = {
    currentCandidate: Candidate; 
    saveCandidate?: (() => void) | null;
    rejectCandidate?: (() => void) | null;
    saved?: boolean;   
}

const CandidateCard = ({ currentCandidate, saveCandidate, rejectCandidate, saved }: CandidateCardProps) => {
    return (
        <div>
            <img src={currentCandidate.avatar} alt={currentCandidate.name} />
            <h2>{currentCandidate.name}</h2>
            <p>{currentCandidate.location}</p>
            <p>{currentCandidate.company}</p>
            <p>{currentCandidate.email}</p>
            <a href={currentCandidate.html_url}>{currentCandidate.username}</a>
            {saveCandidate && <button onClick={saveCandidate}>Save</button>}
            {rejectCandidate && <button onClick={rejectCandidate}>Reject</button>}
        </div>
    );
}

export default CandidateCard;
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  }
  );
  const [searchTerm, setSearchTerm] = useState<string>('');
  const saveCandidate = async () => {
    let parsedSavedCandidates: Candidate[] = [];
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (typeof savedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(savedCandidates);
    }
    parsedSavedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedSavedCandidates));
  };

  //add code for rejecting a candidate

  

  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;

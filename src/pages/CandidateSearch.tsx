import { useState, useEffect } from 'react';
import { FormEvent } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
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
 //load a random candidate when the page loads
  useEffect(() => {
    randomSearch();
  }, []);
  
  //Rejecting candidate should just be setting the current candidate to a new random candidate
const rejectCandidate = async () => {
  await randomSearch();
}

  //code to search github for a random user
  const randomSearch = async () => {
    const randomUser = await searchGithub();
    setCurrentCandidate(randomUser);
  };
  // code to search for candidate by username
  const searchByUser = async (event: FormEvent, user: string) => {
    event.preventDefault();
    const userSearch = await searchGithubUser(user);
    setCurrentCandidate(userSearch);
  };
  //When are we supposed to use the search by candidate username function?
  //The readme does not mention searching by username
  

  return (
  <>
  <h1>CandidateSearch</h1>;
  <CandidateCard
  currentCandidate={currentCandidate}
  saveCandidate={saveCandidate}
  removeCandidate={rejectCandidate}/>
  </>);
};

export default CandidateSearch;


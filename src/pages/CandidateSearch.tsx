import { useState, useEffect } from 'react';
//import { FormEvent } from 'react';
import { searchGithub} from '../api/API';
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
  //const [searchTerm, setSearchTerm] = useState<string>('');
  const saveCandidate = async () => {
    let parsedSavedCandidates: Candidate[] = [];
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (typeof savedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(savedCandidates);
    }
    parsedSavedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedSavedCandidates));
    // load new random candidate
    await randomSearch();
  };
 //load a random candidate when the page loads
  useEffect(() => {
    randomSearch();
  }, []);
  
  //Rejecting candidate should just be setting the current candidate to a new random candidate
const rejectCandidate = async () => {
  await randomSearch();
};

  //code to search github for a random user
  const randomSearch = async () => {
    try {
      const users = await searchGithub();
      console.log('Random users:', users);
      const randomUser = users[Math.floor(Math.random() * users.length)];
      console.log('Selected user:', randomUser);
      const mappedUser: Candidate = {
        name: randomUser.name || randomUser.login,
        username: randomUser.login,
        location: randomUser.location || 'N/A',
        avatar: randomUser.avatar_url,
        email: randomUser.email || 'N/A',
        html_url: randomUser.html_url,
        company: randomUser.company || 'N/A',
      };
      setCurrentCandidate(mappedUser);
    } catch (error) {
      console.error(error);
    }
  };
  // code to search for candidate by username
  // const searchByUser = async (event: FormEvent, user: string) => {
  //   event.preventDefault();
  //   const userSearch = await searchGithubUser(user);
  //   setCurrentCandidate(userSearch);
  // };
  //When are we supposed to use the search by candidate username function?
  //The readme does not mention searching by username
  

  return (
  <>
  <h1>Candidate Search</h1>;
  <CandidateCard
  currentCandidate={currentCandidate}
  saveCandidate={saveCandidate}
  removeCandidate={rejectCandidate}/>
  </>);
};

export default CandidateSearch;


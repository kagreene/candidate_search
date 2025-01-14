import React from "react";
import { useEffect, useState } from 'react';
import SavedCandidatesList from "../components/SavedCandidateList";
import type Candidate from '../interfaces/Candidate.interface';

//define remove from saved list function here, then pass it to SavedCandidatesList
const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const removeCandidate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentlyOnSavedList: boolean | null | undefined,
    name: string | null
  ) => {
    e.preventDefault();
    if (currentlyOnSavedList) {
    let parsedSavedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(storedCandidates);
    }
    parsedSavedCandidates = parsedSavedCandidates.filter((candidate) => candidate.name !== name);
    setSavedCandidates(parsedSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedSavedCandidates));
  }
};
//useEffect to load list of saved Candidates
useEffect(() => {
  const storedCandidates = localStorage.getItem('savedCandidates');
  const parsedSavedCandidates = storedCandidates ? JSON.parse(storedCandidates) : [];
  setSavedCandidates(parsedSavedCandidates);
}, []);



  return (
    <>
      <h1 className='pageHeader'>Potential Candidates</h1>
      {/*Conditional rendering to show message if there are no saved candidates */}
      {savedCandidates.length === 0 ? (
  <div className="no-candidates">
    <p>No candidates have been saved yet.</p>
    <p>Search for candidates and save them to view here.</p>
  </div>
) : (
  <SavedCandidatesList
    savedCandidates={savedCandidates}
    removeCandidate={removeCandidate}
  />
)}

    </>
  );
}


export default SavedCandidates;

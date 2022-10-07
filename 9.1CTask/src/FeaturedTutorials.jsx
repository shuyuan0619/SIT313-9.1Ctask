import React from 'react'
import './App.css';
import FeaturedTutorialsheader from './FeaturedTutorialsHeader';
import AllTutorialsButton from './AllTutorialsButton';
import TutorialsContainer from './TutorialsContainer';

function FeaturedTutorials(){
    return (
        <div style={{marginBottom: '16px'}}>
        <FeaturedTutorialsheader />
        <TutorialsContainer />
        <AllTutorialsButton />
        </div>
    );
  }
export default FeaturedTutorials
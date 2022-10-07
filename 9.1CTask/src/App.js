import './App.css';
import Header from './Header'
import React, {Component} from 'react';
import JumboImage from './JumboImage';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './footer';

class App extends Component { 

  
  render() {
  return (
    <div className="App">
      <Header />
      <JumboImage />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}
}

export default App;

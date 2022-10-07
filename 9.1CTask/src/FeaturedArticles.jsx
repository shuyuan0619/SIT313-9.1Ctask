import React from 'react'
import './App.css';
import FeaturedArticlesheader from './FeaturedArticlesHeader';
import AllArticlesButton from './AllArticlesButton';
import ArticlesContainer from './ArticlesContainer';

function FeaturedArticles() {
    return (
        <div style={{marginTop: '16px', marginBottom: '16px' }}>
            <FeaturedArticlesheader />
            <ArticlesContainer />
            <AllArticlesButton />
        </div>
    );
}
export default FeaturedArticles
import LazyHero from 'react-lazy-hero';
import React from 'react'

function JumboImage(){
    return (
        <div>
            <LazyHero imageSrc="https://unsplash.it/2000/1000" opacity={0}>
                <h3 style={{color:'white'}}>Welcome to Dev @ Deakin</h3>
            </LazyHero>
        </div>
    )
}
export default JumboImage
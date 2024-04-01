// home.js
import React from 'react';
import catImage from '../assets/images/catSideEye.jpeg';
import supabase from '../config/supabaseClient';
import '../Styles/Home.css'; // Import CSS file for styling

function HomePage() {
    console.log(supabase);

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page!</h1>
            <p>This is the content of the home page. Congratulations you have your environment set up</p>
            <p>Ruben LOVES the 49ers!!!</p>
            <img src={catImage} alt="Cat" className="cat-image" />

            <div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer">
                    Watch the video 
                </a>
                <p>{supabase.supabaseUrl ? "Supabase Connected: " + supabase.supabaseUrl : "Supabase is not connected"}</p>
            </div>
        </div>
    );
}

export default HomePage;

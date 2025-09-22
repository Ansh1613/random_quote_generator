import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App(){
    const[advice, setAdvice] = useState('');
    const[bgImage, setBgImage] = useState('');

    const fetchAdvice = async() => {
        // Fetch a random background Advice from 
        try{
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);

            const imageURL = `https://picsum.photos/1200/800?random=${Math.floor(Math.random() * 1000)}`
            setBgImage(imageURL);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAdvice();
    }, []);

    return(
        <div 
        className="app"
        style={bgImage ? {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bgImage})`,
            transition: 'background-image 0.5s ease-in-out'
        } : {}}>
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span></button>
            </div>
        </div>
    );
}

export default App;
import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App(){
    const[advice, setAdvice] = useState('');

    const fetchAdvice = async() => {
        try{
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAdvice();
    }, []);

    return(
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span></button>
            </div>
        </div>
    );
}

export default App;
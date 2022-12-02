import React from 'react';
import '../App.css';
//import { Route, Routes, useNavigate } from 'react-router-dom';

const Description = (props) => {

    let [title, description, posterURL, rating,trailer] = Object.values(props.movie);
    return(
            
            
            <div className="container">
                    <div>
                        <iframe width="900" height="600" src={trailer}
                            title={title} frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullscreen>
                            </iframe>
                        
                    </div>
                    <div>
                        <h1>{description}</h1>
                    </div>
            </div>
    );
    
    }


    export default Description;
import React from 'react';
import '../App.css';
// import Description from './Description';
// import { Route, Routes, useNavigate } from 'react-router-dom';

const MovieCard = (props) => {

    let [title, description, posterURL, rating,trailer] = Object.values(props.movie);
    // let etat='no';
    // const handleClick = () => {
    //     console.log('done!');
    //     etat='yes';
    //     console.log(etat);
        
    // };
    return(
        <div className='movieCard' >
            <div className='tout'>
            <img className='film1' src = {posterURL} width={450} height={450}></img>
            <h3 className='h3Class'>Title:</h3>
            <label className='labelC'>{title}</label> 
            <br></br>  
            {/* <br></br>       */}
            <h3 className='h3Class'>Description:</h3>
            <label className='labelC'>{description}</label>
            <br></br>
            {/* <br></br>   */}
            <h3 className='h3Class'>Rating:</h3>  
            <label className='labelC'>{rating}</label>
            <h3 className='h3Class'>Trailer:</h3>  
            <label className='labelC'>{trailer}</label>
            </div>
            
            
        </div>
    );
    
    }

    MovieCard.defaultProps = {
        title: "Movie Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim doloribus quia voluptatibus odit minima sequi tempora commodi aliquam odio perferendis officia dolores cumque distinctio, minus architecto dolorem officiis corrupti!",
        posterURL: "None",
    };
    
    export default MovieCard;
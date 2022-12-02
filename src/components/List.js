import MovieCard from "./MovieCard";
// import Filter from "./Filter";
import { useState, useEffect} from "react";
import React from 'react';
import data from "./datas.json"
import '../App.css';

const List = () => {
    // const [MoviesComponents, setMoviesComponent] = useState();
    // const [FilterState, SetFilterState] = useState();
    
    const [movies, setMovies] = useState(data);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState("");
    const [trailer, setTrailer] = useState("");
    const [ratingFilter,setRatingFilter]= useState("");

    
    const handleSubmit = (event) => {
        AddMovie();
        setName("");
        setDescription("");
        setPosterURL("");
        setRating("");
        setTrailer("");
        
        event.preventDefault();
    };
    const AddMovie = () => {
        setMovies([
        ...movies,
        {
            title: name,
            description: description,
            posterURL: posterURL,
            rating: rating,
            trailer: trailer,
        },
        ]);
    };
    // useEffect(() => {
    
    //     if (FilterState == 0) strAscending();
    //     else if (FilterState == 1) strDescending();
    //     else if (FilterState == 2) ratAscending();
    //     else if (FilterState == 3) ratDescending();
    //     else strAscending();
    //     console.log(FilterState);
    //     setMoviesComponent(
    //     Movies.map((Movie, index) => <MovieCard key={index} movie={Movie} />)
    //     );
    // }, [Movies, FilterState]);

    // function ratAscending() {
    //     setMovies([...movies].sort((a, b) => a.rating - b.rating));
    // }
    // function ratDescending() {
    //     setMovies([...movies].sort((a, b) => b.rating - a.rating));
    // }
    // function strAscending() {
    //     setMovies([...movies].sort((a, b) => (a.title[0] > b.title[0] ? 1 : -1)));
    // }
    // function strDescending() {
    //     setMovies([...movies].sort((a, b) => (a.title[0] > b.title[0] ? -1 : 1)));
    // }
    
    // const SetFilter = (currentFilter) => {
    //     SetFilterState(currentFilter);
    // };

    function handleRating(event)
    {
        setRatingFilter(event.target.value)
        const newList = data.filter(movie =>movie.rating > parseInt(event.target.value))
        setMovies(newList)
    }
    const handleClick = () => {
        console.log('done!');
        //etat='yes';
        //console.log(etat);
        
    };
    return(
        <div className="List">
    <div className="AddForm">
        <h1 > Add a movie</h1>
        <form onSubmit={handleSubmit}>
        <label>Name: </label>{" "}
        <input
            type="text"
            name="name"
            placeholder="Movie Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        ></input>
        <br />

        <label>Description: </label>
        <br />
        <textarea
            name="description"
            placeholder="Movie Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <label>Poster URL: </label>{" "}
        <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
        ></input>
        <br />
        <label>Rating: </label>
        <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
        ></input>
        <label>Trailer: </label>
        <input
            type="text"
            name="trailer"
            placeholder="Trailer URL"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            required
        ></input>
        <br />
        <button type="submit">Add !</button>
        </form>
    </div>
    <div className="MoviesComponents">
        {/* <Filter SetFilter={SetFilter}/> */}
        <div>
        <h3>
            show movie above {ratingFilter}
        </h3>
        <input type= "range" name ="rating" min="0" max="5" onchange={handleRating} defaultValue></input>
        </div>
        <div className="movies" onClick={handleClick}>
            { movies.map( movie => (<MovieCard movie={movie} />)) }
        </div>
    </div>
    </div>
);
    
    }



    export default List;
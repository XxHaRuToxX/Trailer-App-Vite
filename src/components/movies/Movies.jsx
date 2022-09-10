import React, { Fragment, useEffect, useState } from 'react';

import { getMovies } from '../../functions/functions';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';

import noImage from '../../assets/noImage.png';
import './movies.css';
import { useToggle } from '../../contexts/ToggleContext';
import { useSearch } from '../../contexts/SearchContext';
import { TrailersMovies } from '../../trailers/TrailersMovies';

export const Movies = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [trailer, setTrailer] = useState(true);
    const [title, setTitle] = useState("")
    const { toggle } = useToggle();
    const { valueSearch } = useSearch()

    const shown = valueSearch ? 'search' : 'discover';

    useEffect(() => {
        const controller = new AbortController();
        setTimeout(()=>{
            getMovies(shown, valueSearch).then(movies => setMoviesData(movies))
        }, 100)
        return () => {
            controller.abort();
        }
    }, [valueSearch])

    const moviesTitle = (shows) => {
        setTitle(shows.title);
        setTrailer(!trailer);
    }

    return (
        <Fragment>
            <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
                <div className="movies-container">
                    {
                        moviesData.map(movie => (
                            <Fragment key={movie.poster_path}>
                                <div id={trailer ? "container" : "NoContainer"}>
                                    <AiFillPlayCircle color="white" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => moviesTitle(movie)} />
                                    <img src={movie.poster_path ? `${import.meta.env.VITE_TMDB_IMAGES}${movie.poster_path}` : `${noImage}`} alt="" onClick={() => moviesTitle(movie)} />
                                    <h3 id={movie.title.length > 28 ? "smaller-text" : ""} className={toggle ? "darkTheme" : "lightThemeClose"} >{movie.title}</h3>
                                </div>
                            </Fragment>
                        ))
                    }
                    {
                        trailer ? console.log() : <TrailersMovies moviesTitle={title} toggle={toggle} />
                    }
                    <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} fontSize={55} cursor={"pointer"} className={toggle ? "darkTheme" : "lightThemeClose"} onClick={() => setTrailer(true)} />
                </div>
            </div>
        </Fragment>
    )
}

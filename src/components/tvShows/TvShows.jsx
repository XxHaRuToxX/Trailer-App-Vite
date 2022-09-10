import React, { Fragment, useEffect, useState } from 'react';
import { getTvShows } from '../../functions/functions';

import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';

import noImage from '../../assets/noImage.png';
import { useToggle } from '../../contexts/ToggleContext';
import { useSearch } from '../../contexts/SearchContext';

import '../movies/movies.css';
import { TrailersTvShows } from '../../trailers/TrailersTvShows';

export const TvShows = () => {

    const [dataTvShows, setDataTvShows] = useState([]);
    const [trailer, setTrailer] = useState(true)
    const [title, setTitle] = useState("")
    const { toggle } = useToggle();
    const { valueSearch } = useSearch()

    const shown = valueSearch ? 'search' : 'discover';

    useEffect(() => {
        const controller = new AbortController();
        getTvShows(shown, valueSearch).then(tvShows => setDataTvShows(tvShows))
        return () => {
            controller.abort();
        }
    }, [valueSearch]);

    const tvShowTitle = (shows) => {
        setTitle(shows.name);
        setTrailer(!trailer);
    }

    return (
        <Fragment>
            <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
                <div className="movies-container">
                    {
                        dataTvShows.map(tvShows => (
                            <Fragment key={tvShows.poster_path}>
                                <div id={trailer ? "container" : "NoContainer"}>
                                    <AiFillPlayCircle color="white" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => tvShowTitle(tvShows)} />
                                    <img src={tvShows.poster_path ? `${import.meta.env.VITE_TMDB_IMAGES}${tvShows.poster_path}` : `${noImage}`} alt="" onClick={() => tvShowTitle(tvShows)} />
                                    <h3 id={tvShows.name.length > 20 ? "smaller-text" : ""} className={toggle ? "mainColor" : "secondaryColor"} >{tvShows.name}</h3>
                                </div>
                            </Fragment>
                        ))
                    }
                    {
                        trailer ? console.log() : <TrailersTvShows tvShowsTitle={title} toggle={toggle} />
                    }
                    <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} fontSize={55} cursor={"pointer"} className={toggle ? "darkTheme" : "lightThemeClose"} onClick={() => setTrailer(true)} />
                </div>
            </div>
        </Fragment >
    )
}

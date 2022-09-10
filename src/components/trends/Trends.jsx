import React, { Fragment, useEffect, useState } from 'react';
import { getTrends } from '../../functions/functions';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';

import noImage from '../../assets/noImage.png';
import '../movies/movies.css';
import { useToggle } from '../../contexts/ToggleContext';
import { TrailersTrending } from '../../trailers/TrailersTrending';

export const Trends = () => {

    const [trendsData, setTrendsData] = useState([]);
    const [trailer, setTrailer] = useState(true);
    const [title, setTitle] = useState("")
    const { toggle } = useToggle();

    useEffect(() => {
        const controller = new AbortController();

        getTrends().then((trends) => setTrendsData(trends));

        return () => {
            controller.abort();
        }
    }, [])

    console.log(trendsData);

    const trendsTitle = (shows) => {
        setTitle(shows.title);
        setTrailer(!trailer);
    }

    return (
        <Fragment>
            <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
                <div className="movies-container">
                    {
                        trendsData.map(trends => (
                            <Fragment key={trends.poster_path}>
                                <div id={trailer ? "container" : "NoContainer"}>
                                    <AiFillPlayCircle color="white" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => trendsTitle(trends)} />
                                    <img src={trends.poster_path ? `${import.meta.env.VITE_TMDB_IMAGES}${trends.poster_path}` : `${noImage}`} alt="" onClick={() => trendsTitle(trends)} />
                                    <h3 id={"smaller-text"} className={toggle ? "darkTheme" : "lightThemeClose"} >{trends.title ? trends.title : trends.name}</h3>
                                </div>
                            </Fragment>
                        ))
                    }
                    {
                        trailer ? console.log() : <TrailersTrending trendingTitle={title} toggle={toggle}/>
                    }
                    <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} fontSize={55} cursor={"pointer"} className={toggle ? "darkTheme" : "lightThemeClose"} onClick={() => setTrailer(true)} />
                </div>
            </div>
        </Fragment>
    )
}

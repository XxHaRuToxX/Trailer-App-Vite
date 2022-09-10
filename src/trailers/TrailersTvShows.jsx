import movieTrailer from 'movie-trailer';
import React, { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import './trailersMovies.css';

export const TrailersTvShows = ({ tvShowsTitle, toggle }) => {

    const [video, setVideo] = useState("")
    const [videoUrl, setVideoUrl] = useState("");

    const handleSearchVideo = () => {
        setVideo(tvShowsTitle);
        movieTrailer(video).then(res => {
            setVideoUrl(res)
        })
    }

    useEffect(() => {

        handleSearchVideo();

    }, [videoUrl])


    return (
        <Fragment>
            <div className="Container"></div>
            <div className="player">
                <h1 id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"} >{tvShowsTitle}</h1>
                <ReactPlayer url={videoUrl} controls={true} width={"60vw"} height={"50vh"} muted={false} />
            </div>
        </Fragment>
    )
}
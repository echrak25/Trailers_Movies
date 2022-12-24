import React, { Fragment } from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../Styles/TrailerMovi.css'
import no_image from '../Components/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
function TrailerMovies ({moviesTitle}) {
const [video, setVideo] = useState("inception");
const [videoURL, setVideoURL] =useState("http://youtu.be/sa9l-dTv9Gk");

function handleSearch() {
    movieTrailer(video).then((res) => {
    setVideoURL(res);
    });}
  return (
    <Fragment>
        <div className='Container'>
        <div className='player'></div>
    <ReactPlayer url={videoURL} controls={true}/>
    </div>
    </Fragment>

  )
}

export default TrailerMovies
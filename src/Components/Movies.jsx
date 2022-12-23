import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import no_image from './no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
import '../Styles/Videos.css'
function Movies() {
  const [moviesData, setMoviesData] = useState([])
  const Images = "https://image.tmdb.org/t/p/w500"
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '97e50f91f39a8298c4d9603b9462060d',
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    MovieCall()
  }, [])
  return (
    <Fragment>
      {moviesData.map((movie) => {
        return (
          <Fragment>
            <div id='container'>
              <AiFillPlayCircle color='#ee0077' fontSize={40} id='playIcon' />
              <img src={movie.poster_path ? `${Images}${movie.poster_path}`: no_image} alt='' />
              <h3>{movie.title}</h3>
            </div>
          </Fragment>
          )
          })}
    </Fragment>
  )
}

export default Movies
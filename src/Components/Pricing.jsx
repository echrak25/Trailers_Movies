import axios from 'axios'
import React, { Fragment, useEffect, useState ,useContext} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import no_image from './no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
import '../Styles/Videos.css'
import { Container } from './NavBar'
function Pricing() {
        return (
          <Fragment>
            
            <div id={trailer ? 'container':"NoContainer"}>
              <AiFillPlayCircle color='#ee0077' fontSize={40} id={ trailer? 'playIcon':"hide"}onClick={()=>moviesTitle(movie)}  />
              <img  src={movie.poster_path ? `${Images}${movie.poster_path}`: no_image} alt=''onClick={()=>moviesTitle(movie)} />
              <h3 id={movie.title.length>28 ? "smaller-Text" :""}
              className={toggle? "DarkTheme":"LightThemeClose"}>{movie.title}</h3>
            </div>
          </Fragment>
          )
          })}
          <AiOutlineClose id={trailer? "Nothing":"Exit1"} className={toggle? "#DarkTheme":"LightThemeClose"} onClick={()=>setTrailer(true)} cursor={'pointer'}
          color='#ee0077' fontSize={55}/>
          </div>
          </div>
          
    </Fragment>
  )
}

export default Pricing
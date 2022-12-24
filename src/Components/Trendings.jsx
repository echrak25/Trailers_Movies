import axios from 'axios'
import React, { Fragment, useEffect, useState ,useContext} from 'react'
import { AiFillPlayCircle ,AiOutlineClose } from 'react-icons/ai'
import no_image from './no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
import '../Styles/Videos.css'
import { Container } from './NavBar'
function Trendings() {
  const[trendTitle,setTrendTitle]=useState("")
  const [trailer,setTrailer]=useState(true)
  const {toggle}=useContext(Container)
  const [trendArray, setTrendArray] = useState([])
  const TrendsShown ='/trending/all/day'
  const Images = "https://image.tmdb.org/t/p/w500"
  const Api = `https://api.themoviedb.org/3`
  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: '97e50f91f39a8298c4d9603b9462060d',
       
      
      }
    })
    const results = data.data.results
    setTrendArray(results) 
    console.log(results)
  }
 
  useEffect(() => {
    Trends()
  },[])
  const TrendTitle=(trend)=>{
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }
  return (
   
    <Fragment>
      <div className={toggle? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
      {trendArray.map((trend) => {
        return (
         
       
        <Fragment>
            <div id={trailer ? 'container':"NoContainer"}>
               <AiFillPlayCircle color='#ee0077' fontSize={40} id={ trailer? 'playIcon':"hide"} onClick={()=>TrendTitle(trend)}  />
             
              <img src={trend.poster_path ? `${Images}${trend.poster_path}`: no_image} alt=''  onClick={()=>TrendTitle(trend)}/>
               <h3 className={toggle? "DarkTheme":"LightThemeClose"}>{trend.title ? trend.title: trend.name}</h3> 
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

export default Trendings
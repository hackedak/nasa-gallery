import { useEffect, useState } from "react";
import axios from "axios";
import Explanation from "./explanation";
import download from "./download.svg";

const ImgOfDay = () => {
    const [imageOfDay, setImageofDay] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() =>{
        const fetchImage = async () =>{
            const result = await axios('https://api.nasa.gov/planetary/apod?api_key=sldiDwW9wXSLOc9b3qymi4yQUkrf2lpP6cbhiEeA')
            setImageofDay(result.data)
            setisLoading(false)
        }
        fetchImage()
    }, [])
    return isLoading ? (
        <h1>Image Loading...</h1>
        ) : ( 
        <div>
            <h3>{imageOfDay.title}</h3>
            <div className="fetched-img">
                <img src={imageOfDay.url} alt={imageOfDay.title}/>
            </div>
            <div className="buttons">
                <Explanation explanation = {imageOfDay.explanation} copyright = {imageOfDay.copyright} />
                <a href={imageOfDay.hdurl} target='_blank' rel="noreferrer">
                <img className="download" src={download} alt="download-image"/>
                </a>
            </div>
        </div>    
        

    );
}
 
export default ImgOfDay;
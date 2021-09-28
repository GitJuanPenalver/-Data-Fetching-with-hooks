import React, {useState, useEffect} from "react";
import './Photos.css';
//Component
import Contador from "./Contador";
// import Comentarios from "./Comentarios";
export default function Photos(){
    const [photos, setPhotos] = useState([]);

    const doFetch = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=7');
        
        //    console.log(res)
        const data = await res.json();
        console.log(data);
        setPhotos(data)
    }

    useEffect(() => {
        doFetch();
    }, []);

    // var x = "https://via.placeholder.com/150/92c952";
    return(
        <div className="main-container">
            <h1>Photos List</h1>
           { photos.map(photo => {
               return (<div  key={photo.id}>
                <h2>{photo.id}. {photo.title}</h2>
                <img src={photo.url} alt="" className="image"/>
                <Contador />
                {/* <Comentarios/> */}
               </div>
               );
            })}
        </div>
    );

};
import React from "react"
import {useLocation} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

         <center>    <h1>Hello {location.state.id} and welcome to the home</h1></center>

        </div>
    )
}

export default Home
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Axiosfetch() {

    const[title, settitle] = useState([])

useEffect(()=>{
    alert("ComponentDidMount")
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then((data)=>{
        console.log(data);
        settitle(data.data)
    })
    .catch((err)=>{
        console.log("first")
    })
},[])


  return (
    <div>

        {title.length ? 
        <>   {title.map((item) =>(
            <h3>{item.title}</h3>
  ))}
  </>
    :
    <div>Loading</div>}
    </div>
  )
}

export default Axiosfetch
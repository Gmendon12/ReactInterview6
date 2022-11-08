import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Axios() {
  
const [people, setpeople] = useState([])
  useEffect(()=>{
    alert("ComponentDidMount")
    axios.get('https://swapi.dev/api/people/')
    .then((data) =>{
      console.log(data);
      setpeople(data.data?.results)
    })
    .catch((err) =>{
      console.log("Error in fetching data")
    })

    
  },[])

 
  
    return (
    <div>
        {people.length ? 
        (
            <>
            {people.map((person)=>(
                <h2>{person.name}</h2>
        ))}
        </>
        ) :
        <div>Page Loading</div>  }
    </div>
  )
}

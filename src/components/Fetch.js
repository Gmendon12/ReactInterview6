import { useEffect, useState } from "react"

const GonnaFetch = () =>{

    const[data, setdata] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) =>{
            // console.log(res);
            setdata(res)
        })
        .catch((err)=>{
            console.log("ERROR");
        })

    },[data])

    return(
        <>
        <h3>I am inside Fetch</h3>

<p>
       {
            data.map((item) =>{
                return(
                <ol>
                    <li>
                        {item.title}
                    </li>
                </ol>
                )



                
            })
        }
</p>
        
        </>
    )
}

export default GonnaFetch
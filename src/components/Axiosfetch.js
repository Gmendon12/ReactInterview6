import axios from 'axios'
import { useEffect, useState } from 'react'

const LetsFetch =()=>{

    const[title, setitle] = useState([])

    useEffect(()=>{
        async function Async(){
            await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) =>{
                // console.log(res)
                setitle(res.data)
            })
            .catch((err) =>{
                console.log("Error fetching data");
            })
            
        }
        Async()
    })

    return(
        <>
        <table border={2}>
            <thead>
                <th>user ID</th>
                <th>iD</th>
                <th>Title</th>
            </thead>

            {
                title.map((item, index) =>{
                    return(
                        <tbody>
                            <tr>
                                <td>{item.userID}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
        </>
    )
}  

export default LetsFetch
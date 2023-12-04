import React,{useState,useEffect}from 'react';
import axios from 'axios';
//import cors from 'cors';
//const cors = require('cors');
////app.use(express.json());
//app.use(cors());
const colorth = "blue";
function GetAll(){

    const[posts,setposts]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:8082/MallAdmin")
    .then(res=>{
        console.log(res);
        setposts(res.data)
    })
},[])
return (
    // <ol>
    //    {posts.map((data)=>{
    //     return (
    //         <li>{data.name}</li>
    //     )
    //    })}

    //</ol>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">MallName</th>
      <th scope="col">PhoneNo.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">
        <h5>{posts.map((data)=>{
         return (
             <p>{data.id}</p>
         )
        })}</h5>
        </td>
      <td>
      {posts.map((data)=>{
         return (
             <p>{data.name}</p>
         )
        })}
      </td>
      <td>
      {posts.map((data)=>{
         return (
             <p>{data.password}</p>
         )
        })}
      </td>
      <td>
      {posts.map((data)=>{
         return (
             <p>{data.mall}</p>
         )
        })}
      </td>
      <td>
      {posts.map((data)=>{
         return (
             <p>{data.phone}</p>
         )
        })}
      </td>
    </tr>
  </tbody>
</table>
)
}
export default GetAll;
import React,{useState,useEffect}from 'react';
import axios from 'axios';

 let adminId = prompt("Enter the id of admin thaat you want to find");

function GetSpecific(){

    const[posts,setposts]=useState([]);
    useEffect(()=>{
    axios.get("http://localhost:8082/MallAdmin/" + adminId)
    .then(res=>{
        console.log(res);
        setposts(res.data)
    })
},[])
return (

    // <>
    // <h3>The Admin Id entered is : {posts.id}</h3>
    // <h3>The Admin name is             :{posts.name}</h3>
    // <h3>The Admin Password is          :{posts.password}</h3>
    // <h3>The Admin corresponding mall is :{posts.mall}</h3>
    // <h3>The Admin phone number is :{posts.phone}</h3>
    // </>
<div className="container">
<table className="table">
<thead>
  <tr>
    <th scope="col">Description</th>
    <th scope="col">Data</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td scope="row">
    The Admin Id entered
      </td>
    <td>
    {posts.id}
    </td>
  </tr>

  <tr>
    <td scope="row">
    The Admin name
      </td>
    <td>
    {posts.name}
    </td>
  </tr>


  <tr>
    <td scope="row">
    The Admin Password
      </td>
    <td>
    {posts.password}
    </td>
  </tr>


  <tr>
    <td scope="row">
    The Admin corresponding mall
      </td>
    <td>
    {posts.mall}
    </td>
  </tr>


  <tr>
    <td scope="row">
    The Admin phone number
      </td>
    <td>
    {posts.phone}
    </td>
  </tr>
</tbody>
</table>
</div>
    
);
}
export default GetSpecific;
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshChoudhary')
    //     .then(res => res.json()).then(data => { 
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className="text-center bg-gray-600 m-5 p-5 text-white">
      Github Followers : {data.followers} <br />
      Nane : {data.name}
      <img src={data.avatar_url} alt=""  className="w-80 h-80 mx-auto mt-3"/>
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/hiteshChoudhary")
    return response.json()
}
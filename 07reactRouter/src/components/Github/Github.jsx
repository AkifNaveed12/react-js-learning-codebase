import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    const data = useLoaderData()
    //const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AkifNaveed12')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    //}, [])
    return (
        <div className=' flex-column text-center justify-center align-center m-4 bg-orange-600 text-white p-6 m-4 text-3xl font-poppins font-bold'>
            Github followers: {data.followers}
            <img className=' w-200' src={data.avatar_url} alt="Git_Picture" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AkifNaveed12')
    return response.json()
}

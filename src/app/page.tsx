'use client'
import { useEffect, useState } from "react";


export default function Home() {

  const [bible, setBible] = useState();
  const url = "https://www.abibliadigital.com.br/api/"

  useEffect(() => {
    getBible()
  }, [])

  const getBible = () => {
    try {
      fetch(`${url}verses/nvi/sl/23`)
        .then(response => response.json())
        .then(data => setBible(data))

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-full w-full flex justify-center items-center text-black" >
      
      <div className="bg-zinc-400 w-1/3 h-2/4" >
        <p>{bible}</p>
      </div>
    </div>
  );
}

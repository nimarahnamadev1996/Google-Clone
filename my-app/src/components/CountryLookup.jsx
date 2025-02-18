'use client'

import React, { useEffect, useState } from 'react'


const API_KEY= 'HBFlfwQ8ZxbgzKYcULsb'


const CountryLookup = () => {

    const [country, setCountry] = useState('United States')

    

    useEffect(() => {
      const getCountry = async() => {

        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${API_KEY}`
        )
        .then((res) => res.json())
        .then((data) => data.country)

        if(!response) return
        setCountry(response)
    }

    getCountry()
    },[])

  return (
    <>
     {country}
    </>
  )
}

export default CountryLookup
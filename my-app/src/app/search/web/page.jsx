import WebSearchResults from '@/components/WebSearchResults'
import React from 'react'

const API_KEY ='AIzaSyD6rO8hQa29ARa16PKOpSvYekk4NUCWm_4'
const CONTEXT_KEY ='95216234ad772471e'



const WebSearchPage = async({searchParams}) => {

 

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}`
  )

  const data = await response.json()
  const results = data.items

  return (
    <div>
      {
        results &&  <WebSearchResults results={data} /> 
      }
    </div>
  )
}

export default WebSearchPage





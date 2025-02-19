import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';




const API_KEY ='AIzaSyD6rO8hQa29ARa16PKOpSvYekk4NUCWm_4'
const CONTEXT_KEY ='95216234ad772471e'




const ImageSearchPage = async({searchParams}) => {

  const startIndex = searchParams.start || '1'

  await new Promise((resolve) => setTimeout(resolve,1000))


  const response = await fetch(
   `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  )

  const data = await response.json()
  
  const results = data.items;
  console.log(results);


  if (!results) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>
          No results found for {searchParams.searchTerm}
        </h1>
        <p className='text-lg'>
          Try searching the web or images for something else{' '}
          <Link href='/' className='text-blue-500'>
            Home
          </Link>
        </p>
      </div>
    );
  }
  
   

  return (
    <>
    {
      results && <ImageSearchResults results={data}/>
    }
    </>
  )
}

export default ImageSearchPage
import SearchHeader from '@/components/SearchHeader'
import './../globals.css';



const layout = ({children}) => {
  return (
    <>
    <SearchHeader/>
    {children}
    </>
  )
}

export default layout
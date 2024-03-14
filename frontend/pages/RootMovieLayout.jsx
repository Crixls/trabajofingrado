import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const RootMovieLayout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
      
    </>
  )
}

export default RootMovieLayout

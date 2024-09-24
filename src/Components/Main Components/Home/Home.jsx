import { Header } from '../../Sub Components/Home/Header/Header'
// import { Outlet } from 'react-router-dom'
import { Footer } from '../../Sub Components/Common/Footer/Footer'
import { ShowText } from '../../Sub Components/Home/Showtext/ShowText'
export const Home=()=>{
    return(
    <div className='bg-dark'>
        <Header/>
        <ShowText/>
        {/* <Outlet/> */}
        <Footer/>
    </div>
    )
}
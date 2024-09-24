import {homepage} from '../../../../Data_Helpers/Consants/Images/images'
import {Typewriter} from 'react-simple-typewriter'
import {Text} from '../../../../Data_Helpers/Consants/Home Text/Home_TEXT.js'
export const ShowText=()=>{
    return(
    <div className='mt-5 row  bg-dark'>
        <div className='col-6'>
                <div className='row text-center mx-auto mt-3'>
                    <p className='display-1 text-success'>Wellcome</p>
                    <p className='my-3'>
                        <span className='display-4 text-secondary text-bold mt-3'>
                            Sheger automatic lauundry service manegement system
                        </span>
                    </p>
                    <p className='text-center text-light mx-auto py-5 h1'>
                        <span>
                            <Typewriter 
                                words={Text}
                                loop={true}
                                typeSpeed={200}
                                delaySpeed={50}
                                deleteSpeed={200}
                                // cursor
                                // cursorStyle='...'
                            />
                        </span>
                    </p>
                </div>
            </div>
            <div className='col-5'>
                <img src={homepage} alt='home page image' className='home_page_img'/>
            </div>
     </div>
    )
}
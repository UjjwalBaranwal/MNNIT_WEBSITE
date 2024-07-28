import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cat from '../assets/cat.webp'
import catpro from '../assets/catpro.jpg'
import catu from '../assets/catu.jpg'

function Corousel() {
  return (
    <div className="relative h-screen">
    <div className="absolute h-screen w-full">
         <Carousel>
                <div className="h-[90%]">
                    <img src={cat} />
                  
                </div>
                <div className="h-[90%]">
                    <img src={catu} />
                   
                </div>
                <div className="h-[90%]">
                    <img src={catpro} />
                </div>
            </Carousel>
    
    </div>
    </div>
  )
}

export default Corousel
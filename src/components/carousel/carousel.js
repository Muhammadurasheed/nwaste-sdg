import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.scss';
import okro from '../../assets/okro.jpg';
import mango from '../../assets/mango.jpg';
import cashew from '../../assets/Cashew.jpg';
import coconut from '../../assets/coconut.jpg';
import banana from '../../assets/banana.jpg';

const Slider =()=> {
        return (
            <Carousel 
            width= 'auto'
            centerMode
            dynamicHeight={false}
            infiniteLoop 
            autoPlay 
            showThumbs={false}
            interval={3000}>
                <div>
                    <img src={banana} className="item"/>
                </div>
                <div>
                    <img src={mango} className="item"/>
                </div>
                <div>
                    <img src={cashew} className="item"/>
                </div>
                <div>
                    <img src={okro} className="item" />
                </div>
                <div>
                    <img src={coconut} className="item" />
                </div>
            </Carousel>
        );
    }

    export default Slider;

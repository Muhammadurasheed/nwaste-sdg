import { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import HeaderTwo from "../header_two/Header_two";
import {addItem} from '../../redux/cart/cart.actions';
import WhatsappFloat from "../floating.whatsapp/Floating.whatsapp";
import Footer from '../footer/Footer';
// import { getTokenOrRefresh } from '../../token_utils';
// import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import Fruits from './fruits';
import Cereals from './cereals';
import NutsAndSeeds from './nutsandseeds';
import SpicesAndHearbs from './spicesandhearb';
import StemAndTubers from './stemandtuber';
import { connect } from 'react-redux';
import "tachyons";

import {
  getDocs,
  collection,
  query,
  orderBy
} from 'firebase/firestore';
import './Farmers.scss';


// const speechsdk = require('microsoft-cognitiveservices-speech-sdk');

const Farmer = ({ addItem }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const[micspeak, setMicSpeak] = useState('');

//   useEffect(() =>{
//     const getTokenFromApi = async () =>{
//        const tokenRes = await getTokenOrRefresh();
//        if (tokenRes.authToken === null) {
//            setMicSpeak(micspeak);
//         }
//     }
//     getTokenFromApi()
// }, [])


// const sttFromMic = async () => {
//     const tokenObj = await getTokenOrRefresh();
//     const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
//     speechConfig.speechRecognitionLanguage = 'en-US';
//     const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
//     const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

//     setMicSpeak('Listening...');
//     recognizer.recognizeOnceAsync(result => {
//         let micspeak;
//         if (result.reason === ResultReason.RecognizedSpeech) {
//             micspeak = `${(result.text.toLowerCase())}`
//         }

//         setMicSpeak(micspeak);
//     });
// }

  
    useEffect(() => {
        const getAllFoodItems = async () => {
        const items = await getDocs(
            query(collection(firestore, 'foodBank'), orderBy('id', 'desc'))
        );
        setProducts(items.docs.map(doc => doc.data()));
    }
    getAllFoodItems();
    }, []);

    useEffect(() => {
        const filterHandler = products.filter(
          user => user.title.toLowerCase().includes(search.toLowerCase())           
        )
        setFilteredProducts(filterHandler)
    }, [search, products, micspeak]);

  const clearBtn =()=> {
    setSearch('');
    setProducts(products);
  }

  const ProductCategory = [
    {
      title: 'Fruits',
      components: <Fruits filteredProducts={filteredProducts} addItem={addItem} products={products} />,
      link: '/fruits'
    },
    {
      title: 'Cereals & Legumes',
      components: <Cereals filteredProducts={filteredProducts} addItem={addItem} products={products} />,
      link: '/cereals'
    },
    {
      title: 'Stems & Tubers',
      components: <StemAndTubers filteredProducts={filteredProducts} addItem={addItem} products={products}  />,
      link: '/stemandtubers'
    },
    {
      title: 'Spices & Hearbs',
      components: <SpicesAndHearbs filteredProducts={filteredProducts} addItem={addItem} products={products}  />,
      link: '/spicesandhearbs'
    },
    {
      title: 'Nuts & Seeds',
      components: <NutsAndSeeds filteredProducts={filteredProducts} addItem={addItem} products={products}  />,
      link: '/nutsandseeds'
    }
  ];
   
    return (
        <div>
        <HeaderTwo
        search={ search }
        clearBtn={clearBtn}
        products={products}
        setSearch={setSearch}
        // sttFromMic={sttFromMic}
        micspeak={micspeak} />
        
          {
            ProductCategory.map((val, key) => {
              return (
                <main key={key}>
                <span className='product-title'>{val.title}</span>
                {val.components}
                <span
                className='see-all'
                 onClick={() => window.location.pathname = val.link}>See All</span>
                </main>               
              )
            })
          }

          <WhatsappFloat />
        <footer className="position-footer">
        <Footer /> 
        </footer>     
       </div>
    );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Farmer);
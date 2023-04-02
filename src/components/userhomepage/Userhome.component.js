import { useState, useEffect } from 'react';
import HeaderThree from '../header_three/Header_three';
import Sidebar from '../sidebar/Sidebar';
import Flood from '../flood/Flood.component';
import './Userhome.scss';


const UserHomePage = () => {
    

    const [usersoil, setUserSoil] = useState({});
    const [Prediction, setPrediction] = useState('');
    const [floodedornot, setFloodedornot] = useState('')

  useEffect(() => {
    const getSoilData = async () => {
      const response = await fetch('http://localhost:5000/soil',{
        method: 'GET',
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        });
      const jsonData = await response.json();
      console.log(jsonData);
      setUserSoil(jsonData);
    };
    getSoilData();
    
  }, []);

  useEffect(() => {
    const getPolygonShape = async () => {
      const shape_response = await fetch('http://localhost:5000/shape',{
         method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      });
      const polyjsonData = await shape_response.json();
    };
    getPolygonShape();
  }, []);
            
    return(
      <div className='user-page'>
      <HeaderThree/>
     <article className='userpage-layout'>
      <Sidebar  />
        <main className='user-main-page'>
         <div className='soil-params'>
         <span className='content-description-header'>Upload Clear Farmland image For Flood Detection</span>
         <p className='content-description'>
            It's is advisable to know the Condition of a farmland before planting because a flooded land can affect land fertility and crop yields adversely.
         </p>    
           <div className='about-soil'>
           <h3 style={{color: 'green', fontSize: '18px'}}>Condition of the Land: {floodedornot}</h3>    
            <ul>
            <li>
            <p style={{color: 'green', fontSize: '18px'}}>Prediction Accuracy: {Prediction}</p>
            </li>
            </ul>
           </div>
          </div>
        <section>
       </section>
       <div>
         <h4 style={{marginBottom: '8px'}}>Detect if land is flooded or not</h4>
         <Flood setFloodedornot={setFloodedornot} setPrediction={setPrediction} />
       </div>  
       
        </main>
      </article>
        </div>
    );
}

export default UserHomePage;

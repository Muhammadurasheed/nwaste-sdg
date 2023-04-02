import { useRef, useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
// import { AiOutlineClose } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api';
  import './Direction.scss'
const center = { lat: 48.8584, lng: 2.2945 }

const Direction = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:'',
        libraries: ['places'],
      })

      //AIzaSyDtkgirEGn4r3BxForeDdAVsrcfBcLCBcM

      // 'AIzaSyDtkgirEGn4r3BxForeDdAVsrcfBcLCBcM',
    
      const [map, setMap] = useState(/** @type google.maps.Map */ (null))
      const [directionsResponse, setDirectionsResponse] = useState(null)
      const [distance, setDistance] = useState('')
      const [duration, setDuration] = useState('')
    
      /** @type React.MutableRefObject<HTMLInputElement> */
      const originRef = useRef()
      /** @type React.MutableRefObject<HTMLInputElement> */
      const destinationRef = useRef()
    
      if (!isLoaded) {
        return <div></div>
      }
    
      async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
      }
    
      // function clearRoute() {
      //   setDirectionsResponse(null)
      //   setDistance('')
      //   setDuration('')
      //   originRef.current.value = ''
      //   destinationRef.current.value = ''
      // }
      

      return (
    <div className='google-map-container'>
    <span className="map-header">Distance and time for arrival of product by driving mode</span>
          <div className='google-map' >
            {/* Google Map Box */}
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: '100%', height: '40%' }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={map => setMap(map)}
            >
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
          <div className='google-map-form'>
            <div>
              <div className='form-input'>
                <Autocomplete>
                  <input type='text' placeholder="Buyer location" ref={originRef} />
                </Autocomplete>
             
                <Autocomplete>
                  <input
                    type='text'
                    placeholder='Destination'
                    ref={destinationRef}
                  />
                </Autocomplete>    
                <button
                className='compute-route'
                type='submit' onClick={calculateRoute}>
                  Compute Route
                </button>
                 {/* <AiOutlineClose
                 className='clear-icon'
                  style={{ariaLabel:'center back'}}
                  icon={<FaTimes />}
                  onClick={clearRoute}
                /> */}
                </div>

            <div className='map-output'> 
              <p>Distance: {distance} </p>
              <p>Duration: {duration} </p>
              <FiSend
              className='send-icon'
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center)
                  map.setZoom(15)
                }}
              />
            </div>
          </div>
          </div>
    </div>   
      )
}

export default Direction;
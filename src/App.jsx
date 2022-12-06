import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import ErrorFetch from './components/ErrorFetch'
import './App.css'

function App() {
  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let URL 
    if(locationInput){
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`

    }else{
      const randomIdLocation = Math.ceil(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`

    }
    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })
  }, [locationInput])

const handleSubmit = e => {
  e.preventDefault()
  setLocationInput(e.target.inputSearch.value)
}


  return (
    <div className="App">
      <section className='okk'></section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form className='barr' onSubmit={handleSubmit}>
        <input autoFocus className='buscador'  id= 'inputSearch' type="text" placeholder='Escribe un número del 1-126'/>
        <button className='entrar'>SEARCH</button>
      </form>
      <section className='data__info'>
      <br />
      {
        hasError ?
          <ErrorFetch />
        :
          <>
      
      <LocationInfo location={location} />
      <br />
      <br />
      <div className='residents-container'>
        {
        location?.residents.map(url => ( //cada vez que usamos el metodo .map, necesitamos una key unica..//
          <ResidentCard key={url} url={url}/>
        ))
        }
        
      </div>
      </>
      }
      <br />
      </section>
      <br />
    </div>
  )
}

export default App

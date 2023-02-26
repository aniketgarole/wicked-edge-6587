
import Navbar from '../components/Navbar'
import React,{useState, useEffect} from 'react'
import Footer from '../components/Footer'


function Allcars() {

    const [cars, setCars] = useState([])

    const getCars = async() => {
        let res = await fetch(`https://63f9e5d8897af748dcc54245.mockapi.io/cars`);
        let data = await res.json()
        console.log(data)
        setCars(data)
    }

    useEffect(()=> {
        getCars()
    },[])

  return (
    <div>
        <Navbar/>
        {cars.map((item)=> {
            return <img src={item.image}></img>
        })}
        <Footer/>
    </div>
  )
}

export default Allcars
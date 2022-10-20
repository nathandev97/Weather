import { useEffect, useState } from "react";
import { initialData } from "./storage";

const useFetch = () => {
  const apiKey = '51c07b1bf502b5a2792722b1b9c09332'
  let [data, setData] = useState(initialData)

  const fetchData = async() => {
    for(let i of data) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${i.lat}&lon=${i.long}&appid=${apiKey}`)
        .then(res => res.json())
        .then(info => setData(prev => [...prev, {...i, pressure: info.main.pressure, humidity: info.main.humidity, temperature: info.main.temp}]))
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return data.slice(40).sort((a, b)=> a.id - b.id);
}
 
export default useFetch;
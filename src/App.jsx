import { useEffect, useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    async function getSensorsData (){
      const response = await fetch(import.meta.env.VITE_API_URL)
      const data = await response.json()
      const { temperature, humidity, ammonia } = data
      setTemperature(temperature)
      setHumidity(humidity)
      setAmmonia(ammonia)
    }
    getSensorsData()
  }, [])
  
  const [temperature, setTemperature] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [ammonia, setAmmonia] = useState(0)

  return (
    <>
      <h1>Control ambiental</h1>
      <div>
        <div>
          <p>temperature: {temperature}</p>
        </div>
        <div>
          <p>humidity: {humidity}</p>
        </div>
        <div>
          <p>ammonia: {ammonia}</p>
        </div>
      </div>
    </>
  )
}

export default App

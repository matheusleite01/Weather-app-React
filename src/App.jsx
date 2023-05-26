import React from 'react'
import './App.css'
import Input from './components/Input'
import Main from './components/Main'
import WeatherStatus from './components/WeatherStatus'


function App() {
  const [text,setText] = React.useState('');
  const [data,setData] = React.useState(null)

  const textValue = ({target}) => {
    setText(target.value);
  }

  const fetchWeather = async (e) => {
    e.preventDefault();
    if(text.length){
      try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=e726956bc02510319bb7433c3089e2b9`);
      const json = await response.json();
      if(response.ok === true){
        setData(json);
      }
      setText('');
    }catch (error){
      console.log(error);
    }
    } 
  }


  return (
    <> 
      <Input text={text} textValue={textValue} fetchWeather={fetchWeather}/>
      <Main data={data}/>
      <WeatherStatus data={data} />
    </>
  )
}

export default App
 
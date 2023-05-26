
const WeatherStatus = ({data}) => {

  if(data !== null)
  return (
    <section className="status">
      <div className="status--flex">
        <div>
          <span>{data.main.feels_like.toFixed() + '°C'}</span>
          <p>Feels Like</p>
        </div>
        <div>
          <span>{data.main.humidity}</span>
          <p>Humidity</p>
        </div>
        <div>
          <span>{data.wind.speed.toFixed() + 'Km/h'}</span>
          <p>Wind</p>
        </div>
      </div>
    </section>
  )
}

export default WeatherStatus
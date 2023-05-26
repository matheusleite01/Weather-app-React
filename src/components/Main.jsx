import React from 'react'
import cat from '../assets/catsvg.svg'

const Main = ({data}) => {
  
  const [time] = React.useState(() => {
    const date = new Date();
    const day = date.getDate();
    const week = date.getDay();
    const options = { month: 'long', locale: 'en-US' };
    const month = date.toLocaleString('en-US', options);
    const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
    const weekdays = daysNames[week];
    return {
      day,
      month,
      weekdays
    }
  });

  if(data !== null)
  return (
    <section className='main anima'>
      <div>
        <p>{`${time.weekdays}, ${time.day} ${time.month.slice(0, 3)}`}</p>
        <h1>{data.name}</h1>
        <p>{data.sys.country}</p>
      </div>
      <div>
        <h1 className='temperature'>{data.main.temp.toFixed() + '°C'}</h1>
      </div>
      <div className='cat'>
        <img src={cat} alt="gato svg" />
      </div>
    </section>
  )
}

export default Main
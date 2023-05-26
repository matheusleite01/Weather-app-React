import  search from '../assets/search.svg'


const Input = ({text, textValue, fetchWeather}) => {

  return (
     <form  onSubmit={fetchWeather} className='form'>
      <input value={text} type="text" placeholder= "Enter a city" onChange={textValue}/>
      <button>
        <img src={search} alt="search"/> 
      </button>
    </form>
  
  );
};

export default Input;

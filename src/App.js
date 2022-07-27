import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App mx-auto container p-7 mt-5 ">
      <h1  className=' text-3xl text-center uppercase font-bold'>English Dictionary</h1>
    <h2 className=' text-center text-xs  text-green-900'>Definitions from <a className=' font-bold hover:underline' href="https://dictionaryapi.dev/"> Free Dictionary API</a> </h2>
     <Search defaultKeyword= "paper" />

     <footer className=' text-center mt-5 font-bold text-sm text-green-900'> Coded by Adimchi</footer>
    </div>
  );
}

export default App;

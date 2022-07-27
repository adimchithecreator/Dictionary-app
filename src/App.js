import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App mx-auto container p-7 mt-5 ">
      <h1  className=' text-3xl text-center uppercase font-bold'>English Dictionary</h1>
     <Search defaultKeyword= "brave" />
    </div>
  );
}

export default App;

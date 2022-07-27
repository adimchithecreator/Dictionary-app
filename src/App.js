import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App container p-7 mt-5 ">
      <h1  className=' text-3xl text-center'> What word are you looking for? 👀</h1>
     <Search defaultKeyword= "brave" />
    </div>
  );
}

export default App;

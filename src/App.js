import Search from './Search';

function App() {
  return (
    <div className="App lg:max-w-[960px] font-TDS  lg:bg-[#141414] lg:border-8 rounded-2xl border-black mx-auto container mt-14">
   <Search defaultKeyword= "Happy" />

     <footer className=' text-center mt-5 font-bold text-sm text-green-900'> Coded by Adimchi</footer>
    </div>
  );
}

export default App;

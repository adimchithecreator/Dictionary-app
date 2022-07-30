import Search from './Search';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
 
    <div className="lg:max-w-[960px] font-TDS mx-auto container mt-14">
   <Search defaultKeyword= "space" />
   <div className="my-6 border-[0.7px] border-borderColor  "></div>
        
   <footer className='text-center'> 
   <SocialIcon url="https://github.com/adimchithecreator/Dictionary-app" bgColor="#ffff" target="_blank"  className="mr-4" network="github" />
   <SocialIcon url="https://www.linkedin.com/in/adimchi-oraegbunam-a60554113/" target="_blank"  />
   </footer>
   </div>
    </div>
  );
}

export default App;

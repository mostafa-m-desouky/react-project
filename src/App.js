import './App.css';
import { Brand, Cta, Navabar} from "./componets"
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from "./containers"

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navabar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

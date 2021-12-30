import './App.css';

import myWonderfulImage from "./nj.png"
function App() {
  return (
    <div className="App">
       <h1 class="title" style={{color:"red" }}><b><i>rick and morty</i></b></h1>
       <br></br>
       <header className="App-header">
      <img src="/rick.jpg" alt="myimage" width={1200} height={700} />
      <br></br>
      <img src={myWonderfulImage} alt ='myImage' width={1200} height={700} />

      <br></br>


      </header>


    </div>
  );
}

export default App;

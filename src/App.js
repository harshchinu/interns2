import React from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  name:"Linnie Ramsey",
  country:"Somalia",
  email:"linnie@gmail.com",
  Mobile:"221-064-0098",
 }


function App() {
  return (
 <div className="App">
    
    <div className="parent"> 
    <div className="FirstPart">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samoyede_Nauka_2003-07_asb_PICT1895_small.JPG"/>
      <div className="Name">
      <h1> {user.name}</h1>
      </div>
      <div className="paragraph">
      <p>{user.country} </p>
      </div>
    </div>
    <div className="secondPart">
   <div className="mobileparent">
   <div className="Mobile">
      <h1> Mobile</h1>
      </div>
      <div className="Number">
      <p>{user.Mobile} </p>
      </div>
      </div>

      <div className="mobileparent">
      <div className="email">
      <h1> Email</h1>
      </div>
      <div className="emailaddress">
      <p>{user.email} </p>
      </div>
      </div>
  </div>

    <div className="thirdPart">
    <div className="mobileparent">
   <div className="haveniceday">
      <h1> Have a nice day</h1>
      </div>
      <div className="Numbera">
      <p> 20 min </p>
      </div>
      </div>

      <div className="mobileparent">
   <div className="gasoven">
      <h1>Gas Ovens</h1>
      </div>
      <div className="Numbera">
      <p>3h </p>
      </div>
      </div>

      <div className="mobileparent">
   <div className="castiron">
      <h1>Cast iron CookWare  </h1>
      </div>
      <div className="Numbera">
      <p>1 day </p>
      </div>
      </div>


    </div>
    
    </div>
    </div>
      
  );
}

export default App;

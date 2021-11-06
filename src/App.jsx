import './App.css';
import Footer from './Footer';
import React, {useState} from 'react';
import Header from './Header';
import LocationInput from './LocationInput'
import LocationList from './LocationList';
import MeetLocation from './MeetLocation';


function App() {
  const [data,setData] = useState([]);
  const [label,setLabel] = useState("");

  const transferLabel = (input) =>{
    setLabel(input);
  }

  const transferData = (input) => {
    setData(input);
  }
  return (
    <>
    <Header/>
    <LocationInput transferData={transferData} transferLabel={transferLabel}/>
    { label !=="" && <MeetLocation label={label}/>} 
    {/* only renders if a meet point has been calculated */}
    <LocationList data={data}/>
    <Footer/>
    </>
  );
}

export default App;

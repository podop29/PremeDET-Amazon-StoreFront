import {React, useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import KeepaApi from './keepaApi';
import detroitPic from  "./pics/detroit.jpg"
import detroitPhone from  "./pics/detroitPhone.jpg"

import Home from './home';
import Shop from './shop';

import obj from "./obj"






function App() {

  const [mobile, setMobile] = useState(true)

  const [items, setItems] = useState([])


  useEffect(()=>{
    if(window.innerWidth > 767){
      setMobile(false)
    }else{
      setMobile(true)
    }

    const getItems = async()=>{
    
      if(sessionStorage.getItem("items") === null){
        const res = await KeepaApi.getListOfProducts();
        setItems(res);
        sessionStorage.setItem("items", JSON.stringify(res))
        
      }else{
        setItems(JSON.parse(sessionStorage.getItem("items")));
      }
      

    }
      getItems()
  },[])

  

  return (
    <div className="w-full h-screen bg-gray-900 bg-auto bg-no-repeat bg-center">
    <img className='h-screen w-full bg sm:w-screen fixed' src={mobile ? detroitPhone :detroitPic }/>

    <BrowserRouter>

      <Routes>

      <Route exact path='/' element={<Home/>}/>

      <Route exact path='/shop' element={<Shop items={items}/>}/>




      </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;

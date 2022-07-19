import React from 'react';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Home from './components/pages/Home';
// import Navbar from './components/Layout/Navbar';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import NotFound from "./components/pages/NotFound";
// import Adduser from "./components/users/AddUser";
// import EditUser from './components/users/EditUser';
// import ViewUser from './components/users/ViewUser';
// import nlogo from "./img/1.jpg"
import {Routes,Route} from "react-router-dom";
import Navbar from './NewApp/Navbar';
import Home from './NewApp/Home';
import Contact from './NewApp/Contact';
import About from './NewApp/About';
import Pno from './NewApp/Pno';
import Service from './NewApp/Service';
import Footer from './NewApp/Footer';


function App() {
  return (
//     <div className='ni' style={{backgroundImage:`url(${nlogo})`,width:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"fixed",backgroundSize:"cover"}}>
//     <BrowserRouter>
//     <div className='App'style={{ 
//       backgroundImage: `url("https://www.shutterstock.com/image-illustration/laptop-front-3d-illustration-dark-background-1586805748")`,height:"100%",width:"100%" 
//     }}>
//     <Navbar/>

//      <Routes>
     
//      <Route exact path='/' element={<Home/>}></Route>  
//      <Route exact path='about' element={<About/>}></Route>  
//      <Route exact path='/contact' element={<Contact/>}></Route>  
//      <Route exact path='/users/add' element={<Adduser/>}></Route>  
//      <Route exact path='/users/edit/:id' element={<EditUser/>}></Route>  
//      <Route exact path='/users/view/:id' element={<ViewUser/>}></Route>  
//      <Route  path='*' element={<NotFound/>}></Route>  
    
//      </Routes>
     
   
     

//      </div>  
//     </BrowserRouter>
 
//  <div style={{height:"200px",width:"200px"}}></div>

//  <div style={{backgroundColor:"black",height:"70px",width:"100%",textAlign:"center",padding:"25px",color:"white"}}><h3>This is FOOTER</h3></div>
//     </div>


<>
<Navbar/>

<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
  <Route exact path="/about" element={<About/>}/>
  <Route exact path="/service" element={<Service/>}/>
  <Route  path="*" element={<Pno/>}/>
</Routes>
<Footer/>
</>
  );
}

export default App;

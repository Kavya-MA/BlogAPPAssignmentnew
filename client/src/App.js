import React,{useState,useEffect} from "react"
import Login from './components/signup/Login';
import Header from './components/header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Home from './components/home/Home';
import Signup from './components/signup/Signup';

import axios from "axios"

import ArticleList from "./components/articles/ArticleList";
import AddArticle from "./components/articles/AddArticle";

function App() {

   const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:5000/api/articles").
      then(res=>setPosts(res.data)).catch(error=>console.log(error))
    })
      
  return (
    <Router>
   <>
   <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/articlelist" element={<ArticleList posts={posts}/>}/>
     <Route path="/addarticle" element={<AddArticle/>}/>
</Routes>
   
   
   </>
    
    </Router>
    
     
  );
}

export default App;

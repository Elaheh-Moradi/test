import "./App.css";
import Header from "./component/generic/header/Header";
import Footer from "./component/generic/footer/Footer";
import Sidebar from "./component/generic/sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import FullPost from "./pages/fullPost/FullPost";
import ThemeContext, { theme } from "./component/context/ThemeContext";
import { useEffect, useState } from "react";
import UserContext from "./component/context/UserContext";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import cookie from 'js-cookie'
import axios from "axios";
import Person from "./pages/person/Persons";


function App() {
  const [themes, setThemes] = useState(theme.light);
  const [loading,setLoading]=useState(true);
  const [user,setUser] = useState({});
  const [auth,setAuth]=useState(false);

  useEffect(()=>{
    cookie.get('token') ?login() :setLoading(false)
  } ,[])

  const login  = () => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response =>{
     cookie.set('token','my-token',{expires:7})
     setUser(response.data)
     setAuth(true)
     setLoading(false)
    })
    
     }
    

     const logOut = () => {
      cookie.remove('token')
      setUser({})
      setAuth(false)
   
    }

    if(loading) {
      return 'loading....'
    }
    

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{user,auth,login,logOut}}>
          <ThemeContext.Provider value={themes}>
            <div>
              {themes === theme.light ? (
                <button onClick={() => setThemes(theme.dark)}>dark</button>
              ) : (
                <button onClick={() => setThemes(theme.light)}>light</button>
              )}
            </div>
            <Header />
            <section style={{ display: "flex" }}>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/post/:id" element={<FullPost />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                
              </Routes>
            </section>
            <Footer />
            <Person/>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./ComponentsCollection/Header/Header"
import Main from "./ComponentsCollection/Main/Main"
// import Youtube from "./ComponentsCollection/Youtube/Youtube"
import Footer from "./ComponentsCollection/Footer/Footer"
import Iphone from './ComponentsCollection/Pages/Iphone/iphone';
import Mac from "./ComponentsCollection/Pages/Mac/Mac"
import Productpage from './ComponentsCollection/Pages/Productpage/Productpage';
import Four04 from './ComponentsCollection/Pages/Four04/Four04';
import Ipad from "./ComponentsCollection/Pages/Ipad/Ipad";
import Watch from "./ComponentsCollection/Pages/Watch/watch"
import Tv from "./ComponentsCollection/Pages/Tv/Tv"
import Music from "./ComponentsCollection/Pages/Music/Music"
import Support from "./ComponentsCollection/Pages/Support/Support"
import Search from "./ComponentsCollection/Pages/Search/Search"
import Cart from "./ComponentsCollection/Pages/Cart/Cart"

// AIzaSyBF1cnGW8h9oaYP2WWL6ZSdax-vVG71gjQ
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBF1cnGW8h9oaYP2WWL6ZSdax-vVG71gjQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:pid" element={<Productpage />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

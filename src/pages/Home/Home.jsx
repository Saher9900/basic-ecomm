import './Home.css'
import { useContext, useEffect } from 'react';
import { CatsContext } from '../../contexts/CatsContext';

// import components

import HeadSwiper from '../../components/HeadSwiper/HeadSwiper.jsx'
import Info from '../../components/Info/Info.jsx'
import HomePagePros from '../../components/HomePagePros/HomePagePros.jsx'

function Home() {
  return(
    <>
      <HeadSwiper />
      <Info />
      <HomePagePros />
    </>
  )
}

export default Home;
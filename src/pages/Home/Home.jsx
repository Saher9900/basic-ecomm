import HeadSwiper from '../../components/HeadSwiper/HeadSwiper.jsx'
import CategoriesSwiper from '../../components/CategoriesSwiper/CategoriesSwiper.jsx'
import HomePagePros from '../../components/HomePagePros/HomePagePros.jsx'
import Info from '../../components/Info/Info.jsx'

function Home() {
  return (
    <>
      <HeadSwiper />
      <Info />
      <CategoriesSwiper />
      <HomePagePros />
    </>
  )
}

export default Home;
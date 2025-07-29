import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import ScreenContainer from './ScreenContainer'

const MainLayout = () => {
  return (
    <ScreenContainer>
        <Header />
        <Outlet />
        <Footer />
    </ScreenContainer>
  )
}

export default MainLayout
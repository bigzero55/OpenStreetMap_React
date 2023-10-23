import MapNavigation from "./components/MapNavigation"
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import './App.css';
import MapNavigationRoutes from "./components/MapNavigationRoutes";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MapNavigation/>}/>
        <Route path="/navigasi" element={<MapNavigationRoutes/>}/>
      </Routes>
    </>
  )
}

export default App

import MapNavigation from "./components/MapNavigation"
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MapNavigation/>}/>
        <Route path="/Trazado"/>
      </Routes>
    </>
  )
}

export default App


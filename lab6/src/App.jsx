import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home.jsx'
import Spinner from './components/UI/Spinner.jsx'
import About from './components/About/About.jsx'
import Login from './components/Login/Login.jsx'
// import CharactersList from './components/CharactersList/CharactersList.jsx'
const CharactersList = lazy(() => import('./components/CharactersList/CharactersList.jsx'))
const CharacterDetails = lazy(() => import('./components/CharacterDetails/CharacterDetails.jsx'))


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/characters/" element={<CharactersList />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters/:id" element={<CharacterDetails />}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )

}


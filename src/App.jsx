import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Whats from './components/whats/Whats'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useSpring, animated } from '@react-spring/web'

function App() {
const fade = useSpring({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  delay: 200,
})

  return (
    <BrowserRouter>
      <Navbar />
      <Whats/>
      <Routes>
        <Route
          path="/"
          element={
            <animated.div style={fade}>
              <Home />
            </animated.div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Sectors from './pages/Sectors'
import Projects from './pages/Projects'
import Sustainability from './pages/Sustainability'
import Careers from './pages/Careers'
import News from './pages/News'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="careers" element={<Careers />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

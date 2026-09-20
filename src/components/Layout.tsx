import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function hideBrokenImage(event: Event) {
  const target = event.target
  if (!(target instanceof HTMLImageElement)) return
  target.closest('.hero, .project-card, .sector-visual, figure, .media, .news-list article, .people-grid li, .role-list article')?.classList.add('no-img')
  target.remove()
}

export default function Layout() {
  useEffect(() => {
    document.addEventListener('error', hideBrokenImage, true)
    return () => document.removeEventListener('error', hideBrokenImage, true)
  }, [])

  return (
    <div className="layout">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main className="main" id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

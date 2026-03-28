import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { carouselSlides } from '../data/storeData'

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % carouselSlides.length)
    }, 3600)
    return () => window.clearInterval(timer)
  }, [])

  const slide = carouselSlides[index]

  return (
    <section className="hero-carousel glass-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero-carousel-inner"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.35 }}
        >
          <div className="featured-copy">
            <span className="hero-chip">Featured spotlight</span>
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
            <div className="hero-actions">
              <Link className="primary-button" to={slide.cta}>Open section</Link>
              <button className="secondary-button">Watch preview</button>
            </div>
          </div>
          <div className="featured-art">
            <img src={slide.image} alt={slide.title} />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="carousel-dots">
        {carouselSlides.map((item, dotIndex) => (
          <button key={item.id} className={`carousel-dot ${dotIndex === index ? 'active' : ''}`} onClick={() => setIndex(dotIndex)} />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel

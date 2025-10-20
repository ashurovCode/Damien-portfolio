import { useState, useEffect } from 'react'
import LeftArrow from '../assets/arrowleft.png'
import RightArrow from '../assets/arrowright.png'
import ArrowLink from '../assets/arrow.png'
import PortfolioImg1 from '../assets/Image1.png'
import PortfolioImg2 from '../assets/Image2.png'
import PortfolioImg3 from '../assets/Image3.png'
import PortfolioImg4 from '../assets/Image4.png'
import PortfolioImg5 from '../assets/Image5.png'
import PortfolioImg6 from '../assets/Image6.png'

const portfolioData = [
  {
    image: PortfolioImg1,
    title: 'Faces of Resilience',
    date: 'March 2022',
  },
  {
    image: PortfolioImg2,
    title: 'Urban Horizons',
    date: 'April 2022',
  },
  {
    image: PortfolioImg3,
    title: 'Nature’s Whisper',
    date: 'May 2022',
  },
  {
    image: PortfolioImg4,
    title: 'Faces of Resilience',
    date: 'March 2022',
  },
  {
    image: PortfolioImg5,
    title: 'Faces of Resilience',
    date: 'March 2022',
  },
  {
    image: PortfolioImg6,
    title: 'Faces of Resilience',
    date: 'March 2022',
  },
]

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardsPerSlide = isMobile ? 1 : 3
  const totalSlides = Math.ceil(portfolioData.length / cardsPerSlide)

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const minSwipeDistance = 50 // Minimum distance for a swipe

    if (distance > minSwipeDistance) {
      // Swiped left - go to next slide
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      // Swiped right - go to previous slide
      prevSlide()
    }

    // Reset values
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="w-[1596px] max-w-full m-auto px-4 md:px-0 py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-16 gap-4">
        <div>
          <p className="text-[#797C86] text-[20px] font-semibold uppercase">
            Portfolio
          </p>
          <h2 className="text-white text-[36px] md:text-[58px] font-semibold uppercase">
            My Work Showcase
          </h2>
        </div>

        {/* Desktop arrows */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <img src={LeftArrow} alt="Left Arrow" />
            </button>
            <button
              onClick={nextSlide}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
          <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition cursor-pointer">
            View All Works
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out touch-pan-y"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div
              key={slideIdx}
              className="flex-shrink-0 flex gap-6 w-full md:gap-6"
            >
              {portfolioData
                .slice(
                  slideIdx * cardsPerSlide,
                  slideIdx * cardsPerSlide + cardsPerSlide
                )
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col overflow-hidden w-full"
                    style={{
                      minWidth: isMobile ? '100%' : 'calc(33.333% - 16px)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[500px] object-cover rounded-[20px] "
                    />
                    <div className="p-4 flex items-center justify-between gap-2">
                      <div>
                        <h3 className="text-[#CACACE] text-[20px] font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-[#797C86] text-[18px]">
                          {item.date}
                        </p>
                      </div>
                      <p className="underline flex items-center text-[#797C86] text-[16px] font-medium cursor-pointer hover:text-white gap-2.5">
                        View Project{' '}
                        <img src={ArrowLink} alt="" width={'16px'} />
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button
            onClick={prevSlide}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src={LeftArrow} alt="Prev" />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <img src={RightArrow} alt="Next" />
          </button>
        </div>
        {/* Mobile View All Works button */}
        <div className="flex md:hidden justify-center mt-6">
          <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition cursor-pointer">
            View All Works
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

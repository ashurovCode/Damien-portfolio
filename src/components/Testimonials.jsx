import { useState, useEffect } from 'react'
import LeftArrow from '../assets/arrowleft.png'
import RightArrow from '../assets/arrowright.png'
import RatingStar from '../assets/ratingstar.png'
import FacebookIco from '../assets/facebook.png'
import TwitterIco from '../assets/twiter.png'
import LinkedinIcon from '../assets/linkedin.png'

const testimonialData = [
  {
    name: 'Emily Johnson',
    location: 'USA, California',
    rating: 5,
    review:
      'Working with Damien was an absolute pleasure! His attention to detail and ability to capture the perfect moments made our wedding day even more special. The photos are stunning and we will cherish them forever.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Michael Chen',
    location: 'USA, New York',
    rating: 5,
    review:
      'Damien\'s professionalism and creativity are unmatched. He made our corporate event photography seamless and delivered exceptional results. Highly recommend his services for any professional photography needs.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sarah Williams',
    location: 'USA, Texas',
    rating: 5,
    review:
      'The portrait session with Damien exceeded all expectations. He made me feel comfortable and confident, and the final photos are absolutely beautiful. His artistic vision is truly remarkable.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'David Martinez',
    location: 'USA, Florida',
    rating: 5,
    review:
      'Incredible experience! Damien captured our family moments perfectly. His patience with our kids and eye for natural shots made the whole session enjoyable. We couldn\'t be happier with the results.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'David ',
    location: 'USA, Florida',
    rating: 4,
    review:
      'Incredible experience! Damien captured our family moments perfectly. His patience with our kids and eye for natural shots made the whole session enjoyable. We couldn\'t be happier with the results.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Martinez',
    location: 'USA, Florida',
    rating: 5,
    review:
      'Incredible experience! Damien captured our family moments perfectly. His patience with our kids and eye for natural shots made the whole session enjoyable. We couldn\'t be happier with the results.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Michael Chen',
    location: 'USA, New York',
    rating: 5,
    review:
      'Damien\'s professionalism and creativity are unmatched. He made our corporate event photography seamless and delivered exceptional results. Highly recommend his services for any professional photography needs.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sarah Williams',
    location: 'USA, Texas',
    rating: 5,
    review:
      'The portrait session with Damien exceeded all expectations. He made me feel comfortable and confident, and the final photos are absolutely beautiful. His artistic vision is truly remarkable.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
]

const Testimonials = () => {
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
  const totalSlides = Math.ceil(testimonialData.length / cardsPerSlide)

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
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="w-[1596px] max-w-full m-auto px-4 md:px-0 py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-16 gap-4">
        <div>
          <p className="text-[#797C86] text-[20px] font-semibold uppercase">
            Testimonials
          </p>
          <h2 className="text-white text-[36px] md:text-[58px] font-semibold uppercase">
            What My Clients Say
          </h2>
        </div>

        {/* Total Reviews */}
        <div className="flex flex-col items-start md:items-end">
          <p className="text-[#797C86] text-[16px] md:text-[18px] font-medium">
            Total Reviews
          </p>
          <h3 className="text-white text-[40px] md:text-[58px] font-semibold">
            323
          </h3>
        </div>
      </div>

      {/* Desktop arrows & button */}
      <div className="hidden md:flex items-center justify-between mb-10">
        <div className="flex gap-2">
          <button onClick={prevSlide} className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src={LeftArrow} alt="Left Arrow" />
          </button>
          <button onClick={nextSlide} className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src={RightArrow} alt="Right Arrow" />
          </button>
        </div>
        <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition cursor-pointer">
          View All Testimonials
        </button>
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
              className="flex-shrink-0 flex gap-6 w-full"
            >
              {testimonialData
                .slice(
                  slideIdx * cardsPerSlide,
                  slideIdx * cardsPerSlide + cardsPerSlide
                )
                .map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col border border-[#1C1C21] rounded-[20px] p-6 md:p-8 w-full"
                    style={{ minWidth: isMobile ? '100%' : 'calc(33.333% - 16px)' }}
                  >
                    {/* Header with name, location, and social icons */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-[#E4E4E6] text-[20px] md:text-[24px] font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#797C86] text-[16px] md:text-[18px] mt-1">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a href={testimonial.socialMedia.facebook}>
                          <img
                            src={FacebookIco}
                            alt="Facebook"
                            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                          />
                        </a>
                        <a href={testimonial.socialMedia.twitter}>
                          <img
                            src={TwitterIco}
                            alt="Twitter"
                            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                          />
                        </a>
                        <a href={testimonial.socialMedia.linkedin}>
                          <img
                            src={LinkedinIcon}
                            alt="LinkedIn"
                            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
                          />
                        </a>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <img
                          key={i}
                          src={RatingStar}
                          alt="Star"
                          className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-[#AFB0B6] text-[16px] md:text-[18px] leading-relaxed">
                      {testimonial.review}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button onClick={prevSlide} className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src={LeftArrow} alt="Prev" />
          </button>
          <button onClick={nextSlide} className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src={RightArrow} alt="Next" />
          </button>
        </div>

        {/* Mobile View All button */}
        <div className="flex md:hidden justify-center mt-6">
          <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition cursor-pointer">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

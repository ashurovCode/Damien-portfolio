import { useState } from 'react'
import ArrowLink from '../assets/arrow.png'
import LeftArrow from '../assets/arrowleft.png'
import RightArrow from '../assets/arrowright.png'
import EventsImg from '../assets/eventsimg.png'
import StarIcon from '../assets/starticon.png'

const serviceData = [
  {
    title: 'Events',
    description:
      "Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.",
    highlights: [
      'Coverage for weddings, parties, corporate functions, and more.',
      'Professional lighting setup and candid shots.',
      'High-resolution photos with fast delivery.',
      'Customizable packages for every event type.',
    ],
    image: EventsImg,
  },
  {
    title: 'Wedding',
    description:
      'Capture your special day with timeless photography that preserves every cherished memory. We focus on candid and posed shots to tell your love story beautifully.',
    highlights: [
      'Full-day wedding coverage.',
      'Pre-wedding and engagement sessions.',
      'Customizable albums.',
      'Professional editing and retouching.',
    ],
    image: EventsImg,
  },
  {
    title: 'Portrait',
    description:
      'Our portrait sessions are designed to showcase your personality and style. Perfect for personal, family, or professional portraits.',
    highlights: [
      'Studio and outdoor sessions.',
      'Professional lighting setup.',
      'High-resolution images.',
      'Customized retouching.',
    ],
    image: EventsImg,
  },
]

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const prevService = () => {
    setActiveIndex((prev) => (prev === 0 ? serviceData.length - 1 : prev - 1))
  }

  const nextService = () => {
    setActiveIndex((prev) => (prev === serviceData.length - 1 ? 0 : prev + 1))
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
      nextService()
    } else if (distance < -minSwipeDistance) {
      prevService()
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
            Services
          </p>
          <h2 className="text-white text-[36px] md:text-[58px] font-semibold uppercase">
            My Photography Services
          </h2>
        </div>

        {/* Desktop arrows & button */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="flex gap-2">
            <button onClick={prevService}>
              <img src={LeftArrow} alt="Left Arrow" />
            </button>
            <button onClick={nextService}>
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
          <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition">
            View All Services
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out touch-pan-y"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex flex-col lg:flex-row gap-8 w-full"
            >
              {/* Image first on mobile */}
              <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-w-full h-auto rounded-[10px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-6 w-full lg:w-[773px]">
                <div className="flex items-center gap-[10px]">
                  <h1 className="text-[#797C86] text-[32px] md:text-[44px] font-semibold uppercase">
                    {service.title}
                  </h1>
                  <button className="bg-[#4A2CED] px-[30px] md:px-[50px] py-[10px] md:py-[16px] rounded-[100px]">
                    <img
                      src={ArrowLink}
                      alt=""
                      className="w-[20px] h-[20px] md:w-auto md:h-auto"
                    />
                  </button>
                </div>
                <p>{service.description}</p>
                <p>Service Highlights</p>
                <div className="flex flex-col gap-2.5">
                  {service.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="flex text-[#AFB0B6] text-[18px] items-center gap-2.5 p-6 border border-[#1C1C21] rounded-[12px]"
                    >
                      <img src={StarIcon} alt="" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrows (fixed outside slider) */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button onClick={prevService}>
            <img src={LeftArrow} alt="Prev" />
          </button>
          <button onClick={nextService}>
            <img src={RightArrow} alt="Next" />
          </button>
        </div>
      </div>

      {/* Mobile button (below arrows) */}
      <div className="flex md:hidden justify-center mt-6">
        <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition">
          View All Services
        </button>
      </div>
    </section>
  )
}

export default Services

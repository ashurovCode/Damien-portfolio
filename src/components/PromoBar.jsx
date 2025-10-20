import StarIcon from '../assets/star.png'

const PromoBar = () => {
  const items = [
    'Event Photography',
    'Commercial Photography',
    'Product Photography',
    'Wedding Photography',
    'Landscape Photography',
    'Branding Photography',
    'Portrait Photography',
  ]

  return (
    <div className="overflow-hidden w-full border-y border-[#1C1C21] py-4 bg-[#0E0E10]">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-10 items-center">
            {items.map((text, index) => (
              <div
                key={index}
                className="flex gap-2.5 items-center text-[#D6D0FB] text-[18px]"
              >
                <img src={StarIcon} alt="star" className="w-8 h-8" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromoBar

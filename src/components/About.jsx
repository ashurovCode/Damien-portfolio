import AboutImg from '../assets/about.png'
import StarIcon from '../assets/star.png'
import FacebookIco from '../assets/facebook.png'
import TwitterIco from '../assets/twiter.png'
import LinkedinIcon from '../assets/linkedin.png'

const About = () => {
  return (
    <section className="w-full max-w-[1596px] m-auto px-4 md:px-0 py-20 md:py-28">
      <div>
        <div className="flex items-center md:items-center justify-between pb-[80px] md:pb-[60px] gap-6 md:gap-0">
          <div className="flex flex-col ">
            <p className="text-[#797C86] text-[20px] font-semibold uppercase">
              About
            </p>
            <h2 className="text-white text-[38px] md:text-[48px] lg:text-[58px] font-semibold">
              I am Damien
            </h2>
          </div>
          <button className="bg-[#1C1C21] text-white text-[18px] font-medium py-[14px] md:py-[16px] lg:py-[24px] px-[10px] md:px-[16px] rounded-[10px] cursor-pointer hover:bg-[#45454D]">
            Know More
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="w-full lg:w-auto">
            <img
              src={AboutImg}
              alt="me"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col border-[1px] border-[#1C1C21] rounded-[40px] px-6 md:px-10 py-6 md:py-10 w-full lg:w-[783px] gap-5">
            <div className="flex items-center gap-2.5">
              <img src={StarIcon} alt="" />
              <p className="text-[#CACACE] text-[20px] font-medium">
                Introduction
              </p>
            </div>
            <p className="text-[#AFB0B6] text-[18px]">
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world's beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
            <div className="flex flex-col pt-[20px] md:pt-[40px] gap-6">
              <div className="flex items-center gap-2.5 mb-[10px] md:mb-[20px]">
                <img src={StarIcon} alt="" />
                <p className="text-[#CACACE] text-[20px] font-medium">
                  Contact Information
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 pb-[10px] md:pb-[20px]">
                <p className="text-[#E4E4E6] text-[18px]">
                  Email <br />{' '}
                  <span className="text-[#AFB0B6] text-[20px] pt-[10px]">
                    damienbraun@gmail.com
                  </span>
                </p>
                <p className="text-[#E4E4E6] text-[18px]">
                  Phone Number <br />
                  <span className="text-[#AFB0B6] text-[20px] pt-[10px]">
                    +00 000000000
                  </span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-10">
                <div className="flex gap-4 bg-[#070708] border border-[#1C1C21] px-[10px] py-[10px] rounded-[10px]">
                  <img src={FacebookIco} alt="" />
                  <img src={TwitterIco} alt="" />
                  <img src={LinkedinIcon} alt="" />
                </div>
                <div className="flex flex-wrap gap-4 md:gap-[20px]">
                  <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition cursor-pointer">
                    Let’s Work
                  </button>
                  <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] border border-[#2F2F37] hover:bg-[#353538] transition cursor-pointer">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import StarIcon from '../assets/star.png'
import PromoBar from './PromoBar'
import ArrowLink from '../assets/arrow.png'
import FacebookIco from '../assets/facebook.png'
import TwitterIco from '../assets/twiter.png'
import LinkedinIcon from '../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-28">
      <div className="">
        <div className="flex justify-end pb-10 md:pb-20 w-full">
          <h1 className="text-[#232329] text-[80px] md:text-[220px] uppercase text-right pr-5 md:pr-40">
            Damien
          </h1>
        </div>
        <PromoBar />
      </div>
      <div className="w-full md:w-[1597px] flex flex-col md:flex-row m-auto justify-between border border-[#1C1C21] px-5 md:px-[80px] py-10 md:py-[100px]">
        <div>
          <h3 className="text-[#797C86] text-[16px] md:text-[20px] font-semibold">
            A more meaningful home for photography
          </h3>
          <div className="flex items-center mt-4 md:mt-6 gap-[10px]">
            <h1 className="text-white text-[32px] md:text-[58px] font-semibold">
              Let's
            </h1>
            <button className="bg-[#4A2CED] px-[30px] md:px-[50px] py-[10px] md:py-[16px] rounded-[100px]">
              <img
                src={ArrowLink}
                alt=""
                className="w-[20px] h-[20px] md:w-auto md:h-auto"
              />
            </button>
          </div>
          <h1 className="text-white text-[32px] md:text-[58px] font-semibold">
            Work Together
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-[110px] mt-10 md:mt-0">
          <ul className="text-[#F2F2F3] text-[16px] md:text-[18px] font-medium flex flex-col gap-3 uppercase">
            <li className="text-[#797C86] pb-[8px]">Home</li>
            <li>About Me</li>
            <li>My Works</li>
            <li>Testimonials</li>
          </ul>
          <ul className="text-[#F2F2F3] text-[16px] md:text-[18px] font-medium flex flex-col gap-3 uppercase">
            <li className="text-[#797C86] pb-[8px]">Clients</li>
            <li>Klovesto</li>
            <li>Nukeway</li>
            <li>Cloven’s</li>
            <li>MenVol</li>
          </ul>
          <ul className="text-[#F2F2F3] text-[16px] md:text-[18px] font-medium flex flex-col gap-3 uppercase">
            <li className="text-[#797C86] pb-[8px]">Portfolio</li>
            <li>Events</li>
            <li>Portrait</li>
            <li>Branding</li>
            <li>Commerciale</li>
            <li>Wedding</li>
          </ul>
          <ul className="text-[#F2F2F3] text-[16px] md:text-[18px] font-medium flex flex-col gap-3 uppercase">
            <li className="text-[#797C86] pb-[8px]">Services</li>
            <li>Portraits</li>
            <li>Events</li>
            <li>Commercial </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-[1597px] m-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 py-[20px] px-5 md:px-0">
        <ul className="text-[#797C86] text-[14px] md:text-[16px] font-medium flex flex-col md:flex-row gap-3 md:gap-6 underline">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="flex gap-2.5">
          <img
            src={FacebookIco}
            alt="Facebook"
            className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
          />
          <img
            src={TwitterIco}
            alt="Twitter"
            className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
          />
          <img
            src={LinkedinIcon}
            alt="LInkedIn"
            className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
          />
        </div>
        <p className="text-[#797C86] text-[14px] md:text-[16px] font-medium flex gap-6 ">
          © 2025 Damien Braun Photography. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

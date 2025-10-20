import ArrowLink from '../assets/arrow.png'
import ABstract from '../assets/AbstractDesign.png'
import PromoBar from './PromoBar'
import HerroImg from '../assets/heroimage.png'

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden pt-20 md:pt-28 pb-10 md:pb-14">
      <div className="w-[1596px] max-w-full m-auto flex flex-col lg:flex-row lg:items-center justify-between px-6 lg:px-0 text-left">
        <div className="flex flex-col">
          <h3 className="text-[#62646C] text-[18px] md:text-[22px] font-medium uppercase">
            Stunning Photography by
          </h3>
          <h1 className="text-[#E4E4E6] text-[48px] md:text-[80px] font-semibold uppercase leading-tight">
            Damien Braun
          </h1>
        </div>

        <img
          src={ABstract}
          alt=""
          className="hidden md:block w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[346px] lg:h-[346px] my-10 lg:my-0 lg:mr-[141px]"
        />

        <div className="flex flex-col items-start md:items-start mt-10 lg:mt-0 mb-[20px] lg:mb-0">
          <div className="flex items-center gap-[10px]">
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
      </div>
      <PromoBar />
      <div className="w-[1596px] max-w-full m-auto px-4 md:px-0">
        <img
          src={HerroImg}
          alt=""
          className="w-full h-auto object-cover rounded-[10px]"
        />
      </div>
    </div>
  )
}

export default Hero

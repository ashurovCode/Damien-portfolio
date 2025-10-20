import { useState } from 'react'
import PlusIcon from '../assets/star.png' // We'll use star icon as placeholder, you can replace with plus icon

const faqData = [
  {
    question: 'What type of photography do you specialize in?',
    answer:
      'I specialize in a wide range of photography services including events, portraits, weddings, commercial photography, and branding. Each project is tailored to capture the unique essence and story of my clients.',
  },
  {
    question: 'How can I book a photography session with you?',
    answer:
      'You can book a session by contacting me through the contact form on this website, sending an email to damienbraun@gmail.com, or calling me directly. I will get back to you within 24 hours to discuss your requirements and schedule.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'My pricing varies depending on the type of photography service, duration, and specific requirements. I offer customizable packages to fit different budgets. Please contact me for a detailed quote tailored to your needs.',
  },
  {
    question: 'Do you travel for photography sessions?',
    answer:
      'Yes, I am available for travel both nationally and internationally. Travel fees may apply depending on the location. I love exploring new places and capturing unique moments wherever they happen.',
  },
  {
    question: 'How long does it take to receive the final photos?',
    answer:
      'The turnaround time typically ranges from 2-4 weeks depending on the scope of the project. For urgent requests, expedited delivery options are available. You will receive high-resolution edited photos in a secure online gallery.',
  },
  {
    question: 'Can I request specific editing styles?',
    answer:
      'Absolutely! I work closely with my clients to understand their vision and preferences. Whether you prefer natural, moody, vibrant, or any other editing style, I will ensure the final photos match your expectations.',
  },
   {
    question: 'Can I request specific editing styles?',
    answer:
      'Absolutely! I work closely with my clients to understand their vision and preferences. Whether you prefer natural, moody, vibrant, or any other editing style, I will ensure the final photos match your expectations.',
  },
   {
    question: 'Can I request specific editing styles?',
    answer:
      'Absolutely! I work closely with my clients to understand their vision and preferences. Whether you prefer natural, moody, vibrant, or any other editing style, I will ensure the final photos match your expectations.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-[1596px] max-w-full m-auto px-4 md:px-0 py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col items-start mb-10 md:mb-16">
        <p className="text-[#797C86] text-[20px] font-semibold uppercase">
          FAQ's
        </p>
        <h2 className="text-white text-[36px] md:text-[58px] font-semibold uppercase">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-[#1C1C21] rounded-[12px] overflow-hidden transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-6 md:px-8 py-6 md:py-8 text-left hover:bg-[#0F0F10] transition-colors"
            >
              <h3 className="text-[#AFB0B6] text-[16px] md:text-[20px] font-semibold pr-4">
                {faq.question}
              </h3>
              <span
                className={`text-[#797C86] text-[18px] md:text-[32px] font-light transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                <p className="text-[#AFB0B6] text-[16px] md:text-[18px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

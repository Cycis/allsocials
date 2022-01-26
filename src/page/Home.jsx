import { FaBars, FaTimes, FaStar } from 'react-icons/fa'
import { useState } from 'react'
import hero from '../assets/images/hero.jpg'
import sellone from '../assets/images/sell1.jpg'
import selltwo from '../assets/images/sell2.jpg'
import ceo1 from '../assets/images/ceo1.jpg'
import ceo2 from '../assets/images/ceo2.jpg'

const Home = () => {
   const [show, setShow] = useState(false);

   return (
      <>
         {/* Header */}
         <header className='w-full h-auto'>
            <nav className='md:flex md:justify-between md:items-center md:h-8 text-xl p-8 md:px-10 md:py-[50px] max-w-6xl mx-auto z-20'>
               <div className='text-2xl text-gray-500 tracking-wide'>
                  <span className='text-pink-300'>all</span>Socials
               </div>

               {/* hamburger */}
               <div className='absolute top-8 right-8 md:hidden' onClick={() => { setShow(!show) }}>
                  {
                     show ? <FaBars size={25} /> : <FaTimes size={25} />
                  }
               </div>
               <ul className={`w-full md:w-auto font-normal text-base bg-whitesmoke uppercase items-center md:flex text-gray-400 md:bg-white absolute md:relative ${show ? "top-[-100%]" : " top-[70px] drop-shadow"} md:top-2 md:right-1 left-1 pl-8 py-6 md:space-x-[40px] transition-all duration-500`}>
                  <li className='md:mb-0 mb-6 cursor-pointer hover:text-pink-400'>Home</li>
                  <li className='md:mb-0 mb-6 cursor-pointer hover:text-pink-400'>How it's work</li>
                  <li className='md:mb-0 mb-6 cursor-pointer hover:text-pink-400'>Contact Us</li>
                  <li className='md:mb-0 mb-6 cursor-pointer text-pink-400'>Login</li>
                  <li className='md:mb-0 mb-6 cursor-pointer hover:text-pink-400'>
                     <button className='block py-4 px-10 font-normal border-2 border-dashed border-pink-500 font-rubik rounded hover:bg-pink-300 hover:text-white uppercase duration-300 transition-all'>
                        get started
                     </button>
                  </li>
               </ul>
            </nav>

            {/* Hero */}
            <div className='px-8 pt-10 pb-10 mt-8 bg-whitesmoke md:flex md:justify-between md:items-center max-w-6xl mx-auto'>
               <div className='w-full mr-12'>
                  <h2 className='text-xl leading-5 text-gray-300 font-rubik mb-6 md:text-xl'>Buy & Sell</h2>
                  <h1 className='text-3xl w-auto md:text-5xl md:tracking-wider font-rubik text-left mb-8 md:mb-20 text-lightgray-400 font-semibold tracking-wide leading-8'>Social Media Accounts Instantly</h1>
                  <p className='text-base md:text-xl text-left font-normal text-gray-300 tracking-wider leading-8 mr-3'>Welcome to largest social media account exchange on the planet. Want to take a break permanently on social media or kickstart your influencer career, we've got you covered.
                  </p>
                  <div className='mt-10 md:mt-[3rem]  flex space-x-6'>
                     <button className='block w-[200px] text-base py-6 px-10 font-normal text-white border-pink-500 font-rubik rounded bg-pink-300 hover:bg-pink-500 uppercase duration-300 transition-all cursor-pointer'>
                        get started
                     </button>
                     <button className='block text-base w-[200px] py-2 px-10 font-normal border-brown-500 font-rubik rounded bg-brown text-white uppercase duration-300 transition-all'>
                        log in
                     </button>
                  </div>
               </div>
               <div className='w-full hidden md:block'>
                  <img src={hero} alt="" />
               </div>
            </div>
         </header>

         {/* main content */}
         <main className='p-8 m-10 mx-auto mt-[6rem] max-w-6xl space-y-[6rem]'>
            <div className="flex items-center flex-col md:flex-row md:space-x-10 lg:space-x-0 md:flex md:items-start py-10">
               <h1 className='text-center md:hidden text-2xl md:text-3xl lg:text-4xl font-rubik font-semibold tracking-wide mb-10 text-black-300'>Sell Accounts And Get Paid Instantly
               </h1>
               <div className='flex-1 relative mt-10'>
                  <img src={sellone} alt="" className='z-0 h-[250px] w-[265px] md:h-[412px] md:w-[426px]' />
                  <div className='absolute h-[200px] w-[150px] md:h-[315px] md:w-[315px] border-[15px] border-pink-500 bg-transparent -z-[5] -left-10 -top-10'>
                  </div>
               </div>
               <div className='block  text-center md:text-left md:flex-1 mt-10 md:mt-0'>
                  <h1 className='hidden md:block text-2xl md:text-3xl lg:text-4xl font-rubik font-semibold tracking-wide mb-10 text-black-300'>Sell Accounts And Get Paid Instantly</h1>
                  <p className='text-base md:text-base text-gray-400 tracking-wide mb-[3rem]'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className='w-[200px] text-base md:text-xl py-6 px-10 font-normal text-white border-pink-500 font-rubik rounded-md bg-pink-300 hover:bg-pink-500 uppercase duration-300 transition-all cursor-pointer'>
                     get started
                  </button>
               </div>
            </div>
            <div className="flex items-center flex-col md:flex-row md:space-x-10 bg-whitesmoke p-y-[10rem] lg:space-x-0 md:flex md:items-start py-10">
               <h1 className='text-center text-lightgray-400 md:hidden text-2xl md:text-3xl lg:text-4xl font-rubik font-semibold tracking-wide mb-10 text-black-300'>A Safe Way To Buy Accounts On Social Media
               </h1>
               <div className='flex-1 relative z-[20] mt-10'>
                  <img src={selltwo} alt="" className='z-[100] h-[250px] w-[265px] md:h-[412px] md:w-[426px]' />
                  <div className='absolute h-[200px] w-[150px] md:h-[315px] md:w-[315px] border-[15px] border-pink-500 bg-transparent -z-[5] -left-10 -top-10'>
                  </div>
               </div>
               <div className='block  text-center md:text-left md:flex-1 mt-10 md:mt-0'>
                  <h1 className='hidden md:block text-2xl md:text-3xl lg:text-4xl font-rubik font-semibold tracking-wide mb-10 text-black-300'>A Safe Way To Buy Accounts On Social Media</h1>
                  <p className='text-base text-gray-400 tracking-wide mb-[3rem]'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className='w-[200px] text-base md:text-xl py-6 px-10 font-normal text-white border-pink-500 font-rubik rounded-md bg-pink-300 hover:bg-pink-500 uppercase duration-300 transition-all cursor-pointer'>
                     get started
                  </button>
               </div>
            </div>
            <div className=" text-center relative md:flex-row p-10 max-w-6xl mx-auto">
               <h1 className='mb-10 text-3xl capitalize font-rubik text-lightgray-400 font-semibold tracking-wide'>how it works</h1>
               <div className='flex md:flex-1 relative mt-0 md:mt-[8rem] mx-auto'>
                  <img src={sellone} alt="" className='relative top-1 z-0 h-[250px] w-[265px] md:h-[400px] md:w-[1025px]' />
                  <div className='hidden absolute md:block md:h-[480px] md:w-[1000px] border-[15px] border-pink-500 bg-transparent -z-[5] -left-[60px] -top-[25px]'>
                  </div>
               </div>
            </div>
            <div className='text-center md:pt-[6rem] p-10'>
               <h1 className='text-2xl md:text-4xl font-rubik text-lightgray-400 mb-[2.5rem] font-bold tracking-wide text-center'>What Our Customers Say</h1>
               <div className='md:flex md:justify-between md:space-x-[4rem]'>
                  <div className='flex flex-col items-center shadow-2xl w-full md:w-[550px] md:h-[473px] mb-[4rem] md:mb-0 rounded mb-6 md:mb-0 p-10 md:py-[4rem] md:px-[2rem] space-y-6'>
                     <p className='text-sm md:text-base tracking-wide mb-6 md:mb-10 text-gray-300'>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.
                     </p>
                     {/* rate Icons */}
                     <span className='flex tracking-wide space-x-6 mb-4 md:mb-12'>
                        <FaStar color='gold' size={20} className='mb-10' />
                        <FaStar color='gold' size={20} className='mb-10' />
                        <FaStar color='gold' size={20} className='mb-10' />
                        <FaStar color='gold' size={20} className='mb-10' />
                     </span>
                     <img src={ceo1} alt="" className='md:h-[100px] my-4' />
                     <h1 className='text-blue-300 text-base md:text-[18px] font-semibold mb-4 md:mb-10 md:mt-10'>Amanda Jackson</h1>
                     <h2 className='text-sm text-blue-100'>CEO, NRD Group</h2>
                  </div>
                  <div className='flex flex-col items-center shadow-2xl w-full md:w-[550px] md:h-[473px] mb-[4rem] md:mb-0 rounded mb-6 md:mb-0 p-10 md:py-[4rem] md:px-[2rem] space-y-6'>
                     <p className='text-sm md:text-base tracking-wide mb-6 md:mb-10 text-gray-300'>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.
                     </p>
                     {/* rate Icons */}
                     <span className='flex tracking-wide space-x-6 mb-4 md:mb-8'>
                        <FaStar color='gold' size={20} className='mb-10' />
                        <FaStar color='gold' size={20} className='mb-10' />
                        <FaStar color='gold' size={20} className='mb-10' />
                        <FaStar color='gold' size={20} className='mb-10' />
                     </span>
                     <img src={ceo2} alt="" className='md:h-[100px] my-4' />
                     <h1 className='text-blue-300 text-base md:text-[18px] font-semibold mb-4 md:mb-10 md:mt-10'>Amanda Jackson</h1>
                     <h2 className='text-sm text-blue-100'>CEO, NRD Group</h2>
                  </div>
               </div>
            </div>
         </main>

         {/* footer */}
         <footer className='w-full'>
            <div className='bg-pink-400 text-center text-white pt-[2.5rem] md:pt-[6rem] px-2 md:px-0'>
               <h1 className='font-rubik text-xl md:text-5xl mb-10'>Have An Enquiry?</h1>
               <p className='text-xs md:text-sm font-rubik'>Do you have a question you need answers to? contact us and our support team would respond shortly</p>
               <button className='uppercase text-sm py-6 my-10 md:my-[3rem] px-[3rem] font-semibold rounded-md bg-white text-pink-300 mt-10 border-pink-500 font-rubik rounded cursor-pointer'>contact us</button>
            </div>
            <div className='w-full bg-black-400 text-center text-xl font-rubik text-white mb-0 tracking-wide py-[1.8rem]'>allsocials</div>
            <div className='w-full text-center text-base capitalize py-6 text-gray-100 bg-gray-400'>copyright - 2020 | all socials</div>
         </footer>
      </>
   )
}

export default Home;

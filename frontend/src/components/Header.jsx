import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className='relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-lg px-6 md:px-16 lg:px-24 py-16 shadow-xl'>

            
            <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-lg z-10"></div>

            
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-2 m-auto md:py-[8vw] relative z-20'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md'>
                    Your <span className="text-teal-400">Health</span> Matters, <br className='hidden sm:block' />
                    <span className="text-teal-300">Book Anytime, Anywhere.</span>
                </p>

                <div className='flex flex-col md:flex-row items-center gap-6 text-lg font-medium'>
                    <img className='w-36 md:w-40 lg:w-48 rounded-full shadow-2xl border-4 border-teal-400' src={assets.group_profiles} alt="Trusted Doctors" />
                    <p className='text-center md:text-left opacity-90'>
                        Connect with top healthcare professionals and schedule appointments at your convenience. <br className='hidden sm:block' /> Your health, your schedule.
                    </p>
                </div>

              
                <div className="flex gap-6 mt-6">
                    <a href='#speciality' className='flex items-center gap-4 bg-teal-500 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:bg-teal-600 shadow-lg'>
                        Book Appointment <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
                    </a>
                    <button 
                        onClick={() => setShowVideo(!showVideo)} 
                        className='flex items-center gap-4 bg-transparent border-2 border-teal-500 text-teal-400 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:bg-teal-500 hover:text-white shadow-md'
                    >
                        {showVideo ? "Close Video" : "Watch Video"} 
                        <img className='w-4' src={assets.arrow_icon} alt="Arrow Icon" />
                    </button>
                </div>
            </div>

            <div className='md:w-1/2 relative mt-8 md:mt-0 flex justify-center items-center relative z-20'>
                {showVideo ? (
                    <iframe
                        className='w-full md:w-3/4 h-64 md:h-80 lg:h-96 rounded-lg shadow-2xl transition-all duration-500 opacity-100 scale-100'
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="Appointment Video"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <img className='w-full rounded-lg shadow-2xl border-4 border-white transition-all duration-500' src={assets.header_img} alt="Doctor Image" />
                )}
            </div>

        </div>
    );
}

export default Header;

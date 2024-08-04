import React from 'react';
import WorkImg from '../assets/projects/workImg.jpeg';
import RealEstateImg from '../assets/projects/realestate.jpg';


const Work = () => {
  return (
    <div name='work' className='w-full h-screen bg-[#142d53] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[75%] pt-[96px]'>
            <div className='text-center items-center'> 
                <p className='text-4xl font-semibold inline border-b-4 border-lime-400 text-gray-300'>Works</p>
                <p className='py-4'>Some of my works are here. Check these out</p>
            </div>

            {/* CONTAINER FOR ALL PROJECTS */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* GRID FOR PROJECT 1*/}
                <div style={{backgroundImage: `url(${WorkImg})`}} 
                    className='shadow-lg shadow-[#7f70ec] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-semibold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GRID FOR PROJECT 2*/}
                <div style={{backgroundImage: `url(${RealEstateImg})`}} className='shadow-lg shadow-[#7f70ec] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-semibold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GRID FOR PROJECT 3*/}
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#7f70ec] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-semibold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GRID FOR PROJECT 4*/}
                <div style={{backgroundImage: `url(${RealEstateImg})`}} className='shadow-lg shadow-[#7f70ec] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-semibold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GRID FOR PROJECT 5*/}
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#7f70ec] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-semibold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GRID FOR PROJECT 6*/}
                <div style={{backgroundImage: `url(${RealEstateImg})`}} className='shadow-lg shadow-[#7f70ec] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-semibold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    </div>
  );
};

export default Work;

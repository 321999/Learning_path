import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../Style/style.css';

const PopupPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className='mycontent'> 

    <div> 
    <div className="popup-container p-20 mx-auto px-6 sm:px-70 py-8">
      <div className="mb-2">
        <div className="relative inline-flex rounded-md border border-gray-300">
          <span className="inline-flex cursor-default items-center p-1 px-2 text-sm text-black">
            <span className="flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-300"></span>
            </span>
            <span className="ml-2 capitalize">{selectedOption || 'pending'}</span>
          </span>
          <button
            className="inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200"
            onClick={toggleOptions}
          >
            <span className="mr-0.5">Update Status</span>
            <IoMdArrowDropdown className="h-4 w-4" />
          </button>
        </div>
        <button type="button" id="close-topic" className="absolute right--2px top-20px inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900">
          <AiOutlineClose className="h-5 w-5" />
        </button>
      </div>
      {showOptions && (
        <div className="absolute right--20px top-20px mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md">
          <button
            className={`inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100 ${
              selectedOption === 'Done' ? 'bg-green-100' : ''
            }`}
            onClick={() => handleOptionClick('Done')}
          >
            <span>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
              Done
            </span>
          </button>
          <button
            className={`inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100 ${
              selectedOption === 'Pending' ? 'bg-yellow-100' : ''
            }`}
            onClick={() => handleOptionClick('Pending')}
          >
            <span>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
              Pending
            </span>
          </button>
          <button
            className={`inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100 ${
              selectedOption === 'Skip' ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleOptionClick('Skip')}
          >
            <span>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-500"></span>
              Skip
            </span>
          </button>
        </div>
      )}
    </div>

    <div className="cont">  
        <main id="main-content">
            <h1 className="text-2xl mb-0.5 font-bold sm:mb-2 sm:text-4xl">Internet</h1>
            <p className="text-sm text-black-500 sm:text-lg mb-4">
                The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.
            </p>
            <p className="text-sm text-black-500 sm:text-lg mb-4">Visit the following resources to learn more:</p>
            <ul className="list-disc list-inside">
                <li>
                    <a href="https://cs.fyi/guide/how-does-internet-work" target="_blank" rel="noopener noreferrer">
                        How does the Internet Work?
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" target="_blank" rel="noopener noreferrer">
                        How Does the Internet Work? MDN Docs
                    </a>
                </li>
                <li>
                    <a href="/guides/what-is-internet">Introduction to Internet</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=TNQsmPf24go" target="_blank" rel="noopener noreferrer">
                        How does the Internet work?
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=7_LPdttKXPc" target="_blank" rel="noopener noreferrer">
                        How the Internet Works in 5 Minutes
                    </a>
                </li>
            </ul>
        </main>
    </div>

    </div>
</div>
  );
};

export default PopupPage;

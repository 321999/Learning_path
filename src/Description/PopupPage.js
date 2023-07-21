import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../Style/style.css';

const PopupPage = ({ selectedTopic, onClose, open }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isTopicVisible, setIsTopicVisible] = useState(true);

  useEffect(() => {
    setIsTopicVisible(open); // Update the isTopicVisible state based on the open prop
    setSelectedOption(null); // Reset the selectedOption when the popup is closed
    setShowOptions(false); // Hide the options dropdown when the popup is closed
  }, [open]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleClose = () => {
    setIsTopicVisible(false);
    onClose(); // Call the onClose function passed from parent to inform it that the topic is closed
  };
  return isTopicVisible && selectedTopic ? (
    <div className="mycontent popup-container p-20 mx-auto px-6 sm:px-70 py-8">
      <div>
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
        <button
          type="button"
          id="close-topic"
          className="absolute right-2 top-2 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          onClick={handleClose}
        >
          <AiOutlineClose className="h-5 w-5" />
        </button>
      </div>
      {showOptions && (
        <div className="absolute right-20 top-20 mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md">
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

        <h1 className="text-2xl mb-0.5 font-bold sm:mb-2 sm:text-4xl" id="infoTitle">{selectedTopic.title}</h1>
        <p className="text-sm text-black-500 sm:text-lg mb-4" id="infoDescription">{selectedTopic.description}</p>
        <p className="text-sm text-black-500 sm:text-lg mb-4">{selectedTopic.subtitle}</p>
      
        {selectedTopic.links && (
          <ul className="list-disc list-inside">
            {selectedTopic.links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Link {index + 1}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ) : null;
};

export default PopupPage;

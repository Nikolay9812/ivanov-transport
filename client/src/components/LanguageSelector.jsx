import React, { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "bg", name: "Bulgarian" },
  { code: "de", name: "German" },
];

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
    // Here you can perform further actions related to language change
    console.log(`Selected language changed to: ${language.name}`);
  };

  // Close the dropdown if clicked outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Attach click event listener to handle click outside dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-white py-2 px-4 rounded inline-flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        <span>{selectedLanguage.name}</span>
      </button>
      <ul className={`absolute text-gray-700 pt-1 ${isDropdownOpen ? "block" : "hidden"}`}>
        {languages.map((language) => (
          <li key={language.code}>
            <button
              onClick={() => handleLanguageChange(language)}
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full text-left"
            >
              {language.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;

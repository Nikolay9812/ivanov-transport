import React, { useState } from "react";

function LanguageSelector() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <div className="relative">
        {/* Language dropdown button */}
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
        ></button>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute z-50 right-0 mt-2 py-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
            <ul role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                              >
                                  <img src="https://img.freepik.com/free-photo/flag-insignia-globe-iconic-art_1172-428.jpg?t=st=1716111587~exp=1716115187~hmac=6915c5c60f5f2a5dd06f0a63dd737f4572d343e1204b9cd6d2ba54a1cb0fbab2&w=740https://cdn-icons-png.flaticon.com/128/197/197374.png" alt="" />
                  English (US)
                </a>
              </li>
              {/* Add other language options */}
            </ul>
          </div>
        )}
      </div>
      {/* Other components */}
    </div>
  );
}

export default LanguageSelector;

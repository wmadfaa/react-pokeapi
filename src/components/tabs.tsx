import React from "react";
import classNames from "classnames";

export const Tabs: React.VFC = () => {
  return (
    <div className="bg-gray-800 border-b border-gray-600 pb-5 px-4 py-6 sm:pb-0 sm:px-6 w-full">
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="selected-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="selected-tab"
            name="selected-tab"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Applied</option>

            <option>Phone Screening</option>

            <option selected>Interview</option>

            <option>Offer</option>

            <option>Hired</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
            >
              Applied
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
            >
              Phone Screening
            </a>
            <a
              href="#"
              className={classNames(
                "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm",
                {
                  "border-indigo-500 text-indigo-400": true, //active
                  "border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700": false, //default
                }
              )}
              aria-current="page"
            >
              Interview
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
            >
              Offer
            </a>

            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
            >
              Hired
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

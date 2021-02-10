import React from "react";

export interface PokemonInformationProps {
  ability?: string;
}

export const PokemonInformation: React.VFC<PokemonInformationProps> = () => {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Pokemon Information
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              16
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Types</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="flex space-y-0 flex-row space-x-4">
                <li className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Badge
                </li>
                <li className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Badge
                </li>
                <li className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Badge
                </li>
                <li className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Badge
                </li>
              </ul>
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Stats</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Base stat
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Effort
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              hp
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              45
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              0
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Moves</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Accuracy
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Power
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              razor-wind
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              normal
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              100
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              80
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Abilities</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Leonard Krasner
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        @leonardkrasner
                      </p>
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                      More
                    </button>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="ml-2 flex-1 w-0 truncate">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Leonard Krasner
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        @leonardkrasner
                      </p>
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                      More
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Evolutions</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <nav aria-label="Progress">
                <ol className="overflow-hidden">
                  <li className="relative pb-10">
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <a href="#" className="relative flex items-start group">
                      <span className="h-9 flex items-center">
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                          <svg
                            className="w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide">
                          Create account
                        </span>
                        <span className="text-sm text-gray-500">
                          Vitae sed mi luctus laoreet.
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="relative pb-10">
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                      aria-hidden="true"
                    ></div>
                    <a
                      href="#"
                      className="relative flex items-start group"
                      aria-current="step"
                    >
                      <span
                        className="h-9 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                          <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full"></span>
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                          Profile information
                        </span>
                        <span className="text-sm text-gray-500">
                          Cursus semper viverra facilisis et et some more.
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="relative pb-10">
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                      aria-hidden="true"
                    ></div>
                    <a href="#" className="relative flex items-start group">
                      <span
                        className="h-9 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Business information
                        </span>
                        <span className="text-sm text-gray-500">
                          Penatibus eu quis ante.
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="relative pb-10">
                    <div
                      className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                      aria-hidden="true"
                    ></div>
                    <a href="#" className="relative flex items-start group">
                      <span
                        className="h-9 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Theme
                        </span>
                        <span className="text-sm text-gray-500">
                          Faucibus nec enim leo et.
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="relative">
                    <a href="#" className="relative flex items-start group">
                      <span
                        className="h-9 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                        </span>
                      </span>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Preview
                        </span>
                        <span className="text-sm text-gray-500">
                          Iusto et officia maiores porro ad non quas.
                        </span>
                      </span>
                    </a>
                  </li>
                </ol>
              </nav>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

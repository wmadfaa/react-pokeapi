import { PokemonMoveDetails } from "../../../types/pokeapi";
import React from "react";

export function PokemonMoves(props: {
  pokemonMoveDetails: PokemonMoveDetails[];
  renderItem: (move: PokemonMoveDetails) => JSX.Element;
}) {
  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">Moves</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 overlay-y-scroll max-h-64">
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
                </table>
                <div className="overflow-auto w-full max-h-96">
                  <table className="w-full">
                    <tbody className="bg-white divide-y divide-gray-200">
                      {props.pokemonMoveDetails.map(props.renderItem)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dd>
    </div>
  );
}
export { PokemonMove } from "./pokemon-move";

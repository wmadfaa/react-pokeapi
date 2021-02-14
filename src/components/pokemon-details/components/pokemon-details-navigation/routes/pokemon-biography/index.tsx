import React from "react";
import { PokemonEvolutions } from "./pokemon-evolutions";

const DescriptionList: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-800 sm:rounded-md">
      <div className="px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-700">{children}</dl>
      </div>
    </div>
  );
};

export interface DescriptionListItemProps {
  title: string;
}

const DescriptionListItem: React.FC<DescriptionListItemProps> = ({
  children,
  title,
}) => {
  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-400">{title}</dt>
      <dd className="mt-1 text-sm text-gray-100 sm:mt-0 sm:col-span-2">
        {children}
      </dd>
    </div>
  );
};

export interface PokemonBiographyProps {
  pokemonId: string;
}

export const PokemonBiography: React.VFC<PokemonBiographyProps> = (props) => {
  return (
    <DescriptionList>
      <DescriptionListItem title="Base Experience">178</DescriptionListItem>
      <DescriptionListItem title="Order">16</DescriptionListItem>
      <DescriptionListItem title="Height">11</DescriptionListItem>
      <DescriptionListItem title="Weight">320</DescriptionListItem>
      <DescriptionListItem title="Types">
        <div className="flex space-y-0 flex-row space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Badge
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Badge
          </span>
        </div>
      </DescriptionListItem>
      <DescriptionListItem title="Evolutions">
        <PokemonEvolutions id={props.pokemonId} />
      </DescriptionListItem>
    </DescriptionList>
  );
};

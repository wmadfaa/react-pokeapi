import React from "react";
import { usePokemonQuery } from "services/usePokemonQuery";
import {
  DescriptionList,
  DescriptionListItem,
} from "components/description-list";
import { Badge } from "components/badge";
import { PokemonEvolutions } from "./pokemon-evolutions";

export interface PokemonBiographyProps {
  pokemonId: string;
}

export const PokemonBiography: React.VFC<PokemonBiographyProps> = (props) => {
  const { data: pokemon } = usePokemonQuery(props.pokemonId);
  return (
    <DescriptionList>
      <DescriptionListItem title="Base Experience">
        {pokemon?.base_experience}
      </DescriptionListItem>
      <DescriptionListItem title="Order">{pokemon?.order}</DescriptionListItem>
      <DescriptionListItem title="Height">
        {pokemon?.height}
      </DescriptionListItem>
      <DescriptionListItem title="Weight">
        {pokemon?.weight}
      </DescriptionListItem>
      <DescriptionListItem title="Types">
        <div className="flex space-y-0 flex-row space-x-2">
          {pokemon?.types.map(({ type }) => (
            <Badge label={type.name} type={type.name} />
          ))}
        </div>
      </DescriptionListItem>
      <DescriptionListItem title="Evolutions">
        <PokemonEvolutions id={props.pokemonId} />
      </DescriptionListItem>
    </DescriptionList>
  );
};

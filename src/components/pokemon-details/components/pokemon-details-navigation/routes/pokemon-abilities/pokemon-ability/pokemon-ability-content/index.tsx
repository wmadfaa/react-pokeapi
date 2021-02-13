import React, { useEffect, useMemo } from "react";
import { usePokemonAbilityQuery } from "../../../../../hooks/usePokemonAbilityQuery";
import { find } from "lodash";

export interface PokemonAbilityContentProps {
  name: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonAbilityContent: React.VFC<PokemonAbilityContentProps> = (
  props
) => {
  const { data, isLoading } = usePokemonAbilityQuery(props.name);

  useEffect(() => {
    if (data && !isLoading) props.setIsLoading(false);
    else props.setIsLoading(true);
  }, [isLoading, data, props]);

  const en_effect = useMemo(() => {
    if (data && data.effect_entries.length) {
      return find(data.effect_entries, { language: { name: "en" } });
    }
  }, [data]);

  if (!data) return null;

  return (
    <li className="pokemon-ability">
      <div className="pokemon-ability-header">
        <div className="pokemon-ability-header-title-container">
          <div className="pokemon-ability-header-title-content">
            <p className="pokemon-ability-name">{data.name}</p>
            {en_effect && (
              <p className="pokemon-ability-short-effect">
                {en_effect.short_effect}
              </p>
            )}
          </div>
        </div>
        <div className="pokemon-ability-generation-name">
          {data.generation.name}
        </div>
      </div>
      {en_effect && (
        <div className="pokemon-ability-effect-wrapper">
          <p className="pokemon-ability-effect">{en_effect.effect}</p>
        </div>
      )}
    </li>
  );
};

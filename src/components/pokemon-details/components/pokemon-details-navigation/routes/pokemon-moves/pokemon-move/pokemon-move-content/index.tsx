import React, { useEffect, useMemo } from "react";
import { usePokemonMoveQuery } from "components/pokemon-details/hooks/usePokemonMoveQuery";
import { find } from "lodash";

export interface PokemonMoveContentProps {
  name: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonMoveContent: React.VFC<PokemonMoveContentProps> = (
  props
) => {
  const { data, isLoading } = usePokemonMoveQuery(props.name);

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
    <li className="pokemon-move">
      <div className="pokemon-move-header">
        <div className="pokemon-move-header-title-container">
          <div className="pokemon-move-header-title-content">
            <p className="pokemon-move-name">{data.name}</p>
            {en_effect && (
              <p className="pokemon-move-short-effect">
                {en_effect.short_effect}
              </p>
            )}
          </div>
        </div>
        <div className="pokemon-move-generation-name">
          {data.generation.name}
        </div>
      </div>
      {en_effect && (
        <div className="pokemon-move-effect-wrapper">
          <p className="pokemon-move-effect">{en_effect.effect}</p>
        </div>
      )}
    </li>
  );
};

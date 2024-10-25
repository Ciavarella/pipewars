import React from "react";
import type { Character, DisplayAttribute } from "../types";

interface CardProps {
  character: Character;
  attributes: DisplayAttribute[];
}

interface DisplayAttributeProps {
  displayAttributes: DisplayAttribute[];
}

const AttributeList: React.FC<DisplayAttributeProps> = ({
  displayAttributes,
}) => (
  <div className="space-y-2">
    {displayAttributes.map(({ label, value }) => (
      <div key={label} className="flex justify-between text-sm flex-wrap">
        <span className="text-black">{label}:</span>
        {Array.isArray(value) ? (
          <ul className="font-medium text-star-wars-yellow list-inside">
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <span className="font-medium text-star-wars-yellow">{value}</span>
        )}
      </div>
    ))}
  </div>
);

export const Card: React.FC<CardProps> = ({ character, attributes }) => {
  return (
    <div className="bg-star-wars-red min-w-48 min-h-64 rounded-lg transform transition-all duration-300 hover:scale-110">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
          {/* Add profile picture */}
          <img
            src=""
            alt={character.name}
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-black mb-4">
          {character.name}
        </h3>
        {/* Characters attributes */}
        <AttributeList displayAttributes={attributes} />
      </div>
    </div>
  );
};

import React from "react";

export * from "./description-list-item";
export const DescriptionList: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-800 sm:rounded-md">
      <div className="px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-700">{children}</dl>
      </div>
    </div>
  );
};

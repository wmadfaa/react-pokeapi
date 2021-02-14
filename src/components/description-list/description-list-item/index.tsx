import React from "react";

export interface DescriptionListItemProps {
  title: string;
}

export const DescriptionListItem: React.FC<DescriptionListItemProps> = ({
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

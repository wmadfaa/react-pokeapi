import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardContent } from "./card-content";

export interface CardProps {
  id: string;
  inView: boolean;
}

export const Card: React.VFC<CardProps> = ({ id, inView }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {inView && (
        <Link to={id}>
          <CardContent id={id} setIsLoading={setIsLoading} />
        </Link>
      )}
      {isLoading && (
        <div className="card-content-container animate-pulse">
          <div className="card-content">
            <div className="card-image-container">
              <div className="card-image" />
            </div>
            <div className="title-container w-full">
              <div className="h-4 bg-gray-50 rounded-full" />
              <div className="h-4 bg-gray-50 rounded-full w-5/6 mt-4" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

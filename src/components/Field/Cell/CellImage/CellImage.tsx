import React from "react";

interface CellImageProps {
  image: string;
}

const CellImage: React.FC<CellImageProps> = ({ image }) => {
  return <img className="cell__image" src={image} alt="CellImage" />;
};

export default CellImage;

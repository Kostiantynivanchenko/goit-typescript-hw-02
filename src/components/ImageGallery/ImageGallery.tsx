import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: {
    id: string;
    urls: {
      small: string;
      regular?: string;
    };
    alt_description: string;
  }[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onImageClick,
}) => {
  return (
    <ul className={s.ul}>
      {photos.map((item) => (
        <li className={s.li} key={item.id}>
          <ImageCard
            item={{
              ...item,
              urls: {
                ...item.urls,
                regular: item.urls.regular || "",
              },
            }}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

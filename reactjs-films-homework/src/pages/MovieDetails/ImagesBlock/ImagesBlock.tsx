import React from 'react';
import styles from './ImagesBlock.module.scss';

export interface IImagesBlock {
  images: IImagesBlockProps[];
  title: string;
  imgWidth: string;
  imagesQuality: number;
}
export interface IImagesBlockProps {
  aspect_ratio?: number;
  file_path: string;
  height?: number;
  iso_639_1?: null;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

const ImagesBlock: React.FC<IImagesBlock> = ({
  images,
  title,
  imagesQuality,
  imgWidth,
}) => {
  return (
    <div className={styles.imagesBlockWrapper}>
      <div className={styles.imagesTitleWrapper}>
        <h3 className={styles.imagesTitle}>{title}</h3>
      </div>
      <div className={styles.imagesWrapper}>
        {images.length
          ? images.slice(0, imagesQuality).map((el) => {
              return (
                <img
                  className={styles.image}
                  width={imgWidth}
                  key={el.file_path.length * Math.random()}
                  src={`https://image.tmdb.org/t/p/w500/${el.file_path}`}
                  alt="images"
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ImagesBlock;

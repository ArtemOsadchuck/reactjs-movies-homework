import React from 'react';
import styles from './ImagesBlock.module.scss';

import { partOfImagesURL } from '../../../constants/links';
import { IImagesBlockImages } from '../../../types/pages/movieDetails/types';

interface IImagesBlockProps {
  images?: IImagesBlockImages[];
  title?: string;
  imgWidth?: string;
  imagesQuality?: number;
}

const ImagesBlock: React.FC<IImagesBlockProps> = ({
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
        {images?.length
          ? images.slice(0, imagesQuality).map((el) => {
              return (
                <img
                  className={styles.image}
                  width={imgWidth}
                  key={el.file_path.length * Math.random()}
                  src={`${partOfImagesURL}${el.file_path}`}
                  alt={title}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ImagesBlock;

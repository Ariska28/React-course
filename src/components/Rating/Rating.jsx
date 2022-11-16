import { MAX_RATING } from "./constants";
import Star from "./img/star.svg";
import GoldStar from "./img/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import { SIZES } from "../../constants/ui";
import { useRef } from "react";

export const Rating = ({ value, size = SIZES.m, onChange }) => {
  const ref = useRef(null);

  return (
    <div className={styles.container}>
      <div ref={ref}>
        {new Array(MAX_RATING).fill(null).map((_, index) => (
          <img
            src={index >= value ? Star : GoldStar}
            key={index}
            className={classnames(styles.star, styles[size])}
            loading="lazy"
            onClick={() => onChange?.(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

// export const RatingWithMemo = React.memo(Rating);

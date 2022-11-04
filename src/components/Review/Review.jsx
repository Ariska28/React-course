import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import { User } from "../User/User";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  if (!review) {
    return <span>Review not found</span>;
  }

  return (
    <div className={styles.root}>
      <q className={styles.quote}>{review.text}</q>
      <Rating value={review.rating} size="s" />
      <User userId={review.userId} />
    </div>
  );
};

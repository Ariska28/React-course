import { NewReviewForm } from "../../components/NewReviewForm/NewReviewForm"
import styles from "./styles.module.css"

export const ReviewFormPage = () => {
  return (
    <div>
      <h2 className={styles.title}>Add your review</h2>
      <NewReviewForm/>
    </div>
  )
}
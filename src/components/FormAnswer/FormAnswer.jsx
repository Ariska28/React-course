import styles from "./styles.module.css";
import { ReactComponent as Smile } from "./icons/smile.svg";
import { ReactComponent as Sad } from "./icons/sad.svg";
import classNames from "classnames";

export const FormAnswer = ({error}) => {
  if(error) {
    return (
      <div className={styles.container}>
        <h2 className={(classNames(styles.title, styles.error))}>
            Something went wrong...
        </h2>
      <Sad/>
     </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={(classNames(styles.title, styles.success))}>
        Thank you for review
      </h2>
      <Smile/>
    </div>
  )
}
import { useId } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.css"


export const SearchForn = () => {
  const inputId = useId();
  const [search, setSearch] = useSearchParams();

  return (
    <form className={styles.form}>
      <label 
        className={styles.label}
        htmlFor={inputId}>
          Search restaurant
        </label>
        
        <input
        className={styles.input}
        id={inputId}
        value={search.get("restaurantName") || ""}
        onChange={(event) => {
          setSearch({ restaurantName: event.target.value });
        }}
      />
    </form>
  )
}
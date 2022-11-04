import styles from "./styles.module.css";
import classnames from "classnames";
import { useReducer } from "react";
import { Rating } from "../Rating/Rating";


const INITIAL_FORM_VALUE = {
  name: {value: "", touched: false, hasError: false },
  text: {value: "", touched: false, hasError: false },
  email: {value: "", touched: false, hasError: false },
  rating: 1,
};

const ERROR_MESSAGES = {
  empty: "Requared field",
  maxLength: "Uncorrect string length: max length 5",
  email: "Input correct email"
}

const ACTIONS = {
  setName: "setName",
  setText: "setText",
  setEmail: "setEmail",
  setRating: "setRating",
  clear: "clear",
};

const formReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.setName:  {
      return {
        ...state, 
        name: { 
          value: action.payload, 
          touched: true,
          ...validation.isEmpty(action.payload), 
          ...validation.maxLength(action.payload) 
        }
      }
    }

    case ACTIONS.setText: {
      return {
        ...state, 
        text: {
          value: action.payload,
          touched: true,
          ...validation.isEmpty(action.payload),
        } 
      }
    }

    case ACTIONS.setEmail: {
      return {
        ...state, 
        email: {
          value: action.payload,
          touched: true,
          ...validation.isEmpty(action.payload),
          ...validation.isCorrectEmail(action.payload),
        } 
      }
    }

    case ACTIONS.setRating: {
      return {
        ...state,
        rating: action.payload
      }
    }

    case ACTIONS.clear: {
      return INITIAL_FORM_VALUE;
    }

    default: 
      return state;
  }
};

const validation = {
  isEmpty: (value) => {
    if (value.length < 1) {
      console.log(new Error(ERROR_MESSAGES.empty));
      return { hasError: true }
    }
  },
  maxLength: (value) => {
    if (value.length > 5) {
      console.log(new Error(ERROR_MESSAGES.maxLength));
      return { hasError: true }
    }  
  },
  isCorrectEmail: (value) => {
    console.log(new Error(ERROR_MESSAGES.email));
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
      return { hasError: true }
    }
  }
}

const addValidationStyles = (hasError, touched) => {
  if (hasError) {
    return styles.error;
  }

  if(touched) {
    return styles.succes;
  }
}

export const NewReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(formReducer, INITIAL_FORM_VALUE);

  const onNameChange = (event) => {
    dispatch({ type: ACTIONS.setName, payload: event.target.value });
  };
  const onTextChange = (event) => {
    dispatch({ type: ACTIONS.setText, payload: event.target.value });
  };
  const onEmailChange = (event) => {
    dispatch({ type: ACTIONS.setEmail, payload: event.target.value });
  };
  const onRatingChange = (value) => {
    dispatch({ type: ACTIONS.setRating, payload: value });
  };

  return (
    <div className={classnames(styles.root, className)}>
      <div className={classnames(styles.formControl, addValidationStyles(formValue.name.hasError, formValue.name.touched))}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={formValue.name.value}
          onChange={onNameChange}
        />
      </div>
      <div className={classnames(styles.formControl, addValidationStyles(formValue.text.hasError, formValue.text.touched))}>
        <label htmlFor="text">Text</label>
        <input
          name="text"
          type="text"
          className={styles.input}
          value={formValue.text.value}
          onChange={onTextChange}
        />
      </div>
      <div className={classnames(styles.formControl, addValidationStyles(formValue.email.hasError, formValue.email.touched))}>
        <label htmlFor="text">Email</label>
        <input
          name="text"
          type="email"
          className={styles.input}
          value={formValue.email.value}
          onChange={onEmailChange}
        />
      </div> 
      <div className={styles.formControl}>
        <label>Choose rating</label>
        <Rating value={formValue.rating} onChange={onRatingChange} />
      </div>
      <button className={styles.clear} onClick={() => dispatch({ type: ACTIONS.clear })}>Clear</button>
    </div>
  );
};

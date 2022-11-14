import styles from "./styles.module.css";
import classnames from "classnames";
import { useReducer } from "react";
import { Rating } from "../Rating/Rating";


const INITIAL_FORM_VALUE = {
  NAME: {value: "", touched: false, hasError: false },
  TEXT: {value: "", touched: false, hasError: false },
  EMAIL: {value: "", touched: false, hasError: false },
  RATING: 1,
};

const ERROR_MESSAGES = {
  EMPTY: "Requared field",
  MAXLENGTH: "Uncorrect string length: max length 5",
  ENAIL: "Input correct email"
}

const ACTIONS = {
  SETNAME: "setName",
  SETTEXT: "setText",
  SETEMAIL: "setEmail",
  SETRATING: "setRating",
  CLEAR: "clear",
};

const formReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SETNAME:  {
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

    case ACTIONS.SETTEXT: {
      return {
        ...state, 
        text: {
          value: action.payload,
          touched: true,
          ...validation.isEmpty(action.payload),
        } 
      }
    }

    case ACTIONS.SETEMAIL: {
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

    case ACTIONS.SETRATING: {
      return {
        ...state,
        rating: action.payload
      }
    }

    case ACTIONS.CLEAR: {
      return INITIAL_FORM_VALUE;
    }

    default: 
      return state;
  }
};

const validation = {
  isEmpty: (value) => {
    if (value.length < 1) {
      console.log(new Error(ERROR_MESSAGES.EMPTY));
      return { hasError: true }
    }
  },
  maxLength: (value) => {
    if (value.length > 5) {
      console.log(new Error(ERROR_MESSAGES.MAXLENGTH));
      return { hasError: true }
    }  
  },
  isCorrectEmail: (value) => {
    console.log(new Error(ERROR_MESSAGES.EMAIL));
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
    dispatch({ type: ACTIONS.SETNAME, payload: event.target.value });
  };
  const onTextChange = (event) => {
    dispatch({ type: ACTIONS.SETTEXT, payload: event.target.value });
  };
  const onEmailChange = (event) => {
    dispatch({ type: ACTIONS.SETEMAIL, payload: event.target.value });
  };
  const onRatingChange = (value) => {
    dispatch({ type: ACTIONS.SETRATING, payload: value });
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
      <button className={styles.clear} onClick={() => dispatch({ type: ACTIONS.CLEAR })}>Clear</button>
    </div>
  );
};

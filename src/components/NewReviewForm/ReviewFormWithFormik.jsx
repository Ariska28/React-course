import { Form, Formik } from "formik";
import { CustomInput } from "../CustomInput/CustomInput";

const validate = (values) => {
  const errors = {};

  if (values.name?.length > 12) {
    errors.name = "max length 12 symbols";
  }

  if (values.text?.length < 10) {
    errors.text = "min length 10 symbols";
  }

  return errors;
};

const initialValue = {
  name: "",
  text: "",
  rating: "",
};

export const ReviewForm = () => {
  return (
    <Formik
      initialValues={initialValue}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm({ values: initialValue });
      }}
    >
      <Form>
        <CustomInput label="Name" name="name" type="text" />
        <CustomInput label="Text" name="text" type="text" />
        <CustomInput label="Rating" name="rating" type="number" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

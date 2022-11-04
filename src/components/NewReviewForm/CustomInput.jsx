import { useField } from "formik";

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};

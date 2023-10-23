import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";
import "./InputComponent.css";

type IProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: DeepMap<FieldValues, FieldError>;
  type: string;
  inputType: "text" | "textarea" | "file";
};

const InputComponent = ({
  name,
  label,
  register,
  required,
  errors,
  type,
  inputType,
}: IProps) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      {inputType === "textarea" ? (
        <textarea {...register(name, { required })} rows={10} />
      ) : (
        <input {...register(name, { required })} type={type} />
      )}
      {errors[name] && <span className="error">This field is required</span>}
    </div>
  );
};

export default InputComponent;

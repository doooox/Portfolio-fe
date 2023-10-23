import { useContext } from "react";
import { useForm } from "react-hook-form";
import InputComponent from "../../components/Input/InputComponent";
import { ButtonComponent } from "../../components/Button/ButtonComponent";
import "./LoginPage.css";
import { useMutation } from "@tanstack/react-query";
import { userService } from "../../services/UserService";
import { UserContext } from "../../context/userContext";
import useAuthGuard from "../../hooks/useAuthGuard";

const LoginPage = () => {
  useAuthGuard();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useContext(UserContext);

  const { mutate } = useMutation(userService.loginUser, {
    onSuccess: (data) => {
      login(data);
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };
  return (
    <div className="container">
      <div>
        <h1>Login Page</h1>
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            label="Email"
            name="email"
            register={register}
            required
            errors={errors}
            type="email"
            inputType="text"
          />
          <InputComponent
            label="Password"
            name="password"
            register={register}
            required
            errors={errors}
            type="password"
            inputType="text"
          />
          <div className="button-wrapper">
            <ButtonComponent name="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

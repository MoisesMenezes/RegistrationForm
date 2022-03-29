import { useForm } from "react-hook-form";
import { schema } from "../../validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import * as S from "./styles";
import { useState } from "react";

interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const Form = () => {
  const [user, setUser] = useState<RegisterProps>(() => ({} as RegisterProps));

  const maskPhone = {
    values: ["(99) 9999-9999", "(99) 99999-9999"],
    maxLength: 14,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: RegisterProps) => {
    setUser(data);
  };

  return (
    <S.Wrapper>
      <h1 onClick={() => setUser({} as RegisterProps)}>Registration</h1>
      {Object.keys(user).length !== 0 ? (
        <form>
          <S.WrapperInfo>
            <div>
              <h3>Name: </h3>
              <h4>
                {user.firstName} {user.lastName}
              </h4>
            </div>
            <div>
              <h3>Phone: </h3>
              <h4>{user.phone}</h4>
            </div>
            <div>
              <h3>Email: </h3>
              <h4>{user.email}</h4>
            </div>
            <div>
              <h3>Password: </h3>
              <h4>{user.password}</h4>
            </div>
          </S.WrapperInfo>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.DoubleContainer>
            <Input
              {...register("firstName")}
              errors={errors.firstName}
              label="Name"
            />
            <Input
              {...register("lastName")}
              errors={errors.lastName}
              label="Last Name"
            />
          </S.DoubleContainer>
          <Input
            {...register("phone")}
            errors={errors.phone}
            label="Phone"
            mask={maskPhone}
          />
          <Input {...register("email")} errors={errors.email} label="Email" />

          <S.DoubleContainer>
            <Input
              {...register("password")}
              errors={errors.password}
              type="password"
              label="Password"
            />
            <Input
              {...register("confirmPassword")}
              errors={errors.confirmPassword}
              type="password"
              label="Confirm Password"
            />
          </S.DoubleContainer>

          <S.WrapperButton>
            <button className="btn-hover" type="submit">
              Submit
            </button>
          </S.WrapperButton>
        </form>
      )}
    </S.Wrapper>
  );
};

export default Form;

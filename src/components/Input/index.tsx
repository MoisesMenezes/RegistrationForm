import { forwardRef, InputHTMLAttributes, ChangeEvent, useEffect } from "react";
import { FieldError } from "react-hook-form";
import * as S from "./styles";
import VMasker from "vanilla-masker";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: FieldError;
  label?: string;
  mask?: {
    values: string | string[];
    maxLength: number;
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errors, label, mask, ...rest }: InputProps, ref) => {
    const inputHandler = (
      masks: string | string[],
      max: number,
      event: ChangeEvent<HTMLInputElement>
    ): void => {
      const c = event.target;
      const v = c.value.replace(/\D/g, "");
      const m = masks.length > 1 && c.value.length > max ? 1 : 0;
      VMasker(c).unMask();
      VMasker(c).maskPattern(masks[m]);
      c.value = VMasker.toPattern(v, masks[m]);
    };

    useEffect(() => {
      if (mask) {
        if (!rest.name) return;
        const inputRef = document.getElementById(rest.name);

        if (inputRef) {
          inputRef.addEventListener<any>(
            "input",
            (e) => inputHandler(mask.values, mask.maxLength, e),
            false
          );
        }
      }
    }, [mask, ref]);

    return (
      <S.Wrapper>
        {label && <label htmlFor={rest.name}>{label}</label>}
        <S.Input {...rest} ref={ref} id={rest.name} isError={!!errors} />
        {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
      </S.Wrapper>
    );
  }
);

export default Input;

import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, label, ...rest }, ref) => {
    return (
        <InputContainer>
            <label htmlFor={rest.name}>{label}</label>
            <input ref={ref} {...rest} />
            {error && (
                <p style={{ color: 'red' }}>{error}</p>
            )}
        </InputContainer>
    )
}

export default forwardRef(Input);
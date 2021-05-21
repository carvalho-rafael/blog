import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    error?: string
    label: string
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ error, label, ...rest }, ref) => {
    return (
        <InputContainer>
            <label htmlFor={rest.name}>{label}</label>
            <textarea ref={ref} {...rest} rows={5} />
            {error && (
                <p style={{ color: 'red' }}>{error}</p>
            )}
        </InputContainer>
    )
}

export default forwardRef(TextArea);
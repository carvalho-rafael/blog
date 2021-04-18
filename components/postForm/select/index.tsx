import { forwardRef, ForwardRefRenderFunction, SelectHTMLAttributes } from "react";
import { SelectContainer } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    categories: Array<string>
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({ label, categories, ...rest }, ref) => {
    return (
        <SelectContainer>
            <label htmlFor={rest.name}>{label}</label>
            <select ref={ref} {...rest}>
                {categories.map(category => (
                    <option value={category}>{category}</option>
                ))}
            </select>
        </SelectContainer>
    )
}

export default forwardRef(Select);
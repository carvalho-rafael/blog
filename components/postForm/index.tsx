import { useRef } from "react";
import useForm from "../../hooks/useForm";
import { Post } from "../../interfaces/Post";
import Input from "./Input";
import { FormContainer, InputGroup } from "./styles";

interface PostFormProps {
    post?: Post
}

export default function PostForm({ post }: PostFormProps) {
    const name = useRef<HTMLInputElement>();

    const { loading, handleEdit } = useForm();


    function handleSubmit(event) {
        event.preventDefault()
        if (post) {
            handleEdit(post)
        } else {
            console.log("criação")
        }
    }
    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <InputGroup>
                    <Input name="name" label="Name" ref={name} required />
                    <Input name="nme" label="Name" ref={name} required />
                </InputGroup>
                <Input name="nme" label="Name" ref={name} required />
                <button type='submit' disabled={loading}>Enviar</button>
            </FormContainer>
        </>
    )
}
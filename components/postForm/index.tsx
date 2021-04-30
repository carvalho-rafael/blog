import { useRef } from "react";
import useForm from "../../hooks/useForm";
import { Post } from "../../interfaces/Post";
import Input from "./Input";
import Select from "./select";
import { FormContainer, InputGroup } from "./styles";
import TextEditor from "./TextEditor";

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
                    <Input name="title" label="title" type="text" ref={name} required />
                    <Select label="categories" categories={['science', 'tecnology']}  />
                </InputGroup>
                <Input name="nme" label="Name" ref={name} required />
                <TextEditor />
                <button type='submit' disabled={loading}>Enviar</button>
            </FormContainer>
        </>
    )
}
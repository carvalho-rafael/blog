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
    const title = useRef<HTMLInputElement>();
    const description = useRef<HTMLInputElement>();
    const body = useRef<HTMLInputElement>();
    const cover = useRef<HTMLInputElement>();
    const createdAt = useRef<HTMLInputElement>();

    const { loading, handleEdit, handleCreate } = useForm();


    async function handleSubmit(event) {
        event.preventDefault();

        const newPost = {
            title: title.current.value,
            description: description.current.value,
            body: "Initial value",
            cover: "cover.jpg",
            createdAt: "Sat May 01 2021"
        }

        if (post) {
            const updatedPost = {
                ...post,
                ...newPost
            }

            handleEdit(post)
        } else {
            handleCreate(newPost)
        }
    }

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <Input name="title" label="title" type="text" ref={title} />
                <Input name="description" label="Description" ref={description} />
                <TextEditor />
                <button type='submit' disabled={loading}>Send</button>
            </FormContainer>
        </>
    )
}

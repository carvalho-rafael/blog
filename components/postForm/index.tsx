import { convertFromHTML, convertFromRaw, convertToRaw, Editor } from "draft-js";
import { stateToHTML } from 'draft-js-export-html'
import { useRef } from "react";
import useForm from "../../hooks/useForm";
import { Post } from "../../interfaces/Post";
import Input from "./Input";
import { FormContainer } from "./styles";
import TextArea from "./textArea";
import TextEditor from "./TextEditor";

interface PostFormProps {
    post?: Post
}

export default function PostForm({ post }: PostFormProps) {
    const title = useRef<HTMLInputElement>();
    const description = useRef<HTMLTextAreaElement>();
    const body = useRef<Editor>(null);
    const cover = useRef<HTMLInputElement>();
    const createdAt = useRef<HTMLInputElement>();

    const { loading, handleEdit, handleCreate } = useForm();


    async function handleSubmit(event) {
        event.preventDefault();

        const newPost = {
            title: title.current.value,
            description: description.current.value,
            body: JSON.stringify(convertToRaw(body.current.props.editorState.getCurrentContent())),
            cover: "cover.jpg",
            createdAt: "Sat May 01 2021"
        }

        if (post) {
            const updatedPost = {
                ...post,
                ...newPost
            }
            handleEdit(updatedPost)
        } else {
            handleCreate(newPost)
        }
    }

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <Input name="title" label="title" type="text" defaultValue={post?.title} ref={title} />
                <TextArea name="description" label="Description" defaultValue={post?.description} ref={description} />
                <TextEditor data={post?.body} ref={body} />
                <button type='submit' disabled={loading}>Send</button>
            </FormContainer>
        </>
    )
}

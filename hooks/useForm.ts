import { useState } from "react";
import { Post } from "../interfaces/Post";

export default function useForm() {
    const [loading, setLoading] = useState(false);

    async function handleEdit(post: Post) {
        const update = await fetch('/api/posts', {
            headers: {
                'Content-type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(post),
        })
            .then(data => data.json());
        console.log(update)
    }

    async function handleCreate(post: Post) {
        const create = await fetch('/api/posts', {
            headers: {
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(post),
        })
            .then(data => data.json());
        console.log(create)
    }

    return { loading, handleEdit, handleCreate }
}

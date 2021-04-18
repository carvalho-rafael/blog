import { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";

export default function useForm() {
    const [loading, setLoading] = useState(true);

    function handleEdit(post: Post) {
        console.log("edição do hook", post)

    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return {loading, handleEdit}
}
import { NextApiRequest, NextApiResponse } from "next";

export default async function postsHandler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req
    const post = req.body
    
    switch (method) {
        case 'POST':
            const newPost = await fetch(`${process.env.NEXT_PUBLIC_API}posts`, {
                headers: {
                    'Content-type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(post),
            }).then(posts => posts.json());
            res.json(newPost);
            break;
        case 'PUT':
            const updatedPost = await fetch(`${process.env.NEXT_PUBLIC_API}posts/${post.id}`, {
                headers: {
                    'Content-type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(post),
            }).then(posts => posts.json());
            res.json(updatedPost);
            break;
        default:
            res.json({ message: 'error' })
    }
}

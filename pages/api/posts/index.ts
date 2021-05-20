import { NextApiRequest, NextApiResponse } from "next";

export default async function postsHandler(req: NextApiRequest, res: NextApiResponse) {

    const post = req.body;

    const posts = await fetch(`${process.env.NEXT_PUBLIC_API}posts`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(post),
    }).then(posts => posts.json());

    res.json(posts)
}

import clientProm from "@lib/mongodb";
import { ObjectId } from "mongodb";

export default async function getPost(req, res) {
    if (req.method !== 'GET') return res.status(401).json({ status: 401, message: `Method ${req.method} is not allowed` });
    try {
        const connectDB = await clientProm;
        const _id = new ObjectId(req.query.id);
        const blog = JSON.parse(JSON.stringify(await connectDB.db('personal-blog').collection('blog-post').findOne({ _id })));
        return res.status(200).json({ blog });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
    
}
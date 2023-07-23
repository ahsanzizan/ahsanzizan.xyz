import clientProm from "@lib/mongodb";

export default async function getPost(req, res) {
    if (req.method !== 'GET') return res.status(401).json({ status: 401, message: `Method ${req.method} is not allowed` });
    try {
        const connectDB = await clientProm;
        const blogs = JSON.parse(JSON.stringify((await connectDB.db('personal-blog').collection('blog-post').find({}).toArray()).filter(blog => !blog.link.includes('private'))));
        return res.status(200).json({ blogs });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
}
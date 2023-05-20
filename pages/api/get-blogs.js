import clientProm from "@/lib/mongodb";

export default async function GetBlogs(req, res) {
    try {
        if (req.method !== 'GET') return res.status(405).json({ err: `Method ${req.method} isn't allowed` });
        const connectDB = await clientProm;
        const getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
        return res.status(200).json(getBlogs);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
}
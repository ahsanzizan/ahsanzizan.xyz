import clientProm from "@lib/mongodb";
import { withSessionRoute } from "@lib/session";
import { ObjectId } from "mongodb";

export default withSessionRoute(async function uploadHandler(req, res) {
    if (!req.session?.state?.loggedIn) return res.status(401).json({ status: 401, error: "Unauthorized admin" });
    if (req.method !== 'POST') return res.status(405).json({ status: 403, error: `Method '${req.method}' Not Allowed` }); 
    try {
        const connectDB = await clientProm;
        const id = req.body._id ? new ObjectId(req.body._id) : new ObjectId(32);
        const isNew = !req.body._id;
        delete req.body._id;
        const doc = !isNew? req.body : { ...req.body, clicks: 0, publishDate: new Date().getTime() };
        const upsert = await connectDB.db('personal-blog').collection('blog-post').updateOne({ _id: id }, 
            { $set: doc }, 
            { upsert: true });
        return res.send({ status: 200, mongo: upsert, isNew: isNew });
    } catch (e) {
        console.log(e);
        res.status(500).json({ status: 500, error: `Internal server error` });
    }
});

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',
        }
    }
}
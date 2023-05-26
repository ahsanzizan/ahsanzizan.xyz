import { v2 as cloudinary } from "cloudinary";
import { withSessionRoute } from "@/lib/session";

export default withSessionRoute(async function upload(req, res) {
    if (!req.session?.state?.loggedIn) return res.status(401).json({ status: 401, err: "Unauthorized" });
    if (req.method !== "POST") return res.status(405).json({ status: 405, err: `Method ${req.method} isn't allowed` })
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUDNAME,
        api_key: process.env.CLOUDINARY_APIKEY,
        api_secret: process.env.CLOUDINARY_APISECRET,
    });
    
    var name = `${Date.now() + '-' + Math.floor(Math.random() * 1000)}`;
    await cloudinary.uploader.upload(req.body.upload, {
        public_id: `blog/${name}`
    }, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ status: 500, error: "Internal Server Error" });
        }
        res.status(200).json({ status: 200, url: result.secure_url });
    });
});

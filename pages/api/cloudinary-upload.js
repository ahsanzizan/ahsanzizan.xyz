import { v2 } from "cloudinary";
import { withSessionRoute } from "@/lib/session";

export default withSessionRoute((req, res) => {
    if (!req.session.loggedIn) return res.status(401).json({ status: 401, err: "Unauthorized" });
    if (req.method !== "POST") return res.status(405).json({ status: 405, err: `Method ${req.method} isn't allowed` })
    var name = `${Date.now() + '-' + Math.floor(Math.random() * 1000)}`;
    v2.uploader.upload(req.body.upload, {
        public_id: `blog-content/${name}`
    }, (error, result) => {
        if (error) return res.status(500).json({ status: 500, error: "Internal Server Error" });
        res.status(200).json({ status: 200, url: result.secure_url });
    });
});

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',
        }
    }
};

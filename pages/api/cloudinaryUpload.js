import { v2 } from "cloudinary";
import { withSessionRoute } from "@/lib/session";

export default withSessionRoute((req, res) => {
    if (!req.session.loggedIn) return res.status(401).json({ status: 401, err: "Unauthorized" });
    if (req.method === "POST") {
        var name = `${Date.now() + '-' + Math.floor(Math.random() * 1000)}`;
        v2.uploader.upload(req.body.upload, { public_id: `blog-content/${name}` }, (error, result) => {
            if (error) return res.status(500).json({ status: 500, err: "Server error" });
            res.status(200).json({ status: 200, url: result.secure_url });
        });
    } else {
        res.status(405).json({ status: 403, err: `Method ${req.method} isn't allowed`});
    }
});

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',
        }
    }
};

import { withSessionRoute } from "@/lib/session";
import clientProm from "@/lib/mongodb";
import rateLimit from "@/lib/rateLimit";

const limiter = rateLimit({
    interval: 600 * 1000,
    uniqueTokenPerInterval: 500,
});

export default withSessionRoute(async function login(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ err: `Method ${req.method} isn't allowed` });
    const { adminName, password } = await req.body;
    if (!adminName || !password) {
        return res.status(400).json({ status: 400, message: "Bad request" });
    }

    try {
        const limit = await limiter.check(res, 5, 'RATE_LIMIT');
        if (limit.isRateLimited) return res.status(429).json({ status: 429, message: "Rate limit exceeded, please try again later!" })
        const connectDB = await clientProm;
        var checkAdmin = await connectDB.db('personal-blog').collection('admin').findOne({ adminName, password });
        if (checkAdmin) {
            const state = { loggedIn: true, ...checkAdmin };
            req.session.state = state;
            await req.session.save();
            return res.json({ status: 200, state });
        } else {
            return res.status(403).json({ status: 403, message: "The admin name or password is incorrect" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
});

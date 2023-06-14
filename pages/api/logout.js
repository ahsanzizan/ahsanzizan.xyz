import { withSessionRoute } from "@lib/session"

export default withSessionRoute(async function logout(req, res) {
    req.session.destroy();
    res.status(302).setHeader('Location', '/login').send({ status: 200 });
});
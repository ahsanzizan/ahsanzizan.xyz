import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const options = {
    password: process.env.COOKIE_PASSWORD,
    cookieName: process.env.COOKIE_NAME,
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    }
};

export function withSessionRoute(handler) {
    return withIronSessionApiRoute(handler, options);
}

export function withSessionSsr(handler) {
    return withIronSessionSsr(handler, options);
}

import Admin from "@components/Admin/";
import { getRequestCookie } from "@lib/getRequestCookie";
import clientProm from "@lib/mongodb";
import { cookies } from "next/headers";

export default async function AdminPage() {
    const admin = await getRequestCookie(cookies());

    const connectDB = await clientProm;
    const blogs = await JSON.parse(JSON.stringify((await connectDB.db('personal-blog').collection('blog-post').find({}).toArray())));

    return (
        <>
            <Admin blogs={blogs} adminName={admin.adminName} />
        </>
    )    
}
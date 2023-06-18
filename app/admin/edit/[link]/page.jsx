import EditBlog from "@components/Admin/EditBlog";
import { getRequestCookie } from "@lib/getRequestCookie";
import clientProm from "@lib/mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function Edit({ params }) {
    const link = params.link;
    const authorName = getRequestCookie(cookies()).adminName;
    let getData;
    
    if (link == "new") {
        getData = {
            title: "",
            authorName: authorName,
            link: "",
            post: "",
            tags: []
        }
    } else {
        const connectDB = await clientProm;
        getData = JSON.parse(JSON.stringify(await connectDB.db('personal-blog').collection('blog-post').findOne({ link: link })));
        if (!getData) {
            redirect('/404');
        }
    }

    return (
        <>
            <EditBlog data={getData} tags={getData.tags} />
        </>
    )
}

export const revalidate = 0;
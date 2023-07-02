import ViewBlog from "@components/Blog/ViewBlog";
import clientProm from "@lib/mongodb";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
    const link = params.link;
    const connectDB = await clientProm;
    const blog = JSON.parse(JSON.stringify(await connectDB.db('personal-blog').collection('blog-post').findOne({ link: link })));
    if (!blog) {
        return { };
    }
    return {
        title: blog.title,
        description: 'a Blog by Ahsan',
    }
}

export default async function View({ params }) {
    const link = params.link;
    const connectDB = await clientProm;
    let getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    let findBlog = getBlogs ? getBlogs.findIndex(x => x.link == link) : -1;
    if (findBlog === -1) {
        redirect('/404');
    } else if ((findBlog + 1) && process.env.NODE_ENV === 'production') {
        // Update clicks
        await connectDB.db('personal-blog').collection('blog-post').updateOne({ link: link }, { $inc: { clicks: 1 } });
    }

    const blog = findBlog + 1 ? JSON.parse(JSON.stringify(getBlogs.splice(findBlog, 1)[0])) : { };
    
    return (
        <ViewBlog blog={blog} />
    )
}

export const revalidate = 0;
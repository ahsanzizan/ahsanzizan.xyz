export default async function GetBlog({ query, res }) {
    var { link } = query;
    link = link.join('/');
    const connectDB = await clientProm;
    var getBlogs = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();
    var findBlog = getBlogs ? getBlogs.findIndex(x => x.link == link) : -1;
    if ((findBlog + 1) && process.env.NODE_ENV === 'production') {
        // Update clicks
        connectDB.db('personal-blog').collection('blog-post').updateOne({ link: link }, { $inc: { clicks: 1 } })
    }
    
    var data = findBlog + 1 ? JSON.parse(JSON.stringify(getBlogs.splice(findBlog, 1)[0])) : {};
    return res.status(200).json(data);
}
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import clientProm from "@/lib/mongodb";
import { withSessionSsr } from "@/lib/session";
import { stringifyDate } from "@/lib/stringifyDate";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Admin({ data, adminName }) {
    const router = useRouter();
    const navContents = [
        {
            title: 'Home',
            href: '/blog/admin',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Logout',
            href: '/api/logout',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
    ]

    async function deleteBlog(id) {
        const confirmed = confirm("Are you sure to delete this post?");
        if (!confirmed) return;
        const deleteBlog = await fetch('/api/delete-blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        }).then(x => x.json());
        
        if (deleteBlog.status == 200) {
            alert(deleteBlog.message);
            router.reload(window.location.pathname);
        } else alert(`Failed to delete post\n\nerror: ${deleteBlog.error}`);
    }

    return (
        <>
            <Header title="Admin Page" />
            <Navbar contents={navContents} />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <h1 className="text-secondary text-3xl mt-10">
                                    Welcome back! Admin <span className="text-main">{adminName}</span>
                                </h1>
                                <div className="py-5">
                                    <Link href="/blog/admin/edit/new" className="duration-300 bg-main hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-t" type="button">
                                        New Post
                                    </Link>
                                    <table className="min-w-full bg-[#222831]">
                                        <thead className="shadow-xl border-t-2 border-l-2 border-r-2 border-main">
                                            <tr>
                                                <th scope="col" className="font-semibold text-sm text-white px-1 text-left">
                                                    No.
                                                </th>
                                                <th scope="col" className="font-semibold text-sm text-white px-5 py-4 text-left max-w-[200px]">
                                                    Title
                                                </th>
                                                <th scope="col" className="font-semibold text-sm text-white px-5 py-4 text-left max-w-[200px]">
                                                    Publish Date
                                                </th>
                                                <th scope="col" className="font-semibold text-sm text-white px-5 py-4 text-left">
                                                    Views
                                                </th>
                                                <th scope="col" className="font-semibold text-sm text-white px-5 py-4 text-left">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-secondary">
                                            {data.map((blog, i) => {
                                                return <tr key={i} className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[210px] overflow-clip">
                                                        <span className="mb-2 block duration-300">{blog.title}</span>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-[240px] overflow-clip">
                                                        <span className="mb-2 block duration-300">{stringifyDate(blog.publishDate)}</span>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {blog.clicks}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Link href={"/blog/view/" + blog.link} className="mr-2 duration-300 bg-main hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                                                            View
                                                        </Link>
                                                        <Link href={"/blog/admin/edit/" + blog.link} className="mr-2 duration-300 bg-main hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                                                            Edit
                                                        </Link>
                                                        <button onClick={() => deleteBlog(blog._id)} className="duration-300 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        if (!req.session?.state?.loggedIn) {
            return {
                redirect: {
                    destination: '/blog/admin/login',
                    permanent: false,
                }
            }
        } else {
            const connectDB = await clientProm;
            var res = await connectDB.db('personal-blog').collection('blog-post').find({}).toArray();

            return {
                props: {
                    data: JSON.parse(JSON.stringify(res.sort((a, b) => b.publishDate - a.publishDate))),
                    adminName: req.session?.state?.adminName,
                }
            }
        }
    }
);
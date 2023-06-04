import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { withSessionSsr } from "@/lib/session";
import { useRouter } from "next/router";

export default function Login() {
    const navContents = [
        {
            title: 'Home',
            href: '/blog',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Tags',
            href: '/blog/tags',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
        {
            title: 'Monthly',
            href: '/blog/monthly',
            className: 'ml-3 text-secondary hover:text-main text-lg font-semibold',
            mobileClassName: 'text-secondary hover:text-main text-lg font-semibold',
            useAL: true,
        },
    ]
    const router = useRouter();

    async function formHandler(e) {
        const submitButton = document.getElementById("submit");
        try {
            e.preventDefault();
            document.getElementById("err").style.display = "none";
            submitButton.setAttribute("disabled", "disabled");
            submitButton.classList.add("cursor-progress");
            const fetchData = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ adminName: e.target.adminName.value, password: e.target.password.value }),
            }).then(x => x.json());
            if (fetchData.status == 200) return router.push('/blog/admin');
            else {
                submitButton.disabled = false;
                submitButton.classList.remove("cursor-progress");
                document.getElementById("err").style.display = "block";
                document.getElementById("err").innerHTML = fetchData.message;
            }
        } catch {
            submitButton.disabled = false;
            submitButton.classList.remove("cursor-progress");
            document.getElementById("err").style.display = "block";
            document.getElementById("err").innerHTML = "Client error";
        }
    }

    return (
        <>
            <Header title="Admin Login" />
            <Navbar contents={navContents} />
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between text-white">
                    <div className="m-auto">
                        <form className="group w-[100%] sm:w-[460px] drop-shadow-lg rounded px-8 pt-6 pb-8 mb-4 duration-100 border-1 border-slate-400" onSubmit={formHandler}>
                            <h1 className="font-bold text-xl text-center p-2 uppercase">admin login</h1>
                            <div className="mb-4">
                                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="adminName">
                                    Admin Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="adminName" id="adminName" type="text" placeholder="Admin Name" required autoComplete="off" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="**************" required />
                            </div>
                            <span id="err" style={{ display: "none" }} className="mb-4 inline-block align-baseline font-bold text-sm text-red-500"></span>
                            <div className="flex items-center justify-between">
                                <button id="submit" className="w-full duration-300 transition group-hover:animate-none bg-main hover:bg-teal-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )    
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }) {
    if (req.session?.state?.loggedIn) {
        return {
            redirect: {
                destination: '/blog/admin',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    } 
})

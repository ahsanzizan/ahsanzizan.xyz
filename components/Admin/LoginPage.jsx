'use client'
import { useRouter } from "next/navigation";

export default function LoginPage() {
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
            if (fetchData.status == 200) {
                return router.push('/admin');
            } else {
                submitButton.disabled = false;
                submitButton.classList.remove("cursor-progress");
                document.getElementById("err").style.display = "block";
                document.getElementById("err").innerHTML = fetchData.message;
            }
        } catch (e) {
            submitButton.disabled = false;
            submitButton.classList.remove("cursor-progress");
            document.getElementById("err").style.display = "block";
            document.getElementById("err").innerHTML = e;
            console.log(e);
        }
    }

    return (
        <>
            <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">
                <div className="flex h-screen flex-col justify-between">
                    <div className="m-auto">
                        <form className="group w-[100%] sm:w-[460px] drop-shadow-lg rounded px-8 pt-6 pb-8 mb-4 duration-100 border-1" onSubmit={formHandler}>
                            <h1 className="heading-text text-5xl">Sign in as an Admin</h1>
                            <div className="mb-4">
                                <label className="block uppercase tracking-wide text-xs font-extrabold mb-2" htmlFor="adminName">
                                    Name
                                </label>
                                <input className="tracking-widest appearance-none block w-full font-bold bg-transparent text-black border-2 border-transparent border-b-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-black" name="adminName" id="adminName" type="text" placeholder="Admin Name" required autoComplete="off" />
                            </div>
                            <div className="mb-6">
                                <label className="block uppercase tracking-wide text-xs font-extrabold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="tracking-widest appearance-none block w-full font-bold bg-transparent text-black border-2 border-transparent border-b-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-black" name="password" id="password" type="password" placeholder="**********" required />
                            </div>
                            <span id="err" style={{ display: "none" }} className="mb-4 inline-block align-baseline font-bold text-sm text-red-500"></span>
                            <div className="flex items-center justify-between">
                                <button id="submit" className="uppercase font-extrabold w-full h-14 bg-black border-2 border-black hover:bg-transparent text-white hover:text-black transition duration-300">
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
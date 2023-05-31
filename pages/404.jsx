import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page404() {
    const router = useRouter();

    return (
        <>
            <Header title="Page not found - ahsanzizan" />
            <main className="text-center flex flex-col gap-4 justify-center items-center w-screen h-screen">
                <h1 className="text-secondary font-bold tracking-widest text-9xl">404</h1>
                <p className="text-secondary font-semibold tracking-wide text-xl">The Page {"You're"} Looking For is Not Found</p>
                <Link href={"/"} className="text-secondary font-semibold bg-main px-5 py-3 rounded hover:bg-opacity-75 mt-10" onClick={() => router.back()}>Go Back</Link>
            </main>
        </>
    )
}
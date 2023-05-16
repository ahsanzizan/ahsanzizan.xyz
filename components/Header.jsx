import Head from "next/head";

export default function Header({ title, description }) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scaleable=no" />
            <meta name="description" content={description} />
            <title>{title || "ahsanzizan"}</title>
        </Head>
    )
}
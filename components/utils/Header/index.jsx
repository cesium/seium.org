import Head from "next/head";

export default function Header(){
    return (
        <Head>
            <title>
                SEI
            </title>
            <link rel="preload" href="/fonts/Inter/Inter-Regular.ttf" as="font-regular" />
            <link rel="preload" href="/fonts/Inter/Inter-Black.ttf" as="font-black" />
        </Head>
    );
}
import Head from "next/head";

export default function Header() {
    return (
        <Head>
            <title>
                SEI
            </title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preload" href="/fonts/Inter/Inter-Regular.ttf" as="font-regular" />
            <link rel="preload" href="/fonts/Inter/Inter-Black.ttf" as="font-black" />
            <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" />
        </Head>
    );
}
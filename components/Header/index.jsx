import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>SEI 2022</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#01253d" />
      <meta name="msapplication-TileColor" content="#01253d" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="preload"
        href="/fonts/Inter/Inter-Regular.ttf"
        as="font-regular"
      />
      <link rel="preload" href="/fonts/Inter/Inter-Black.ttf" as="font-black" />
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
      />
    </Head>
  );
}

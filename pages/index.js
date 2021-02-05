import Head from 'next/head';
import Image from 'next/image';

import Footer from '../components/Footer';

import styles from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SEI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>SEI</h1>
        <div align="center">
          <Image src="/mascot.svg" width="400" height="400" alt="Void Mascot" />
        </div>
      </main>

      <Footer />

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}

import Image from "next/image";
import Main from "./UI/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Add your Google Ads script here */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9030146066299000"
          crossOrigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-9030146066299000",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </Head>
      <main className="min-h-screen">
        <Main />
      </main>
    </>
  );
}

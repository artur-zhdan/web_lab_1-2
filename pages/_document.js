import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useEffect } from 'react';

export default function Document() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.firstpromoter.com/fpr.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.fpr = window.fpr || function () { window.fpr.q = window.fpr.q || []; window.fpr.q[arguments[0] === 'set' ? 'unshift' : 'push'](arguments); };
      window.fpr("init", { cid: "7h06v0e5" });
      window.fpr("click");
    };


  }, []);



  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Mono"></link> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"></link> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono"></link>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"></link> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3576315231067529"
          crossOrigin="anonymous"></script> */}
        <script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
        {/* <Script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "frnmdhf3kd");`}
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

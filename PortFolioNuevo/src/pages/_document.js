import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        rel="stylesheet"
      ></link>
      <link href="https://www.tailwindcss-animated.com/configurator.html?animation=fade-up&count=once"></link>
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
      <script
        src="https://kit.fontawesome.com/8738528177.js"
        crossOrigin="anonymous"
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

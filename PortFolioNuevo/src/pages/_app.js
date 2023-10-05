// _app.js
import '@/styles/globals.css';
import Navbar from './NavBar/navBar';
import Footer from './Footer/footer';
import Head from 'next/head';
import { LightModeProvider } from '../Components/LightModeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Mauro Genna Portfolio</title>
      </Head>
      <LightModeProvider>
        <LanguageProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </LanguageProvider>
      </LightModeProvider>
    </div>
  );
}

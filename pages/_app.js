import '../styles/globals.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { MixpanelSource } from '../utils/mixpanel';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MWMR6W5' });
    MixpanelSource();
  }, []);
  return <Component {...pageProps} />

}

export default MyApp;
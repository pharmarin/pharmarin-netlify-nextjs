import { AppProps } from "next/app";
import "normalize.css";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

global.__basedir = __dirname;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

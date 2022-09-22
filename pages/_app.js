import { SessionProvider } from "next-auth/react";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);

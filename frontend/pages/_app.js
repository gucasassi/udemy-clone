import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd";
import "../public/css/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopNav from "../components/TopNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="light"
      />
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

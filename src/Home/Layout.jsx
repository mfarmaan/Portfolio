import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Blog from "../component/Blog";
import Loader from "../component/Loader";
function Layout() {
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 5000);

  return (
    <>
      {isLoading == true ? (
        <Loader background="#000" />
      ) : (
        <>
          <Header />
          <Blog />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;

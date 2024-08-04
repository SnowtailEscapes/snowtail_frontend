import React, { Suspense } from "react";
import Contact2 from "../components/Contact2";
import Footer from "../components/Footer";
const TopSection = React.lazy(() => import("../components/TopSection"));
import Loading from "../components/loading";

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <TopSection />
      </Suspense>
      <Contact2 />
      <Footer />
    </>
  );
};

export default Home;

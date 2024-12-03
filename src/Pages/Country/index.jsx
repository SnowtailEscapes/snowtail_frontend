import React, { Suspense, useMemo, useRef } from "react";
import TopSection from "../../components/TopSection";
import Navbar from "../../components/Navbar";
import International from "../../components/Cards/International";
import CountriesView from "./CountriesView";
import PackagesView from "./PackagesView";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { domesticPackages, internationalPackages } from "../../constants/packages";

function CountryPage() {
  const { countryName } = useParams();
  const scrollRef = useRef();

  const filteredCountry = useMemo(() => {
    if (countryName == "india") {
      return domesticPackages.filter((ele)=>ele.country === "india");
    } else if (countryName) {
      return internationalPackages.filter((elem) => elem.country == countryName) ?? [];
    }
    return [];
  }, [countryName]);

  return (
    <>
      <Navbar />
      <div className="h-32" ref={scrollRef}></div>
      {filteredCountry?.length > 0 && (
        <div className="md:px-20 px-5 pb-10">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">List of Packages</h2>
          <PackagesView data={filteredCountry} />
        </div>
      )}
      <div className="flex flex-col gap-10 ">
        <CountriesView scrollRef={scrollRef} />
      </div>
      <Footer />
    </>
  );
}

export default CountryPage;

import React, { Suspense, useMemo } from "react";
import TopSection from "../../components/TopSection";
import Navbar from "../../components/Navbar";
import International from "../../components/Cards/International";
import CountriesView from "./CountriesView";
import PackagesView from "./PackagesView";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { packagesData } from "./constants";

function CountryPage() {
  const { countryName } = useParams();

  const filteredCountry = useMemo(() => {
    if (countryName) {
      return packagesData.filter((elem) => elem.id == countryName)[0]?.data ?? [];
    }
    return [];
  }, [countryName]);

  return (
    <>
      <Navbar />
      
      {filteredCountry?.length > 0 && (
        <div className="md:px-20 px-5 pt-10 mt-20">
          <h2 className="font-lora md:mb-3  font-extrabold lg:text-[2.5rem] md:text-[2rem] text-[1.5rem]">List of Packages</h2>
          <PackagesView data={filteredCountry} />
        </div>
      )}
      <div className="flex flex-col gap-10 mt-20">
        <CountriesView />
      </div>
      <Footer />
    </>
  );
}

export default CountryPage;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Helmet from "react-helmet";
import initializeGA from './utils/initializeGA';
import RouteChangeTracker from './utils/RouteChangeTracker';
import initializeClarity from './utils/initializeClarity';

// International
import Thailand5d4n from "./International/Thailand5d4n";
import Thailand6d5n from "./International/Thailand5n6d";
import Thailand9d8n from "./International/Thailand8n9d";
import Bali6d5n from "./International/Bali5n6d";
import Bali8d7n from "./International/Bali7n8d";
import Vietnam4d5n from "./International/Vietnam5d4n";
import Vietnam6n7d from "./International/Vietnam6n7d";
import Vietnam9n10d from "./International/Vietnam9n10d";
import Singapore4n5d from "./International/Singapore4n5d";
import Singapore6n7d from "./International/Singapore6n7d";
import Singapore_Malaysia from "./International/Sinagpore_Malaysia";
import Malaysia from "./International/Malaysia";
import Switzerland5n6d from "./International/Switzerland5n6d";
import France_Italy from "./International/France_Italy.jsx";
import Greece7n8d from "./International/Greece7n8d.jsx";
import SriLanka6n7d from "./International/SriLanka6n7d.jsx";
import Dubai3n4d from "./International/Dubai3n4d.jsx";
import Dubai5n6d from "./International/Dubai5n6d.jsx";
import Nepal from "./International/Nepal.jsx";

import NotFound from "./components/NotFound.jsx";

// Domestic
import Rajasthan from "./Domestic/Rajasthan";
import Rajasthan4n5d from "./Domestic/Rajasthan4n5d";
import Rajasthan5n6d from "./Domestic/Rajasthan5n6d.jsx";
import Gujarat3n4d from "./Domestic/Gujarat3n4d.jsx";
import Gujarat4n5d from "./Domestic/Gujarat4n5d.jsx";
import Kashmir5n6d from "./Domestic/Kashmir5n6d.jsx";
import Kashmir3n4d from "./Domestic/Kashmir3n4d.jsx";
import Ladakh5n6d from "./Domestic/Ladakh5n6d.jsx";
import Sikkim5n6d from "./Domestic/Sikkim5n6d.jsx";
import Meghalaya5n6d from "./Domestic/Meghalaya5n6d.jsx";
import Kerala5n6d from "./Domestic/Kerala5n6d.jsx";
import Manali3n4d from "./Domestic/Manali3n4d.jsx";
import Shimla5n6d from "./Domestic/Shimla5n6d.jsx";
import Shimla9n10d from "./Domestic/Shimla9n10d.jsx";
import Kasol2n3d from "./Domestic/Kasol2n3d.jsx";
import Uttrakhand from "./Domestic/Uttrakhand.jsx";
import Andaman from "./Domestic/Andaman.jsx";
import Domestic from "./components/DomesticCards/AllDomestic.jsx";
import AllInternational from "./components/InternationalCards/AllInternational.jsx";
import TermsAndConditions from "./components/TermsAndCondition.jsx";
import Almaty from "./International/Almaty.jsx";

function App() {
  useEffect(() => {
    initializeGA();
    initializeClarity();
  }, []);
  return (
    <>
      <Helmet>
        <title>Snowtail Escapes</title>
        <meta
          name="description"
          content="A website for you for travelling around the world with your friends,family,or your partner"
        />
      </Helmet>
      <Router>
      <RouteChangeTracker />
        <Routes>
          {/* COMMON SECTIONS */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />

          {/* ITINERARY SECTION -> DOMESTIC  */}
          <Route path="/Domestic" element={<Domestic />} />
          {/* Rajasthan */}
          <Route path="/Rajasthan" element={<Rajasthan />} />
          <Route path="/Rajasthan4n5d" element={<Rajasthan4n5d />} />
          <Route path="/Rajasthan5n6d" element={<Rajasthan5n6d />} />

          {/* Gujarat */}
          <Route path="/Gujarat3n4d" element={<Gujarat3n4d />} />
          <Route path="/Gujarat4n5d" element={<Gujarat4n5d />} />

          {/* Kashmir */}
          <Route path="/Kashmir5n6d" element={<Kashmir5n6d />} />
          <Route path="/Kashmir3n4d" element={<Kashmir3n4d />} />

          {/* Ladakh */}
          <Route path="/Ladakh5n6d" element={<Ladakh5n6d />} />

          {/* Sikkim */}
          <Route path="/Sikkim5n6d" element={<Sikkim5n6d />} />

          {/* Meghalaya */}
          <Route path="/Meghalaya5n6d" element={<Meghalaya5n6d />} />

          {/* Kerala */}
          <Route path="/Kerala5n6d" element={<Kerala5n6d />} />

          {/* Manali */}
          <Route path="/Manali3n4d" element={<Manali3n4d />} />

          {/* Shimla */}
          <Route path="/Shimla5n6d" element={<Shimla5n6d />} />
          <Route path="/Shimla9n10d" element={<Shimla9n10d />} />

          {/* Kasol */}
          <Route path="/Kasol2n3d" element={<Kasol2n3d />} />

          {/* Uttrakhand */}
          <Route path="/Uttrakhand" element={<Uttrakhand />} />

          {/* Andaman and Nicobar */}
          <Route path="/Andaman" element={<Andaman />} />

          {/* ITINERARY SECTION -> INTERNATIONAL  */}
          <Route path="/International" element={<AllInternational />} />

          {/* Thailand */}
          <Route path="/Thailand5d4n" element={<Thailand5d4n />} />
          <Route path="/Thailand6d5n" element={<Thailand6d5n />} />
          <Route path="/Thailand9d8n" element={<Thailand9d8n />} />

          {/* Bali */}
          <Route path="/Bali6d5n" element={<Bali6d5n />} />
          <Route path="/Bali8d7n" element={<Bali8d7n />} />

          {/* Vietnam */}
          <Route path="/Vietnam4d5n" element={<Vietnam4d5n />} />
          <Route path="/Vietnam6n7d" element={<Vietnam6n7d />} />
          <Route path="/Vietnam9n10d" element={<Vietnam9n10d />} />

          {/* Singapore */}
          <Route path="/Singapore4n5d" element={<Singapore4n5d />} />
          <Route path="/Singapore6n7d" element={<Singapore6n7d />} />
          <Route path="/Singapore_Malaysia" element={<Singapore_Malaysia />} />
          <Route path="/Malaysia" element={<Malaysia />} />

          {/* Switzerland */}
          <Route path="/Switzerland5n6d" element={<Switzerland5n6d />} />

          {/* France and Italy */}
          <Route path="/France-Italy" element={<France_Italy />} />

          {/* Greece */}
          <Route path="/Greece7n8d" element={<Greece7n8d />} />

          {/* Sri Lanka */}
          <Route path="/SriLanka6n7d" element={<SriLanka6n7d />} />

          {/* Dubai */}
          <Route path="/Dubai3n4d" element={<Dubai3n4d />} />
          <Route path="/Dubai5n6d" element={<Dubai5n6d />} />

          {/* Almaty */}
          <Route path="/Almaty" element={<Almaty />} />

          {/* Nepal */}
          <Route path="/Nepal" element={<Nepal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

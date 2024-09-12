import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import initializeGA from './utils/initializeGA';
import RouteChangeTracker from './utils/RouteChangeTracker';
import initializeClarity from './utils/initializeClarity';
import NotFound from "./components/NotFound.jsx";
import Contact from "./Itinerary/components/Contact.jsx";
import "./styles/about.css";
import { useSelector } from 'react-redux';
import SearchResults from "./getApi/SearchResults.jsx";
import Success from "./components/Success.jsx";
import TermsAndConditions from "./components/TermsAndCondition.jsx";

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
import Australia from "./International/Australia7d6n.jsx";
import Japan from "./International/Japan8n9d.jsx";
import Japan2 from "./International/Japan2.jsx";
import Philipenes from "./International/Philipenes.jsx";
import Almaty from "./International/Almaty.jsx";



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
import Lonavala3n4d from "./Domestic/Lonavala3n4d.jsx";
import Lonavala4n5d from "./Domestic/Lonavala4n5d.jsx";
import Dharamshala from "./Domestic/Dharamshala.jsx";
import Spiti from "./Domestic/Spiti.jsx";


function App() {
  useEffect(() => {
    initializeGA();
    initializeClarity();
  }, []);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'hehe'}>
        <Router>
        <RouteChangeTracker />
          <Routes>
            {/* COMMON SECTIONS */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/success" element={<Success/>}/>

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

            {/* Mumbai */}
            <Route path="/lonavala3n4d" element={<Lonavala3n4d/>}/>
            <Route path="/lonavala4n5d" element={<Lonavala4n5d/>}/>

            {/* Himachal Pradesh */}
            <Route path="/dharamshala" element={<Dharamshala/>}/>

            {/* Spiti */}
            <Route path="/spiti" element={<Spiti/>} />




            {/* ITINERARY SECTION -> INTERNATIONAL  */}
            <Route path="/International" element={<AllInternational />} />

            {/* Thailand */}
            <Route
              path="/Thailand5d4n"
              element={<Thailand5d4n />}
            />
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
            <Route
              path="/Singapore_Malaysia"
              element={<Singapore_Malaysia />}
            />
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

            {/* Australia */}
            <Route path="/Australia7d6n" element={<Australia/>}/>

            {/* Japan */}
            <Route path="/Japan" element={<Japan/>}/>
            <Route path="/Japan5n6d" element={<Japan2/>}/>

            {/* Philipenes */}
            <Route path="/Philipenes" element={<Philipenes/>}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
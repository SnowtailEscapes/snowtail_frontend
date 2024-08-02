import React, { useEffect, useState } from "react";
import Card from "./Card";


export default function Budget() {
  const [isMobileScreen, setMobileScreen] = useState(
    window.innerWidth > 0 && window.innerWidth < 600
  );
  const [isTabletScreen, setTabletScreen] = useState(
    window.innerWidth >= 600 && window.innerWidth < 1000
  );
  const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth > 0 && window.innerWidth < 600);
      setTabletScreen(window.innerWidth >= 600 && window.innerWidth < 1000);
      setLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:pl-20 md:pr-20 pl-4 pt-10">
      <h2 className="march lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-extrabold text-black1">Budget Tours</h2>
      {isLargeScreen && (
        <>
          <div className="carousel p-10 pb-0  relative w-full">
            <div
              id="Budget1"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                name="Kasol"
                title="Land of Creamy Flavors"
                duration="3 Days & 2 Nights"
                rating="4.8/5"
                cut_price={15399}
                curr_price={10999}
                save={4400}
                direct="/Kasol2n3d"
                image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/d4jj8za1frxjxgw2cs3l'
              />

              <Card
                name="Mussoorie & Rishikesh"
                title="A Journey to the Queen of Hills"
                duration="4 Days & 3 Nights"
                rating="4.8/5"
                cut_price={22399}
                curr_price={15999}
                save={6400}
                direct="/Uttrakhand"
                image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ytd5dytykzlpy6orblbl'
              />
              <Card
                name="Manali"
                title="A Himalayan Heaven"
                duration="4 Days & 3 Nights"
                rating="4.8/5"
                cut_price={22399}
              curr_price={15999}
              save={6400}
                direct="/Manali3n4d"
                image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/vorbmcxc5np6ahet04j0'
              />
            </div>

            <div
              id="Budget2"
              className="carousel-item w-full flex justify-center gap-5 ml-14"
            >
              <Card
                name="Gujarat"
                title="Monument of Pride"
                duration="4 Days & 3 Nights"
                rating="4.8/5"
                cut_price={23199}
                curr_price={16499}
                save={6700}
                direct="/Gujarat3n4d"
                image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/mddzj4dekit9a7m3jepm'
              />
              <Card
                name="Bangkok & Pattaya"
                title="A Vibrant Thai Adventure"
                duration="5 Days & 4 Nights"
                rating="4.8/5"
                cut_price={25699}
                curr_price={19999}
                save={5700}
                direct="/Thailand5d4n"
                image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/hhajk8pwfwtsd2vhgcsc'
              />
              <Card
                name="Phuket & Krabi"
                title="Experience Best of Southern Thailand"
                duration="6 Days & 5 Nights"
                rating="4.8/5"
                cut_price={36999}
                curr_price={29999}
                save={7000}
                direct="/Thailand6d5n"
                image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/thailand4n5d'
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#Budget1" className="btn btn-xs">
              1
            </a>
            <a href="#Budget2" className="btn btn-xs">
              2
            </a>
          </div>
        </>
      )}
      {isMobileScreen || isTabletScreen ? (
        <>
          <div className="carousel p-4 rounded-box flex justify-between items-center space-x-10 md:space-x-5">
            <Card
              name="Kasol"
              title="Land of Creamy Flavors"
              duration="3 Days & 2 Nights"
              rating="4.8/5"
              cut_price={15399}
              curr_price={10999}
              save={4400}
              direct="/Kasol2n3d"
              image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/d4jj8za1frxjxgw2cs3l'
            />

            <Card
              name="Mussoorie & Rishikesh"
              title="A Journey to the Queen of Hills"
              duration="4 Days & 3 Nights"
              rating="4.8/5"
              cut_price={23799}
              curr_price={16999}
              save={6800}
              direct="/Uttrakhand"
              image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ytd5dytykzlpy6orblbl'
            />

            <Card
              name="Manali"
              title="A Himalayan Heaven"
              duration="4 Days & 3 Nights"
              rating="4.8/5"
              cut_price={22399}
              curr_price={15999}
              save={6400}
              direct="/Manali3n4d"
              image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/vorbmcxc5np6ahet04j0'
            />

            <Card
              name='Gujarat'
              title="Monument of Pride"
              duration="4 Days & 3 Nights"
              rating="4.8/5"
              cut_price={23199}
              curr_price={16499}
              save={6700}
              direct="/Gujarat3n4d"
              image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/mddzj4dekit9a7m3jepm'
            />

            <Card 
              name="Bangkok & Pattaya"
              title="A Vibrant Thai Adventure"
              duration="5 Days & 4 Nights"
              rating="4.8/5"
              cut_price={25699}
              curr_price={19999}
              save={5700}
              direct="/Thailand5d4n"
              image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/hhajk8pwfwtsd2vhgcsc'
            />

            <Card
              name="Phuket & Krabi"
              title="Experience Best of Southern Thailand"
              duration="6 Days & 5 Nights"
              rating="4.8/5"
              cut_price={36999}
              curr_price={29999}
              save={7000}
              direct="/Thailand6d5n"
              image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/thailand4n5d'
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";

function PackagesView({ data }) {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.map((card, index) => (
          <div className="w-full carousel-item flex flex-col relative rounded-2xl mx-2" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PackagesView;

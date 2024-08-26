import React from "react";

/**
 * Functional component representing the footer section of the website.
 * Displays various links and information including company details, contact information, and opening hours.
 * Utilizes Tailwind CSS classes for styling and responsiveness.
 */
const Footer = () => {
  return (
    <footer className="bg-teal-600 font-manrope mt-[5rem] text-white p-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 items-center rounded-t-[30px] h-full lg:h-[201px]">
      <div
        className="flex flex-col justify-center mt-6 text-sm"
        style={{ color: "rgba(255, 255, 255, 0.5)" }}
      >
        <span>AGM</span>
        <span>Impressum</span>
        <span>Datenschutz</span>
      </div>
      <div className="flex flex-col mb-8 text-[16px] gap-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="flex items-center hover:underline">
            <img src="leaf.png" alt="" className="mr-1" />
            Rezept einlösen
          </a>
          <a href="#" className="hover:underline  flex items-center">
            <img src="leaf.png" alt="" className="mr-1" /> Live Bestand
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="hover:underline  flex items-center ">
            {" "}
            <img src="leaf.png" alt="" className="mr-1" />
            Videosprechstunde
          </a>
          <a href="#" className="hover:underline  flex items-center">
            {" "}
            <img src="leaf.png" alt="" className="mr-1" />
            FAQs
          </a>
          <a href="#" className="hover:underline  flex items-center">
            <img src="leaf.png" alt="" className="mr-1" />
            Kontakt
          </a>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:gap-10 text-sm">
        <div className="flex flex-col sm:gap-1">
          <p className="" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Standort</p>
          <p className="font-bold">Bergstraße 49 - 57</p>
          <p className="font-bold">69469 Weinheim</p>
          <p className="font-bold">(3 Glocken Quartier)</p>
        </div>
        <div className="flex flex-col sm:gap-1 mt-4 sm:mt-0">
          <p className="" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Telefon</p>
          <p className="font-bold">0223 545 5250</p>
        </div>
        <div className="flex flex-col sm:gap-1 mt-4 sm:mt-0">
          <p className="" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Öffnungszeiten</p>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Mo-Fr:</p>
          <p className="font-bold">09:00 - 18:00 Uhr</p>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Sa: </p>
          <p className="font-bold">09:00 - 14:00 Uhr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

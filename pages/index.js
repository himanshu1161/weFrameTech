import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import Bluten from "./Components/Bluten";
import SubHeader from "./Components/SubHeader";
import MainComp from "./Components/MainComp";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });
/**
 * Renders the home page layout with the header, bluten, subheader, main content, and footer components.
 * Uses specific margin classes for responsive design.
 * 
 * @returns {JSX.Element} The JSX element representing the home page layout.
 */

export default function Home() {
  return (
    <div>
      <div className="mx-1 sm:mx-[7rem]">
        <Header />
        <Bluten />
        <SubHeader />
        <div className="mt-4">
          <MainComp />
        </div>
      </div>
      <Footer />
    </div>
  );
}

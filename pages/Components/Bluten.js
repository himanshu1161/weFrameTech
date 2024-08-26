export default function Bluten() {
  
/**
 * Render function for the Bluten component displaying breadcrumb and a button for Presopetionen.
 * @returns {JSX.Element} JSX element representing the component.
 */
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-0">
      {/* Left Section: Breadcrumb */}
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <a href="#" className="text-[#62C3C6] text-sm">
          Home
        </a>
        <img src="ArrowRight.png" alt="" className="h-4 w-4" />
        <a href="#" className="text-[#62C3C6] text-sm">
          Livebestand
        </a>
        <img src="ArrowRight.png" alt="" className="h-4 w-4" />
        <a href="#" className="text-[#004949] text-sm font-medium">
          Cannabis Blüten
        </a>
      </div>
      <div className="flex flex-col  items-center gap-2">
        <span className="text-[#365758] text-sm mb-2 sm:mb-0">
          GKV mit Kostenübernahme?
        </span>
        <button
          className="bg-white text-[#004949] text-sm border-[#62C3C6] border hover:text-white hover:bg-[#62c3c6] w-full sm:w-auto"
          style={{
            height: "33px",
            padding: "5px 18px 8px 18px",
            borderRadius: "24px 0px 24px 0px",
            opacity: 1,
          }}
        >
          Presopetionen
        </button>
      </div>
    </div>
  );
}

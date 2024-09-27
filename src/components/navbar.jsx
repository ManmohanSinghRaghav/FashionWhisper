export default function Navbar() {
  return (
    <nav className="fixed z-10 text-gray-300 tracking-wider text-center font-['Protest_Guerrilla'] ">
      <div className="absolute w-52 flex items-center justify-center">
        <img src="src/assets/Designer.png" alt="logo" className="w-16 h-20" />
        <div className="mt-2 ml-5 p-2 text-xl flex items-center justify-center bg-gray-800 rounded-full">
          Fashion Point
        </div>
      </div>
      <button className="w-1/3 flex ml-4"></button>
      <button className="fixed w-40 -right-9 top-7 text-lg bg-gray-800 hover:text-white rotate-45">
        About Us
      </button>
    </nav>
  );
}

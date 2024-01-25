function Navbar() {
  return (
    <>
      <div className="border-b-2 shadow-lg">
        <div className="flex items-center justify-between mx-44 my-3">
          <div className="cursor-pointer">
            <h1 className="text-2xl font-semibold">Packet Tracker</h1>
          </div>
          <ul className="flex space-x-10 text-lg">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-black duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-black duration-500"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

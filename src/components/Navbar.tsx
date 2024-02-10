import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet.tsx";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[100px] px-[25px] md:py-[25px] md:px-[100px]">
      <img src="/images/Logo.png" alt="logo" className="w-[45px] md:h-full" />
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <img
              src="/images/hamburger.svg"
              alt="hamburger"
              className="md:hidden"
            />
          </SheetTrigger>
          <SheetContent
            data-testid="mobile-sidebar"
            className="flex flex-col gap-6 justify-center bg-white text-[2rem] font-[600]"
          >
            <SheetClose>Home</SheetClose>
            <SheetClose>About Us</SheetClose>
            <SheetClose>Services</SheetClose>
            <SheetClose>Contact Us</SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <ul className="hidden md:text-[1rem] md:leading-[1rem] md:font-[600] md:h-[48px] md:w-[60%] md:flex md:justify-around md:items-center md:bg-secondary md:list-none md:rounded-full">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
      <div className="hidden md:flex md:gap-[14px]">
        <select
          name="language"
          id=""
          className="border-none text-[14px] focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button className="border-none font-[500] bg-accent-blue text-white rounded-full text-[16px] w-[170px] px-[25px] py-[18px] cursor-pointer">
          Schedule a call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <div className="mt-[20px] md:mt-0 px-[40px] md:px-[130px] pt-[100px]">
      <div className="flex flex-wrap md:flex-nowrap md:justify-around gap-[70px] items-start">
        <ul className="list-none flex flex-col gap-[15px] text-black/50 font-[400] text-[16px] leading-[28px]">
          <li className="text-black">Products</li>
          <li>Employee Database</li>
          <li>Payroll</li>
          <li>Absenses</li>
          <li>Time Tracking</li>
          <li>Shift Planner</li>
          <li>Recruiting</li>
        </ul>
        <ul className="list-none flex flex-col gap-[15px] text-black/50 font-[400] text-[16px] leading-[28px]">
          <li className="text-black">Information</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Support</li>
        </ul>
        <ul className="list-none flex flex-col gap-[15px] text-black/50 font-[400] text-[16px] leading-[28px]">
          <li className="text-black">Company</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Lift Media</li>
        </ul>
        <div className="px-[45px] py-[30px] w-[350px] h-[260px] bg-secondary rounded-[30px]">
          <p className="font-[400] text-[16px] leading-[28px]">Subscribe</p>
          <div className="mt-[20px] flex items-center relative">
            <input
              type="text"
              className="h-[50px] w-[98%] rounded-full px-3 border-none outline-none"
              placeholder="Email Address"
            />
            <button className="absolute right-0 w-[50px] flex items-center justify-center h-[50px] rounded-full bg-accent-blue border-none">
              <img src="/images/arrow-down.svg" alt="" />
            </button>
          </div>
          <p className="font-[400] text-[12px] leading-[20px] mt-[20px]">
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
      </div>
      <div className="mt-[55px] flex flex-wrap-reverse gap-y-[20px] gap-x-[30px] md:justify-between items-center md:max-h-[100px] py-[25px] border-t-2 border-neutral border-solid border-x-0 border-b-0">
        <img src="/images/Logo.png" alt="" className="w-[45px] h-full" />
        <ul className="text-[14px] font-[400] leading-[15px] w-fit flex gap-[40px] items-center  list-none">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
        <div className="flex gap-[14px]">
          <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-solid border-neutral flex items-center justify-center">
            <img src="/images/linkedin.svg" alt="" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-solid border-neutral flex justify-center items-center">
            <img src="/images/facebook.svg" alt="" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full border-[1.5px] border-1px border-solid border-neutral flex justify-center items-center">
            <img src="/images/twitter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

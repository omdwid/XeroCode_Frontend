const Companies = () => {
  return (
    <div className="mx-[25px] md:mx-[50px] gap-[40px] flex flex-col items-center overflow-hidden bg-secondary rounded-[15px] md:rounded-[36px] pt-[80px] pb-[50px] relative">
      <img
        src="/images/Vector 6.svg"
        alt=""
        className="absolute w-[36px] md:w-fit h-[32px] md:h-fit top-[35px] left-[45px]"
      />
      <div className="w-[95%] md:w-[50%]">
        <h2 className="font-[500] text-[26px] md:text-[40px] leading-[40px] md:leading-[60px] text-center">
          Trusted by Leading Organizations
        </h2>
        <p className="text-[12px] md:text-[20px] font-[500] leading-[16px] md:leading-[25px] text-center px-[25px] md:px-[50px] mt-[15px] md:mt-[20px]">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </p>
      </div>
      <ul className="flex flex-wrap gap-[30px] md:flex-nowrap items-center md:gap-[100px] h-fit w-[80%] mx-auto md:w-full list-none">
        <li>
          <img
            src="/images/logos_google.svg"
            alt=""
            className="w-[70px] md:w-[250px] h-[25px] md:h-[52px] object-contain"
          />
        </li>
        <li>
          <img
            src="/images/logos_microsoft.svg"
            alt=""
            className="w-[70px] md:w-[250px] h-[25px] md:h-[52px] object-contain"
          />
        </li>
        <li>
          <img
            src="/images/simple-icons_sony.svg"
            alt=""
            className="w-[70px] md:w-[250px] h-[25px] md:h-[52px] object-cover"
          />
        </li>
        <li>
          <img
            src="/images/simple-icons_samsung.svg"
            alt=""
            className="w-[70px] md:w-[250px] h-[25px] md:h-[52px] object-cover"
          />
        </li>
        <li>
          <img
            src="/images/slack.svg"
            alt=""
            className="w-[70px] md:w-[250px] h-[25px] md:h-[52px] object-contain"
          />
        </li>
      </ul>
      <button className="text-[16px] leading-[16px] w-[200px] rounded-full py-[15px] px-[30px] md:px-[34px] bg-accent-blue text-white border-none">
        Our full repertorie
      </button>
    </div>
  );
};

export default Companies;

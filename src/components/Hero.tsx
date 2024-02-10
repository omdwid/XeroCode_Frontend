const Card = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-[90%] md:w-[40%]">
      <img
        src={image}
        alt=""
        className="object-contain w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
      />
      <div className="mt-[15px] md:mt-[35px]">
        <h2 className="text-[1.25rem] md:text-[1.75rem] font-[500]">{title}</h2>
        <p className="text-primary-100 mt-[8px] font-[400] text-[0.75rem] md:text-[1rem] leading-[1.5rem]">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="h-[450px] md:h-[750px] relative bg-gradient0 bg-cover">
        {/* issue with the image on mobile */}
        <img
          src="/images/pexels-canva-studio-31532011.png"
          alt="homeimage"
          className="object-cover h-[410px] w-full md:h-full absolute md:-z-50 top-0 right-0 brightness-50 blur-[1.5px]"
        />
        <div className="absolute left-[25px] md:left-[60px] top-[30px] md:top-[135px] w-[330px] md:w-[490px] flex flex-col gap-[25px] md:ga3rem8px] text-white md:text-primary-200">
          <div className="flex flex-col gap-[34px]">
            <h2 className="text-[0.75rem] md:text-[1.25rem] font-[600] text-gradient1 tracking-[0.1em] leading-[0.875rem] md:leading-[23px] font-roboto">
              TECH SERVICES
            </h2>
            <h1 className="text-[2.5rem] leading-[3rem] font-bolder md:text-[4rem] md:leading-[80px]">
              TechSynergy: Innovate, Create, Elevate
            </h1>
            <p className="text-[0.875rem] leading-[0.875rem] md:text-[1.25rem] font-[500] ">
              Unlocking Possibilities, One Code at a Time
            </p>
          </div>
          <button className="w-[170px] cursor-pointer font-[400] text-[0.875rem] md:text-[1rem] border-none px-[30px] md:px-[34px] py-[15px] md:py-[18px] rounded-full text-white bg-accent-green">
            See Projects
          </button>
        </div>
      </div>
      <div className="md:mt-[70px] md:pl-0 mb-[70px] md:mb-[70px]">
        <h1 className="mx-auto font-[500] w-[70%] md:w-fit text-[1.5rem] md:text-[2rem] leading-[43px] md:leading-[60px]">
          We have multidisciplinary teams to meet any{" "}
          <span className="text-gradient2">challenge.</span>
        </h1>
        <div className="w-[90%] flex flex-col items-center md:flex-row gap-[20px] px-[25px] md:gap-[100px] md:px-[64px] py-[2rem] mt-[45px] rounded-[36px] shadow-xl mx-auto">
          <Card
            image="/images/monitor.svg"
            title="Front-end"
            desc="Our frontend developers understand the delicate balance between aesthetics and functionality. "
          />
          <Card
            image="/images/simcard.svg"
            title="Back-end"
            desc="Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs."
          />
          <Card
            image="/images/driver.svg"
            title="Data Analytics"
            desc="Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

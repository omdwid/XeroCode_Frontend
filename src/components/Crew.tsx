const crew = [
  {
    image: "/images/crew1.png",
    // role: ""
  },
  {
    image: "/images/crew2.png",
    // role: ""
  },
  {
    image: "/images/crew3.png",
    // role: ""
  },
  {
    image: "/images/crew4.png",
    // role: ""
  },
  {
    image: "/images/crew5.png",
    // role: ""
  },
];

const CrewCard = ({ image }: { image: string }) => {
  return (
    <div className="w-[152px] md:w-[210px] h-[220px] md:h-[300px]">
      <img src={image} alt="crewImage" className="object-cover" />
    </div>
  );
};

const Crew = () => {
  return (
    <div className="mt-[66px] md:mt-[130px]">
      <div className="flex flex-wrap md:flex-nowrap m-auto w-[75%] md:w-fit">
        {crew.map((c, i) => {
          return <CrewCard image={c.image} key={i} />;
        })}
      </div>
      <h1 className="text-center mt-[60px] text-[25px] md:text-[40px] leading-[60px] font-[500]">
        Let's Form Your Crew.
      </h1>
      <div className="w-fit mx-auto mt-[60px]">
        <button className="text-[1rem] leading-[1rem] w-[200px] rounded-full py-[15px] px-[30px] md:px-[34px] bg-accent-blue text-white border-none">
          Schedule a Call
        </button>
      </div>
      <div className="relative mt-[70px] md:my-[150px] px-[20px] md:px-[50px]">
        <img
          src="/images/Intersect.svg"
          alt=""
          className="absolute left-1/2 transform-x-by-50 -bottom-[110px] md:-bottom-[220px]"
        />
        <div className="bg-gradient2 h-[630px] rounded-[36px] pt-[100px]">
          <div className="w-[90%] md:w-[90%] mx-auto">
            <h1 className="font-[600] text-center text-[32px] md:text-[48px] leading-[48px] md:leading-[68px] text-white">
              Ready to Transform Your Vision into Reality? Let's Get Started!
            </h1>
            <div className="w-fit mt-[35px] mx-auto">
              <button className="text-[1rem] leading-[1rem] w-[170px] md:w-[200px] rounded-full py-[15px] px-[25px] md:px-[34px] text-accent-blue border-none bg-white">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;

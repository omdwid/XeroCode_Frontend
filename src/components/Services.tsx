const services = [
  {
    icon: "/images/document-code.svg",
    title: "Custom Software Development",
    desc: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: "/images/setting-5.svg",
    title: "QA and Testing",
    desc: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: "/images/data.svg",
    title: "AI and Data Science",
    desc: "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
  },
  {
    icon: "/images/brush.svg",
    title: "UX/UI Design",
    desc: "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
  },
  {
    icon: "/images/mobile.svg",
    title: "Mobile App Development",
    desc: "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
  },
  {
    icon: "/images/shapes.svg",
    title: "Platform and Infrastructure",
    desc: "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
  },
];

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-around h-[280px] md:h-[320px] min-w-[220px] md:w-[380px] shadow-xl rounded-[36px] px-[20px] md:px-[30px] pt-[20px] md:py-[35px]">
      <img src={icon} alt="" className="w-[36px] h-[36px]" />
      <div className="">
        <h2 className="text-[1.25rem] md:text-[1.75rem] leading-[30px] font-[500]">
          {title}
        </h2>
        <p className="mt-[15px] md:mt-[20px] font-[400] leading-[17px] md:leading-[1.5rem] text-[0.687rem] md:text-[1rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-[30px] md:gap-[80px] py-[35px] md:py-[125px]">
      <div className="w-[95%] md:w-[60%] flex gap-[18px]">
        <img
          src="/images/Vector 6-1.svg"
          alt=""
          className="w-[66px] md:w-[90px] h-[60px] md:h-[80px]"
        />
        <h1 className="font-[500] text-[1.5rem] md:text-[2.5rem] leading-[43px] md:leading-[60px]">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </h1>
      </div>
      <div className="flex md:flex-wrap gap-[35px] md:gap-[50px] px-[10px] md:px-[100px] py-[10px] w-screen overflow-hidden overflow-x-scroll">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Expertise Across the Tech Spectrum",
    desc: "Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.",
  },
  {
    title: "Proven Track Record of Success:",
    desc: "Our portfolio is a testament to our ability to deliver impactful results.",
    color: "green",
  },
  {
    title: "Collaborative Approach, Transparent Communication:",
    desc: "We believe in working hand-in-hand with our clients.",
  },
  {
    title: "Tailored Solutions for Your Unique Needs:",
    desc: "We understand that no two projects are alike.",
    color: "blue",
  },
];

const FeatureCard = ({
  color,
  title,
  description,
}: {
  color: string | undefined;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`w-[280px] md:w-[300px] h-[170px] md:h-[230px] shadow-xl rounded-[36px] px-[20px] md:px-[25px] py-[25px] md:py-[35px] ${
        color === "green" && "bg-gradient1 text-white"
      } ${color === "blue" && "bg-gradient2 text-white"}`}
    >
      <h2 className="text-[18px] md:text-[24px] font-[500] leading-[24px] md:leading-[32px]">
        {title}
      </h2>
      <p className="mt-[20px] font-[400] leading-[18px] md:leading-[24px] text-[12px] md:text-[16px]">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="md:mt-[35px] mx-[25px] md:mx-[50px] min-h-[640px] flex flex-col items-center overflow-hidden bg-secondary rounded-[36px] pt-[70px] md:pt-[80px] pb-[50px] relative">
      <img
        src="/images/Vector 6.svg"
        alt=""
        className="opacity-0 md:opacity-100 absolute top-[35px] left-[45px]"
      />
      <h2 className="font-[500] text-[26px] md:text-[40px] leading-[60px] text-center w-[80%]">
        Choose Us: Your Path to Innovation and{" "}
        <span className="text-gradient3">Success</span>
      </h2>
      <Carousel
        className="relative mt-[40px]"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="ml-[80px]">
          {features.map((feature) => {
            return (
              <CarouselItem
                className="basis-1/3 md:basis-1/3 ml-[10px]"
                key={feature.title}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.desc}
                  color={feature.color}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute bottom-[-100px] left-[45%] flex gap-[20px]">
          <CarouselPrevious className="bg-white border-none" />
          <CarouselNext className="bg-white border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default Features;

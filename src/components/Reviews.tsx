import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    stars: 5,
    title: '"Exceptional Solutions, Exceeded Expectations!"',
    desc: '"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."',
    writer: "Mary Jhonson",
    writerDesc: "CEO of TechCraft Solutions",
    writerLogo: "/images/Loom.svg",
  },
  {
    stars: 5,
    title: '"Transformed Our Business with Innovative Tech!"',
    desc: "\"We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.\"",
    writer: "Mark Williams",
    writerDesc: "COO of InnovateNow Inc",
    writerLogo: "/images/Imagotipo 1 PNG 2.svg",
  },
  {
    stars: 5,
    title: '"Sculpted User Experiences Beyond Imagination!"',
    desc: '"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."',
    writer: "Emily Clark",
    writerDesc: "CMO of Visionary Apps",
    writerLogo: "/images/Dovetail.svg",
  },
  {
    stars: 4,
    title: '"Sculpted User Experiences Beyond Imagination!"',
    desc: '"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."',
    writer: "Emily Clark",
    writerDesc: "CMO of Visionary Apps",
    writerLogo: "/images/Dovetail.svg",
  },
];

const ReviewCard = ({
  review,
}: {
  review: {
    title: string;
    stars: number;
    desc: string;
    writerLogo: string;
    writer: string;
    writerDesc: string;
  };
}) => {
  let starCount = "";
  for (let i = 0; i < review.stars; i++) {
    starCount += "⭐";
  }
  return (
    <div className="w-[260px] md:w-[390px] h-[350px] md:h-[530px] rounded-[15px] md:rounded-[22px] pt-[22px] md:pt-[35px] px-[22px] md:px-[35px] flex flex-col justify-between shadow-xl bg-white">
      <div>{starCount}</div>
      <div>
        <h3 className="text-[16px] md:text-[24px] leading-[24px] md:leading-[36px] font-sans font-[700]">
          {review.title}
        </h3>
        <p className="mt-[10px] font-[400] text-[12px] md:text-[18px] leading-[20px] md:leading-[30px] font-sans">
          {review.desc}
        </p>
      </div>
      <div className="flex gap-[15px] md:gap-[25px] border-solid border-t-neutral border-t-2 border-b-0 border-x-0 py-[10px] md:py-[20px]">
        <img
          src={review.writerLogo}
          alt=""
          className="w-[22px] h-[22px] md:w-fit md:h-fit"
        />
        <div>
          <p className="text-[14px] md:text-[20px] leading-[18px] md:leading-[27px] font-sans font-[700]">
            {review.writer}
          </p>
          <p className="text-[8px] md:text-[13px] leading-[18px] md:leading-[27px] font-sans font-[700]">
            {review.writerDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="mt-[100px] md:relative md:h-[1150px]">
      <img
        src="/images/Group 2.svg"
        alt=""
        className="mx-auto md:absolute md:top-0 md:left-0 md:w-[50%]"
      />
      <div className="mx-auto md:absolute h-fit md:h-[250px] w-[80%] md:w-[35%] md:right-[70px] md:top-[40px]">
        <h1 className="font-[500] text-[26px] md:text-[40px] leading-[40px] md:leading-[55px] text-center">
          We've stopped counting. Over 500 brands count on us.
        </h1>
        <p className="mt-[15px] md:mt-[40px] text-[12px] md:text-[20px] leading-[12px] md:leading-[25px] text-center">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </p>
      </div>
      <div className="md:absolute md:bottom-[0px] w-screen overflow-x-hidden h-[600px] md:h-[750px]">
        <Carousel
          className="relative min-h-[230px] mt-[40px]"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="ml-[80px]">
            {reviews.map((review, id) => {
              return (
                <CarouselItem
                  className="basis-1/2 md:basis-1/3 ml-[100px]"
                  key={id}
                >
                  <ReviewCard review={review} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="absolute bottom-[-100px] left-[35%] md:left-[50%] -translate-x-50 flex gap-[20px]">
            <CarouselPrevious className="bg-white border-none" />
            <CarouselNext className="bg-white border-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;

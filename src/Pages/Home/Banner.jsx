import s1 from "../../../public/assets/1.jpg";
import s2 from "../../../public/assets/2.jpg";
import s3 from "../../../public/assets/3.jpg";
import s4 from "../../../public/assets/4.png";

const slides = [
  {
    id: "slide1",
    image: s1,
    heading: "Empowering Communities Through Food Sharing!",
    text: "Join us in the fight against food waste! Connect with your community to share surplus food and make a difference today.",
    button1Text: "Discover More",
    prevSlide: "#slide4",
    nextSlide: "#slide2",
  },
  {
    id: "slide2",
    image: s2,
    heading: "Empowering Communities Through Food Sharing!",
    text: "Join us in the fight against food waste! Connect with your community to share surplus food and make a difference today.",
    button1Text: "Discover More",
    prevSlide: "#slide1",
    nextSlide: "#slide3",
  },
  {
    id: "slide3",
    image: s3,
    heading: "Empowering Communities Through Food Sharing!",
    text: "Join us in the fight against food waste! Connect with your community to share surplus food and make a difference today.",
    button1Text: "Discover More",
    prevSlide: "#slide2",
    nextSlide: "#slide4",
  },
  {
    id: "slide4",
    image: s4,
    heading: "Empowering Communities Through Food Sharing!",
    text: "Join us in the fight against food waste! Connect with your community to share surplus food and make a difference today.",
    button1Text: "Discover More",
    prevSlide: "#slide3",
    nextSlide: "#slide1",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full h-[500px]"
        >
          <img src={slide.image} className="w-full bg-cover" />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h1 className="text-3xl font-bold">{slide.heading}</h1>
              <p>{slide.text}</p>
              <div className="flex gap-5">
                <button className="btn bg-[#FC8A06] px-8 text-white text-lg">
                  {slide.button1Text}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 gap-5 left-10 right-10 bottom-0">
            <a href={slide.prevSlide} className="btn btn-circle">
              ❮
            </a>
            <a href={slide.nextSlide} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

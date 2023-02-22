import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import bg1 from "../../public/image/slider 4.jpeg";
import bg2 from "../../public/image/slider 4.jpeg";
import bg3 from "../../public/image/slider 2.jpeg";
import bg4 from "../../public/image/slider 4.jpeg";

import Image from "next/image";
function slider(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="bg-slate-500 h-2/6">
      <Carousel
        className="m-auto "
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={2000}
        centerMode={false}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="w-screen bg-red-300 flex-row object-cover ">
          <Image
            src={bg1}
            className="block object-cover h-full w-screen pointer-events-none "
            alt="hello  "
          />
          <h1 className="bg-slate-900 p-2 uppercase absolute text-7xl text-cyan-300 top-2/3 right-2/3 ">
            hello world
          </h1>
        </div>
        <div className="w-{100} h-{100} bg-red-300 flex object-cover pointer-events-none">
          <Image
            src={bg4}
            className="block object-cover max-w-full w-full h-full"
            alt="hello  "
          />
        </div>
        <div className="w-{100} h-{100} bg-red-300 flex object-cover">
          <Image
            src={bg3}
            className="block object-cover max-w-full w-full h-full"
            alt="hello  "
          />
        </div>
        <div className="w-{100} h-{100} bg-red-300 flex object-cover">
          <Image
            src={bg2}
            className="block object-cover max-w-full w-full h-full"
            alt="hello  "
          />
        </div>
        <div className="w-{100} h-{100} bg-red-300 flex object-cover">
          <Image
            src={bg1}
            className="block object-cover max-w-full w-full h-full"
            alt="hello  "
          />
        </div>
      </Carousel>
    </div>
  );
}

export default slider;

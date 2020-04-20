import React, { Component } from "react"
import Carousel from "react-multi-carousel";
import SkincareCaruselCard from "./skincareCaruselCard"
import "react-multi-carousel/lib/styles.css";


// https://www.w3schools.com/howto/howto_css_button_on_image.asp USE!
const SkincareCarusel = (props) => {
  //         partialVisible
  return (
    <div className="skincareMobileDiv">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={true}

        className=""
        containerClass="container"
        ssr={true} // means to render carousel on server-side.
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="skincareMobileCard"
        keyBoardControl
        minimumTouchDrag={20}

        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
              mouseDrag: false,
              touchDrag: true

            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <SkincareCaruselCard productName="test1" />
        <SkincareCaruselCard productName="test2" />
        <SkincareCaruselCard productName="test3" />
        <SkincareCaruselCard productName="test4" />
        <SkincareCaruselCard productName="test5" />
        <SkincareCaruselCard productName="test6" />
        <SkincareCaruselCard productName="test7" />



      </Carousel>
    </div>

  );
}




export default SkincareCarusel


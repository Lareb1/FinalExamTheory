import React from "react";

import { Img, Text } from "components";

const LandingPageOneMockupsweb = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[533px] inset-[0] justify-center m-auto"
          alt="body_One"
          src={props?.bodyimage}
        />
        <div className="absolute h-[505px] inset-[0] justify-center m-auto w-[97%] md:w-full">
          <div className="h-[505px] m-auto w-full">
            <Img
              className="absolute h-[505px] inset-[0] justify-center m-auto object-cover w-full"
              alt="screen_One"
              src={props?.screenimage}
            />
            {!!props?.rectangleseventytwo ? (
              <div className="absolute bg-gray-900_01 h-[60px] inset-x-[0] mx-auto top-[17%] w-[71%]"></div>
            ) : null}
          </div>
          {!!props?.text ? (
            <Text
              className="absolute left-[16%] md:text-5xl text-[90px] text-white-A700_01 top-[10%] tracking-[-2.40px]"
              size="txtInterSemiBold90WhiteA70001"
            >
              {props?.text}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

LandingPageOneMockupsweb.defaultProps = {
  bodyimage: "images/img_body_black_900_03.svg",
  screenimage: "images/img_screen_505x733.png",
};

export default LandingPageOneMockupsweb;

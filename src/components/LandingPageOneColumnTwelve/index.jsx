import React from "react";

import { Img, Text } from "components";

const LandingPageOneColumnTwelve = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-50 flex flex-col items-center justify-start p-[18px] rounded-[5px] w-full">
          <div className="flex flex-col items-start justify-start mb-12 w-[95%] md:w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl tracking-[-0.55px]"
                size="txtInterSemiBold22Bluegray900"
              >
                {props?.totalsales}
              </Text>
              <Img
                className="h-[23px] mt-[3px] w-[23px]"
                src="images/img_arrowleft_blue_gray_50.svg"
                alt="arrowleft"
              />
            </div>
            <Text
              className="leading-[26.00px] mt-3 text-blue_gray-900 text-lg tracking-[-0.30px] w-[68%] sm:w-full"
              size="txtInterRegular18"
            >
              {props?.checkouteachcolOne}
            </Text>
            <Img
              className="h-[145px] ml-8 md:ml-[0] mt-[73px]"
              src="images/img_activ.svg"
              alt="activ"
            />
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageOneColumnTwelve.defaultProps = {
  totalsales: "Total Sales",
  checkouteachcolOne: "Check out each collumn for more details",
};

export default LandingPageOneColumnTwelve;

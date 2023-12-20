import React from "react";

import { Img, Text } from "components";

const LandingPageOneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[19px] rounded-[5px] w-full">
          <div className="flex flex-col items-start justify-start mb-[9px] w-[97%] md:w-full">
            <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-[99%] md:w-full">
              <Text
                className="text-[22px] text-blue_gray-900 sm:text-lg md:text-xl tracking-[-0.55px]"
                size="txtInterSemiBold22Bluegray900"
              >
                {props?.activitytext}
              </Text>
              <Img
                className="h-[23px] mt-0.5 w-[23px]"
                alt="arrowleft"
                src={props?.arrowleftimage}
              />
            </div>
            <Text
              className="leading-[26.00px] ml-0.5 md:ml-[0] mt-[11px] text-blue_gray-900 text-lg tracking-[-0.30px] w-[67%] sm:w-full"
              size="txtInterRegular18"
            >
              {props?.checkouttext}
            </Text>
            <div className="h-[163px] md:h-[179px] ml-0.5 md:ml-[0] mt-[17px] relative w-[97%]">
              <div className="absolute bottom-[0] md:h-[150px] h-[152px] inset-x-[0] mx-auto w-full">
                <Img
                  className="absolute h-[150px] inset-[0] justify-center m-auto"
                  src="images/img_elementsplaceholder.svg"
                  alt="elementsplaceho"
                />
                {!!props?.base ? (
                  <div className="absolute bg-gray-300_01 h-[150px] inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                ) : null}
              </div>
              <Img
                className="absolute h-[162px] inset-[0] justify-center m-auto object-cover rounded w-full"
                alt="rectangleFiftyFour"
                src={props?.rectanglefiftyfourimage}
              />
            </div>
            <div className="flex flex-row gap-[55px] items-center justify-start mt-[18px] w-[72%] md:w-full">
              <div className="md:h-[55px] h-[57px] relative w-[44%]">
                <Img
                  className="absolute h-[22px] left-[0] top-[0] w-[22px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <div className="absolute flex flex-col gap-[13px] h-max inset-[0] justify-center m-auto w-full">
                  <Text
                    className="md:ml-[0] ml-[30px] text-base text-blue_gray-900 tracking-[-0.40px]"
                    size="txtInterSemiBold16Bluegray900"
                  >
                    {props?.totalsalestext}
                  </Text>
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
              </div>
              <div className="md:h-[55px] h-[57px] relative w-[30%]">
                <Img
                  className="absolute h-[22px] left-[0] top-[0] w-[22px]"
                  src="images/img_television.svg"
                  alt="television"
                />
                <div className="absolute flex flex-col gap-[13px] h-max inset-[0] justify-center m-auto w-full">
                  <Text
                    className="md:ml-[0] ml-[30px] text-base text-blue_gray-900 tracking-[-0.40px]"
                    size="txtInterSemiBold16Bluegray900"
                  >
                    {props?.profittext}
                  </Text>
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageOneColumn.defaultProps = {
  activitytext: "Activity",
  arrowleftimage: "images/img_arrowleft_blue_gray_50.svg",
  checkouttext: "Check out each collumn for more details",
  totalsalestext: "Total Sales",
  profittext: "Profit",
};

export default LandingPageOneColumn;

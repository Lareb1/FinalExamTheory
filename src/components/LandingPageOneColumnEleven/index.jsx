import React from "react";

import { Button, Img, Text } from "components";

const LandingPageOneColumnEleven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-50 flex flex-col items-center justify-start p-[19px] rounded-[5px] w-full">
          <div className="flex flex-col items-start justify-start mb-[9px] w-[95%] md:w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mb-1.5 text-[22px] text-blue_gray-900 sm:text-lg md:text-xl tracking-[-0.55px]"
                size="txtInterSemiBold22Bluegray900"
              >
                {props?.newstext}
              </Text>
              <Img
                className="h-[22px] mt-[11px] w-[22px]"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
            <Img
              className="h-[162px] sm:h-auto mt-[18px] object-cover rounded w-[99%] md:w-full"
              src="images/img_rectangle52.png"
              alt="rectangleFiftyTwo"
            />
            <Text
              className="leading-[26.00px] mt-3.5 text-blue_gray-900 text-lg tracking-[-0.30px] w-[99%] sm:w-full"
              size="txtInterRegular18"
            >
              {props?.createscreenstext}
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[140px] mt-[13px] rounded-[5px]"
              rightIcon={
                <div className="mt-[3px] mb-0.5 ml-[13px] bg-white-A700">
                  <Img src="images/img_arrowleft.svg" alt="arrow_left" />
                </div>
              }
              color="purple_800"
              size="sm"
              variant="fill"
            >
              <div className="!text-white-A700 font-inter font-semibold leading-[normal] text-[11.66px] text-right tracking-[-0.29px]">
                {props?.readmorebutton}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageOneColumnEleven.defaultProps = {
  newstext: "Daily News",
  createscreenstext:
    "Create screens directly in Method or add your images from Sketch…",
};

export default LandingPageOneColumnEleven;

import React from "react";

import { Button, Img, Line, List, Text } from "components";
import LandingPageOneColumn from "components/LandingPageOneColumn";
import LandingPageOneColumnEleven from "components/LandingPageOneColumnEleven";
import LandingPageOneColumnTwelve from "components/LandingPageOneColumnTwelve";
import LandingPageOneMockupsweb from "components/LandingPageOneMockupsweb";

const LandingpageOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="bg-black-900 flex flex-col md:gap-10 gap-36 items-end justify-start pb-[92px] w-full">
            <div className="md:h-[617px] h-[630px] md:px-5 relative w-full">
              <div className="absolute md:h-[617px] h-[630px] inset-y-[0] left-[0] my-auto w-[94%] md:w-full">
                <Img
                  className="absolute bottom-[0] h-[510px] left-[0] object-cover w-[22%]"
                  src="images/img_301.png"
                  alt="ThreeHundredOne"
                />
                <div className="absolute md:h-[617px] h-[626px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="absolute h-[617px] inset-[0] justify-center m-auto object-cover"
                    src="images/img_group87.png"
                    alt="groupEightySeven"
                  />
                  <div className="absolute bottom-[0] flex flex-col gap-[50px] items-center justify-start right-[18%] w-[57%]">
                    <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                      <Text
                        className="leading-[90.00px] md:text-5xl text-[90px] text-center text-white-A700_e5 tracking-[-3.00px] w-full"
                        size="txtInterSemiBold90"
                      >
                        <span className="text-white-A700_e5 font-inter font-semibold">
                          Web
                        </span>
                        <span className="text-gray-300 font-inter font-semibold">
                          3Makr
                        </span>
                        <span className="text-white-A700_e5 font-inter font-semibold">
                          {" "}
                          Redefining How You Create
                        </span>
                      </Text>
                      <Text
                        className="leading-[34.00px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_b2 tracking-[-0.40px] w-[63%] sm:w-full"
                        size="txtInterMedium30"
                      >
                        Unlock the blockchain potential to create Web3
                        Applications
                      </Text>
                    </div>
                    <Img
                      className="h-[83px] w-[82px]"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
              </div>
              <header className="absolute bg-black-900 flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-center ml-44 md:ml-[0] mr-[171px] my-[23px] w-4/5">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-4/5 md:w-full">
                    <div className="flex flex-col items-center justify-start w-[10%] md:w-full">
                      <Img
                        className="h-[46px] md:h-auto object-cover w-full"
                        src="images/img_logo3308b1b499.png"
                        alt="logo3308b1b499"
                      />
                    </div>
                    <ul className="flex flex-row sm:hidden items-start justify-between w-[49%] md:w-full common-row-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-50 tracking-[-0.40px]"
                        >
                          <Text size="txtInterSemiBold16">Web3Makr</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base hover:text-gray-50 text-white-A700_66 tracking-[-0.40px]"
                        >
                          <Text size="txtInterSemiBold16WhiteA70066">
                            White paper
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base hover:text-gray-50 text-white-A700_66 tracking-[-0.40px]"
                        >
                          <Text size="txtInterSemiBold16WhiteA70066">
                            Services
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base hover:text-gray-50 text-white-A700_66 tracking-[-0.40px]"
                        >
                          <Text size="txtInterSemiBold16WhiteA70066">Tool</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base hover:text-gray-50 text-white-A700_66 tracking-[-0.40px]"
                        >
                          <Text size="txtInterSemiBold16WhiteA70066">
                            Contact us
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[14%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group72.svg')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-start p-3.5 w-full"
                        style={{
                          backgroundImage: "url('images/img_group74.svg')",
                        }}
                      >
                        <Text
                          className="text-base text-center text-light_blue-400 tracking-[-0.40px]"
                          size="txtInterSemiBold16Lightblue400"
                        >
                          Start for free
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="md:h-[853px] h-[854px] md:px-5 relative w-[86%] md:w-full">
              <Img
                className="absolute h-[535px] object-cover right-[0] top-[1%] w-1/4"
                src="images/img_271.png"
                alt="TwoHundredSeventyOne"
              />
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto rounded-[42px] shadow-bs w-[83%]">
                <LandingPageOneMockupsweb
                  className="md:h-[853px] h-[854px] relative rounded-[42px] w-full"
                  bodyimage="images/img_body.svg"
                  screenimage="images/img_screen.png"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1385px] mt-[71px] mx-auto md:px-5 w-full">
            <div className="h-[58px] relative w-[10%] md:w-full">
              <div className="absolute bg-white-A700 h-[58px] inset-[0] justify-center m-auto w-[99%]"></div>
              <Img
                className="absolute h-[43px] inset-[0] justify-center m-auto object-cover w-[99%]"
                src="images/img_aavelogo.png"
                alt="aavelogo"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[42px] px-[3px] w-[14%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[58px] md:h-auto object-cover w-full"
                  src="images/img_f1df71e315e04.png"
                  alt="f1df71e315eFour"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[42px] px-0.5 w-[12%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <Img
                  className="h-[58px] md:h-auto object-cover w-full"
                  src="images/img_ethereum.png"
                  alt="ethereum"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[50px] w-[12%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start px-[5px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[58px] md:h-auto object-cover w-full"
                      src="images/img_5wkziqi.png"
                      alt="5wkziqi"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[34px] py-2.5 w-[14%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[37px] md:h-auto object-cover w-full"
                  src="images/img_8d6c8ff9e1714.png"
                  alt="8d6c8ff9e1714"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[42px] px-1.5 w-[11%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[58px] md:h-auto object-cover w-full"
                  src="images/img_7fb55e63b76e4.png"
                  alt="7fb55e63b76eFour"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[42px] w-[13%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[58px] md:h-auto object-cover w-full"
                  src="images/img_openseafulllogo.png"
                  alt="openseafulllogo"
                />
              </div>
            </div>
          </div>
          <div className="sm:h-[1355px] md:h-[2113px] h-[2452px] mt-[70px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex left-[0] w-[92%] md:w-full">
              <div className="h-[1285px] md:h-[2043px] my-auto w-3/4 md:w-full">
                <Img
                  className="h-[1285px] m-auto object-cover"
                  src="images/img_group111.png"
                  alt="group111"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[137px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group11.png')" }}
                >
                  <div className="bg-white-A700 flex flex-col items-center justify-start mb-[15px] mt-[31px] p-[30px] sm:px-5 w-[96%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start mb-1 w-[88%] md:w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start md:mt-0 mt-[76px] w-[48%] md:w-full">
                        <LandingPageOneColumnEleven className="flex flex-col items-center justify-start w-full" />
                        <LandingPageOneColumnTwelve className="flex flex-col items-center justify-start w-full" />
                      </div>
                      <List
                        className="flex flex-col gap-[22px] mb-[75px] w-[48%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <LandingPageOneColumn
                            className="flex flex-col items-center justify-start w-full"
                            arrowleftimage="images/img_arrowleft_yellow_800.svg"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <LandingPageOneColumn className="flex flex-col items-center justify-start w-full" />
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start ml-[-58.47px] my-auto w-[30%] z-[1]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                      <Text
                        className="leading-[74.00px] md:text-5xl text-[65px] text-gray-900 tracking-[-2.40px] w-full"
                        size="txtInterSemiBold65"
                      >
                        <>
                          Can be changed to customizable ready made web3 dapps
                          templates.{" "}
                        </>
                      </Text>
                      <div className="flex flex-col gap-10 items-start justify-start w-[68%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                            <div className="flex flex-row gap-[38px] items-center justify-start w-[89%] md:w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-400 tracking-[-0.55px]"
                                size="txtInterSemiBold32"
                              >
                                01
                              </Text>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.55px]"
                                size="txtInterMedium32"
                              >
                                NFT(ERC721).
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-start w-[44%] md:w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-400 tracking-[-0.55px]"
                                size="txtInterSemiBold32"
                              >
                                02
                              </Text>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.55px]"
                                size="txtInterMedium32"
                              >
                                DEFI
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-400 tracking-[-0.55px]"
                                size="txtInterSemiBold32"
                              >
                                03
                              </Text>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.55px]"
                                size="txtInterMedium32"
                              >
                                <>Smart Contracts</>
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-start w-[59%] md:w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-400 tracking-[-0.55px]"
                                size="txtInterSemiBold32"
                              >
                                04
                              </Text>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.55px]"
                                size="txtInterMedium32"
                              >
                                GameFi
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-start w-[73%] md:w-full">
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-400 tracking-[-0.55px]"
                                size="txtInterSemiBold32"
                              >
                                05
                              </Text>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.55px]"
                                size="txtInterMedium32"
                              >
                                <>Metaverse</>
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end p-3.5"
                          style={{
                            backgroundImage: "url('images/img_group38.svg')",
                          }}
                        >
                          <Text
                            className="text-base text-center text-gray-50 tracking-[-0.40px]"
                            size="txtInterSemiBold16"
                          >
                            Start building
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[91%]">
              <div className="sm:h-[1014px] md:h-[1186px] h-[1285px] relative w-full">
                <div
                  className="absolute bg-cover bg-no-repeat sm:h-[1014px] md:h-[1186px] h-[1285px] inset-y-[0] my-auto p-6 sm:px-5 right-[0] w-[77%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group12.svg')" }}
                >
                  <div className="absolute h-[925px] inset-[0] justify-center m-auto w-[73%] md:w-full">
                    <div className="h-[925px] m-auto w-full">
                      <div className="h-[925px] m-auto w-full">
                        <div className="h-[925px] m-auto w-full">
                          <div className="h-[925px] m-auto w-full">
                            <Img
                              className="h-[925px] m-auto object-cover w-full"
                              src="images/img_rectangle51.png"
                              alt="rectangleFiftyOne"
                            />
                            <Img
                              className="absolute bottom-[38%] h-[63px] left-[19%]"
                              src="images/img_user_gray_900_01.svg"
                              alt="user"
                            />
                            <Img
                              className="absolute bottom-[29%] h-[76px] left-[9%]"
                              src="images/img_user_gray_900_01.svg"
                              alt="user_One"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[29%] h-[126px] left-[13%]"
                            src="images/img_rectangle66.svg"
                            alt="rectangleSixtySix"
                          />
                        </div>
                        <div className="absolute bottom-[30%] flex flex-row gap-4 items-start justify-center left-[12%] w-[8%]">
                          <Img
                            className="h-[70px] mt-[49px]"
                            src="images/img_lightbulb.svg"
                            alt="lightbulb"
                          />
                          <Img
                            className="h-[71px] mb-12"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[27%] h-[26px] left-[5%]"
                        src="images/img_question.svg"
                        alt="question"
                      />
                    </div>
                    <div className="absolute bottom-[23%] flex flex-col gap-2 items-start justify-start left-[3%] w-[13%]">
                      <Img
                        className="h-[37px]"
                        src="images/img_maximize.svg"
                        alt="maximize"
                      />
                      <Img
                        className="h-[43px]"
                        src="images/img_rectangle65.svg"
                        alt="rectangleSixtyFive"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[4%] flex flex-col items-center justify-start pt-3 right-[2%] w-[89%]">
                    <div className="sm:h-[1002px] md:h-[1174px] h-[995px] relative w-full">
                      <div className="absolute sm:h-[1002px] h-[1007px] md:h-[1174px] inset-y-[0] left-[0] my-auto w-[93%] md:w-full">
                        <div className="absolute sm:h-[1002px] h-[1007px] md:h-[1174px] inset-y-[0] my-auto right-[0] w-[96%] md:w-full">
                          <div className="sm:h-[1002px] h-[1007px] md:h-[1174px] m-auto w-full">
                            <div className="absolute md:h-[781px] h-[831px] inset-x-[0] mx-auto top-[3%] w-full">
                              <div className="absolute md:h-[781px] h-[828px] inset-[0] justify-center m-auto w-full">
                                <div className="absolute bottom-[0] md:h-[781px] h-[791px] inset-x-[0] mx-auto w-full">
                                  <div className="absolute md:h-[666px] h-[778px] inset-y-[0] left-[0] my-auto w-[95%] md:w-full">
                                    <div className="absolute h-[666px] right-[0] top-[0] w-[88%] md:w-full">
                                      <div className="absolute bottom-[13%] md:h-[433px] h-[438px] inset-x-[0] mx-auto w-full">
                                        <div className="absolute h-[433px] inset-y-[0] left-[0] my-auto w-[81%] md:w-full">
                                          <Img
                                            className="absolute h-[433px] inset-y-[0] left-[0] my-auto object-cover"
                                            src="images/img_group.png"
                                            alt="group"
                                          />
                                          <Img
                                            className="absolute bottom-[3%] h-[314px] object-cover right-[0]"
                                            src="images/img_group_314x431.png"
                                            alt="group_One"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-[317px] object-cover right-[0] top-[0]"
                                          src="images/img_group_317x507.png"
                                          alt="group_Two"
                                        />
                                      </div>
                                      <div className="absolute flex flex-col gap-3 h-full inset-y-[0] justify-start left-[9%] my-auto w-[64%]">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[424px] items-start justify-end md:ml-[0] ml-[139px] p-2 w-[71%] md:w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group16.png')",
                                          }}
                                        >
                                          <Img
                                            className="h-[280px] md:h-auto md:ml-[0] ml-[108px] mt-32 object-cover"
                                            src="images/img_group_280x88.png"
                                            alt="group_Three"
                                          />
                                        </div>
                                        <Img
                                          className="h-[230px] md:h-auto object-cover"
                                          src="images/img_group_280x88.png"
                                          alt="group_Four"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[19%] h-[199px] left-[0] object-cover"
                                      src="images/img_group_317x507.png"
                                      alt="group_Five"
                                    />
                                    <Img
                                      className="absolute h-[142px] left-[15%] object-cover top-[14%]"
                                      src="images/img_group_142x138.png"
                                      alt="group_Six"
                                    />
                                    <Img
                                      className="absolute h-[231px] left-[4%] object-cover top-1/4"
                                      src="images/img_group_280x88.png"
                                      alt="group_Seven"
                                    />
                                    <Img
                                      className="absolute bottom-[0] h-[454px] object-cover right-[13%]"
                                      src="images/img_group16.png"
                                      alt="group_Eight"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-[180px] object-cover right-[21%] top-[8%]"
                                    src="images/img_group_280x88.png"
                                    alt="group_Nine"
                                  />
                                  <Img
                                    className="absolute h-[781px] inset-y-[0] my-auto object-cover right-[0]"
                                    src="images/img_group_280x88.png"
                                    alt="group_Ten"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat md:h-[497px] h-[768px] inset-x-[0] mx-auto p-[47px] md:px-10 sm:px-5 top-[0] w-[90%] md:w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group.png')",
                                  }}
                                >
                                  <div className="flex flex-row h-full items-start justify-between mt-[35px] w-[56%]">
                                    <Img
                                      className="h-[289px] md:h-auto mt-[172px] object-cover"
                                      src="images/img_group_289x89.png"
                                      alt="group_Eleven"
                                    />
                                    <div className="h-52 md:h-[146px] relative w-[52%]">
                                      <Img
                                        className="absolute bottom-[4%] h-[146px] left-[0] object-cover"
                                        src="images/img_group_289x89.png"
                                        alt="group_Twelve"
                                      />
                                      <Img
                                        className="absolute bottom-[0] h-[121px] object-cover right-[0]"
                                        src="images/img_group_121x150.png"
                                        alt="group_Thirteen"
                                      />
                                      <Img
                                        className="absolute h-[84px] left-[21%] object-cover top-[0]"
                                        src="images/img_group_142x138.png"
                                        alt="group_Fourteen"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[69px] left-[27%] object-cover top-[20%]"
                                    src="images/img_group_142x138.png"
                                    alt="group_Fifteen"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[209px] object-cover right-[32%]"
                                src="images/img_group_289x89.png"
                                alt="group_Sixteen"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[29%] h-[127px] object-cover right-[11%]"
                              src="images/img_group_289x89.png"
                              alt="group_Seventeen"
                            />
                            <Img
                              className="absolute bottom-[9%] h-[159px] left-[34%] object-cover"
                              src="images/img_group_280x88.png"
                              alt="group_Eighteen"
                            />
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[86%]">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[34px] w-[96%] md:w-full">
                                  <div className="md:h-[215px] h-[279px] relative w-[28%] md:w-full">
                                    <Img
                                      className="absolute bottom-[8%] h-[45px] left-[0] object-cover"
                                      src="images/img_vector.png"
                                      alt="vector"
                                    />
                                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[94%]">
                                      <Img
                                        className="h-[215px] md:h-auto object-cover w-full"
                                        src="images/img_rectangle.png"
                                        alt="rectangle"
                                      />
                                    </div>
                                    <Img
                                      className="absolute bottom-[0] h-[39px] object-cover right-[18%]"
                                      src="images/img_vector_39x42.png"
                                      alt="vector_One"
                                    />
                                  </div>
                                  <Img
                                    className="h-9 md:h-auto ml-16 md:ml-[0] md:mt-0 mt-[183px] object-cover"
                                    src="images/img_vector_36x30.png"
                                    alt="vector_Two"
                                  />
                                  <div className="flex flex-col md:gap-10 gap-[71px] justify-start ml-16 md:ml-[0] md:mt-0 mt-[87px] w-[52%] md:w-full">
                                    <Img
                                      className="h-[54px] md:h-auto md:ml-[0] ml-[43px] object-cover"
                                      src="images/img_vector_54x76.png"
                                      alt="vector_Three"
                                    />
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Img
                                        className="h-[35px] md:h-auto mt-[173px] object-cover"
                                        src="images/img_vector_36x30.png"
                                        alt="vector_Four"
                                      />
                                      <div className="flex flex-col items-center justify-start mb-[7px]">
                                        <Img
                                          className="h-[200px] md:h-auto object-cover w-full"
                                          src="images/img_rectangle_200x158.png"
                                          alt="rectangle_One"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-9 md:h-auto md:ml-[0] ml-[518px] mt-[33px] object-cover"
                                  src="images/img_vector_36x52.png"
                                  alt="vector_Five"
                                />
                                <div className="flex flex-row sm:gap-10 gap-[388px] items-start justify-start mt-[54px] w-[70%] md:w-full">
                                  <Img
                                    className="h-[81px] md:h-auto mt-7 object-cover"
                                    src="images/img_vector_54x76.png"
                                    alt="vector_Six"
                                  />
                                  <Img
                                    className="h-[68px] md:h-auto object-cover"
                                    src="images/img_vector.png"
                                    alt="vector_Seven"
                                  />
                                </div>
                                <div className="flex flex-row gap-[76px] items-start justify-start md:ml-[0] ml-[146px] mt-[51px] w-[41%] md:w-full">
                                  <Img
                                    className="h-[85px] md:h-auto mt-[3px] object-cover"
                                    src="images/img_vector_36x52.png"
                                    alt="group_Nineteen"
                                  />
                                  <div className="flex flex-col gap-8 justify-start w-[63%]">
                                    <Img
                                      className="h-6 md:h-auto md:ml-[0] ml-[46px] object-cover"
                                      src="images/img_vector.png"
                                      alt="vector_Eight"
                                    />
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <Img
                                        className="h-[241px] md:h-auto object-cover w-full"
                                        src="images/img_rectangle_241x200.png"
                                        alt="rectangle_Two"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start left-[13%] my-auto p-[169px] md:px-10 sm:px-5 w-[69%]"
                            style={{
                              backgroundImage: "url('images/img_group15.svg')",
                            }}
                          >
                            <Img
                              className="h-[70px] md:h-auto mb-[52px] mt-[87px] object-cover"
                              src="images/img_group_70x46.png"
                              alt="group_Twenty"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[8%] h-[197px] left-[16%] object-cover"
                          src="images/img_group_197x139.png"
                          alt="group_TwentyOne"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-[321px] items-end justify-start left-[0] p-[9px] top-[0] w-[77%]"
                          style={{
                            backgroundImage: "url('images/img_group17.png')",
                          }}
                        >
                          <Img
                            className="h-[106px] md:h-auto mb-[196px] mr-[132px] object-cover"
                            src="images/img_group_106x51.png"
                            alt="group_TwentyTwo"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[27%] flex flex-col items-center justify-start right-[0] w-[21%]">
                        <Img
                          className="h-[229px] md:h-auto object-cover w-full"
                          src="images/img_rectangle_229x216.png"
                          alt="rectangle_Three"
                        />
                      </div>
                      <div className="absolute flex flex-col items-center justify-start left-[15%] top-[27%] w-[16%]">
                        <Img
                          className="h-[197px] md:h-auto object-cover w-full"
                          src="images/img_rectangle_197x158.png"
                          alt="rectangle_Four"
                        />
                      </div>
                      <Img
                        className="absolute h-[41px] left-[0] object-cover top-[35%]"
                        src="images/img_group_70x46.png"
                        alt="group_TwentyThree"
                      />
                      <Img
                        className="absolute h-[30px] object-cover right-[6%] top-[45%]"
                        src="images/img_vector_30x46.png"
                        alt="vector_Nine"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[30%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="leading-[65.00px] md:text-5xl text-[65px] text-black-900_02 tracking-[-2.40px]"
                        size="txtInterSemiBold65Black90002"
                      >
                        <>
                          Create
                          <br />
                          your own Web3 Masterpiece{" "}
                        </>
                      </Text>
                      <Text
                        className="leading-[34.00px] mt-10 md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.30px] w-[97%] sm:w-full"
                        size="txtInterMedium32"
                      >
                        Most entrepreneurs want to create their own web3 sites,
                        unfortunately, they dont know much about creating one.
                        Web3Makr makes it easier for newbies to create a
                        blockchain-based collectibles solution without the
                        hassle of leaving their favorite creation tools and by
                        simple drag and drop functionality.
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end mt-[50px] p-3.5"
                        style={{
                          backgroundImage: "url('images/img_group38.svg')",
                        }}
                      >
                        <Text
                          className="text-base text-center text-gray-50 tracking-[-0.40px]"
                          size="txtInterSemiBold16"
                        >
                          Start building
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start mt-[7px] w-full">
            <div className="h-[1295px] md:h-[1545px] md:px-5 relative w-full">
              <Img
                className="h-[1295px] m-auto object-cover w-full"
                src="images/img_362.png"
                alt="ThreeHundredSixtyTwo"
              />
              <div className="absolute sm:h-[1073px] h-[1147px] md:h-[1545px] inset-[0] justify-center m-auto w-[79%] md:w-full">
                <Img
                  className="absolute h-[434px] right-[2%] top-[0]"
                  src="images/img_group136.svg"
                  alt="group136"
                />
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[109px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start">
                      <Text
                        className="md:text-5xl text-[65px] text-white-A700_e5 tracking-[-2.40px]"
                        size="txtInterSemiBold65WhiteA700e5"
                      >
                        <>The Future of Web3 NoCode </>
                      </Text>
                      <Text
                        className="leading-[34.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-50_01 text-center tracking-[-0.30px] w-full"
                        size="txtInterMedium32Bluegray5001"
                      >
                        <>
                          Web3Makr allows you to incorporate top ranked
                          blockchain platforms into your work through the drag
                          and drop feature.
                        </>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[42px] w-[13%] md:w-full">
                        <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-400 tracking-[-1.50px]"
                              size="txtInterBold32"
                            >
                              Multi-chain
                            </Text>
                          </div>
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_01 tracking-[-1.50px]"
                            size="txtInterSemiBold32Bluegray70001"
                          >
                            Dashboard
                          </Text>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-400 tracking-[-1.50px]"
                              size="txtInterSemiBold32Gray400"
                            >
                              Tool
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[69%] md:w-full">
                        <div className="md:gap-5 gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                          <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                            <div className="border-[12px] border-solid border-yellow-900_01 flex flex-col h-[300px] items-center justify-start p-[38px] sm:px-5 rounded-[50%] w-[300px]">
                              <div className="bg-gray-50 flex flex-col h-56 items-center justify-start p-[31px] sm:px-5 rounded-[50%] w-56">
                                <Img
                                  className="h-[162px] md:h-auto object-cover rounded-[72px] w-[162px]"
                                  src="images/img_metamaskfox1.png"
                                  alt="metamaskfoxOne"
                                />
                              </div>
                            </div>
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 tracking-[-0.55px]"
                              size="txtInterMedium32Gray50"
                            >
                              <>Metamask Support</>
                            </Text>
                          </div>
                          <div className="md:h-[303px] sm:h-[326px] h-[364px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[63px] inset-x-[0] items-center justify-start mx-auto w-3/4">
                              <div className="flex flex-col h-56 items-center justify-start w-56">
                                <Img
                                  className="h-56 md:h-auto rounded-[50%] w-56"
                                  src="images/img_shutterstock1.png"
                                  alt="shutterstockOne"
                                />
                              </div>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 tracking-[-0.55px]"
                                size="txtInterMedium32Gray50"
                              >
                                <>NFT Search</>
                              </Text>
                            </div>
                            <div className="absolute border-[12px] border-cyan-300 border-solid h-[300px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[300px]"></div>
                          </div>
                          <div className="md:h-[303px] sm:h-[329px] h-[367px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[66px] inset-x-[0] items-center justify-start mx-auto w-[92%]">
                              <Img
                                className="h-56 md:h-auto rounded-[50%] w-56"
                                src="images/img_moralis33564logo.png"
                                alt="moralis33564log"
                              />
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 tracking-[-0.55px]"
                                size="txtInterMedium32Gray50"
                              >
                                <>Moralis Integration</>
                              </Text>
                            </div>
                            <div className="absolute border-[12px] border-lime-A700 border-solid h-[300px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[300px]"></div>
                          </div>
                          <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                            <div className="border-[12px] border-gray-700 border-solid flex flex-col h-[300px] items-center justify-start p-[38px] sm:px-5 rounded-[50%] w-[300px]">
                              <div className="bg-gray-50 flex flex-col h-56 items-center justify-end p-[29px] sm:px-5 rounded-[50%] w-56">
                                <Img
                                  className="h-[165px] md:h-auto object-cover rounded-[76px] w-[165px]"
                                  src="images/img_0yqbrinqx0zrulvs0.png"
                                  alt="0yqbrinqx0zrulv"
                                />
                              </div>
                            </div>
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 tracking-[-0.55px]"
                              size="txtInterMedium32Gray50"
                            >
                              <>Solidity</>
                            </Text>
                          </div>
                          <div className="md:h-[303px] sm:h-[327px] h-[367px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto w-3/4">
                              <div className="bg-gray-50 flex flex-col h-56 items-center justify-start p-[15px] rounded-[50%] w-56">
                                <Img
                                  className="h-[164px] md:h-auto my-[15px] object-cover rounded-[82px] w-full"
                                  src="images/img_pastedimage040.png"
                                  alt="pastedimage040"
                                />
                              </div>
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 tracking-[-0.55px]"
                                size="txtInterMedium32Gray50"
                              >
                                <>Ether.js</>
                              </Text>
                            </div>
                            <div className="absolute border-[12px] border-deep_orange-A200 border-solid h-[300px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[300px]"></div>
                          </div>
                          <div className="md:h-[303px] sm:h-[327px] h-[365px] relative w-full">
                            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-16 inset-x-[0] items-center justify-start mx-auto w-3/4">
                              <Img
                                className="h-56 md:h-auto rounded-[50%] w-56"
                                src="images/img_xqkaofrg400x400.png"
                                alt="xqkaofrg400x400"
                              />
                              <Text
                                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-50 tracking-[-0.55px]"
                                size="txtInterMedium32Gray50"
                              >
                                <>Hardhat</>
                              </Text>
                            </div>
                            <div className="absolute border-[12px] border-solid border-yellow-A700 h-[300px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[300px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1240px] md:h-[1615px] md:px-5 relative w-full">
            <div className="bg-purple-800 flex flex-col h-full items-end justify-end m-auto md:pl-10 sm:pl-5 pl-[84px] py-[84px] w-full">
              <Img
                className="h-1 mt-[1068px]"
                src="images/img_group104.svg"
                alt="group104"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[63px] inset-x-[0] justify-start mx-auto w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[173px]">
                <Text
                  className="text-[22px] text-center sm:text-lg text-white-A700_99 md:text-xl tracking-[-0.55px]"
                  size="txtInterSemiBold22"
                >
                  Testimonials
                </Text>
                <Text
                  className="mt-[23px] md:text-5xl text-[65px] text-white-A700_e5 tracking-[-2.40px]"
                  size="txtInterSemiBold65WhiteA700e5"
                >
                  What People Are Saying
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700_e5 tracking-[-0.30px]"
                  size="txtInterMedium32WhiteA700e5"
                >
                  Multi chain interoperability
                </Text>
              </div>
              <div className="md:h-[1402px] sm:h-[755px] h-[915px] relative w-full">
                <Img
                  className="absolute bottom-[0] h-[738px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_501.png"
                  alt="FiveHundredOne"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-start left-[10%] top-[0] w-3/4">
                  <Img
                    className="h-[755px] md:h-auto rounded-[50%] w-[755px]"
                    src="images/img_image.png"
                    alt="image_FortyTwo"
                  />
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50_a2 tracking-[-1.60px]"
                    size="txtInterMedium32Gray50a2"
                  >
                    <>
                      “Web3makr provides a solution for web3 developers and
                      beginners by integrating the drag and drop feature for
                      properties like NFT Search Marketplace, Wallet
                      Integration, downloadable source code, and Smart Contract.
                      Aside from this, the software also provides its users with
                      ready-made and customizable templates that users can use
                      when creating their web3 applications.”
                      <br />
                      <br />- Sophie Adderiy
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-start justify-start max-w-[1384px] mt-44 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="leading-[74.00px] md:text-5xl text-[65px] text-gray-900 tracking-[-2.40px] w-full"
                size="txtInterSemiBold65"
              >
                Frequently asked questions
              </Text>
              <Text
                className="leading-[40.00px] mt-1 md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.30px] w-[97%] sm:w-full"
                size="txtInterMedium32"
              >
                Have a question? Check out our frequently asked questions to
                find your answer.
              </Text>
            </div>
            <List className="flex flex-col w-3/5" orientation="vertical">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.50px]"
                      size="txtInterSemiBold20"
                    >
                      What is Web3Makr and what does it do?
                    </Text>
                    <Img
                      className="h-6 sm:mt-0 mt-0.5"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <Line className="bg-gray-300_01 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[43px] w-[98%] md:w-full">
                    <Text
                      className="mb-3 text-gray-900 text-xl tracking-[-0.50px]"
                      size="txtInterSemiBold20"
                    >
                      Why should I use Web3Mkr?
                    </Text>
                    <Img
                      className="h-6 mt-[13px]"
                      src="images/img_roundcontent.svg"
                      alt="roundcontent"
                    />
                  </div>
                  <Text
                    className="leading-[30.00px] mt-[7px] text-gray-500 text-xl tracking-[-0.20px]"
                    size="txtInterMedium20"
                  >
                    <>
                      Web3makr provides a solution for web3 developers and
                      beginners by integrating the drag and drop feature for
                      properties like NFT Search Marketplace, Wallet
                      Integration, downloadable source code, and Smart Contract.
                      Aside from this, the software also provides its users with
                      ready-made and customizable templates that users can use
                      when creating their web3 applications.
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                    <Text
                      className="mb-0.5 text-gray-900 text-xl tracking-[-0.50px]"
                      size="txtInterSemiBold20"
                    >
                      What is Web3Makr and what does it do?
                    </Text>
                    <Img
                      className="h-6 sm:mt-0 mt-[3px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <Line className="bg-gray-300_01 h-px w-full" />
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-12 justify-start mt-[156px] w-full">
            <Text
              className="md:ml-[0] ml-[178px] md:text-5xl sm:text-[42px] text-[56px] text-blue_gray-900 tracking-[-2.40px]"
              size="txtInterSemiBold56"
            >
              Our blog
            </Text>
            <div className="md:h-[2346px] h-[851px] overflow-auto md:px-5 relative w-full">
              <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[851px] sm:h-auto object-cover w-full"
                    src="images/img_521.png"
                    alt="FiveHundredTwentyOne"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start pb-7 rounded-lg w-[24%] md:w-full">
                    <Img
                      className="h-[311px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_base.png"
                      alt="base"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[85%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Text
                          className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                          size="txtInterRegular14"
                        >
                          Product
                        </Text>
                        <div className="bg-blue_gray-800_87 h-1 rounded-[50%] w-1"></div>
                        <Text
                          className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                          size="txtInterRegular14"
                        >
                          10 min read
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <Text
                          className="leading-[36.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[-0.55px] w-[97%] sm:w-full"
                          size="txtInterSemiBold32Bluegray900"
                        >
                          6 Creative Ways to Use Repeat Grids in Adobe XD
                        </Text>
                        <Text
                          className="leading-[26.00px] text-gray-500_01 text-xl tracking-[-0.20px] w-full"
                          size="txtInterRegular20"
                        >
                          <>
                            Create screens directly in Method or
                            <br />
                            add your imagesfrom Sketch or Figma.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-9 grid md:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="md:h-[557px] h-[559px] sm:ml-[0] relative w-full">
                      <div className="absolute bg-white-A700 flex flex-col gap-1.5 h-full inset-[0] items-center justify-center m-auto p-[19px] rounded-lg w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start mt-[308px] w-[98%] md:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                            <Text
                              className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                              size="txtInterRegular14"
                            >
                              Design
                            </Text>
                            <div className="bg-blue_gray-800_87 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                              size="txtInterRegular14"
                            >
                              6 min read
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start pb-[7px] w-full">
                            <Text
                              className="leading-[36.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[-0.55px] w-full"
                              size="txtInterSemiBold32Bluegray900"
                            >
                              <>
                                Analytics Features <br />
                                to Improve User Experience{" "}
                              </>
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[26.00px] mb-[9px] text-gray-500_01 text-xl tracking-[-0.20px] w-[94%] sm:w-full"
                          size="txtInterRegular20"
                        >
                          <>
                            Create screens directly in Method or
                            <br />
                            add your imagesfrom Sketch or Figma.{" "}
                          </>
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[311px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-full"
                        src="images/img_base_311x432.png"
                        alt="base"
                      />
                    </div>
                    <div className="md:h-[556px] h-[559px] sm:ml-[0] relative w-full">
                      <div className="absolute bg-white-A700 flex flex-col gap-1.5 h-full inset-[0] items-start justify-center m-auto p-7 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start ml-0.5 md:ml-[0] mt-[299px] w-[94%] md:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                            <Text
                              className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                              size="txtInterRegular14"
                            >
                              Marketing
                            </Text>
                            <div className="bg-blue_gray-800_87 h-1 rounded-[50%] w-1"></div>
                            <Text
                              className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                              size="txtInterRegular14"
                            >
                              9 min read
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="leading-[38.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[-0.55px] w-full"
                              size="txtInterSemiBold32Bluegray900"
                            >
                              The Design Side Of Conversion Rate Optimization
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[26.00px] ml-0.5 md:ml-[0] text-gray-500_01 text-xl tracking-[-0.20px] w-[99%] sm:w-full"
                          size="txtInterRegular20"
                        >
                          <>
                            Create screens directly in Method or
                            <br />
                            add your imagesfrom Sketch or Figma.{" "}
                          </>
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[311px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-full"
                        src="images/img_base_1.png"
                        alt="base"
                      />
                    </div>
                  </List>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start pb-7 rounded-lg w-[24%] md:w-full">
                    <Img
                      className="h-[311px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_base_2.png"
                      alt="base_One"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[86%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                        <Text
                          className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                          size="txtInterRegular14"
                        >
                          Marketing
                        </Text>
                        <div className="bg-blue_gray-800_87 h-1 rounded-[50%] w-1"></div>
                        <Text
                          className="text-blue_gray-800_87 text-sm tracking-[-0.40px] w-auto"
                          size="txtInterRegular14"
                        >
                          9 min read
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="leading-[36.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[-0.55px] w-[95%] sm:w-full"
                          size="txtInterSemiBold32Bluegray900"
                        >
                          The Design Side Of Conversion Rate Optimization
                        </Text>
                        <Text
                          className="leading-[26.00px] text-gray-500_01 text-xl tracking-[-0.20px] w-full"
                          size="txtInterRegular20"
                        >
                          <>
                            Create screens directly in Method or
                            <br />
                            add your imagesfrom Sketch or Figma.{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1316px] mt-[167px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[58%] md:w-full">
              <div className="flex flex-col items-center justify-start rounded-[28px] shadow-bs w-full">
                <LandingPageOneMockupsweb className="md:h-[533px] h-[534px] relative rounded-[28px] w-full" />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[33%] md:w-full">
              <Text
                className="leading-[100.00px] md:text-5xl text-[90px] text-gray-900 tracking-[-2.40px] w-full"
                size="txtInterSemiBold90Gray900"
              >
                Start a free trial today
              </Text>
              <Text
                className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.30px]"
                size="txtInterMedium32"
              >
                No credit card required.
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-start mt-[30px] p-3.5"
                style={{ backgroundImage: "url('images/img_group38.svg')" }}
              >
                <Text
                  className="text-base text-center text-gray-50 tracking-[-0.40px]"
                  size="txtInterSemiBold16"
                >
                  Start for free
                </Text>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[259px] items-center justify-start mt-[159px] pb-[15px] w-full"
            style={{ backgroundImage: "url('images/img_group20.svg')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[244px] items-center justify-end p-[23px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group87.png')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1658px] mt-[21px] mx-auto md:px-5 w-full">
                <Text
                  className="text-base text-white-A700_87 tracking-[-0.50px]"
                  size="txtInterRegular16"
                >
                  Copyright 2022 © Web3makr
                </Text>
                <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start mb-[76px] md:ml-[0] ml-[350px] w-[33%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[19%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[46px] md:h-auto object-cover w-full"
                        src="images/img_logo3308b1b499.png"
                        alt="logo3308b1b499_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-base text-gray-50 tracking-[-0.40px]"
                      size="txtInterSemiBold16"
                    >
                      Web3Makr
                    </Text>
                    <Text
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                      size="txtInterSemiBold16WhiteA70066"
                    >
                      White paper
                    </Text>
                    <Text
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                      size="txtInterSemiBold16WhiteA70066"
                    >
                      Services
                    </Text>
                    <Text
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                      size="txtInterSemiBold16WhiteA70066"
                    >
                      Tool
                    </Text>
                    <a
                      href="javascript:"
                      className="text-base text-white-A700_66 tracking-[-0.40px]"
                    >
                      <Text size="txtInterSemiBold16WhiteA70066">
                        Contact us
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-between md:ml-[0] ml-[427px] w-[8%] md:w-full">
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    size="xs"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconssocialsinstagram.svg"
                      alt="iconssocialsins"
                    />
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    size="xs"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconssocialstwitter.svg"
                      alt="iconssocialstwi"
                    />
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    size="xs"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconssocialsfacebook.svg"
                      alt="iconssocialsfac"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpageOnePage;

import React from "react";

import { Button, Img, Line, List, Text } from "components";
import SampleWireframeSamplelogo from "components/SampleWireframeSamplelogo";

const SampleWireframePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <SampleWireframeSamplelogo className="flex md:flex-1 flex-row font-comfortaa gap-3 items-start justify-center ml-20 md:ml-[0] md:mt-0 my-3.5 w-[8%] md:w-full" />
          <Text
            className="md:ml-[0] ml-[70px] md:mt-0 my-5 text-[15px] text-blue-500 text-center tracking-[-0.22px]"
            size="txtMontserratMedium15"
          >
            Features
          </Text>
          <Text
            className="ml-10 md:ml-[0] md:mt-0 my-5 text-[15px] text-blue-500 text-center tracking-[-0.22px]"
            size="txtMontserratMedium15"
          >
            Pricing
          </Text>
          <Text
            className="ml-10 md:ml-[0] md:mt-0 my-5 text-[15px] text-blue-500 text-center tracking-[-0.22px]"
            size="txtMontserratMedium15"
          >
            Community
          </Text>
          <a
            href="javascript:"
            className="ml-10 md:ml-[0] md:mt-0 my-5 text-[15px] text-blue-500 text-center tracking-[-0.22px]"
          >
            <Text size="txtMontserratMedium15">Support</Text>
          </a>
          <Button className="bg-white-A700 border border-blue-500 border-solid cursor-pointer font-medium font-montserrat leading-[normal] min-w-[130px] md:ml-[0] ml-[667px] md:mt-0 my-2.5 py-2.5 rounded-md text-[15px] text-blue-500 text-center tracking-[-0.22px]">
            Log in
          </Button>
          <Button className="bg-blue-500 cursor-pointer font-medium font-montserrat leading-[normal] min-w-[130px] ml-3 md:ml-[0] mr-20 md:mt-0 my-2.5 py-2.5 rounded-md text-[15px] text-center text-white-A700 tracking-[-0.22px]">
            Register
          </Button>
        </header>
        <div
          className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[960px] items-center justify-start p-36 md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_heroe.svg')" }}
        >
          <div className="flex flex-col items-center justify-start max-w-[1392px] mb-3 mt-[270px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue-500 flex flex-col h-[132px] items-center justify-start p-9 sm:px-5 rounded-[50%] w-[132px]">
                <Img
                  className="h-[59px] rounded-[3px] w-[59px]"
                  src="images/img_play.svg"
                  alt="play"
                />
              </div>
              <div className="flex flex-col items-center justify-start mt-[86px] pt-2.5 px-2.5 w-full">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center tracking-[-0.84px]"
                  size="txtMontserratRegular56"
                >
                  The largest community of photo enthusiasts
                </Text>
              </div>
              <Button className="bg-blue-500 cursor-pointer font-medium leading-[normal] min-w-[192px] mt-10 py-[15px] rounded-md text-[17px] text-center text-white-A700 tracking-[-0.26px]">
                Join Today
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1520px] mx-auto my-10 w-full">
            <Text
              className="leading-[72.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.72px] w-1/2 sm:w-full"
              size="txtMontserratRegular48"
            >
              Snap photos and share like never before
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-16 w-[71%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.36px]"
                size="txtMontserratBold24"
              >
                Sed ut perspiciatis
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.36px]"
                size="txtMontserratBold24"
              >
                Lorem ipsum dolor
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[25px] w-full">
              <Text
                className="leading-[30.00px] text-black-900_cc text-lg tracking-[-0.27px]"
                size="txtMontserratRegular18"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </Text>
              <Text
                className="leading-[30.00px] text-black-900_cc text-lg tracking-[-0.27px]"
                size="txtMontserratRegular18"
              >
                Amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-8 w-[64%] md:w-full">
              <Button className="bg-white-A700 border border-blue-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[130px] py-2.5 rounded-md text-[15px] text-blue-500 text-center tracking-[-0.22px]">
                Learn more
              </Button>
              <Button className="bg-white-A700 border border-blue-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[130px] py-2.5 rounded-md text-[15px] text-blue-500 text-center tracking-[-0.22px]">
                Learn more
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-16 w-[70%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.36px]"
                size="txtMontserratBold24"
              >
                Nemo enim ipsam
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.36px]"
                size="txtMontserratBold24"
              >
                Tempor incididunt
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[25px] w-full">
              <Text
                className="leading-[30.00px] text-black-900_cc text-lg tracking-[-0.27px]"
                size="txtMontserratRegular18"
              >
                Consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam.
              </Text>
              <Text
                className="leading-[30.00px] text-black-900_cc text-lg tracking-[-0.27px]"
                size="txtMontserratRegular18"
              >
                Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora.
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-8 w-[64%] md:w-full">
              <Button className="bg-white-A700 border border-blue-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[130px] py-2.5 rounded-md text-[15px] text-blue-500 text-center tracking-[-0.22px]">
                Learn more
              </Button>
              <Button className="bg-white-A700 border border-blue-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[130px] py-2.5 rounded-md text-[15px] text-blue-500 text-center tracking-[-0.22px]">
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1520px] mx-auto w-full">
            <Img
              className="h-[440px]"
              src="images/img_heroe.svg"
              alt="rectangle"
            />
            <div className="flex flex-col gap-[25px] items-start justify-start">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.36px]"
                size="txtMontserratBold24"
              >
                Sed ut perspiciatis unde omnis
              </Text>
              <Text
                className="leading-[30.00px] text-black-900_cc text-lg tracking-[-0.27px] w-full"
                size="txtMontserratRegular18"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1520px] mx-auto w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.36px]"
                size="txtMontserratBold24"
              >
                Sed ut perspiciatis unde omnis
              </Text>
              <Text
                className="leading-[30.00px] text-black-900_cc text-lg tracking-[-0.27px] w-full"
                size="txtMontserratRegular18"
              >
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </Text>
            </div>
            <Img
              className="h-[440px]"
              src="images/img_heroe.svg"
              alt="rectangle_One"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[91px] items-center justify-start max-w-[1392px] mx-auto w-full">
            <div className="flex flex-col gap-8 items-center justify-start pt-2.5 w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center tracking-[-0.72px]"
                size="txtMontserratRegular48"
              >
                You’re in good company
              </Text>
              <Text
                className="leading-[50.00px] text-4xl sm:text-[32px] md:text-[34px] text-black-900_cc text-center tracking-[-0.54px] w-full"
                size="txtMontserratRegular36"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Text>
            </div>
            <List
              className="flex flex-col gap-16 items-center w-[68%]"
              orientation="vertical"
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle"
                />
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle_One"
                />
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle_Two"
                />
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle_Three"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle"
                />
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle_One"
                />
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle_Two"
                />
                <Img
                  className="h-[76px]"
                  src="images/img_heroe.svg"
                  alt="rectangle_Three"
                />
              </div>
            </List>
          </div>
        </div>
        <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <Text
            className="sm:flex-1 leading-[50.00px] sm:mt-0 my-10 text-4xl sm:text-[32px] md:text-[34px] text-black-900_cc tracking-[-0.54px] w-[63%] sm:w-full"
            size="txtMontserratRegular36"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
          <Button className="bg-blue-500 cursor-pointer font-medium leading-[normal] min-w-[192px] sm:ml-[0] ml-[84px] sm:mt-0 my-16 py-[15px] rounded-md text-[17px] text-center text-white-A700 tracking-[-0.26px]">
            Join Today
          </Button>
          <Button className="bg-white-A700 border border-blue-500 border-solid cursor-pointer font-medium leading-[normal] min-w-[192px] sm:ml-[0] ml-[45px] sm:mt-0 my-16 py-[15px] rounded-md text-[17px] text-blue-500 text-center tracking-[-0.26px]">
            Contact us
          </Button>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-center p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1520px] mx-auto my-10 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                size="txtMontserratBold15"
              >
                Mobile app
              </Text>
              <Text
                className="md:ml-[0] ml-[107px] md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                size="txtMontserratBold15"
              >
                Community
              </Text>
              <Text
                className="md:ml-[0] ml-[99px] md:mt-0 mt-[3px] text-[15px] text-black-900 tracking-[-0.22px]"
                size="txtMontserratBold15"
              >
                Company
              </Text>
              <SampleWireframeSamplelogo className="flex md:flex-1 flex-row font-comfortaa gap-3 items-start justify-center ml-60 md:ml-[0] w-[9%] md:w-full" />
              <Text
                className="md:ml-[0] ml-[238px] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                size="txtMontserratBold15"
              >
                Help desk
              </Text>
              <Text
                className="md:ml-[0] ml-[157px] md:mt-0 mt-[3px] text-[15px] text-black-900 text-right tracking-[-0.22px]"
                size="txtMontserratBold15"
              >
                Blog
              </Text>
              <Text
                className="md:ml-[0] ml-[111px] md:mt-0 mt-0.5 text-[15px] text-black-900 text-right tracking-[-0.22px]"
                size="txtMontserratBold15"
              >
                Resources
              </Text>
            </div>
            <Line className="bg-black-900_7f h-px mt-10 w-full" />
            <div className="flex flex-row items-center justify-center mt-20 w-[16%] md:w-full">
              <Img
                className="h-11 w-11"
                src="images/img_contrast.svg"
                alt="contrast"
              />
              <Img
                className="h-11 ml-[21px] w-11"
                src="images/img_contrast.svg"
                alt="contrast_One"
              />
              <Img
                className="h-11 ml-5 w-11"
                src="images/img_contrast.svg"
                alt="contrast_Two"
              />
              <Img
                className="h-11 ml-5 w-11"
                src="images/img_contrast.svg"
                alt="contrast_Three"
              />
            </div>
            <Text
              className="mt-[43px] text-[15px] text-black-900_cc text-center tracking-[-0.22px]"
              size="txtMontserratRegular15"
            >
              © Photo, Inc. 2019. We love our users!
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleWireframePage;

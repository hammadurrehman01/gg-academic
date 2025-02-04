"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Testimonials(title: any) {
  return (
    <div id="reviews">
      <div className="flex flex-col justify-center mb-[-60px] mt-20 px-[30px]">
        <h4 className="text-[20px] text-center sm:text-[25px] md:text-[30px] text-[#071E57] font-semibold max-w-4xl mx-auto">
          Testimonials
        </h4>
        <p className="text-[#3E4657] text-center text-[14px] sm:text-[16px]">
          This is what our Customers say about us
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-12 justify-center items-center py-10 px-10  shadow-xl shadow-gray-500">
            <div className="relative flex flex-col justify-center items-center ">
              <img
                height={100}
                width={100}
                src="/testimonialbg.png"
                alt="backk"
                className="h-[174px] w-[222px]"
              />
              <img
                height={100}
                width={100}
                src="/female_Stu.jpg"
                alt="testimonials"
                className="absolute z-[4px] h-[122px] w-[122px] rounded-full bottom-[-20px] "
              />
            </div>
            <h3 className="text-[#3E4657] text-[16px] leading-[20px]">
              Pocket-friendly pricing structure! No other website could have
              done my Assignment work at such a reasonable price. Their
              {title.title ? ` ${title.title}` : ` Assignment Help`} is worth
              every single penny.
            </h3>
            <h4 className="text-[#071E57] text-[19px] leading-[21px]">
              Mary Brown <br />
              <span className="text-[14px] text-[#090909] ">Bristol, UK</span>
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-12 justify-center items-center py-10 px-10  shadow-xl shadow-gray-500">
            <div className="relative flex flex-col justify-center items-center ">
              <img
                height={100}
                width={100}
                src="/testimonialbg.png"
                alt="backk"
                className="h-[174px] w-[222px]"
              />
              <img
                height={100}
                width={100}
                src="/female_Stu.jpg"
                alt="testimonials"
                className="absolute z-[4px] h-[122px] w-[122px] rounded-full bottom-[-20px] "
              />
            </div>
            <h3 className="text-[#3E4657] text-[16px] leading-[20px]">
              My friend recommended me Gogrades.org when I was looking for
              online
              {title.title ? ` ${title.title}` : ` Assignment Help`}. I would
              now recommend them to everyone.My experience has been fruitful and
              worth remembering. Cheers!!!
            </h3>
            <h4 className="text-[#071E57] text-[19px] leading-[21px]">
              Mathilda Lee <br />
              <span className="text-[14px] text-[#090909] ">Liverpool, UK</span>
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-12 justify-center items-center py-10 px-10  shadow-xl shadow-gray-500">
            <div className="relative flex flex-col justify-center items-center ">
              <img
                height={100}
                width={100}
                src="/testimonialbg.png"
                alt="backk"
                className="h-[174px] w-[222px]"
              />
              <img
                height={100}
                width={100}
                src="/female_Stu.jpg"
                alt="testimonials"
                className="absolute z-[4px] h-[122px] w-[122px] rounded-full bottom-[-20px] "
              />
            </div>
            <h3 className="text-[#3E4657] text-[16px] leading-[20px]">
              The experts of Gogrades.org are very professional and provide
              premium quality
              {title.title ? ` ${title.title}` : ` Assignment Help`} work at an
              affordable price.
            </h3>

            <h4 className="text-[#071E57] text-[19px] leading-[21px]">
              Skye Coles <br />
              <span className="text-[14px] text-[#090909] ">Cardiff, UK</span>
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-12 justify-center items-center py-10 px-10  shadow-xl shadow-gray-500">
            <div className="relative flex flex-col justify-center items-center ">
              <img
                height={100}
                width={100}
                src="/testimonialbg.png"
                alt="backk"
                className="h-[174px] w-[222px]"
              />
              <img
                height={100}
                width={100}
                src="/male_Stu.jpg"
                alt="testimonials"
                className="absolute z-[4px] h-[122px] w-[122px] rounded-full bottom-[-20px] "
              />
            </div>
            <h3 className="text-[#3E4657] text-[16px] leading-[20px]">
              Highly recommended website! Due to some personal problems, I
              missed some of my Economics classes. The situation became worse
              when the professor asked to submit an Assignment. Baffled by the
              situation, I took
              {title.title ? ` ${title.title}` : ` Assignment Help`}. I would
              from them. The Assignment was well written with recent economics
              trends and policies.
            </h3>
            <h4 className="text-[#071E57] text-[19px] leading-[21px]">
              Laurel Crawford <br />
              <span className="text-[14px] text-[#090909] ">Belfast</span>
            </h4>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="flex flex-col gap-12 justify-center items-center py-10 px-10  shadow-xl shadow-gray-500">
            <div className="relative flex flex-col justify-center items-center ">
              <img
                height={100}
                width={100}
                src="/testimonialbg.png"
                alt="backk"
                className="h-[174px] w-[222px]"
              />
              <img
                height={100}
                width={100}
                src="/male_Stu.jpg"
                alt="testimonials"
                className="absolute z-[4px] h-[122px] w-[122px] rounded-full bottom-[-20px] "
              />
            </div>
            <h3 className="text-[#3E4657] text-[16px] leading-[20px]">
              Tried and tested many
              {title.title ? ` ${title.title}` : ` Assignment Help`}. I would
              websites, and made up my mind to choose this one. The decision was
              random but thankfully it proved right. My grades got a huge jump
              from C to A.
            </h3>
            <h4 className="text-[#071E57] text-[19px] leading-[21px]">
              Peter Griffiths <br />
              <span className="text-[14px] text-[#090909] ">London, UK</span>
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

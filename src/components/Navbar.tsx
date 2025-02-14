"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaEnvelope, FaLongArrowAltLeft } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export const services = [
  {
    name: "Assessment Help",
    link: "assessment-help",
  },
  {
    name: "Dissertation Help",
    link: "dissertation-help",
  },
  {
    name: "Homework Help",
    link: "homework-help",
  },
  {
    name: "Coursework Help",
    link: "coursework-help",
  },
  {
    name: "Presentations",
    link: "presentations",
  },
  {
    name: "Articles",
    link: "articles",
  },
  {
    name: "Thesis",
    link: "thesis",
  },
  {
    name: "Pdf Ebook writing",
    link: "pdf-ebook-writing",
  },
  {
    name: "Proofreading Editing ",
    link: "proofreading-editing",
  },
  {
    name: "CV writing",
    link: "cv-writing",
  },
  {
    name: "Content Help Service",
    link: "content-help-service",
  },
  {
    name: "Exam help",
    link: "exam-help",
  },
  {
    name: "Research Paper Help",
    link: "research-paper",
  },
  {
    name: "Final Year Project",
    link: "final-year-project-help",
  },
  {
    name: "Quizzes Help",
    link: "quizzes-help",
  },
  {
    name: "Book Report Help",
    link: "book-report-help",
  },
  {
    name: "Book Analysis Help",
    link: "book-analysis-help",
  },
  {
    name: "Online Courses Help",
    link: "online-courses-help",
  },
  {
    name: "Online Classes help",
    link: "online-classes-help",
  },
  {
    name: "Research Proposal Help",
    link: "research-proposal-help",
  },
  {
    name: "Research Publication Help",
    link: "research-publication-help",
  },
  {
    name: "Casestudy Help",
    link: "casestudy-help",
  },
  {
    name: "Literature Review Help",
    link: "literature-review-help",
  },
];

export default function Navbar(number: any) {
  const [reg, setReg] = useState("");
  useEffect(() => {
    if (number.region !== undefined) {
      setReg(number.region);
    } else {
      setReg("");
    }
  }, [number.region]);

  const [sideBar, setSideBar] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false); // New state
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleServicesHover = () => {
    setShowServicesDropdown(true);
  };

  const handleServicesLeave = () => {
    setShowServicesDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-[#0f203d] border-b-[3px] border-black ">
        <div className="flex justify-center min-[830px]:justify-between items-center myContainer py-[3px]">
          <div className="flex gap-1 justify-center items-center">
            <Link
              href={`${reg}/order?coupon=GG-50%off`}
              className="rounded-full uppercase bg-[#ffe066] text-[8px] whitespace-nowrap sm:text-[14px] px-2 h-fit anim"
            >
              Save 50%
            </Link>
            <h3 className="text-white text-[12px] text-center">
              Buy 4 Assessments and get 1 absolutely
              <span className="text-white text-[14px]"> FREE!</span>
            </h3>
            {/* <h4 className="text-white text-[14px]">FREE!</h4> */}
          </div>
          <div className="hidden gap-5 min-[830px]:flex">
            <Link
              // href={`https://api.whatsapp.com/send?phone=${number.number}&text=Hello Gogrades!`}
              href={`https://wa.me/${number.number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
              className="text-white text-[14px] flex items-center gap-2"
              target="_blank"
            >
              <IoLogoWhatsapp className="text-[16px] text-green-600" /> Direct
              Customer Support
            </Link>
            <Link
              href={`https://wa.me/${number.number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
              className="text-white text-[14px] flex items-center gap-2"
              target="_blank"
            >
              <IoLogoWhatsapp className="text-[16px] text-green-600" /> Personal
              Live Chat
            </Link>
            <Link
              href="mailto:support@gogrades.org"
              className="text-white text-[14px] flex items-center gap-2"
            >
              <FaEnvelope className="text-[14px]" /> support@gogrades.org
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          scrollPosition > 29 ? `fixed` : `relative`
        } fixed top-0 w-[100%] z-20`}
        style={{ background: "linear-gradient(45deg,black 35%,#1c3d72 34%)" }}
      >
        <div
          className={`md:h-[80px] h-[58px] flex justify-between items-center myContainer `}
        >
          <Link href={`${reg}/`}>
            <img
              height={121}
              width={320}
              src={"/gogrades.org_assests/logo.png"}
              alt="LOGO"
              className="w-[180px]  md:w-[240px]"
            ></img>
          </Link>
          <div className=" text-white text-[18px] h-[100%]  min-[1000px]:flex hidden items-center">
            <Link
              href={`${reg}/#why-us`}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px] "
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
            >
              Why us ?
            </Link>

            <h3
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px] relative  "
              onMouseEnter={handleServicesHover}
              onMouseLeave={handleServicesLeave}
            >
              Services
              {showServicesDropdown && (
                <div
                  className="absolute top-[72px] left-0 bg-[#f1f2f4] border-t border-l border-r border-gray-300 w-[300px] mt-2 text-black max-h-[250px] overflow-auto flex flex-col"
                  id="style-4"
                >
                  {services.map((item: any, index: number) => (
                    <Link
                      href={`${reg}/${item.link}`}
                      className="py-1 px-4 border-b border-gray-300 hover:bg-white text-sm"
                      key={index}
                      onClick={() => {
                        setShowServicesDropdown(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </h3>
            <Link
              href={`${reg}/#subjects`}
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px]"
            >
              Subjects
            </Link>
            <Link
              href={`${reg}/contact`}
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px]"
            >
              Contact
            </Link>

            <Link
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px]"
              href={`${reg}/#process`}
            >
              Process
            </Link>
            <Link
              href={`${reg}/#reviews`}
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px]"
            >
              Reviews
            </Link>
            <Link
              href={`${reg}/about`}
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px]"
            >
              About Us
            </Link>
            <Link
              href={`${reg}/order?coupon=GG-50%off`}
              onClick={() => {
                setSideBar(false);
                setSideBar2(false);
              }}
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[14px]  py-[29px]"
            >
              Order Now
            </Link>
            <Link
              href={`tel:${number.number}`}
              aria-label="Call"
              className="px-[9px] hover:bg-[rgb(254,84,84)] h-[100%] text-[12px] flex items-center"
            >
              <MdPhoneInTalk className="text-[22px]" />
            </Link>
          </div>
          <HiMenuAlt2
            className="text-[30px] text-white min-[1000px]:hidden block"
            onClick={() => {
              setSideBar(!sideBar);
              setSideBar2(false);
            }}
          />
        </div>
      </div>
      {sideBar && (
        <div>
          <div className={`w-[100%] h-[100%] fixed top-0 z-30   flex `}>
            <div
              className={`flex flex-col bg-white relative w-[500px] h-[100%] max-w-[500px] opacity-100 transition-all duration-500 overflow-hidden ${
                sideBar
                  ? `max-w-[100%] overflow-x-hidden overflow-y-auto`
                  : `max-w-0 overflow-hidden `
              }`}
            >
              <div
                className={` bg-white absolute left-0 top-0 h-[100%] transition-max-w duration-700 w-full flex flex-col  z-0  overflow-auto border-r ${
                  sideBar2 ? `max-w-[500px]` : `max-w-0  `
                }`}
              >
                <h3
                  className="w-[100%] flex justify-between cursor-pointer items-center text-lg font-medium border-b py-3 border-gray-400 px-3"
                  onClick={() => {
                    setSideBar2(!sideBar2);
                  }}
                >
                  Services
                  <FaLongArrowAltLeft className="text-[20px] mr-[10px]" />
                </h3>
                {services.map((item: any, index: number) => (
                  <Link
                    href={`${reg}/${item.link}`}
                    className="w-[100%] border-b py-2 border-gray-300 px-3 text-[14px] hover:bg-gray-100"
                    key={index}
                    onClick={() => {
                      setSideBar(false);
                      setSideBar2(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
                href={`${reg}/#why-us`}
              >
                Why us ?
              </Link>
              <h3
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100 cursor-pointer flex justify-between"
                onClick={() => {
                  setSideBar2(!sideBar2);
                }}
              >
                Services <span>{`>`}</span>
              </h3>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                href={`${reg}/#subjects`}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
              >
                Subjects
              </Link>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                href={`${reg}/contact`}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
              >
                Contact
              </Link>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                href={`${reg}/#process`}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
              >
                Process
              </Link>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                href={`${reg}/#reviews`}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
              >
                Reviews
              </Link>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                href={`${reg}/about`}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
              >
                About us
              </Link>
              <Link
                onClick={() => {
                  setSideBar(!sideBar);
                }}
                className="w-[100%] border-b py-2 border-gray-300 px-3 hover:bg-gray-100"
                href={`${reg}/order?coupon=GG-50%off`}
              >
                Order Now
              </Link>
            </div>
            <div
              className="bg-black opacity-40 min-w-[50px] w-[100%] h-[100%] "
              onClick={() => {
                setSideBar(!sideBar);
              }}
            >
              h
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

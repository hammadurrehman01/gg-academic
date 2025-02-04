"use client";

import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { BannerContext } from "./BannerContext";

export default function Footer({ number, title }: any) {
  const bannerRef = useRef(null);
  const { showBanner, setShowBanner } = useContext<any>(BannerContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setShowBanner(!entry.isIntersecting);
    });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  const [reg, setReg] = useState("");
  useEffect(() => {
    if (number.region !== undefined) {
      setReg(number.region);
    } else {
      setReg("");
    }
  }, [number.region]);

  const footerItems = [
    {
      name: "Quick Links",
      itemList: [
        { name: "Top Offers", link: `${reg}/offers` },
        { name: "Place Order", link: `${reg}/order?coupon=GG-50%off` },
        { name: "Why us", link: `${reg}/#why-us` },
        { name: "Services", link: `${reg}/#services` },
        { name: "Subjects", link: `${reg}/#subjects` },
        { name: "Reviews", link: `${reg}/#reviews` },
        { name: "Process", link: `${reg}/#process` },
        { name: "Contact us", link: `${reg}/contact` },
        // "Place Order",
        // "Why us",
        // "Services",
        // "Subjects",
        // "Process",
        // "Reviews",
        // "Contact us",
      ],
    },
    {
      name: "Services",
      itemList: [
        {
          name: "Assessment Help",
          link: `${reg}/assessment-help`,
        },
        {
          name: "Dissertation Help",
          link: `${reg}/dissertation-help`,
        },
        {
          name: "Homework Help",
          link: `${reg}/homework-help`,
        },
        {
          name: "Coursework Help",
          link: `${reg}/coursework-help`,
        },
        {
          name: "Presentations",
          link: `${reg}/presentations`,
        },
        {
          name: "Articles",
          link: `${reg}/articles`,
        },
        {
          name: "Thesis",
          link: `${reg}/thesis`,
        },
        {
          name: "Pdf Ebook writing",
          link: `${reg}/pdf-ebook-writing`,
        },
        {
          name: "Proofreading Editing ",
          link: `${reg}/proofreading-editing`,
        },
        {
          name: "CV writing",
          link: `${reg}/cv-writing`,
        },
        {
          name: "Content Help Service",
          link: `${reg}/content-help-service`,
        },
      ],
    },
    {
      name: "More Services",
      itemList: [
        {
          name: "Exam help",
          link: `${reg}/exam-help`,
        },
        {
          name: "Research Paper Help",
          link: `${reg}/research-paper`,
        },
        {
          name: "Final Year Project",
          link: `${reg}/final-year-project-help`,
        },
        {
          name: "Quizzes Help",
          link: `${reg}/quizzes-help`,
        },
        {
          name: "Book Report Help",
          link: `${reg}/book-report-help`,
        },
        {
          name: "Book Analysis Help",
          link: `${reg}/book-analysis-help`,
        },
        {
          name: "Online Courses Help",
          link: `${reg}/online-courses-help`,
        },
        {
          name: "Online Classes help",
          link: `${reg}/online-classes-help`,
        },
        {
          name: "Research Proposal Help",
          link: `${reg}/research-proposal-help`,
        },
        {
          name: "Research Publication Help",
          link: `${reg}/research-publication-help`,
        },
        {
          name: "Casestudy Help",
          link: `${reg}/casestudy-help`,
        },
        {
          name: "Literature Review Help",
          link: `${reg}/literature-review-help`,
        },
      ],
    },
  ];
  const currentYear = new Date().getUTCFullYear();
  return (
    <div
      style={{
        background: "linear-gradient(67deg,black 60%,#1c3d72 28%) ",
      }}
    >
      {/* <script src="Script.js"></script> */}
      <div className="flex myContainer py-[40px] justify-between md:flex-row flex-col gap-7 lg:gap-14">
        <div className="w-full">
          <div className="flex md:flex-row flex-col lg:gap-10 gap-3 w-[100%] justify-between ">
            <div ref={bannerRef} className="w-full md:w-[140px] lg:w-[200px]">
              <Link href={`${reg}/`}>
                <img
                  height={121}
                  width={320}
                  src={"/gogrades.org_assests/logo.png"}
                  alt="LOGO"
                  className="md:w-[180px] w-[280px]"
                ></img>
              </Link>
              <p className="text-[#fff] text-[15px] mt-5">
                We are the{" "}
                {title?.startsWith("Best") || title?.startsWith(" Best")
                  ? ""
                  : "Best"}{" "}
                {title} provider. We have a thousands of happy customers from
                worldwide. Who happy with our high-quality service & the all
                credit goes to our most experienced and professional writing
                team.
              </p>
            </div>
            {footerItems.map((item: any, index: number) => {
              return (
                <div className="md:flex hidden flex-col" key={index}>
                  <h3 className="text-[17px] text-white">{item.name}</h3>
                  {item.itemList.map((item: any, index: number) => (
                    <Link
                      href={`${item.link}`}
                      key={index}
                      className="text-[#fff] text-[14px] hover:text-[#f7514e] cursor-pointer mt-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              );
            })}

            {footerItems.map((item: any, index: number) => (
              <Dropdown item={item} key={index} reg={reg} />
            ))}
          </div>
          <div className="mt-10 text-white md:block hidden">
            <div className="flex items-center text-white font-medium flex-wrap">
              <div className="flex items-center  font-medium flex-wrap">
                <Link
                  className="text-white hover:text-yellow-500"
                  href={`${reg}/refund-policy`}
                >
                  Refund Policy <span className="text-white">|</span> &nbsp;{" "}
                </Link>
                <Link
                  className="text-white hover:text-yellow-500"
                  href={`${reg}/cancellation-policy`}
                >
                  Cancellation Policy <span className="text-white">|</span>{" "}
                  &nbsp;
                </Link>
                <Link
                  className="text-white hover:text-yellow-500"
                  href={`${reg}/terms-conditions`}
                >
                  Terms & Conditions <span className="text-white">|</span>{" "}
                  &nbsp;
                </Link>
                <Link
                  className="text-white hover:text-yellow-500"
                  href={`${reg}/privacy-policy`}
                >
                  {" "}
                  Privacy Policy <span className="text-white">
                    |
                  </span> &nbsp;{" "}
                </Link>
                <Link
                  className="text-white hover:text-yellow-500"
                  href={`${reg}/usage-policy`}
                >
                  {" "}
                  Usage policy <span className="text-white">|</span> &nbsp;{" "}
                </Link>
                <Link
                  className="text-white hover:text-yellow-500"
                  href={`${reg}/contact`}
                >
                  {" "}
                  Contact Us &nbsp;{" "}
                </Link>
              </div>
            </div>
            <p className="font-extralight text-[13px] leading-4 mt-3">
              <span className="font-medium">Disclaimer:</span> Services provided
              by Gogrades.org serve as model papers for students for guidelines
              to their work and as a sample work, these works must not be used
              for any academic gain. These papers are intended to help students
              to understand research techniques and various issues in academic
              research only.
            </p>
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-[14px]">
                © Copyright {currentYear} @ Gogrades.org. All rights reserved
              </h3>
              <h3 className="text-[14px]">
                Gogrades Rated 4.8/5 based on 5087 Reviews
              </h3>
            </div>
            <Link
              href="https://www.dmca.com/r/rrqp40l?refurl=https://gogrades.org/"
              target="_blank"
            >
              <img
                height={24}
                width={121}
                src={
                  "https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=5f9b28e9-a559-4db7-95b1-d101642a04fb"
                }
                alt="LOGO"
                className="h-[24px] w-[121px] mt-3"
              ></img>
            </Link>
          </div>
        </div>

        <div className="bg-[#101A31] rounded-[10px] p-[12px] lg:p-[28px] h-fit max-md:w-[100%] max-[830px]:w-[230px] max-md:mt-8">
          <h3 className="text-[17px] text-white mb-3">Contact us</h3>
          <div>
            <Link
              href={`tel:${number}`}
              className="text-white text-[18px] flex items-center gap-2"
            >
              <MdPhoneInTalk className="text-[22px]" /> Call Now!
            </Link>
            <Link
              // href={`https://api.whatsapp.com/send?phone=${number.number}&text=Hello Gogrades!`}
              href={`https://wa.me/${number}?text=Hello GoGrades Team, I need academic writing assistance. Could you help me complete my task on time?`}
              className="text-white text-[18px] flex items-center gap-2"
              target="_blank"
            >
              <IoLogoWhatsapp className="text-[22px] text-green-600" /> Whatsapp
              Now!
            </Link>
            <Link
              target="_blank"
              href="mailto:support@gogrades.org"
              className="text-white text-[18px] flex items-center gap-2"
            >
              <FaEnvelope className="text-[22px]" /> support@gogrades.org
            </Link>
          </div>
          <h3 className="text-[17px] text-white max-md:mt-4 mt-3">
            Social Media
          </h3>
          <div className="flex items-center gap-3 my-3 max-md:mb-6">
            <Link
              href="https://www.facebook.com/Gogrades.org/"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebookSquare className="text-white text-[30px]" />
            </Link>
            <Link
              href="https://www.instagram.com/go.grades/?igshid=YTQwZjQ0NmI0OA%3D%3D"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram className="text-white text-[30px]" />
            </Link>
            <Link href="/" aria-label="Twitter" target="_blank">
              <FaTwitter className="text-white text-[30px]" />
            </Link>
          </div>
          <h3 className="text-[17px] text-white">Secure payments</h3>

          <img
            height={221}
            width={420}
            src={"/badge.png"}
            alt="LOGO"
            className="max-md:w-full max-md:h-auto  max-md:max-w-[600px] w-[400px] h-[100%] mt-2"
          ></img>
        </div>
        <div className="mt-10 text-white block md:hidden">
          <div className="flex items-center text-white hover:text-yellow-500 font-medium flex-wrap">
            <Link
              className="text-white hover:text-yellow-500"
              href={`${reg}/refund-policy`}
            >
              Refund Policy <span className="text-white">|</span> &nbsp;{" "}
            </Link>
            <Link
              className="text-white hover:text-yellow-500"
              href={`${reg}/cancellation-policy`}
            >
              Cancellation Policy <span className="text-white">|</span> &nbsp;
            </Link>
            <Link
              className="text-white hover:text-yellow-500"
              href={`${reg}/terms-conditions`}
            >
              {" "}
              Terms & Conditions <span className="text-white">
                |
              </span> &nbsp;{" "}
            </Link>
            <Link
              className="text-white hover:text-yellow-500"
              href={`${reg}/privacy-policy`}
            >
              {" "}
              Privacy Policy <span className="text-white">|</span> &nbsp;{" "}
            </Link>
            <Link
              className="text-white hover:text-yellow-500"
              href={`${reg}/usage-policy`}
            >
              {" "}
              Usage policy <span className="text-white">|</span> &nbsp;{" "}
            </Link>
            <Link
              className="text-white hover:text-yellow-500"
              href={`${reg}/contact`}
            >
              {" "}
              Contact Us
            </Link>
          </div>
          <p className="font-extralight text-[13px] leading-4 mt-3">
            <span className="font-medium">Disclaimer:</span> Services provided
            by Gogrades.org serve as model papers for students for guidelines to
            their work and as a sample work, these works must not be used for
            any academic gain. These papers are intended to help students to
            understand research techniques and various issues in academic
            research only.
          </p>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-[14px]">
              © Copyright {currentYear} @ Gogrades.org. All rights reserved
            </h3>
            <h3 className="text-[14px]">
              Gogrades Rated 4.8/5 based on 5087 Reviews
            </h3>
          </div>
          <Link
            href="https://www.dmca.com/r/rrqp40l?refurl=https://gogrades.org/"
            target="_blank"
            className="w-fit"
          >
            <img
              height={24}
              width={121}
              src={
                "https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=5f9b28e9-a559-4db7-95b1-d101642a04fb"
              }
              alt="LOGO"
              className="h-[24px] w-[121px] mt-3"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Dropdown(itemm: any) {
  const [open, setIsOpen] = useState(false);
  const data = itemm.item;

  return (
    <div className="md:hidden flex flex-col my-1 mt-3">
      <h4
        className="w-[100%] flex items-center justify-between text-white text-[18px] md:pb-2"
        onClick={() => {
          setIsOpen(!open);
        }}
      >
        {data.name} <span>+</span>
      </h4>
      <div
        className={`flex flex-col gap- transition-all duration-1000 ${
          open ? `max-h-[250px] overflow-scroll` : `max-h-0 overflow-hidden `
        }`}
      >
        {data.itemList.map((item: any, index: number) => (
          <Link
            className="text-[#fff] text-[15px] mt-2"
            key={index}
            href={`${item.link}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

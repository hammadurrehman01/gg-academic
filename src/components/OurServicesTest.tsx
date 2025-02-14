"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

import openTawkToChat from "./herosection/tawkto";
export default function OurServicesTest(number: any) {
  // const [des, setisDes] = useState(
  //   `Writing an assignment is the most tedious task when students try to balance their precious time between academic responsibilities and other daily chores. To share their burden Gogrades.org extends its helping hand. We are the No.1 Academic Assistance Team provider having completed more than 1000,000+ assignments. The Academic Assistance Team of our website make sure to draft a high quality paper following proper formatting and referencing style.`
  // );
  const [img, setImg] = useState("/services/assignment.svg");
  const [active, setIsActive] = useState("Assignments");
  const [heading, setIsHeading] = useState("Exclusive Features");
  const [features, setFeatures] = useState([
    "No Punctuation Errors",
    "Finest Quality Work",
    "Best Structuring",
    "Valuable Results",
    "Correct Grammar",
  ]);
  const data = [
    {
      title: "Assignments",
      description:
        "Writing an assignment is the most tedious task when students try to balance their precious time between academic responsibilities and other daily chores. To share their burden Gogrades.org extends its helping hand. We are the No.1 online assignment consultancy help service UK provider having completed more than 1000,000+ assignments. The Academic Assistance Team of our website make sure to draft a high quality paper following proper formatting and referencing style.",
      image: "/services/assignment.svg",
      heading: `Exclusive Features`,
      features: [
        "Extensive Research",
        "Correct Format",
        "No Plagiarism",
        "Work With No Error",
        "Timely Delivery",
        "Relevant Content",
      ],
    },
    {
      title: "Dissertations",
      description:
        "Writing a Dissertation can never be easy. A document full of words that require extensive research and a lot of time. The Ph.D. certified writers, associated with us hold expertise in their respective subjects and have delivered around 125678+ dissertations that has helped students clear their terms with flying colors. For well referenced and cited dissertations place an order with us in just a click and let the experts help.",
      image: "/services/assigment1.svg",
      heading: `FREE Features`,
      features: [
        "Proper Structure",
        "On-time Delivery",
        "Correct Referencing",
        "Original Content",
        "Unlimited Revisions",
        "Authentic Sources",
      ],
    },

    {
      title: "Coursework",
      description:
        "There are a lot of writing tasks that you would be assigned during your course time. Some of the topics may interest you and others may not.If you find it difficult to work on any of the topics given to you for your coursework just reach to our online coursework help services which have made things easier for around 341234+ students and deliver writing tasks at lightning fast speed.The experts ensure to deliver perfect documents to impress your professors.",

      image: "/services/assigment2.svg",
      heading: `FREE Features`,
      features: [
        "No Grammatical Errors",
        "Correct Formatting",
        "Proper Writing Style",
        "Time-bound Delivery",
        "No Plagiarism",
        "Costless Amendments",
      ],
    },
    {
      title: "Proofreading",
      description:
        "Grammatical mistakes may let you lose your scores. It is important that the document you get after availing our assignment assistance are not just well researched and formatted but also have no errors. We have a dedicated team of 100+ proofreaders who ensure to check your document several times before delivering it to you. Our online Academic Assistance  providers deliver flawless documents without compromising with the quality. So, if you want your documents to be error-free just avail proofreading and editing services by experts.",

      image: "/services/assigment3.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Formatting",
        "Quality Work",
        "Top-notch Proofreaders",
        "Excellent Editors",
      ],
    },
    {
      title: "CV & Resume",
      description: `However, most people looking for resume writing help to land a dream job or their next executive role, are interested in a full-service option. This is where the best resume writing services will pair you with a professional writer who works with you one on one to gather information about your work and education history to tailor a personalized professional resume from scratch. For those willing to pay extra, theyll also write you a cover letter and help optimize your LinkedIn profile`,

      image: "/services/assigment4.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Formatting",
        "Highest Quality Work",
        "Excellent Results",
      ],
    },

    {
      title: "Ebook Help",
      description: `Ebooks typically have a system of chapters and supporting images. Similar to a blog post, they also do well when further segmenting their text with subheaders that break down the discussion into specific sections.`,

      image: "/services/assigment5.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },

    {
      title: "Content Writing",
      description: `Instead of endlessly searching for freelance writers and haggling over price, let us match your project with writers from our workforce who best suit your needs. Just tell us what you need, and watch the writing begin.`,

      image: "/services/assigment6.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },

    {
      title: "Essays Help",
      description: `“Where can I find anyone who can help me with my essay?” If you want to know the answer, here you have dozens of experienced writers waiting for your request.`,

      image: "/services/assigment7.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },

    {
      title: "Presentations",
      description: `Thats why a PowerPoint slide should be more than just a beautiful graphic design, its an opportunity to share your idea. We understand how much hard work, time, and dedication it takes just to get the opportunity to deliver a presentation to your audience, your clients, your investors, or your own company. We believe that the opportunity to deliver an amazing presentation should never be wasted.`,

      image: "/services/assigment8.svg",
      heading: `FREE Features`,

      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },

    {
      title: "Homework",
      description: `Our panel of Expert Tutors are available around the clock to offer online homework help and online Academic Assistance Team. We are at your service whenever you need us, no questions asked. Our philosophy of being available around the clock comes from our understanding that learning should never stop and by offering 24/7 assistance, we are doing our bit to help you learn better and improve your grades. By bringing together subject matter experts from all across the globe, we ensure online homework help and assignment help through day and night.`,

      image: "/services/assigment9.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Articles",
      description: `A critical focus at Article Company is partnering with SEO, Social Media and PR companies to deliver a flexible 3rd party staff of content writers. Cost effective and efficient, we eliminate wasted time at the client level. Working with an outsourced solution allows wonderful flexibility.`,

      image: "/services/assigment10.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Thesis",
      description: `Thesis writing can be extremely tricky. There so much riding on it and theres so many sections that all need to be included. Not only do all of these sections need to be included, but they all need to be done well if you want to gain the maximum amount of marks that you can.`,

      image: "/services/assigment11.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Research Paper Help",
      description: `Research Paper can be extremely tricky. Theres so much riding on it and theres so many sections that all need to be included. Not only do all of these sections need to be included, but they all need to be done well if you want to gain the maximum amount of marks that you can.

      `,

      image: "/services/assigment12.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Exam Help",
      description: `Gogrades.org is that one-stop for online test help that will provide you everything that can foster you to perform well. From online examination to the proficient online test, hire our online exam helper to guide you with perfect tips to ace your examination, you will get all on our website. So what are you waiting for? Chat with our Experts. `,

      image: "/services/assigment13.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Final Year Project",
      description: `Students who are looking for final year project help can now find their answers here. Typically, when we hear the word Final Year or the last semester, we instantly start thinking about complex and heavy projects that get assigned to every student or a group of students. A lot of students get confused or get in a state of feeling “not at all motivated” because of the sophisticated final year project that is getting piled up on their table. The best thing to do is they can come in contact with the best final year project help services to ease off the work and get their projects done in no time whatsoever.

      `,

      image: "/services/assigment14.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Quizzes help",
      description: `Just keep aside your fear and clench the penmanship of the Gogrades.org. The best and best quiz specialists from every subject are convenient here only to obtain the online test help. The masterminds are always ready to assist you through WhatsApp. You may have no idea about their acquaintances.

      `,

      image: "/services/assigment15.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Book Report Help",
      description: `At Gogrades.org, we provide book report writing help in all fields of study. Our team involves top experts who belong from renowned universities. They will follow every instruction you gave while composing a 100% original book report. If you have any specific request, let them know with our online chat option.

      `,

      image: "/services/assigment16.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Book Analysis Help",
      description: `Your professor has just assigned you a literary analysis. You have no idea what that is, let alone how to write one. The first thing to understand is that a literary analysis involves literature and the discussion of some aspect of it. For example, if you have been assigned a literary anaysis on Charles Dickens' A Tale of Two Cities, you may want to write it on Sydney Carton s role as a Christ figure in the novel.

      `,

      image: "/services/assigment17.svg",
      heading: `FREE Features`,
      features: [
        "Correct Grammar",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },

    {
      title: "Online Courses help",
      description: `Learning an Online Courses is not always easy. Theres so much riding on it and theres so many things that all need to be takled. Not only do all of these concerns need to be catered, but they all need to be done well if you want to gain the maximum of that you can.



      `,

      image: "/services/assigment18.svg",
      heading: `FREE Features`,
      features: [
        "100% A+ Grades",
        "No Misconceptions",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Online Classes help",
      description: `If you are having trouble balancing your busy life schedule with taking online classes, you can pay someone to take your online class for you. Whether you need help passing just one exam, completing a single homework assignment, or even an entire class, you can pay someone to take your online class to pass with a guaranteed A or B!

      `,

      image: "/services/assigment19.svg",
      heading: `FREE Features`,
      features: [
        "Strict Citation Rules",
        "No Punctuation Errors",
        "Best Structuring",
        "Finest Quality Work",
        "Valuable Results",
      ],
    },
    {
      title: "Research Proposal",
      description: `If you are having trouble balancing your busy life schedule with making Research Proposal, you can pay someone to take your research proposal for you. Whether you need help passing just one exam, completing a single homework assignment, or even an entire class, you can pay someone to Make your Research Proposal to pass with a guaranteed A or B!


      `,

      image: "/services/assigment20.svg",
      heading: `FREE Features`,
      features: [
        "Strict Citation Rules",
        "Highest Quality Of Work Ethic",
        "Your Location Safety",
        "Valuable Results",
        "Finest Quality Work",
      ],
    },
    {
      title: "Research Publication",
      description: `Whether you are a Ph.D. student or a senior researcher, time is a precious commodity. Publishing your research can involve several hurdles. However, Gogradess experts help you at every step, so that your publishing journey is as smooth as it can be. Plus, we also offer a range of service packages to choose from so that you find one that perfectly fits your requirements. Our expert panelists will review your paper and provide constructive comments to help you improve your manuscript before submission to the journal of your choice. Our experts will work with you to determine the most suitable journals, assist in manuscript editing before submission, carry out a technical review, and provide post-submission support wherever necessary.

      `,

      image: "/services/assigment21.svg",
      heading: `Premium Features`,
      features: [
        "Journal Selection",
        "Premium editing",
        "Resubmission Support",
        "Pre-submission Peer Review",
        "Finest Quality Work",
      ],
    },
    {
      title: "Assessment Help",
      description: `Assessment help teachers and professors determine whether the goals of education are being met or not. You can be asked to work on different types of assessments. The grades will have a huge impact on your overall academic performance. Get online Assignment Help from us if you dont have the time to focus on your assessments.

      `,
      image: "/services/assigment21.svg",
      heading: `Premium Features`,
      features: [
        "Multi essay types flexibility",
        "Adherence to your university guidelines",
        "Familiarity with referencing formats",
        "Credible facts, figures, and examples",
        "Your institution’s marking rubric",
      ],
    },
    {
      title: "Casestudy Help",
      description: `Case Study Help providing one stop solution for students with 100% satisfaction guaranteed. Get the best expert help with your unclear assignments tasks and complex case studies assignment writing service for Business Marketing, Finance and accounting, Business Law, Nursing and engineering related topics and subjects.

      `,
      image: "/services/assigment15.svg",
      heading: `Premium Features`,
      features: [
        "Unique & Plagiarism free",
        "Premium Quality Guaranty",
        "Pocket-Friendly Price",
        "Round the clock Writing Support",
        "Valuable Results",
      ],
    },
    {
      title: "Literature Review",
      description: `Literature review writing service makes the life of a student so much easier. Gogrades.org is a professional team of writers who are ready to help you. You can always rely on their proficiency and as a result, you get high-quality papers. It doesnt matter whether you need a dissertation or a regular assignment for your. We are online and ready to provide you with any assistance. Plenty of students are using our services.

      `,
      image: "/services/assignment.svg",
      heading: `Premium Features`,
      features: [
        "100% Privacy Guaranteed",
        "Top Professional Writers",
        "Plagiarism-Free Policy",
        "On-Time Delivery",
        "Finest Quality Work",
      ],
    },
  ];
  return (
    <div
      className="flex  lg:flex-row justify-center lg:items-start flex-col-reverse py-10 myContainer w-[100%] gap-10"
      id="services"
    >
      <div className="w-[100%] lg:w-[900px] ">
        <h3 className="uppercase text-2xl sm:text-[24px] text-[#c0413f] text-center md:text-left  font-semibold">
          - Our Services
        </h3>
        <h4 className="text-[#071E57] text-center md:text-left text-base sm:text-[25px] md:text-[18px] font-medium leading-tight px-5 md:px-0  w-full md:w-[356px]  mt-2">
        Expert Academic Assistance You Can Trust – Only at GoGrades.org
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-x-2 gap-y-1 justify-start items-center mt-[20px]">
          {data.map((item: any, index: number) => (
            <button
              onClick={() => {
                openTawkToChat();
                setImg(item.image);
                // setisDes(item.description);
                setFeatures(item.features);
                setIsHeading(item.heading);
                setIsActive(item.title);
              }}
              title={item.title}
              className={`text-white ${
                active == item.title ? `bg-[#1c3d72]` : `bg-[#db312e]`
              }   w-  rounded-md py-2 font-medium hidetext px-2 hover:bg-[#1c3d72] duration-100`}
              key={index}
            >
              {item.title}
            </button>
          ))}
        </div>
        {/* <p className="text-[15px] leading-[18px] text-[#3E4657] mt-10 text-center md:text-left px-2 md:px-0">{des}</p> */}
        <h4 className="text-[#071E57] text-2xl font-medium mt-6 ml-3 md:text-left">
          {heading}
        </h4>
        <div className="grid sm:grid-cols-3 justify-start mb-3 grid-cols-2 gap-1 mt-3">
          {features.map((item: any, index: any) => (
            <h3
              className="flex justify-start md:justify-start items-center text-[#3E4657] text-lg font-medium"
              key={index}
            >
              <FaCheck className="text-[#33e533] text-[8px] mr-1" />
              {item}
            </h3>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap max-sm:justify-center mt-6 md:mt-0">
          <Link
            href={`https://wa.me/${number.number}?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?`}
            // href={`https://api.whatsapp.com/send?phone=${number.number}&text=Hello Gogrades!`}
            style={{
              background:
                "transparent linear-gradient(91deg,#f9413e 0%,#f7514e 100%) 0 0 no-repeat",
            }}
            target="_blank"
            className="py-[6px] px-[20px] rounded-md w-fit text-white font-semibold text-[22px] shadow-red-500 hover:drop-shadow-xl hover:shadow-xl transition-all duration-100 text-center"
          >
            Chat On Whatsapp
          </Link>
          <button
            onClick={openTawkToChat}
            // href={`https://api.whatsapp.com/send?phone=${number.number}&text=Hello Gogrades!`}

            className="text-[#3E4657] border rounded-[2px] border-[#D1D1D1] text-[19px]  px-[25px] py-[8px] font-medium shadow-slate-400  shadow-lg hover:drop-shadow-xl hover:shadow-xl transition-all duration-100 bg-white text-center w-[65%] md:w-[40%]"
          >
            Talk with Experts
          </button>
        </div>
      </div>
      <div className="justify-center hidden max-lg:flex">
        <img
          width={600}
          height={400}
          src={img}
          alt="side"
          className="aspect-square md:w-[55%] object-cover h-[100%]"
        />
      </div>
      <img
        width={600}
        height={400}
        src={img}
        alt="side"
        className="aspect-square md:w-[35%] object-cover h-[100%] block max-lg:hidden"
      />
    </div>
  );
}

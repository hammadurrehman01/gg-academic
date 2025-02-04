import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  FaBars,
  FaBuilding,
  FaCamera,
  FaCashRegister,
  FaGlasses,
  FaHeartbeat,
  FaHistory,
  FaHome,
  FaLine,
  FaStethoscope,
  FaUser,
  FaWeight,
} from "react-icons/fa";
import {
  FaBook,
  FaBottleDroplet,
  FaHouseChimneyMedical,
  FaKitMedical,
  FaMoneyCheckDollar,
  FaPencil,
  FaScaleBalanced,
} from "react-icons/fa6";
import {
  PiCurrencyDollarBold,
  PiStarFill,
  PiStarHalfFill,
} from "react-icons/pi";
export default function SubjectsTest(props: any) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const [isHovered4, setIsHovered4] = React.useState(false);
  const [isHovered5, setIsHovered5] = React.useState(false);
  const [isHovered6, setIsHovered6] = React.useState(false);
  const [isHovered7, setIsHovered7] = React.useState(false);
  const [isHovered8, setIsHovered8] = React.useState(false);
  const [isHovered9, setIsHovered9] = React.useState(false);
  const [isHovered10, setIsHovered10] = React.useState(false);
  const [isHovered11, setIsHovered11] = React.useState(false);
  const [isHovered12, setIsHovered12] = React.useState(false);
  const [isHovered13, setIsHovered13] = React.useState(false);
  const [isHovered14, setIsHovered14] = React.useState(false);
  const [isHovered15, setIsHovered15] = React.useState(false);
  const { country, city, title } = props;
  const subjects = [
    {
      name: "Accounting",
    },
    {
      name: "Business",
    },
    {
      name: "Nursing",
    },
    {
      name: "HRM",
    },
    {
      name: "Medical",
    },
    {
      name: "anthropology",
    },
    {
      name: "application letters",
    },
    {
      name: "art & Architecture",
    },
    {
      name: "biology",
    },
    {
      name: "Chemistry",
    },
    {
      name: "family and consumer science",
    },
    {
      name: "film & theater studies",
    },
    {
      name: "finance",
    },
    {
      name: "history",
    },
    {
      name: "law",
    },
    {
      name: "others",
    },
  ];
  return (
    <div className="bg-[#F5F5F5] bg-[url('/compress.png')]" id="subjects">
      <div className="flex flex-col text-center myContainer  py-20 ">
        <h3 className="uppercase  text-[#c0413f]  font-semibold text-2xl md:text-4xl">
          -OUR Subjects
        </h3>
        <h4 className="text-[#071E57] text-center mx-auto text-base sm:text-[25px] md:text-[18px] font-medium leading-tight mt-2">
        Professional Team of Professors for Every Subject
        </h4>
        <p className="text-[#3E4657] text-[14px] sm:text-[16px] my-6">
        At Gogrades.org, we're proud to offer expert academic assistance across a vast array of subjects.
        </p>
        <div className="grid lg:grid-cols-5  grid-cols-2 items-center gap-x-4 gap-y-10 mt-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered(true)}
            onTouchCancel={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaBook className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">
                      Accounting
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Financial Mastery
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                      <PiStarHalfFill className="text-[#fbbf24] text-xl" />
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Master financial statements, budgeting, and advanced
                      accounting principles.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered2(true)}
            onTouchEnd={() => setIsHovered2(false)}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered2 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <PiCurrencyDollarBold className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">Business</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Business Essentials
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#eaaf16] text-xl"
                        />
                      ))}
                      <PiStarHalfFill className="text-[#eaaf16] text-xl" />
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Master business strategies, management, and
                      entrepreneurship for career success.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered3(true)}
            onTouchEnd={() => setIsHovered3(false)}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered3 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaStethoscope className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">Nursing</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Nursing Expertise
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                      <PiStarHalfFill className="text-[#fbbf24] text-xl" />
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Learn patient care, ethics, and nursing practices for
                      healthcare careers.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered4(true)}
            onTouchEnd={() => setIsHovered4(false)}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered4 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaUser className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">HRM</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered4 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      HRM Skills
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                      <PiStarHalfFill className="text-[#fbbf24] text-xl" />
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Optimize workforce development with human resource
                      management strategies.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered5(true)}
            onTouchEnd={() => setIsHovered5(false)}
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered5 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaKitMedical className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">Medical</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Medical Knowledge
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Explore medical sciences, diagnostics, and clinical
                      procedures for excellence.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered6(true)}
            onTouchEnd={() => setIsHovered6(false)}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered6 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaPencil className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">
                      application letters
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Perfect Applications
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(4)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Create tailored application letters for academic and
                      career opportunities.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onHoverStart={() => setIsHovered7(true)}
            onHoverEnd={() => setIsHovered7(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              <AnimatePresence>
                {!isHovered7 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaUser className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">Anthropology</h3>
                    
                  </motion.div>
                )}
              </AnimatePresence>
           
              <AnimatePresence>
                {isHovered7 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Psychology Efficiency
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                      
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4"
                    >
                      Learn essential Psychology practices, patient care
                      techniques, and medical management skills.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">Order Now</Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered8(true)}
            onTouchEnd={() => setIsHovered8(false)}
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered8 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaBuilding className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">
                      art & Architecture
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered8 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Creative Designs
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Discover art history, architectural designs, and modern
                      creative innovations.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered9(true)}
            onTouchEnd={() => setIsHovered9(false)}
            onMouseEnter={() => setIsHovered9(true)}
            onMouseLeave={() => setIsHovered9(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered9 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaHeartbeat className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">biology</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered9 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Biological Insights
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Understand organisms, ecosystems, and biological processes
                      for academic success.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered10(true)}
            onTouchEnd={() => setIsHovered10(false)}
            onMouseEnter={() => setIsHovered10(true)}
            onMouseLeave={() => setIsHovered10(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered10 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaBottleDroplet className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">Chemistry</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered10 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Chemical Studies
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Study chemical principles, reactions, and real-world
                      applications effectively.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered11(true)}
            onTouchEnd={() => setIsHovered11(false)}
            onMouseEnter={() => setIsHovered11(true)}
            onMouseLeave={() => setIsHovered11(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered11 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaHome className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">
                      family and consumer science
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered11 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Family Sciences
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Learn family management, consumer behavior, and lifestyle
                      improvement strategies.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered12(true)}
            onTouchEnd={() => setIsHovered12(false)}
            onMouseEnter={() => setIsHovered12(true)}
            onMouseLeave={() => setIsHovered12(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered12 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaCamera className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">
                      film & theater studies
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered12 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Creative Arts
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Explore cinema, drama, and production techniques for
                      creative expression.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered13(true)}
            onTouchEnd={() => setIsHovered13(false)}
            onMouseEnter={() => setIsHovered13(true)}
            onMouseLeave={() => setIsHovered13(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered13 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaMoneyCheckDollar className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">finance</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered13 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Financial Mastery
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Master budgeting, investments, and financial planning for
                      future stability.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered14(true)}
            onTouchEnd={() => setIsHovered14(false)}
            onMouseEnter={() => setIsHovered14(true)}
            onMouseLeave={() => setIsHovered14(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered14 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaHistory className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">history</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered14 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Historical Insights
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Study historical events, civilizations, and their cultural
                      and societal impacts."
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered7(true)}
            onTouchEnd={() => setIsHovered7(false)}
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered7 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaScaleBalanced className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">law</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered7 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Legal Foundations
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Understand legal principles, ethics, and systems for law
                      career success.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#003e72] to-[#000000] rounded-xl shadow-lg overflow-hidden cursor-pointer"
            onTouchStart={() => setIsHovered15(true)}
            onTouchEnd={() => setIsHovered15(false)}
            onMouseEnter={() => setIsHovered15(true)}
            onMouseLeave={() => setIsHovered15(false)}
          >
            <div className="relative p-6 h-72 flex items-center justify-center">
              {/* Default State: */}
              <AnimatePresence>
                {!isHovered15 && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white text-center z-10"
                  >
                    <FaBars className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold capitalize">others</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover State: */}
              <AnimatePresence>
                {isHovered15 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0f172a] flex flex-col items-center justify-center p-6"
                  >
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold capitalize mb-2 text-white"
                    >
                      Additional Help
                    </motion.h4>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex justify-center items-center gap-1 mb-4"
                    >
                      {[...Array(5)].map((_, i) => (
                        <PiStarFill
                          key={i}
                          className="text-[#fbbf24] text-xl"
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-center mb-4 hidden md:block"
                    >
                      Get expert help with additional subjects tailored to your
                      needs.
                    </motion.p>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3b82f6] text-white font-bold py-2 px-6 rounded-full hover:bg-[#2563eb] transition-colors duration-300"
                    >
                      <Link href="/order?coupon=GG-50%off" className="text-[10px] md:text-base">
                        Order Now
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

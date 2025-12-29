"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (dir: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = el.offsetWidth * 0.8;
    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="relative mt-10">
        {/* arrow buttons */}
        <button
          aria-label="previous"
          onClick={() => handleScroll(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur rounded-full p-2 hover:bg-black/60"
        >
          <FaChevronLeft className="text-white" />
        </button>

        <button
          aria-label="next"
          onClick={() => handleScroll(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur rounded-full p-2 hover:bg-black/60"
        >
          <FaChevronRight className="text-white" />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory touch-pan-x pb-6 hide-scrollbar"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              className="snap-center min-w-[80vw] sm:min-w-[24rem] lg:min-w-[28rem] flex-shrink-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center">
                <PinContainer title={item.link}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                        <img src="/bg.png" alt="bgimg" />
                      </div>
                      <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>

                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
                      {item.des}
                    </p>
                  </a>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

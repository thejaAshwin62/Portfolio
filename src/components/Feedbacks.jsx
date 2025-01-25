import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { cn } from "../lib/utils";

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black-200 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <span className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl" />
          )}
          <Card>
            <CardTitle className="red-text-gradient mb-10 font-black text-[24px]">
              {item.topic}
            </CardTitle>
            <CardDescription className="text-white tracking-wider text-[18px]">
              {item.testimonial}
            </CardDescription>
            <div className="mt-7 flex justify-between items-center gap-5">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[13px]">
                  <span className="blue-text-gradient">@ {item.name}</span>
                </p>
                <p className="mt-1 text-secondary text-[10.5px]">
                  {item.designation} | {item.company}
                </p>
              </div>
              <img
                src={item.image}
                alt={`feedback_by-${item.name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div id="achievements" className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div>
          <p className={styles.sectionSubText}>Achievements</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <HoverEffect items={testimonials} />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

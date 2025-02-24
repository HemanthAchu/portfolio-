import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { motion } from "framer-motion";
  import { textVariant } from "../Utils/Utils";
  import StarWrapper from "../hoc/Wrapper";
  import { education } from "../Constant/Constants";
  
  const Education = () => {
    return (
      <div>
        <motion.div variants={textVariant()}>
          <p className=" text-[#6670F1] text-3xl font-bold ">
            {" "}
          Education
          </p>
          <span className="text-gray-400 ps-1"> College</span>
        </motion.div>
  
        <div className="mt-15 flex flex-col">
          <VerticalTimeline>
            {education.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: "black", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid blue" }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      className="w-[60%] h-[60%] object-contain"
                      src={experience.icon}
                      alt=""
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="text-white text-[24px]">
                    {experience.company_name}
                  </h3>
                  <p
                    className="text-gray-400 text-[16px] font-extrabold "
                    style={{ margin: "0px" }}
                  >
                    {experience.title}
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((points, index) => (
                      <li
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                        key={index}
                      >
                        {points}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };
  
  export default StarWrapper(Education, "education");
  
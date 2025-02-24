import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/Utils";
import StarWrapper from "../hoc/Wrapper";
import { Technologies } from "../Constant/Constants";
import { Tilt } from "react-tilt"; // Ensure you import Tilt correctly

function Skills() {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-[#6670F1] text-3xl font-bold">Skills</p>
        <span className="text-gray-400 ps-1">My skills are based on</span>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Technologies.map((technology, index) => (
          <Tilt
            key={index}
            options={{ max: 45, scale: 1, speed: 450 }} // Corrected the prop name to options
            className="w-full "
          >
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full bg-gradient-to-b  from-[#001F3F] p-[1px] rounded-[20px] shadow-lg"
            >
              <div className="bg-gradient-to-b  from-[#001F3F] rounded-[20px] py-5 px-12 min-h-[280px]">
                {/* Content for each service item */}
                <p className="text-white text-xl font-semibold">
                  {technology.title}
                </p>
                <div className="mt-5 overflow-y-auto max-h-[280px]">
                  <ul className="list-disc ml-5 space-y-2">
                    {technology.points.map((point, index) => (
                      <li
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                        key={index}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default StarWrapper(Skills, "skills");

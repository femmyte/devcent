import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";

const Card = ({ title, btnText, icon, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className=" min-h-[77px] rounded-[8px] bg-[#c8c8c8] mt-[10px]">
      <div className="px-[20px] p-[16px] flex justify-between items-center h-full">
        <div className="flex gap-x-[27px] items-center">
          {/* <FcPlus color="#E40084" /> */}
          <img src="/images/icons/plus.png" alt="" />
          <h3
            className={`${
              show
                ? "text-[24px] font-[700] leading-[30.62px]"
                : "font-[400] text-[20px] leading-[25.52px] "
            }font-space text-primaryPurple`}
          >
            {title}
          </h3>
          {icon && <img src="/images/icons/move.png" />}
        </div>
        <button
          className="px-[20px] py-[10px] text-[20px] font-[700] font-space leading-[25.52px] text-[#3f3d3d] border border-[#3f3d3d]"
          onClick={() => setShow(!show)}
        >
          {btnText}
        </button>
      </div>
      {show && (
        <div className=" bg-[#F3F2F2] text-left rounded-b-[8px]">
          <div className="py-[16px] pl-[16px] pr-[30px]">{children}</div>
        </div>
      )}
    </div>
  );
};
const Schedule = () => {
  return (
    <div
      id="schedule"
      className="pt-[59px] pl-[64px] pb-[65px] bg-black text-center
      "
    >
      <h3 className="font-space font-[700] text-[32px] leading-[35.2px] text-center text-primaryYellow">
        SCHEDULE
      </h3>
      <p className="mt-[43px] font-space font-[700] text-[26px] leading-[11.7px] text-[#cccccc]">
        Full-Time · 12 weeks
      </p>
      <p className="w-[1015px] mx-auto text-center mt-[40px] mb-[80px] font-dmsasns font-[400] text-[20px] leading-[26px] text-[#9b9b9b]">
        Our Class is an immersive 12 weeks. You'll be joining 30 Designers from
        around the world and jumping into live classes Monday and Wednesday
        through Friday
      </p>
      <section className="w-[1015px] mx-auto">
        <Card title="Prepwork and Pairing" btnText="Pre- Bootcamp">
          <p>
            As well as meeting your UX/UI classmates, you'll be asked to
            complete prepwork using Notion, Miro, and Loom to get you up to
            speed on basic UX/UI workflows, tools, and principles.
          </p>
          <ul className="mt-[37px]">
            <li className="flex gap-x-[12px] items-center mt-[5.5px]">
              <img src="/images/icons/circle.png" alt="" />
              <span className="font-dmsans font-[400] text-[18px] leading-[23.44px]">
                Meet your classmates 👋
              </span>
            </li>
            <li className="flex gap-x-[12px] items-center mt-[5.5px]">
              <img src="/images/icons/circle.png" alt="" />
              <span className="font-dmsans font-[400] text-[18px] leading-[23.44px]">
                Create Notion, Figma, Miro, Loom, and Maze accounts
              </span>
            </li>
            <li className="flex gap-x-[12px] items-center mt-[5.5px]">
              <img src="/images/icons/circle.png" alt="" />
              <span className="font-dmsans font-[400] text-[18px] leading-[23.44px]">
                Complete UX/UI reading list
              </span>
            </li>
            <li className="flex gap-x-[12px] items-center mt-[5.5px]">
              <img src="/images/icons/circle.png" alt="" />
              <span className="font-dmsans font-[400] text-[18px] leading-[23.44px]">
                Complete practical UX/UI prep tasks
              </span>
            </li>
            <li className="flex gap-x-[12px] items-center mt-[5.5px]">
              <img src="/images/icons/circle.png" alt="" />
              <span className="font-dmsans font-[400] text-[18px] leading-[23.44px]">
                Write UX/UI medium articles on your tasks
              </span>
            </li>
            <li className="flex gap-x-[12px] items-center mt-[5.5px]">
              <img src="/images/icons/circle.png" alt="" />
              <span className="font-dmsans font-[400] text-[18px] leading-[23.44px]">
                Learn the UX/UI foundations
              </span>
            </li>
          </ul>
        </Card>
        <Card title="Evaluative Research" btnText="Week 1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Ideation & User flows" btnText="Week 2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Wireframin & UI Styles" btnText="Week 3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Componentes & Animation" btnText="Week 4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Prototype & Usability Test" btnText="Week 5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Halfway Break" btnText="Week 6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Generative Research" btnText="Week 7">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Synthesis & IA" btnText="Week 8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Atomic & Responsive Design" btnText="Week 9">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
        <Card title="Build Week" icon btnText="Week 10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            voluptatum.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Schedule;

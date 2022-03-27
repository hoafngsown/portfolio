import React from "react";

const ProjectItem = (props) => {
  const { img, title, desc, date, listTechIcon , link} = props;

  return (
    <div className="flex container mx-auto max-w-[1000px] py-2 mt-10 text-white h-[220px]">
      <div className="w-[350px] h-full group relative">
        <img
          src={img}
          alt="img logo"
          className="w-full h-full object-cover rounded-lg group-hover:blur-[3px]"
        />
        <div className="w-full absolute top-0 left-0 right-0 h-0 group-hover:h-full  rounded-lg transition-all duration-300 ease-linear overflow-hidden flex items-center justify-center">
          <a className="block px-10 py-2 bg-black rounded-md font-bold border-solid border-2 border-white hover:skew-y-[3deg] hover:skew-x-[-3deg] hover:bg-slate-800 transition-all duration-300 ease-linear" href={link}>
            View
          </a>
        </div>
      </div>
      <div className="flex-1 ml-10">
        <h2 className="font-bold text-xl">{title}</h2>
        <span className="block font-medium text-sm mb-2 text-gray-300">{date}</span>
        <p className="leading-7 max-w-[600px]">{desc}</p>
        <div className="flex items-center mt-3">
          {listTechIcon.map((item, idx) => (
            <div className="w-[40px] h-[40px] rounded-sm mx-2" key={idx}>
              <img
                src={item}
                alt="logo-tech"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

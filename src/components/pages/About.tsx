import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex items-stretch w-full relative overflow-hidden">
      <div
        className="bg-light-black md:w-10/12 w-full
    md:px-20 px-10 md:pr-50 py-10 flex flex-col md:items-start items-center md:gap-6 gap-8"
      >
        <h1 className="font-montserrat font-bold text-3xl tracking-widest">
          IT BERRIES
        </h1>
        <p className="font-open-sans text-sm text-justify">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
          varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
          tempor, accumsan nec eros.
        </p>
        <button className="font-montserrat uppercase border-l-2 border-r-2 px-5 font-semibold cursor-pointer">
          READ MORE
        </button>
      </div>
      <div className="absolute -right-10">
        <Image
          src="/Logo ITB.svg"
          alt="ITB Logo"
          width={500}
          height={700} // <-- adjust this to the expected natural content height
          className="object-contain "
        />
      </div>
      <div className="bg-foreground w-2/12 flex justify-center items-start"></div>
    </div>
  );
};

export default About;

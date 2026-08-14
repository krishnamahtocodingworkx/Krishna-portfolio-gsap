"use client";

import MagicButton from "../ui/MagicButton";

const RESUME_PATH = "/KrishnaMahto_FullStack.pdf";
const RESUME_FILENAME = "KrishnaMahto_FullStack.pdf";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="w-full flex flex-col items-center justify-center gap-8 md:gap-10 py-20 px-6 md:px-20"
    >
      <h1 className="heading">
        My <span className="text-purple">Resume</span>
      </h1>
      <p className="text-center text-sm md:text-base font-light text-white-50 max-w-2xl">
        Preview my latest resume below, or download a copy to keep on hand.
      </p>

      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black-200 shadow-[0_8px_32px_rgb(0_0_0/0.45)]">
        <iframe
          src={`${RESUME_PATH}#view=FitH`}
          title="Krishna Mahto Full Stack Resume"
          className="h-[60vh] w-full md:h-[80vh] bg-white"
        />
      </div>

      <MagicButton
        title="Download Resume"
        position="right"
        handleClick={handleDownload}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        }
      />
    </section>
  );
};

export default Resume;

// import { socialMedia } from "@/lib/data";
// import BounceAnimation from "../ui/BounceAnimation";
import Image from "next/image";
import MagicButton from "../ui/MagicButton";

export const socialMedia = [
  {
    id: 1,
    img: "/github-light.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
  {
    id: 4,
    img: "/insta.svg",
  },
];
const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 md:px-20 px-5 relative overflow-hidden"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          height={400}
          width={400}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:krishnamahato84044@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={
              <Image
                src={"/Arrow.svg"}
                height={10}
                width={10}
                alt="arrow icon"
              />
            }
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 |
          <span className="text-purple font-semibold"> Krishna Mahto ❤️</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            // <BounceAnimation key={info.id}>
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            // </BounceAnimation>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

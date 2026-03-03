import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";

const About = () => {
  const gridToContainer = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About ME</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:[2.5]"
          />
          <div className="z-10">
            <p className="headtext">HI, I'm Shehan Chrishmika</p>
            <p className="subtext">
              Full Stack Developer, Deliver dynamic and responsive software and web applications
            </p>
          </div>
          <div className="absolute index-x-0 pointer-events-none -bottom-4 h-1/2 bg-gradient-to-t from-inidgo" />
        </div>
        {/* grid2 */}
        <div className="grid-default-color grid-2">
          <div ref={gridToContainer} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">Code is craft</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="React"
              containerRef={gridToContainer}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Python"
              containerRef={gridToContainer}
            />
            <Card
              style={{ rotate: "90deg", top: "55%", left: "0%" }}
              text="Node"
              containerRef={gridToContainer}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="MongoDB"
              containerRef={gridToContainer}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={gridToContainer}
            />
            <Card
              style={{ rotate: "30deg", top: "20%", left: "80%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={gridToContainer}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "35%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={gridToContainer}
            />
          </div>
        </div>
        {/* grid3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Gampaha, and open to remote or in-site work opportunities.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* grid4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className=""></p>
          </div>
        </div>
        {/* grid5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;

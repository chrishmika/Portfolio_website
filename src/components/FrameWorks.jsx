import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {
  const skills = [
    "jwt",
    "express",
    "nodejs",
    "postman",
    "tailwindcss",
    "git",
    "mongodb",
    "python",
    "javascript",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icons key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icons = ({ src }) => {
  return <img src={src} className="duration-200 rounded-sm hover:scale-110" />;
};

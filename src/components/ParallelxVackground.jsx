import { useScroll, motion, useTransform, useSpring } from "motion/react";

const ParallelxVackground = () => {
  const { scrollYProgress } = useScroll();

  const x = useSpring(scrollYProgress, {damping:50})
  const mountain3Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", " 0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* background */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: `url(/assets/sky.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        />
        {/* mountain layer 3 */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-40"
          style={{
            backgroundImage: `url(/assets/mountain-3.png)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain3Y,
          }}
        />
        {/* plannets */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-30"
          style={{
            backgroundImage: `url(/assets/planets.png)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            x: planetsX,
          }}
        />
        {/* mountain layer 2 */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-20"
          style={{
            backgroundImage: `url(/assets/mountain-2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain2Y,
          }}
        />
        {/* mountain layer 1 */}
        <motion.div
          className="absolute inset-0 w-full h-screen -z-10"
          style={{
            backgroundImage: `url(/assets/mountain-+1.png)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallelxVackground;

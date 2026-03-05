import { motion } from "motion/react";
const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModal }) => {
  // const MotionDiv = motion.div;
  return (
    <div
      className=" fixed inset-0 z-60 flex items-center justify-center p-4 overflow-y-auto bg-black/50 backdrop-blur-sm "
      onClick={closeModal}>
      <motion.div
        className="scrollbar-thin relative w-full max-w-2xl max-h-[90vh] overflow-y-hidden border shadow-sm rounded-xl bg-linear-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
          <img src="/assets/close.svg" alt="Close" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
              View Project <img src="/assets/arrow-up.svg" alt="Arrow up" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

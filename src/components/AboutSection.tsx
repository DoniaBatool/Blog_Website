import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 py-16 mt-6">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-16">
        {/* Left Column: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi! I&apos;m <span className="text-blue-600 dark:text-blue-400 font-semibold">Donia Batool</span>, a passionate blogger
            and creator dedicated to sharing insights, stories, and knowledge. Through my blog,
            I aim to inspire, connect, and empower others to explore new ideas and perspectives.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Over the years, I&apos;ve worked on blending creativity and strategy to create meaningful content. 
            I thrive on innovation, collaboration, and bringing ideas to life. I firmly believe in the power 
            of storytelling to foster connections and encourage personal growth.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether it&apos;s exploring new trends in technology, sharing life lessons, or diving deep into 
            personal development, my goal is to create a space where readers can find valuable and thought-provoking content.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am always on the lookout for new projects and collaborations that challenge me to grow and learn. 
            I love interacting with my audience, so feel free to reach out or leave a comment on my blog!
          </p>
          <a
            href="/blogs"
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Explore My Work
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 flex justify-center px-8">
          <Image
            src="/about.jpg"
            alt="About me illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";

export const School = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 relative overflow-hidden">
      {/* School Section Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        src="/projects/bgvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 relative z-10">
        My School Journey
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 w-full px-6 md:px-20 relative z-10">
        {/* Images on top */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
          <div className="flex flex-col items-center opacity-70">
            <Image
              src="/projects/photo2.jpeg"
              alt="Me in school - Neo Project"
              width={220}
              height={140}
              className="rounded-lg shadow-lg mb-4 object-cover"
            />
            <span className="text-gray-200 text-base">Neo Project - School Event</span>
          </div>
          <div className="flex flex-col items-center opacity-70">
            <Image
              src="/projects/photo1.jpeg"
              alt="Me in school - Startup Project"
              width={220}
              height={140}
              className="rounded-lg shadow-lg mb-4 object-cover"
            />
            <span className="text-gray-200 text-base">Startup Project - School Achievement</span>
          </div>
        </div>
        {/* Text below images */}
        <div className="flex flex-col items-center w-full max-w-3xl">
          <p className="text-[22px] text-gray-300 text-center leading-relaxed">
            My school journey has been a story of growth, learning, and discovery. From early days in the classroom to participating in exciting projects, I've built a foundation for my future. Here are some moments from my school life:
          </p>
        </div>
      </div>
    </section>
  );
};

export default School;
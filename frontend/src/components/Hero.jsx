function Hero() {
  return (
    <div className="flex flex-col items-center py-10 md:px-8">
      <div className="flex flex-col md:flex-row justify-center gap-4 shadow-md">
        <div className="video-container w-full md:w-1/3 ">
          <iframe
            src="https://player.vimeo.com/video/235215203"
            className="w-full h-80 md:h-60"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-xl font-bold">Website Development</h1>
          <p>
            Website development builds functional, user-friendly sites for
            enhanced online presence.
          </p>
          <a href="/services" className="text-blue-500">
            READ MORE...
          </a>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-xl font-bold">Mobile App Development</h1>
          <p>
            Mobile app development creates engaging, functional apps for various
            platforms.
          </p>
          <a href="/services" className="text-blue-500">
            READ MORE...
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 shadow-md">
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-xl font-bold">Digital Marketing</h1>
          <p>
            Digital marketing promotes brands online through targeted strategies
            and engaging content.
          </p>
          <a href="/services" className="text-blue-500">
            READ MORE...
          </a>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-xl font-bold">SEO</h1>
          <p>
            SEO improves website visibility and traffic via search engine
            optimization.
          </p>
          <a href="/services" className="text-blue-500">
            READ MORE...
          </a>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h1 className="text-xl font-bold">CRM & ERP</h1>
          <p>
            CRM manages customer relations; ERP integrates business processes
            efficiently.
          </p>
          <a href="/services" className="text-blue-500">
            READ MORE...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import wave from "../assets/wave1.png"

function OurBlog() {
  return (
    <div className="mx-auto bg-gray-200 h-96 py-12 px-16">

      <img src={wave} alt="wave" className="h-24 w-40 mx-auto" />
      <h1 className="text-3xl  font-bold text-center font-mono mb-2">
        Our Latest Blog
      </h1>
      <p className="text-center font-serif md:mx-44">
        Best development services include custom website creation, innovative
        mobile app development, robust CRM & ERP solutions, and comprehensive
        digital marketing strategies, all tailored to meet the unique needs of
        your business
      </p>
    </div>
  );
}

export default OurBlog
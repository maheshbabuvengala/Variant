import React from "react";
import TopBar from "./TopBar";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const values = [
    {
      img: "../../public/telescope.webp",
      title: "WE LIVE OUR VISION",
      description:
        "Our vision propels us relentlessly to pursue two dreams; making masterpieces in the specific segments we operate and adding value to people’s lives. We foster this norm and make it a part of our plans and practices.",
    },
    {
      img: "../../public/handshake.webp",
      title: "A PROMISE IS A PROMISE",
      description:
        "We are conscious of the value of commitment. Our promise, whether related to our products or transactions, is unwavering and irreversible. We will run the extra mile to fulfill our commitments.",
    },
    {
      img: "/happy-organization.png",
      title: "A HEALTHY & HAPPY ORGANISATION",
      description:
        "The fundamental philosophy of Variant Infra is summed up in this creed. We pursue the sustainability of a financially healthy and happy organisation where direct and indirect stakeholders find trust and satisfaction.",
    },
    {
      img: "/lightbulb.png",
      title: "CREATIVE THINKING",
      description:
        "We encourage creative thinking and innovation in every aspect of our business.",
    },
    {
      img: "/hurdle.png",
      title: "LEARNING & IMPROVEMENT",
      description:
        "As a core value, Variant Infra insists on a learning culture among its members. Our ‘growth mindset’ makes us see every experience as an event to learn from and improve further.",
    },
    {
      img: "/diamond.png",
      title: "QUALITY AND TRANSPARENCY",
      description:
        "Quality of work and transparency in our dealings are two guiding principles for us.",
    },
    {
      img: "/action.png",
      title: "DOING IT NOW",
      description:
        "We work with a sense of urgency. We try to ensure that barring external forces beyond our control, nothing should hamper our speed of delivery.",
    },
    {
      img: "/human-touch.png",
      title: "HUMAN TOUCH",
      description:
        "We understand the human side of the business, and therefore we inculcate a culture of listening, respecting, and serving people.",
    },
  ];
  return (
    <div>
      <TopBar />
      <CustomNavbar />
      <div className=" py-5">
        <nav
          className="breadcrumb py-2"
          style={{
            backgroundColor: "#07244E",
            color: "#fff",
            paddingLeft: "12px",
          }}
        >
          <h1>Home/ About Us</h1>
        </nav>
        <h2 className="text-center fw-bold">ABOUT US</h2>
        <p className="text-center container">
          Building quality homes is about passion more than profession. For over
          decades, this has been the working philosophy that has led Variant
          Infra to become one of the most respected real estate companies in
          Guntur-Vijayawada. Under their able leadership, Variant Infra has come
          a long way, leaving behind footprints of excellence across the length
          and breadth of the city. Thanks to their futuristic vision, Variant
          Infra as a brand is today synonymous with Trust, Quality, Assurance,
          Ethics, Transparency, and Affordability. Every single residential or
          commercial property bearing the Variant Infra insignia is a fine
          specimen of the highest standards that transcends customer
          expectations consistently.
        </p>
        <div className="row text-center mt-5">
          <div className="col-md-6 mb-4">
            <div className=" p-4">
              <img
                src="../../public/vision.png"
                alt="Vision"
                className="icon mx-auto d-block"
                style={{ width: "80px", height: "80px" }}
              />
              <h3 className="mt-3">OUR VISION</h3>
              <p>
                Adding value to people’s lives by creating realty masterpieces
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className=" p-4">
              <img
                src="../../public/targeting.png"
                alt="Mission"
                className="icon mx-auto d-block"
                style={{ width: "80px", height: "80px" }}
              />
              <h3 className="mt-3">OUR MISSION</h3>
              <p>
                Deliver exemplary experience with our products, place, people &
                processes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-3">OUR CORE VALUES</h2>
        <hr className="w-25 mx-auto" />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {values.map((value, index) => (
            <div key={index} className="col">
              <div className="text-center p-3">
                <img
                  src={value.img}
                  alt={value.title}
                  className="mb-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <h5 className="fw-bold">{value.title}</h5>
                <p className="text-muted">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

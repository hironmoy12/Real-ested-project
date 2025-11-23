import React from 'react'
import "./Showcase.css";
function Showcase() {
    const showcaseData = [
  {
    title: "The Grand Arcadia Residence",
    image: "/images/showcase1.jpg",
    description:
      "A modern luxury home featuring glass architecture, open interiors, and breathtaking city views.",
  },
  {
    title: "Harborview Penthouse",
    image: "/images/showcase2.jpg",
    description:
      "A premium waterfront penthouse with private terrace, smart automation, and skyline panoramas.",
  },
  {
    title: "Sunset Valley Estate",
    image: "/images/showcase3.jpg",
    description:
      "An elegant hillside property surrounded by landscaped gardens and contemporary finishes.",
  },
  {
    title: "Metropolitan Elite Apartment",
    image: "/images/showcase4.jpg",
    description:
      "Located in the heart of the city, this apartment blends luxury styling with functional living.",
  },
];

  return (
      <section className="showcase-section">
      <div className="container">
        <h2 className="showcase-title">Featured Luxury Properties</h2>
        <p className="showcase-subtitle">
          Explore our curated collection of exclusive homes crafted for modern
          living. Every property tells a story of elegance, comfort, and
          timeless design.
        </p>

        <div className="showcase-grid">
          {showcaseData.map((item, index) => (
            <div key={index} className="showcase-card">
              <img src={item.image} alt={item.title} />
              <div className="showcase-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase

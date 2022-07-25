import { feature } from "../data/feature";

function Feature() {
  return (
    <>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {feature.map((el, index) => {
          return (
            <div className="feature-item" key={index + el.title}>
              <img
                src={el.imagePath}
                alt={el.imgAlt}
                className="feature-icon"
              />
              <h3 className="feature-item-title">{el.title}</h3>
              <p>{el.describing}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Feature;

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

function Slides() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:8000/slides");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        // Ensure the data structure matches your expectation
        setData(data || []);
      } catch (error) {
        setError(error);
        setData([]); // Provide a default empty array in case of error
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  // console.log(data);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="p-10 flex justify-center items-center ">
      <div className="carousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data.length > 0 ? (
          data.map((item, idx) => (
            <div
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            >
              <div className="grid grid-cols-2 p-10">
                <img src={item.image} alt={item.name} />
                <div className="p-4 flex items-center justify-center ">
                  <div className="leading-8 flex flex-col gap-3">
                    <h3 className="font-bold text-3xl text-center">
                      {item.name}
                    </h3>
                    <p className="font-semibold text-2xl text-center">
                      {item.education}
                    </p>
                    <p className="font-semibold text-2xl text-center">
                      {item.current_post}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </section>
  );
}

export default Slides;

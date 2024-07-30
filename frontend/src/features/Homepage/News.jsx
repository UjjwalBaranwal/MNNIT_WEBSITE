import { useEffect, useState } from "react";
import NewsData from "./NewsData";
function News() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3000/news");
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="border border-red-500   ">
      <div>
        <h1 className="font-extrabold text-xl my-2 mx-3 border-b border-b-cyan-300">
          News
        </h1>
      </div>
      <div>
        {data.map((item) => (
          <NewsData item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default News;

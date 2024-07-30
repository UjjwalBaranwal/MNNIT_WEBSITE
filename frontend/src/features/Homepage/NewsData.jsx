function NewsData({ item }) {
  return (
    <div
      key={item.id}
      className="news-item border border-gray-300 p-4 m-4 rounded-lg"
    >
      <h2 className="text-xl font-bold">{item.title}</h2>
      <p className="text-sm text-gray-500">
        {new Date(item.date).toLocaleDateString()}
      </p>
      <p>{item.content}</p>
      <p className="text-sm text-gray-700">Author: {item.author}</p>
      <p className="text-sm text-gray-700">Category: {item.category}</p>
      <div className="tags mt-2">
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NewsData;
// function NewsData({ item }) {
//   return (
//     <div className="news-item border border-gray-300 p-4 m-4 rounded-lg">
//       {/* {item.id} */}
//       <h2 className="text-xl font-bold">{item.title}</h2>
//     </div>
//   );
// }

// export default NewsData;

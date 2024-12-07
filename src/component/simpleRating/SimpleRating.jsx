export default function SimpleRating({ rating, onRatingChange }) {
  const handleRating = (e, value) => {
    e.preventDefault();
    e.stopPropagation();
    onRatingChange(value);
  };

  return (
    <div className=" text-3xl">
      {[...Array(5)].map((_, i) => (
        <button
          key={i}
          onClick={(e) => handleRating(e, i + 1)}
          className={` ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          &#9733;
        </button>
      ))}
    </div>
  );
}

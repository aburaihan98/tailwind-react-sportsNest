import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactStars from "react-rating-stars-component";
import { Tooltip } from "react-tooltip";
import "../../index.css";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      comment:
        "Great selection of products! The quality is top-notch, and the delivery was super fast.",
      rating: 5,
      details:
        "Ordered a football and gloves. The football is of premium quality with excellent grip. The gloves fit perfectly and are durable. Delivery was completed within 24 hours without any issues.",
    },
    {
      id: 2,
      user: "Jane Smith",
      comment:
        "Loved the user-friendly website and the customer support was excellent. Highly recommend!",
      rating: 4,
      details:
        "Bought a tennis racket. It’s lightweight and ideal for beginners. The string tension was perfect, and the grip felt comfortable. Customer support resolved my queries promptly.",
    },
    {
      id: 3,
      user: "David Wilson",
      comment:
        "Found everything I needed for my soccer training. The discounts were a bonus!",
      rating: 5,
      details:
        "Got a complete soccer kit including jersey, shorts, and socks. The quality is outstanding and perfect for training sessions. Discounts made it even better.",
    },
    {
      id: 4,
      user: "Emily Davis",
      comment:
        "Good range of products, but shipping took longer than expected.",
      rating: 3,
      details:
        "Purchased a set of basketballs. The product quality was good, but shipping took an additional 5 days due to stock unavailability. Overall, satisfied with the purchase.",
    },
    {
      id: 5,
      user: "Michael Brown",
      comment:
        "Amazing quality! The basketball I purchased feels professional-grade.",
      rating: 5,
      details:
        "Ordered a professional basketball with a leather finish. It feels premium and is perfect for tournaments. The bounce and grip are remarkable, making it an excellent choice.",
    },
    {
      id: 6,
      user: "Sophia Lee",
      comment:
        "I’m happy with my purchase. The cricket bat is fantastic and lightweight.",
      rating: 4,
      details:
        "Bought a lightweight cricket bat. The handle has a firm grip, and the bat delivers excellent strokes. Ideal for practice games and casual matches with friends.",
    },
  ];

  return (
    <Fade cascade>
      <section className="py-12">
        <div className="w-11/12 m-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            <Fade cascade>Customer Reviews</Fade>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="card shadow-lg p-6"
                data-tooltip-id={`tooltip-${review.id}`}
                data-tooltip-content={review.details}
                data-tooltip-place="auto"
              >
                <p className="italic mb-4">{review.comment}</p>
                <div className="flex items-center mt-2">
                  <span className="font-bold text-primary">{review.user}</span>
                  <span className="ml-4">
                    <ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      value={review.rating}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </span>
                </div>
                <Tooltip
                  id={`tooltip-${review.id}`}
                  className="custom-tooltip"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}

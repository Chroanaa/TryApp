import React from "react";
import Review from "../../assets/Review.png";
const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    date: "December 1, 2022",
  },
  {
    id: 2,
    name: "Jane Doe",
    rating: 4,
    comment:
      "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    date: "November 15, 2022",
  },
];
function ratingStars(rating) {
  switch (rating) {
    case 1:
      return (rating = "⭐");
      break;
    case 2:
      return (rating = "⭐⭐");
      break;
    case 3:
      return (rating = "⭐⭐⭐");
      break;
    case 4:
      return (rating = "⭐⭐⭐⭐");
      break;
    case 5:
      return (rating = "⭐⭐⭐⭐⭐");
      break;
  }
}
function Reviews() {
  return (
    <div className="bg-main pb-[8.5rem]">
      <div className="flex flex-col ml-10">
        <section>
          <img src={Review} alt="Ratings for the host" />
          <div className="flex flex-col max-w-[40rem]">
            {reviews.map((review) => {
              return (
                <div key={review.id}>
                  <h3>
                    {review.name}{" "}
                    <span className="text-Gray">{review.date}</span>
                  </h3>
                  <p>{ratingStars(review.rating)}</p>
                  <p>{review.comment}</p>
                  <hr className="mt-5 mb-5" />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reviews;

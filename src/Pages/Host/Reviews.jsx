import React from "react";

function Reviews() {
  return (
    <div className="bg-main">
      <div>
        <div className="text-large font-bold">
          Your reviews <span className="text-small">Last</span>
          <span className="underline text-small font-bold ml-2">30 days</span>
        </div>
        <section>
          <p>
            <span>5.0 ⭐</span>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Reviews;

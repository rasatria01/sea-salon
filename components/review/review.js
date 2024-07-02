'use client'
import ReviewItem from "./reviewItem";
import ReviewForm from "./inputForm";
import { useState } from "react";

export default function Review() {
    const [review,setReview] = useState([
        {
            msg: "they have a friendly staff, the place ias clean, and good treatments",
            user: "Aristy",
            rating: 5
        },
        {
            msg: "The best in town, affordable, the building is just a bit confusing.",
            user: "Saputri",
            rating: 4
        },
        {
            msg: "Clean & comfortable place, friendly & responsive staff. Very satisfying service. The doctor who handled it was very good, detailed in explaining and relaxed.",
            user: "Solomo",
            rating: 5
        },
    ]);
    return <section className="relative bg-[#454545] w-full">
        <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font mb-12 text-center">Testimonials</h1>
            <div className="flex flex-wrap  -m-4" >
                {review.map((l, i) =>
                    <ReviewItem key={i} {...l} />
                )}
            </div>
        </div>
        <div className="md:w-1/2 px-5 py-10 mx-auto">
            <ReviewForm review={review} setReview={setReview} />
        </div>
    </section>
}
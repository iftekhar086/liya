import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Rather than calling itself a “Food institution” or using the word
              "reliable," Foodgram uses its headline to make a specific claim —
              ”Served every day since 1990” — that demonstrates those ideas.
              This captures more attention and paints a richer, more vivid
              picture of its history and role in the community. The rest of the
              description supports this by adding details to the story of its
              founding and explaining that even three decades later, its scratch
              approach to cooking remains the same.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="liya.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

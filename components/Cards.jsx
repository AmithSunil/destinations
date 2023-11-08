import React from "react"
import Image from "next/image"

const Cards = () => {
  return (
    <div class="card-container">
      <div class="card-image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/pexels-spencer-davis-4388164.jpg?alt=media&token=2f97038b-8b1b-46ac-bcc0-0069efef7e3d"
          alt=""
        />
      </div>
      <div class="card-content">
        <h1 class="card-title">Luxury Getaway</h1>
        <div class="rating">
          4.8 <span>&#9733;</span>{" "}
        </div>
        <p class="card-description">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button class="contact-button">Contact Us</button>
      </div>
    </div>
  )
}

export default Cards;

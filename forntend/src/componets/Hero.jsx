import React from 'react'
import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div className="my-6 flex justify-center items-center px-4">
      <img
        src={assets.hero}
        alt="Hero"
        className="w-full max-w-6xl object-cover rounded-xl shadow-md"
      />
    </div>
  )
}

export default Hero

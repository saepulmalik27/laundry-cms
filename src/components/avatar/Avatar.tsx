"use client"
import React from 'react'
import SVG from 'react-inlinesvg'
const Avatar = () => {
  return (
    <div className="inline-flex gap-2 items-center cursor-pointer">
          <SVG src="/icons/user.svg" />{" "}
          <p className="text-[25px] font-medium text-lightblue-400 underline decoration-lightblue-400">
            John Doe
          </p>
        </div>
  )
}

export default Avatar
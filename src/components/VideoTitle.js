import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" absolute w-screen aspect-video pt-[20%] px-24  text-white  bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button className="bg-white text-xl text-black rounded-lg p-4 px-12 hover:bg-gray-300">▶Play</button>
            <button className="mx-2 bg-white text-xl text-black rounded-lg p-4 px-12 ">ℹMore Info</button>

        </div>
    </div>
  )
}

export default VideoTitle
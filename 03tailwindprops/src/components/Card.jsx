import React from 'react'

function Card({username="NN", post="Not assinged yet"}) {
  //console.log(props);
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.istockphoto.com/id/1426559579/photo/female-tourist-enjoying-watching-hot-air-balloons-flying-in-the-sky-at-rooftop-of-hotel-where.jpg?b=1&s=612x612&w=0&k=20&c=m7qypp0ufhZmNwzF5th48NF0c0oCG8ysuxGr5tBFRKY=" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, accusamus!
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
      {post}
      </div>
    </figcaption>
  </div>
</figure>
   </div>
  )
}

export default Card
import React from 'react'

const Card = ({newsInfo}) => {
     const {description,url,urlToImage,title}=newsInfo;

  return (
    <> 
    <div class="max-w-sm rounded overflow-hidden shadow-lg carder">
            {/* <img class="w-full" src={a.urlToImage} alt="Mountain"/> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{title}</div>
              <p class="text-gray-700 text-base">
               {description}
              </p>
              <a href={url} class="font-bold text-xl">Read More</a>
            </div>
           
          </div>

    </>
  )
}

export default Card
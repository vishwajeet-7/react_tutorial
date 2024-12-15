import React from 'react'

const CardComponent = ({imageArray}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {imageArray.map((el, idx) => (
          <div class="col" key={el.name}>
            <div class="card h-100 shadow">
              <img
                src={el.img}
                class="card-img-top"
                alt="..."
                className="w-100 h-100 object-fit-cover"
              />
              <div class="card-body">
                <h5 class="card-title">{el.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CardComponent

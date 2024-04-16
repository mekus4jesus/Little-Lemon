import restuarantFood from '../../../assets/img/restauranfood.jpg'

export const CallToAction = () => {
  return (
    <div className='section Hero'>
      <div className="heroFlex grid-adjustable-columns">
        <div className="heroLeft">
           <h1>Little Lemon</h1>
             <p>Nigeria</p>
             <article>
              <p>
              We are family  owned
              Mediterranean restaurant,
              focused on traditional recipe  served with a modern twist
              </p>
              <button className='btn'> Reserve a Table </button>
             </article>
        </div>
        <div className="heroRight">
          <img src={restuarantFood} alt='Resturantfood' />
        </div>
      </div>
    </div>
  )
}



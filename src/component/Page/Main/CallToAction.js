import { useNavigate } from 'react-router-dom'
import restuarantFood from '../../../assets/img/restauranfood.jpg'

export const CallToAction = () => {

  const navigate = useNavigate()
  
  return (
    <>
     <section className='Hero'>
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
              <button 
              className='btn'
              onClick={() => navigate('/booking')}
              > Reserve a Table
               </button>
             </article>
        </div>
        <div className="heroRight">
          <img src={restuarantFood} alt='Resturantfood' />
        </div>
      </div>
    </section>
    </>
  )
}



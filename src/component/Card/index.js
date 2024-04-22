import Bicycle from '../../assets/img/bicycle.jpg'

export const CardComponent = ({imagesrc,description,foodTitle,price}) => {
  return (
    <div  className='cardComp'>
      <div className="cardImg">
      <img src={imagesrc} alt={foodTitle}/>
      </div>
      <div className="MenuTitle">
      <div className="foodPrice">
        <div className="foodTitle">
          <h3>{foodTitle}</h3>
        </div>
        <div className="Price">
          <p>₦{price}</p>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="orderOnline">
        <div className="order">
          <h3>Order a Delivery</h3>
        </div>
        <div className="bicycleIcon">
          <img src={Bicycle} alt='bicycle' />
        </div>
      </div>
      </div>
    </div>
  )
}


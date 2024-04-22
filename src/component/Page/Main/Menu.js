import { CardComponent } from "../../Card"
import { CardProduct } from "../../Card/Card"


export const Card = () => {
  return (
    <>
      <section className="cardSection grid-adjustable-columns">
        <div className="cardComponent">
          {
            CardProduct.map((card =>
            (
              <CardComponent
              key={card.id}
              imagesrc={card.imageSrc}
              foodTitle={card.foodTitle}
              description={card.description}
              price={card.price}
              />
            )))
          }
        </div>

      </section>
    </>
  )
}



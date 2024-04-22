import Image1 from '../../../../assets/img/Mario and Adrian A.jpg';
import Image2 from '../../../../assets/img/Mario and Adrian b.jpg';

export const AboutComponent = () => {
  return (
    <>
    <div className="companyDes">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempore culpa ipsa eos numquam repudiandae tenetur maiores eveniet quidem. Officia?
                </p>
              </div>
              <div className="compImg">
                <div className="image">
                  <div className="img1">
                    <img src={Image1} alt='Mario Adrain A' />
                  </div>
                  <div className="img2">
                  <img src={Image2} alt='Mario Adrain B' />
                  </div>
                </div>
              </div>
    </>
  )
}



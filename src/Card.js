import './Card.css';

function Card() 
{
    return (
      <div className='cardbg'>
        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop1'/>
          <img src='http://ecolife.posthemes.com/images/cosmetic5.jpg ' className='cardimg1'/>
        </div>

        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png ' className='cardimgtop2'/>
          <img src='http://ecolife.posthemes.com/images/cosmetic6.jpg' className='cardimg2'/>

        </div>

        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop3'/>
          <img src='http://ecolife.posthemes.com/images/cosmetic7.jpg ' className='cardimg3'/>

        </div>

        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop4'/>
          <img src='http://ecolife.posthemes.com/images/cosmetic8.jpg' className='cardimg4'/>

        </div>

        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop5'/>
          <img src='http://ecolife.posthemes.com/images/organic1.jpg' className='cardimg5'/>

        </div>
      
        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop6'/>
          <img src='http://ecolife.posthemes.com/images/organic2.jpg' className='cardimg6'/>

        </div>

        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop7'/>
          <img src='http://ecolife.posthemes.com/images/organic3.jpg' className='cardimg7'/>

        </div>

        <div className='cards'>
          <img src='http://ecolife.posthemes.com/images/img-header-box.png' className='cardimgtop8'/>
          <img src='http://ecolife.posthemes.com/images/organic4.jpg' className='cardimg8'/>

        </div>
        <div className='aftercard'>
              <p className='heading'>Fully Responsive & Mobile Optimized</p>
              <p className='lines'>All of functions of your website will be guaranteed on almost devices: desktops, laptops,<br></br>
                ipads, iphones, android.... and give visitors beautiful interfaces.</p>

                <img src='http://ecolife.posthemes.com/images/responsive-mobile.jpg' className='aftercardimg'/>
        </div>
        <div className='aftercard2'>
          <p className='tech'>Technical Support</p>
          <p className='tech1'>All requests will be processed manually by our developer or our support staff during 24 hours (Friday - Monday).<br></br>
              We will try to reply as fast as we can. Will be in touch.</p>
          <img src='http://ecolife.posthemes.com/images/image-support.jpg' className='techimg1'/>
          <img src='http://ecolife.posthemes.com/images/icons/icon_time.png' className='techimg2'/>
          <p className='Official' >Official Hour</p>
          <p className='Official1'>Mon-Fri / 8am-5pm (GMT+7)</p>
          <img src='http://ecolife.posthemes.com/images/icons/icon_email.png' className='techimg3'/>
          <p className='email'>Email</p>
          <p className='email1'>posthemes@gmail.com</p>
          <img src='http://ecolife.posthemes.com/images/icons/icon_email.png' className='techimg4'/>
          <p className='website'>Website</p>
          <p className='website1'> http://posthemes.com</p>
          <button className='contactbutton'> CONTACT US NOW</button>
          <img src='http://ecolife.posthemes.com/images/icons/icon_contact.png' className='contactimg'/>
        </div>
    </div>

    );
}
export default Card;
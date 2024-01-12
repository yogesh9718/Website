import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <img src="https://ecolife.posthemes.com/images/logo-black.jpg" className='logoimg'/>
      <button className='demosbutton'><p>Demos</p></button>
      <button className='featuresbutton'><p>Features</p></button>
      <button className='documentationbutton'><p>Documentation</p></button>
      <button className='supportbutton'><p>Support</p></button>
    </div>
  );
}

export default Nav;

import './footer.css';
import FooterLinks from '../FooterLinks/footerLinks';
import { about, propertyTypes, support } from '../../constants';

const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_elements">
          <div className="footer_menu">
            <div className="footer_items col-6">
              <ul className="about">
                <li className="about_items">About</li>
                {about.map((item) => (
                  <FooterLinks linksName={item} />
                ))}
              </ul>
            </div>
            <div className="footer_items col-6">
              <ul className="property_types">
                <li className="property_types_items">Property types</li>
                {propertyTypes.map((item) => (
                  <FooterLinks linksName={item} />
                ))}
              </ul>
            </div>
            <div className="footer_items col-6">
              <ul className="support">
                <li className="support_items">Support</li>
                {support.map((item) => (
                  <FooterLinks linksName={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="label">
          <div className="label_items">&copy;2020 Triphouse, Inc. All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
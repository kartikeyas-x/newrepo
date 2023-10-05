import "../Newsletter/newsletter.css";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {

    function redirectToSocialMedia(link) {
         window.open(link);
    }
    
    return (
        <div className="newsletter">


            <div className="newsletter-info">
                <h4 style={{ marginBottom: '5px' }}>NEWSLETTER</h4>
                <h2>SIGN UP FOR LATEST UPDATES AND OFFERS</h2>

                <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">Subscribe</button>
                </form>

                <p style={{ fontSize: "0.9rem", marginTop: "7.5px" }}>Will be useed in accordance with our Privacy Policy</p>

                <span className="social-icons">

                    <div className="icon" style={{marginLeft: "0px"}}>
                        <FaFacebookF size={14} onClick={() => redirectToSocialMedia('https://www.facebook.com/profile.php?id=100010911464728&mibextid=LQQJ4d')} />
                    </div>

                    <div className="icon">
                        <FaTwitter size={14} onClick={() => redirectToSocialMedia('https://x.com/aryan0505?s=21&t=7o3raGmwPwkzIDMg4NOEKQ')} />
                    </div>

                    <div className="icon">
                        <FaInstagram size={14} onClick={() => redirectToSocialMedia('https://instagram.com/aryan___2305?igshid=OGQ5ZDc2ODk2ZA==')} />
                    </div>


                    <div className="icon" style={{ marginRight: "0px" }}>
                        <FaLinkedinIn size={14} onClick={() => redirectToSocialMedia('https://www.linkedin.com/in/aryan-dahiya-a72320249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')} />
                    </div>

                  

                </span>

            </div>

        </div>
    );

}

export default Newsletter;
import FooterBlueBar from "./FooterBlueBar"

function Footer() {
    return (<footer>
        <FooterBlueBar />
        <div className="footer-links-container">
            <div className="container">
                <div className="link-card"><span>DC COMICS</span>
                    <ul>
                        <a href="#"><li>Characters</li></a>
                        <a href="#"><li>Comics</li></a>
                        <a href="#"><li>Movies</li></a>
                        <a href="#"><li>TV</li></a>
                        <a href="#"><li>Games</li></a>
                        <a href="#"><li>Videos</li></a>
                        <a href="#"><li>News</li></a>
                    </ul>
                    <span>SHOP</span>
                    <ul>
                        <a href="#"><li>Shop DC</li></a>
                        <a href="#"><li>Shop DC Collectibles</li></a>
                    </ul>
                </div>
                <div className="link-card">
                    <span>DC</span>
                    <ul>
                        <a href="#"><li>Terms Of Use</li></a>
                        <a href="#"><li>Privacy policy (New)</li></a>
                        <a href="#"><li>Ad Choices</li></a>
                        <a href="#"><li>Advertising</li></a>
                        <a href="#"><li>Jobs</li></a>
                        <a href="#"><li>Subscriptions</li></a>
                        <a href="#"><li>Talent Workshops</li></a>
                        <a href="#"><li>CPSC Certificates</li></a>
                        <a href="#"><li>Ratings</li></a>
                        <a href="#"><li>Shop Help</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div className="link-card">
                    <span>SITES</span>
                    <ul>
                        <a href="#"><li>DC</li></a>
                        <a href="#"><li>MAD Magazine</li></a>
                        <a href="#"><li>DC Kids</li></a>
                        <a href="#"><li>DC Universe</li></a>
                        <a href="#"><li>DC Power Visa</li></a>
                    </ul>
                </div>

                {/*logo*/}
                <a href=""><img src="dc-logo-bg.png" alt="" /></a>
            </div>

        </div>
        <div className="footer-social-container">
            <div className="container">

                {/* button */}
                <a href="#" id="signup-button">SIGN-UP NOW!</a>
                {/* socials */}
                <div className="social-card">
                    <a href="#">FOLLOW US</a>
                    <ul>
                        <a href="#"><li><img src="footer-facebook.png" alt="facebook" /></li></a>
                        <a href="#"><li><img src="footer-twitter.png" alt="twitter" /></li></a>
                        <a href="#"><li><img src="footer-youtube.png" alt="youtube" /></li></a>
                        <a href="#"><li><img src="footer-pinterest.png" alt="pinterest" /></li></a>
                        <a href="#"><li><img src="footer-periscope.png" alt="periscope" /></li></a>
                    </ul>
                </div>
            </div>
        </div>
    </footer >)
}

export default Footer
function FooterSocialBar() {
    return (<div className="footer-social-container">
        <div className="container">

            {/* button */}
            <a href="#" id="signup-button">SIGN-UP NOW!</a>
            {/* socials */}
            <div className="social-card">
                <a href="#">FOLLOW US</a>
                {/* icons */}
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
    )
}

export default FooterSocialBar
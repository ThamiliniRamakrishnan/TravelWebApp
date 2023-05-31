import './FooterStyles.css'

const Footer = () => {
    return(
        <div className='Travel_footer'>
            <div className='Travel_footer-top'>
                <div className='Travel_footer-top_text'>
                <h1>Trippy</h1>
                <p>Choose your favourite Destinations</p>
                </div>
                <div className='Travel_footer-top_icon'>
                    <a href='/'>
                        <i class="fa-brands fa-square-facebook"></i>                    
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-square-instagram"></i>                    
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-square-behance"></i>                    
                    </a>
                    <a href='/'>
                        <i class="fa-brands fa-square-twitter"></i>
                    </a>
                </div>
            </div>
            <div className='Travel_footer-bottom'>
                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
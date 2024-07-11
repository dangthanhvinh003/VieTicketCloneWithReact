import {Carousel} from "react-bootstrap";
import PropTypes from "prop-types";

const HomeCarousel = ({videoHeight}) => {

    return (
        <Carousel fade>
            <Carousel.Item>
                <video className="d-block w-100 carousel-video"
                       style={{width: '100vw', maxHeight: videoHeight, objectFit: 'cover'}} autoPlay muted loop>
                    <source src="https://res.cloudinary.com/djcowpoua/video/upload/v1717804738/videoplayback_ebmycx.mp4"
                            type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <Carousel.Caption>
                    <h5>Welcome to VieTicket</h5>
                    <p>Explore our website and discover a world of possibilities waiting for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <video className="d-block w-100 carousel-video"
                       style={{width: '100vw', maxHeight: videoHeight, objectFit: 'cover'}} autoPlay muted loop>
                    <source
                        src="https://res.cloudinary.com/djcowpoua/video/upload/v1719232070/ODYSSEY_nightclub_promo_video_f26pnk.mp4"
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <Carousel.Caption>
                    <h5>Simplified Seat Map Creation</h5>
                    <p>Easily create different types of seat maps for organizers with our user-friendly format.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <video className="d-block w-100 carousel-video"
                       style={{width: '100vw', maxHeight: videoHeight, objectFit: 'cover'}} autoPlay muted loop>
                    <source
                        src="https://res.cloudinary.com/djcowpoua/video/upload/v1719232073/DJI_AVATA_Night_Footage_EDM_Event_vnas5g.mp4"
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <Carousel.Caption>
                    <h5>Versatile Music Venues</h5>
                    <p>Experience a variety of music genres and events in our versatile venues.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

HomeCarousel.propTypes = {
    videoHeight: PropTypes.string.isRequired,
};

export default HomeCarousel;
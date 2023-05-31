import TripData from './TripData';
import { swiss, singapore, thailand } from './imports';
import './TripStyles.css';

function Trip() {
    return(
       <div className='Travel_trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='Travel_trip-card'>
                <TripData 
                    image={swiss}
                    place="Trip in Switzerland"
                    content="Switzerland, a picturesque country in the heart of Europe, enchants with its stunning landscapes, precision, and high quality of life. From the majestic Swiss Alps to charming cities like Zurich and Geneva, Switzerland offers diverse experiences. Explore alpine wonders, indulge in winter sports, or enjoy scenic train journeys like the Glacier Express. Renowned for chocolate, cheese, and watches, Switzerland showcases its dedication to craftsmanship and precision. With its timeless charm and elegance, Switzerland captivates visitors with its natural beauty and cultural richness."
                />
                <TripData 
                    image={singapore}
                    place="Trip in Singapore"
                    content="Singapore, a vibrant city-state in Southeast Asia, dazzles with its modernity, multiculturalism, and impressive landmarks. Explore Chinatown, Little India, and Arab Street for a taste of its diverse culture. Marvel at iconic sites like Marina Bay Sands and Gardens by the Bay. Enjoy the thriving arts scene at the Esplanade and indulge in world-class shopping on Orchard Road. Known for its cleanliness and efficiency, Singapore is a captivating destination that seamlessly blends tradition and innovation."
                />
                <TripData 
                    image={thailand}
                    place="Trip in Thailand"
                    content="Thailand, a captivating country in Southeast Asia, enthralls visitors with its rich cultural heritage, stunning landscapes, and warm hospitality. From the bustling streets of Bangkok to the serene beaches of Phuket and the ancient temples of Chiang Mai, Thailand offers a diverse range of experiences. Indulge in mouthwatering Thai cuisine, explore vibrant night markets, and immerse yourself in traditional customs and festivals. Discover the breathtaking beauty of tropical islands, or venture into the lush jungles of Khao Sok National Park."
                />
            </div>
       </div> 
    )
}

export default Trip;
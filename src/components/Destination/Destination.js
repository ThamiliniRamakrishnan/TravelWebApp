import { erawan_falls01, erawan_falls02,chiangMai01, chiangMai02 } from "./imports";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
    return(
        <div className="Travel_destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData 
                className="Travel_destination-first"
                heading="Erawan Falls"
                text="Erawan Falls is a famous waterfall in Thailand's Erawan National Park. It consists of seven tiers formed by the Erawan River, each offering its own beauty. The emerald-green pools created by the cascading water are ideal for swimming. Visitors can hike along a well-maintained trail to explore the falls. The higher tiers showcase larger pools and stunning cascades. The top tier features a magnificent waterfall flowing into a spacious pool. It is recommended to visit early in the morning to avoid crowds. Erawan Falls is a popular spot for nature lovers and photographers. It exemplifies the natural beauty of Thailand and is known for its crystal-clear waters and limestone formations."
                img1={erawan_falls01}
                img2={erawan_falls02}
            />
            <DestinationData 
                className="Travel_destination-first-reverse"
                heading="Chiang Mai"
                text="Chiang Mai, nestled in the mountainous region of northern Thailand, is a captivating tourist destination that effortlessly blends ancient traditions with modern allure. Known as the 'Rose of the North', this city captivates visitors with its rich cultural heritage and enchanting landscapes. Explore the historic old town, where centuries-old temples, such as Wat Phra Singh and Wat Chedi Luang, stand as testaments to the city's spiritual significance. Discover the vibrant night bazaars that come alive with colorful handicrafts, aromatic street food, and bustling crowds. Immerse yourself in the traditional customs and artistry by participating in a Thai cooking class or attending a captivating Muay Thai match."
                img1={chiangMai01}
                img2={chiangMai02}
            />
        </div>
    );
};

export default Destination
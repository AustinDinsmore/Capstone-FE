import date_img from "../img/rene-ranisch-dB_JC0rATGM-unsplash.jpg";

function Home() {
    return (
        <section>
            <h1>Date Haven</h1>
            <img src={date_img} />
            <p>
                Welcome to DateHaven!
            </p>
            <p>
                Finding the perfect spot for a memorable date can be surprisingly challenging. Often, searching for romantic locations feels like sifting through endless options with no clear guidance. That's where DateHaven comes in.
            </p>
            <p>
                At DateHaven, we understand that every date deserves a special setting. Our platform is dedicated to helping you discover charming, unique, and cozy spots that make your time together truly unforgettable. Whether you're looking for a hidden gem, a trendy hotspot, or a serene getaway, DateHaven provides curated recommendations and detailed reviews to guide your way.
            </p>
            <p>
                Explore our handpicked selection of cafes, restaurants, parks, and more, and let DateHaven be your go-to resource for planning perfect date nights. With us, finding that ideal location is easy, so you can focus on creating cherished moments together.
            </p>
        </section>
    )
};

export default Home;
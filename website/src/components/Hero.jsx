const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">

                <div className="hero-content">
                    <h1 className="h1 hero-title">TEEMES</h1>

                    <p className="hero-text">
                        Application moderne de geolocalisation des pharmacies et d'assistance medicales
                    </p>

                    <p className="form-text">
                        <span>🥳</span> Faites nous confiance et telechargez l'application ici
                    </p>



                    <button type="submit" className="btn btn-primary">Telecharger maintenent</button>

                </div>

                <figure className="hero-banner">
                    <img src="./assets/images/book-2.png" alt="Hero image" />
                </figure>

            </div>
        </section>

    )
}

export default Hero
const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 hero-title">TEEMES</h1>
                    <p className="hero-text">
                        Application moderne de géolocalisation des pharmacies et d'assistance médicales
                    </p>
                    <p className="form-text">
                        Faites nous confiance et télechargez l'application ici
                    </p>
                    <button type="submit" className="btn btn-primary">Télecharger maintenant</button>

                </div>
                <figure className="hero-banner">
                    <img src="./assets/images/mobile_app.png" alt="Hero image" />
                </figure>
            </div>
        </section>

    )
}

export default Hero
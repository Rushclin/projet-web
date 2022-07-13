const About = () => {
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-6"
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                padding: "25px",
                            }}
                        >
                            <h1 className="text-primary">Pourquoi utiliser TEEMES ?</h1>
                        </div>

                        <div className="col-6">
                            <div
                                className="row"
                                style={{ alignItems: "center", justifyContent: "center" }}
                            >
                                <div className="col-6" style={{ marginBottom: "20px" }}>
                                    <div className="card">
                                        <div className="card-title">
                                            <h1>Rapidité</h1>
                                        </div>
                                        <p className="card-text">
                                            L'application TEEMES est rapide dans la recherche
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6" style={{ marginBottom: "20px" }}>
                                    <div className="card">
                                        <div className="card-title">
                                            <h1>Facile</h1>
                                        </div>
                                        <p className="card-text">
                                            Nous l'avons conçue pour tout le monde
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="row"
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                }}
                            >
                                <div className="col-6" style={{ marginBottom: "20px" }}>
                                    <div className="card">
                                        <div className="card-title">
                                            <h1>Fiabilité</h1>
                                        </div>
                                        <p className="card-text">
                                            Les données sont fiables et verifiées
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6" style={{ marginBottom: "20px" }}>
                                    <div className="card">
                                        <div className="card-title">
                                            <h1>Securisé</h1>
                                        </div>
                                        <p className="card-text">
                                            Nous pronons la securité des donnees
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                    <p>Sous la supervision de Pr <span className="text-primary">KENGNE VIANNEY</span></p>
                </div>
            </section>
        </>
    );
};

export default About;

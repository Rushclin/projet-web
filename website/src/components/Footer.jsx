import "../App.css";

const membres = [
    {
        name: "TAKAM",
        surname: "RUSHCLIN",
    },
    {
        name: "OUANDJI",
        surname: "THIERRY ARMEL",
    },
    {
        name: "SIMO ",
        surname: "YANNICK MANDELA",
    },
    {
        name: "SIMO",
        surname: "GISELE LARISSA",
    },
    {
        name: "SINDA",
        surname: "JORDAN",
    },
];

const membres2 = [
    {
        name: "AWAH",
        surname: "AUSTINE",
    },
    {
        name: "NGUEWOUO",
        surname: "MANICK",
    },
    {
        name: "NOUMECHI ",
        surname: "LIONEL DUVAL",
    },
    {
        name: "NGATCHE",
        surname: "DALISAH MYLOVE",
    },
    {
        name: "DJAMEN",
        surname: "CHIMENE",
    },
];

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row" style={{ paddingTop: "50px" }}>
                    <div className="col-6">
                        <h1
                            className="text-primary"
                            style={{ marginTop: "20px", marginBottom: "20px" }}
                        >
                            TEEMES
                        </h1>
                        <p className="footer-text" style={{ fontWeight: 'lighter' }}>
                            TEEMES est une application de géolocalisation des pharmacies qui
                            propose un assistance medicale ainsi que des services de
                            medecines à domicile
                        </p>
                    </div>
                    <div className="col-6">
                        <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
                            Equipe de devéloppement
                        </h1>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    {membres.map((membre) => {
                                        return (
                                            <li style={{ marginBottom: "20px", fontWeight: "200" }}>
                                                {membre.name + " " + membre.surname}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    {membres2.map((membre) => {
                                        return (
                                            <li style={{ marginBottom: "20px", fontWeight: "200" }}>
                                                {membre.name + " " + membre.surname}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ padding: "25px" }}>
                    <div style={{ textAlign: "center", width: "100%" }}>
                        <p>Copyright &copy; . 2022 UNIVERSITE DE DSCHANG</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

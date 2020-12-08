import React from "react";
import "./styles.css";
import Image from "../../elements/Image";

const Equipe = ({ className }) => {
    return (
        <section className="box">
            <div>
                <h3
                    className="mt-0 mb-16 reveal-from-bottom title"
                    data-reveal-delay="200"
                >
                    <p className="text-color-primary">Nossa Equipe</p>
                </h3>
            </div>
            <div class="profiles-container">
               
                <div class="profile">
                     <Image
                        src={require("./../../../assets/images/timoteo.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Rafael T. de Sousa Júnior </span>
                    <span>Prof.Dr. Adjunto</span>
                    <span>ENE/FT/UNB</span>
                </div>

                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/francisco.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Francisco Caldas </span>
                    <span>Doutorando em Eng. Elétrica</span>
                    <span>ENE/FT/UNB</span>
                </div>

                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/paulo.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Paulo Henrique Ferreira</span>
                    <span>Mestrando em Eng. de Elétrica</span>
                    <span>ENE/FT/UNB</span>
                </div>


                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/andre.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>André C. Ribeiro </span>
                    <span>Graduando em Eng. Redes</span>
                    <span>ENE/FT/UNB</span>
                </div>

                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/lucas_coelho.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Lucas Coelho</span>
                    <span>Mestrando em Eng. Elétrica</span>
                    <span>ENE/FT/UNB</span>
                </div>



                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/nayara.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Nayara Silva</span>
                    <span>Graduanda em Ciencia da Computação</span>
                    <span>CIC/UNB</span>
                </div>

                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/natalia.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Natália A. Marques</span>
                    <span>Graduanda em Eng. de Redes</span>
                    <span>ENE/FT/UNB</span>
                </div>

                <div class="profile">
                    <Image
                        src={require("./../../../assets/images/leonardo.jpg")}
                        alt="Hero"
                        width={100}
                        height={200}
                    />
                    <span>Leonardo O. Almeida</span>
                    <span>Graduando em Eng. de Redes</span>
                    <span>ENE/FT/UNB</span>
                </div>
            </div>
        </section>
    );
};

export default Equipe;

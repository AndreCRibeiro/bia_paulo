import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Modal2 from "../elements/Modal2";
import Modal3 from "../elements/Modal3";
import Modal4 from "../elements/Modal4";

const propTypes = {
    ...SectionProps.types,
};

const defaultProps = {
    ...SectionProps.defaults,
};

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {
    const [videoModalActive, setVideomodalactive] = useState(false);
    const [EquipeModalActive, setEquipemodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    };

    const openEquipeModal = (e) => {
        e.preventDefault();
        setEquipemodalactive(true);
    };

    const closeEquipeModal = (e) => {
        e.preventDefault();
        setEquipemodalactive(false);
    };

    const outerClasses = classNames(
        "hero section center-content",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "hero-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    return (
        <section {...props} className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                Até um tempo atrás eu era meio que...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/solteiro.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...tinha até aquela história de...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/meuanjo.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...ai a gente começou a conversar bastante, teve
                                até ...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/motel.png")}
                                alt="Hero"
                                width={300}
                                height={500}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ... e depois ficamos cada vez mais...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/misturados.png")}
                                alt="Hero"
                                width={300}
                                height={500}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...e aí você começou a querer me dobrar, e eu
                                sempre...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/amanha.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...mas pensei melhor porque seu beijo é...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/lugarbom.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...agora é o seguinte, por mim ...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/agentecontinua.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...e você tem ...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/3opcoes.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...a gente pode ser um...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/caso.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...ou sei lá, ...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/deixaacontecer.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...ou então quem sabe você pode ser...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/namorada.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...e ai...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/namo.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1
                            className="mt-0 mb-16 reveal-from-bottom"
                            data-reveal-delay="200"
                        ></h1>
                        <div className="container-xs">
                            <p
                                className="m-0 mb-32 reveal-from-bottom"
                                data-reveal-delay="400"
                            >
                                ...sem pressão, é só...
                            </p>
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                    >
                        <a
                            data-video="./../../assets/images/video-placeholder.jpg"
                            href="#0"
                            aria-controls="video-modal"
                            onClick={openModal}
                        >
                            <Image
                                className="has-shadow"
                                src={require("./../../assets/images/sequiser.png")}
                                alt="Hero"
                                width={300}
                                height={504}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

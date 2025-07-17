import React from "react";
import styles from "./HeroSection.module.css";
import { WeebButton } from "../../../shared/WeebButton/WeebButton";

export const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Design Faster
                      <br />
                        <span className={styles.heroTitleAccent}>& Better</span>
                    </h1>

                    <p className={styles.heroDescription}>
                        Sit elit feugiat turpis sed integer integer accumsan
                        turpis. Sed suspendisse nec lorem mauris.
                        Pharetra, eu imperdiet ipsum ultrices amet, dui sit
                        suspendisse.
                    </p>

                    <div className={styles.heroActions}>
                        <WeebButton className={styles.heroButtonPrimary}>
                            Join Now
                        </WeebButton>
                        <WeebButton
                            theme="buttonWhiteBorder"
                            className={styles.heroButtonSecondary}
                        >
                            View Demo
                        </WeebButton>
                    </div>
                </div>

                {/* Декоративні елементи */}
                <div className={styles.heroDecorations}>
                    <div className={styles.decoration1}></div>
                    <div className={styles.decoration2}></div>
                    <div className={styles.decoration3}></div>
                </div>
            </div>
        </section>
    );
};
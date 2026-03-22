import React from "react";
import styles from "./Features.module.css";

const DiscoverGraphic = () => (
  <div className={styles.discoverGraphic}>
    {/* Outer orbit circles */}
    <div className={`${styles.orbitDot} ${styles.orbitDot1}`}></div>
    <div className={`${styles.orbitDot} ${styles.orbitDot2}`}></div>
    <div className={`${styles.orbitDot} ${styles.orbitDot3}`}></div>
    {/* Donut chart */}
    <svg className={styles.donutSvg} viewBox="0 0 200 200" fill="none">
      {/* Outer ring */}
      <circle cx="100" cy="100" r="80" stroke="#7B5EA7" strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="100" r="60" stroke="#7B5EA7" strokeWidth="2" opacity="0.3" />
      {/* Donut track */}
      <circle cx="100" cy="100" r="70" stroke="#2a2a4a" strokeWidth="28" />
      {/* Purple arc */}
      <circle
        cx="100" cy="100" r="70"
        stroke="#8B5CF6"
        strokeWidth="28"
        strokeDasharray="264 176"
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
      {/* Orange arc */}
      <circle
        cx="100" cy="100" r="70"
        stroke="#F97316"
        strokeWidth="28"
        strokeDasharray="66 374"
        strokeDashoffset="-264"
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
    </svg>
  </div>
);

const PowerfulGraphic = () => (
  <div className={styles.powerfulGraphic}>
    {/* Browser chrome */}
    <div className={styles.mockBrowser}>
      <div className={styles.mockBar}>
        <span className={styles.mockDot} style={{ background: "#FF5F57" }}></span>
        <span className={styles.mockDot} style={{ background: "#FEBC2E" }}></span>
        <span className={styles.mockDot} style={{ background: "#28C840" }}></span>
      </div>
      <div className={styles.mockContent}>
        {/* Sidebar */}
        <div className={styles.mockSidebar}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.mockSidebarRow}>
              <div className={styles.mockSidebarIcon}></div>
              <div className={styles.mockSidebarLine}></div>
            </div>
          ))}
        </div>
        {/* Canvas */}
        <div className={styles.mockCanvas}>
          <div className={styles.canvasDiamond}></div>
          <div className={styles.canvasCircle}></div>
          <div className={styles.canvasHalfCircle}></div>
          <div className={styles.canvasRotateIcon}>
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="14" stroke="#BFDBFE" strokeWidth="3" strokeDasharray="50 20" />
              <polygon points="30,13 36,20 30,27" fill="#F97316" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CustomersGraphic = () => (
  <div className={styles.customersGraphic}>
    <div className={styles.diamondWrapper}>
      <div className={`${styles.diamond} ${styles.diamondBack}`}></div>
      <div className={`${styles.diamond} ${styles.diamondFront}`}></div>
    </div>
  </div>
);

const features = [
  {
    id: 1,
    label: "DISCOVER",
    title: (
      <>
        <span className={styles.highlight}>Unlimited</span> ideas for your
        next great projects
      </>
    ),
    description:
      "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
    link: "Discover Ideas",
    graphic: <DiscoverGraphic />,
    imageRight: true,
  },
  {
    id: 2,
    label: "POWERFUL",
    title: "All the tools you can imagine",
    description:
      "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
    link: "Explore Tools",
    graphic: <PowerfulGraphic />,
    imageRight: false,
  },
  {
    id: 3,
    label: "CUSTOMERS",
    title: (
      <>
        Target <span className={styles.highlight}>customers</span> with our
        powerful AI kit
      </>
    ),
    description:
      "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
    link: "Learn More",
    graphic: <CustomersGraphic />,
    imageRight: true,
  },
];

export const Features = () => {
  return (
    <section className={styles.section}>
      {/* {features.map((feature) => (
        <div
          key={feature.id}
          className={`${styles.featureCard} ${feature.imageRight ? styles.imageRight : styles.imageLeft}`}
        >
          <div className={styles.textBlock}>
            <span className={styles.label}>{feature.label}</span>
            <h2 className={styles.title}>{feature.title}</h2>
            <p className={styles.description}>{feature.description}</p>
            <a href="./" className={styles.link}>
              {feature.link} <span className={styles.arrow}>→</span>
            </a>
          </div>
          <div className={styles.graphicBlock}>{feature.graphic}</div>
        </div>
      ))} */}
    </section>
  );
};

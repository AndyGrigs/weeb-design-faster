import React from "react";
import styles from "./Companies.module.css";

const companies = [
  {
    id: 1,
    name: "SmartFinder",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="9" stroke="white" strokeWidth="2.5" />
        <line x1="19.5" y1="19.5" x2="28" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="13" cy="13" r="4" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Zoomerr",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,2 20,13 31,13 22,20 25,31 16,24 7,31 10,20 1,13 12,13" fill="white" opacity="0.15" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <polygon points="16,8 18.5,15 26,15 20,19.5 22,27 16,22.5 10,27 12,19.5 6,15 13.5,15" fill="white" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "SHELLS",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" stroke="white" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="2" />
        <circle cx="16" cy="16" r="3" fill="white" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "WAVES",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16 Q6 8 10 16 Q14 24 18 16 Q22 8 26 16 Q28 20 30 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M2 22 Q6 14 10 22 Q14 30 18 22 Q22 14 26 22 Q28 26 30 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "ArtVenue",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L14 16 L4 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 4 L26 16 L16 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const Companies = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Join Leading Companies</h2>
      <div className={styles.logoGrid}>
        {companies.map((company) => (
          <div className={styles.logoItem} key={company.id}>
            <span className={styles.icon}>{company.icon}</span>
            <span className={styles.name}>{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

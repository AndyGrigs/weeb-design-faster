
import React from "react";
import styles from "./BrowserMockup.module.css";

export const BrowserMockup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.browser}>
        {/* Browser Chrome */}
        <div className={styles.browserBar}>
          <div className={styles.dots}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
          </div>
          <div className={styles.addressBar}>
            <span className={styles.addressText}>app.weeb.ai</span>
          </div>
          <div className={styles.navButtons}>
            <button className={styles.navBtn}>&#8249;</button>
            <button className={styles.navBtn}>&#8250;</button>
          </div>
        </div>

        {/* Browser Content */}
        <div className={styles.browserContent}>
          {/* Left Sidebar */}
          <div className={styles.editorSidebar}>
            {/* Active item */}
            <div className={styles.sidebarItemActive}></div>

            {/* List items */}
            <div className={styles.sidebarItem}>
              <span className={styles.iconCircle}></span>
              <div className={styles.itemLines}>
                <div className={styles.line}></div>
                <div className={`${styles.line} ${styles.lineShort}`}></div>
              </div>
            </div>
            <div className={styles.sidebarItem}>
              <span className={styles.iconSquare}></span>
              <div className={styles.itemLines}>
                <div className={styles.line}></div>
                <div className={`${styles.line} ${styles.lineShort}`}></div>
              </div>
            </div>
            <div className={styles.sidebarItem}>
              <span className={styles.iconTriangle}></span>
              <div className={styles.itemLines}>
                <div className={styles.line}></div>
                <div className={`${styles.line} ${styles.lineShort}`}></div>
              </div>
            </div>
          </div>

          {/* Main Editor Area */}
          <div className={styles.editorMain}>
            {/* Text placeholder lines */}
            <div className={styles.textLines}>
              <div className={`${styles.textLine} ${styles.textLineLong}`}></div>
              <div className={`${styles.textLine} ${styles.textLineMedium}`}></div>
              <div className={`${styles.textLine} ${styles.textLineFull}`}></div>
            </div>

            {/* Heart / like icon area */}
            <div className={styles.likeRow}>
              <div className={`${styles.textLine} ${styles.textLineShort}`}></div>
              <div className={`${styles.textLine} ${styles.textLineTiny}`}></div>
              <svg className={styles.heartIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className={styles.textLines} style={{ marginTop: 8 }}>
              <div className={`${styles.textLine} ${styles.textLineMedium}`}></div>
              <div className={`${styles.textLine} ${styles.textLineShort}`}></div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className={styles.cardsGrid}>
            {/* Card 1 - Diamond + half circle yellow */}
            <div className={styles.card}>
              <div className={styles.cardYellowArc}></div>
              <div className={styles.cardDiamond}></div>
            </div>

            {/* Card 2 - Rotate icon */}
            <div className={styles.card}>
              <div className={styles.cardRotateIcon}>
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="16" stroke="#cddeff" strokeWidth="3" strokeDasharray="60 20" />
                  <polygon points="32,14 38,20 32,26" fill="#f5a623" />
                </svg>
              </div>
            </div>

            {/* Card 3 - Blue circle + arc */}
            <div className={styles.card}>
              <div className={styles.cardBlueSmall}></div>
              <div className={styles.cardArcBottom}></div>
            </div>

            {/* Card 4 - Big blue circle + stars */}
            <div className={styles.card}>
              <div className={styles.cardBlueLarge}></div>
              <div className={styles.cardStars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className={styles.star} viewBox="0 0 16 16">
                    <polygon
                      points="8,1 10,6 15,6 11,9.5 12.5,15 8,11.5 3.5,15 5,9.5 1,6 6,6"
                      fill="#f5a623"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from "react";
import { useI18n } from "../i18n/I18nProvider";

type IconProps = {
  size?: number;
  strokeWidth?: number;
};

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const MailIcon: React.FC<IconProps> = ({ size = 18, strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...iconProps}>
    <path d="M4 6h16v12H4z" strokeWidth={strokeWidth} />
    <path d="m4 8 8 6 8-6" strokeWidth={strokeWidth} />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ size = 18, strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...iconProps}>
    <path
      d="M6.7 3.8h3.2l1.2 4.3-2 1.5a15.5 15.5 0 0 0 5.3 5.3l1.5-2 4.3 1.2v3.2c0 .9-.7 1.7-1.7 1.7A16.7 16.7 0 0 1 5 5.5c0-1 .8-1.7 1.7-1.7Z"
      strokeWidth={strokeWidth}
    />
  </svg>
);

const MapPinIcon: React.FC<IconProps> = ({ size = 18, strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...iconProps}>
    <path
      d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
      strokeWidth={strokeWidth}
    />
    <circle cx="12" cy="10" r="2.2" strokeWidth={strokeWidth} />
  </svg>
);

const GraduationCapIcon: React.FC<IconProps> = ({
  size = 18,
  strokeWidth = 2,
}) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...iconProps}>
    <path d="m3 9 9-4 9 4-9 4-9-4Z" strokeWidth={strokeWidth} />
    <path d="M7 11.5V15c0 1.4 2.3 2.5 5 2.5s5-1.1 5-2.5v-3.5" strokeWidth={strokeWidth} />
    <path d="M21 10v5" strokeWidth={strokeWidth} />
  </svg>
);

const LinkedinIcon: React.FC<IconProps> = ({ size = 18, strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...iconProps}>
    <rect x="4" y="9" width="4" height="11" strokeWidth={strokeWidth} />
    <circle cx="6" cy="5.8" r="1.2" strokeWidth={strokeWidth} />
    <path
      d="M12 20V9h3.5v1.7h.1c.5-.9 1.7-2 3.8-2 3 0 4.6 1.9 4.6 5.4V20"
      strokeWidth={strokeWidth}
    />
  </svg>
);

const GithubIcon: React.FC<IconProps> = ({ size = 18, strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...iconProps}>
    <path
      d="M12 3.5a8.5 8.5 0 0 0-2.7 16.6v-2.7c-2 .4-2.5-.8-2.7-1.5-.1-.4-.6-1.5-1-1.8-.4-.2-1-.8 0-.8.9 0 1.6.8 1.9 1.2 1 .1 1.8-.5 2.2-.8.1-.7.4-1.2.7-1.5-1.8-.2-3.8-.9-3.8-4.1 0-.9.3-1.7.8-2.4-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.5 1a8.4 8.4 0 0 1 4.5 0c1.8-1.2 2.5-1 2.5-1 .5 1.2.2 2 .1 2.2.5.7.8 1.5.8 2.4 0 3.2-2 3.9-3.9 4.1.3.3.7.9.7 1.9v2.9A8.5 8.5 0 0 0 12 3.5Z"
      strokeWidth={strokeWidth}
    />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useI18n();

  const infoItems = [
    {
      icon: MailIcon,
      label: t("footerEmail"),
      value: "gabkos21@gmail.com",
      href: "mailto:gabkos21@gmail.com",
    },
    {
      icon: PhoneIcon,
      label: t("footerPhone"),
      value: "06 20 223 1366",
      href: "tel:+36202231366",
    },
    {
      icon: MapPinIcon,
      label: t("footerLocation"),
      value: "Magyarország, Budapest",
    },
    {
      icon: GraduationCapIcon,
      label: t("footerStudies"),
      value: "BME VIK MSC",
    },
  ];

  return (
    <footer className="site-footer" aria-label={t("footerTitle")}>
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__name">Bakos Gergő</span>
          <span className="site-footer__meta">Frontend / Full-stack</span>
        </div>

        <div className="site-footer__info">
          {infoItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="site-footer__icon" aria-hidden="true">
                  <Icon size={16} strokeWidth={2.1} />
                </span>
                <span className="site-footer__text">
                  <span className="site-footer__label">{item.label}</span>
                  <span className="site-footer__value">{item.value}</span>
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                className="site-footer__item"
                href={item.href}
                aria-label={`${item.label}: ${item.value}`}
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="site-footer__item">
                {content}
              </div>
            );
          })}
        </div>

        <div className="site-footer__links" aria-label={t("footerLinks")}>
          <a
            className="site-footer__link"
            href="https://www.linkedin.com/in/gergo-bakos-932189361"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={16} strokeWidth={2.1} />
            <span>{t("footerLinkedin")}</span>
          </a>
          <a
            className="site-footer__link"
            href="https://github.com/Gbakos21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={16} strokeWidth={2.1} />
            <span>{t("footerGithub")}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

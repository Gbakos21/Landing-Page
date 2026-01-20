type AnalyticsParams = Record<string, unknown>;

const getGtag = () => {
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  return typeof gtag === "function" ? gtag : null;
};

export const trackEvent = (name: string, params?: AnalyticsParams) => {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }
  gtag("event", name, params ?? {});
};

export const trackLinkClick = (label: string, href: string) => {
  trackEvent("select_content", {
    content_type: "link",
    item_name: label,
    item_id: href,
  });
};

export const trackDownload = (label: string, href: string) => {
  trackEvent("file_download", {
    file_name: label,
    link_url: href,
  });
};

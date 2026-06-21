const getNavOffset = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    "--nav-height"
  );
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed + 16 : 0;
};

const smoothScrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const rect = target.getBoundingClientRect();
  const targetY = rect.top + window.scrollY - getNavOffset();
  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: "smooth",
  });
};

export default smoothScrollToId;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const getNavOffset = () => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    "--nav-height"
  );
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed + 16 : 0;
};

const smoothScrollTo = (targetY: number, durationMs: number) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = Math.min((now - startTime) / durationMs, 1);
    const eased = easeInOutCubic(elapsed);
    window.scrollTo(0, startY + distance * eased);
    if (elapsed < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const smoothScrollToId = (id: string, durationMs = 900) => {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const rect = target.getBoundingClientRect();
  const targetY = rect.top + window.scrollY - getNavOffset();
  smoothScrollTo(Math.max(0, targetY), durationMs);
};

export default smoothScrollToId;

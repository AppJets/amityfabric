/* Shared Chart.js defaults + palette for the Amity dashboards */
(function () {
  const css = getComputedStyle(document.documentElement);
  const c = (n) => css.getPropertyValue(n).trim();

  window.PAL = {
    teal:   c('--c-teal')   || '#14b8a6',
    indigo: c('--c-indigo') || '#6366f1',
    amber:  c('--c-amber')  || '#f59e0b',
    coral:  c('--c-coral')  || '#f43f5e',
    sky:    c('--c-sky')    || '#0ea5e9',
    violet: c('--c-violet') || '#8b5cf6',
    emerald:c('--c-emerald')|| '#10b981',
    rose:   c('--c-rose')   || '#fb7185',
    ink:    c('--ink')      || '#0f172a',
    ink2:   c('--ink-2')    || '#475569',
    ink3:   c('--ink-3')    || '#94a3b8',
    grid:   'rgba(148,163,184,.18)',
  };

  if (window.Chart) {
    Chart.defaults.font.family = '"Segoe UI","Segoe UI Variable",system-ui,Roboto,sans-serif';
    Chart.defaults.font.size = 11.5;
    Chart.defaults.color = PAL.ink2;
    Chart.defaults.plugins.legend.display = false;
    Chart.defaults.plugins.tooltip.backgroundColor = '#0f172a';
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.titleFont = { weight: '700' };
    Chart.defaults.maintainAspectRatio = false;
  }

  // soft vertical gradient for area fills
  window.areaFill = function (ctx, hex, a1, a2) {
    const { ctx: c2, chartArea } = ctx.chart;
    if (!chartArea) return hex;
    const g = c2.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    const toRGBA = (h, a) => {
      const n = h.replace('#', '');
      const r = parseInt(n.substring(0, 2), 16),
            gg = parseInt(n.substring(2, 4), 16),
            b = parseInt(n.substring(4, 6), 16);
      return `rgba(${r},${gg},${b},${a})`;
    };
    g.addColorStop(0, toRGBA(hex, a1));
    g.addColorStop(1, toRGBA(hex, a2));
    return g;
  };

  window.gridCfg = {
    grid: { color: PAL.grid, drawBorder: false },
    ticks: { color: PAL.ink3 },
    border: { display: false },
  };
})();

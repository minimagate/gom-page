(() => {
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) return;
    if (event.data?.type !== "gom-plot-height") return;

    const frame = [...document.querySelectorAll("iframe[data-plot-frame]")]
      .find((candidate) => candidate.contentWindow === event.source);
    const height = Number(event.data.height);
    if (!frame || !Number.isFinite(height) || height <= 0) return;

    frame.style.height = `${Math.ceil(height)}px`;
  });
})();

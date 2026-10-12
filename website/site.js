// The source does not guess a public release URL. Deployment supplies only
// public metadata; no source-repository token is sent to the browser.
fetch('release.json').then(response => response.ok ? response.json() : null).then(release => {
  if (!release?.download_url) return;
  const url = new URL(release.download_url, location.href);
  if (url.protocol !== 'https:' && url.origin !== location.origin) return;
  const link = document.querySelector('#download-link');
  link.href = url.href;
  link.removeAttribute('aria-disabled');
  link.textContent = release.version ? `Download eScratch ${release.version} ↗` : 'Download preview ↗';
  document.querySelector('#download-note').textContent = 'Apple silicon · macOS · ZIP download';
}).catch(() => {});

export const themeStorageKey = "portfolio:theme";

export const themeScript = `try {
  if (localStorage.getItem(${JSON.stringify(themeStorageKey)}) === 'light') {
    document.documentElement.dataset.theme = 'light';
  }
} catch {}`;

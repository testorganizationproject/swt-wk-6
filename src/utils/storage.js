// Safe localStorage helpers with quota/error handling
export const safeGetItem = (key, fallback = null) => {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch (_err) {
    return fallback;
  }
};

export const safeSetItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    // Quota exceeded or serialization error: surface via return boolean
    return false;
  }
};

export const safeRemoveItem = (key) => {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (_err) {
    return false;
  }
};



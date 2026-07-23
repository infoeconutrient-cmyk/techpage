/**
 * Safely get an item from localStorage with a fallback default.
 */
export function getStorageItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Safely set an item in localStorage.
 */
export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage may be full or unavailable — silently fail
  }
}

/**
 * Remove an item from localStorage.
 */
export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // silently fail
  }
}


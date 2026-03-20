const LANGUAGE_COOKIE_NAME = 'language';

export function getLanguageFromCookie(): string {
  if (typeof window !== 'undefined') {
    // Client-side: read from document.cookie
    const cookieList = document.cookie.split(';');
    for (const cookie of cookieList) {
      const [name, value] = cookie.trim().split('=');
      if (name === LANGUAGE_COOKIE_NAME) {
        return value || 'en';
      }
    }
    return 'en';
  } else {
    // Server-side: return 'en' by default (static export doesn't support server-side cookies)
    return 'en';
  }
}

export function setLanguageCookie(language: string): void {
  if (typeof window !== 'undefined') {
    // Client-side: set document.cookie
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

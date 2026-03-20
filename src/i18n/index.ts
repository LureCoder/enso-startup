import en from './en.json';
import zh from './zh.json';

const translations = {
  en,
  zh,
};

export function t18n(key: string, locale: string = 'en'): string {
  try {
    const keys = key.split('.');
    let result: any = translations[locale as keyof typeof translations];
    
    if (!result) {
      return key;
    }
    
    for (const k of keys) {
      // Check if result is an array and k is a number
      if (Array.isArray(result) && !isNaN(Number(k))) {
        const index = Number(k);
        if (index >= 0 && index < result.length) {
          result = result[index];
        } else {
          return key; // Return the key if index is out of bounds
        }
      } else if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  } catch (error) {
    console.error('Error in translation function:', error);
    return key;
  }
}

export function getTranslations(locale: string = 'en') {
  return translations[locale as keyof typeof translations];
}
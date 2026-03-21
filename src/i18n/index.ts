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
    
    let i = 0;
    while (i < keys.length) {
      let currentKey = keys[i];
      // Check if currentKey exists in result
      if (result && typeof result === 'object' && currentKey in result) {
        result = result[currentKey];
        i++;
      } else {
        // If currentKey doesn't exist, try to combine with next key
        if (i < keys.length - 1) {
          currentKey = keys.slice(i).join('.');
          if (result && typeof result === 'object' && currentKey in result) {
            result = result[currentKey];
            break;
          } else {
            return key; // Return the key if translation not found
          }
        } else {
          return key; // Return the key if translation not found
        }
      }
    }
    
    return typeof result === 'string' ? result : key;
  } catch (error) {
    console.error('Error in translation function:', error);
    return key;
  }
}

export function t18nArray(key: string, locale: string = 'en'): string[] {
  try {
    const keys = key.split('.');
    let result: any = translations[locale as keyof typeof translations];
    
    if (!result) {
      return [key];
    }
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return [key]; // Return the key if translation not found
      }
    }
    
    return Array.isArray(result) ? result : [key];
  } catch (error) {
    console.error('Error in translation function:', error);
    return [key];
  }
}

export function getTranslations(locale: string = 'en') {
  return translations[locale as keyof typeof translations];
}

// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

export function getTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function calculateYearsExperience(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

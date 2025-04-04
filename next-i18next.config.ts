import { type UserConfig } from 'next-i18next';
import { resolve } from 'path';
import i18n from './next-i18n-config';

/**
 * @link https://github.com/i18next/next-i18next#6-advanced-configuration
 */
const userConfig: UserConfig = {
  i18n,
  /**
   * To avoid issues when deploying to some paas (vercel...)
   * Warning, this code might fail in Next.js middleware and edge functions
   */
  localePath:
    typeof window === 'undefined' ? resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
};

export default userConfig;

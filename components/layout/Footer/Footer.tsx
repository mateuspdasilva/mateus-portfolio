import './index.scss';
import { FooterProps } from './types';
import initTranslations from '@/app/i18n';

export default async function Footer({ locale }: FooterProps) {
  const { t } = await initTranslations(locale, ['footer']); 
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <p className='footer___content'>{t('footer_content')}, {currentYear}</p>
    </footer>
  );
}
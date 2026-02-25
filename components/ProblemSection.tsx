import React from 'react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

interface ProblemSectionProps {
  onOpenDemo: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenDemo }) => {
  const { t } = useTranslation();

  const problems = (t('problemSection.problems', { returnObjects: true }) as Array<{ title: string; desc: string }>);

  return (
    <section id="problem" className="py-24 bg-arquitectura">
      <div className="container mx-auto px-6">

        {/* Intro Text Block */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-h3 md:text-h2 font-medium text-torre leading-snug">
            {t('problemSection.title')} <span className="inline-block border-2 border-domo rounded-full px-4 py-1 mx-1 italic font-serif bg-white">{t('problemSection.titleHighlight')}</span>
            <span className="text-gray-400 block mt-4 text-h3">{t('problemSection.subtitle')}</span>
          </h2>
          <div className="mt-8">
            <Button className="hover:scale-105 shadow-lg" onClick={onOpenDemo}>
              {t('problemSection.cta')}
            </Button>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {problems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-[2rem] hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-domo/20 group min-h-[200px] flex flex-col">
              <div className="w-10 h-10 bg-arquitectura rounded-full flex items-center justify-center mb-4 group-hover:bg-domo group-hover:text-white transition-colors">
                <span className="font-bold text-small">{index + 1}</span>
              </div>
              <h3 className="text-h4 font-bold text-torre mb-2">{item.title}</h3>
              <p className="text-small text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
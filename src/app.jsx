/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {Navbar} from './components/Navbar.jsx';
import {Hero} from './compnents/Hero.jsx';
import {Gallery} from './components/Gallery.jsx';
import {LightboxModal} from './components/LightboxModal.jsx';
import {PrintModal} from './components/PrintModal.jsx';
import {SeriesSection} from './components/SeriesSection.jsx';
import {AboutSection} from './components/AboutSection.jsx';
import {GearSection} from './components/GearSection.jsx';
import {ContactSection} from './components/ContactSection.jsx';
import {Footer} from './components/Footer.jsx';
import {PHOTOS} from './data/photos.js';

export default function App() {
  const [activeLightboxPhotoId, setActiveLightboxPhotoId] = useState(null);
  const [activePrintPhoto, setActivePrintPhoto] = useState(null);
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [prefilledProjectType, setPrefilledProjectType] = useState('fine_art_print' );

  const featuredHeroPhoto = PHOTOS[0];
  
  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth'});
    }
  };

  const hendleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleOpenPrintInquiry = (photo) => {
    setActivePrintPhoto(photo || PHOTOS[0]);
  };

  const handleProceedFromPrinModal = (details) => {
    const text =
      `Olá, Gabriel. Gostaria de solicitar a reserva da triagem Fine Art da obra "${details.photoTitle}".\n` +
      `• Dimensões: ${details.sizeLabel}\n` +
      `• Suporte de Impressão: ${details.paperLabel}\n` +
      `• Moldura / Vidro: ${details.frameLabel}\n` +
      `• Estimativa de Valor: R$ ${details.totalPrice.toLocaleString("pt-BR")},00\n\n` +
      `Por favor, me informe a disponibilidade da tiragem numerada e opções de envio seguro.`;

    setPrefilledMessage(text);
    setPrefilledProjectType('fine_art_print');

    handleNavigate('contato');
  };

  return (
    <div className="min-h-screen bg-[#070708] text-neutral-100 flex flex-xol selection:bg-amber-400 selection:text-neutral-950">
      <Navbar onNavigate={hamdleNavigate} onOpenPrintInquiry={() => handleOpenPrintInquiry(PHOTOS[0])}/>
      
      <main className="flex-1">
        <Hero
          featuredPhoto={featuredHeroPhoto}
          onExploreGallery={() => handleNavigate('galeria')}
          onExploreSeries={() => handleNavigate('series')}
          onOpenPhoto={(photo) => setActiveLightboxPhotoId(photo.id)}
        />
        <Gallery
          photos={PHOTOS}
          onSelectPhoto={(photo) => setActiveLightboxPhotoId(photo.id)}
          onOpenPrintInquiry={(photo) => handleOpenPrintInquiry(photo)}
        />
        <SeriesSection
          photos={PHOTOS}
          onSelectPhoto={(photo) => setActiveLightboxPhotoId(photo.id)}
        />

        <AboutSection />
        <GearSection />

        <ContactSection
          prefiledMessage={prefilledMessage}
          prefilledProjectType={prefilledProjectType}
        />
      </main>

      <Footer 
        onScrollToTop={handleScrollToTop} 
        onNacvigate={handleNavigate}
      />

      {activeLightboxPhotoId && (
        <LightboxModal
          photos={PHOTOS}
          activePhotoId={activeLightboxPhotoId}
          onClose={() => setActivLightboxPhotoId(null)}
          onSelectPhotoId={(id) => setActiveLightboxPhotoId(id)}
          onOpenPrintInquiry={(photo) => {
            setActiveLightboxPhotoId(null);
            setActivePrintPhoto(photo);
          }}
        />
      )}

      {activePrintPhoto && (
        <PrintModal
          photo={activePrintPhoto}
          photos={PHOTOS}
          onClose={() => setActivePrintPhoto(null)}
          onProceeddToInquiry={handleProceedFromPrintModal}
        />
      )}
    </div>
  );

}
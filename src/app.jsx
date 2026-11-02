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

}
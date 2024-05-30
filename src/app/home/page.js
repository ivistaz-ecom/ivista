"use client"
import IhomePage from '../../../components/ivistaz/IhomePage'
import Mastery from '../../../components/ivistaz/Mastery'
import Arts from '../../../components/ivistaz/Arts'
import Performance from '../../../components/ivistaz/Performance'
import Footer from '../../../components/Footer'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import MasteryArtsPerfomancePage from '../../../components/ivistaz/MasteryArtsPerfomancePage'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function ivistaz() {

  return (
    <>
      <IhomePage className="panel" />
      {/* <MasteryArtsPerfomancePage className="panel" />
      <Mastery className="panel" />
      <Arts className="panel" />
      <Performance className="panel" /> 
  <Footer /> */}

    </>
  )
}

export default ivistaz

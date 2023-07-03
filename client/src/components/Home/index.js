import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Layout } from '@shopify/polaris';
import './index.scss'
import {
    dalmaInstagram, dalmaiVisa, dalmaLanding, dalmaLinkedInLaptop, limaAndVinegar, theSovereign, bioOptimizers, celebMix, eoApp, errante, 
    flanelle, fridays, hardRockCafe, it49, iVisa, laWeekly, lilyJade, mamb, nyWeekly, nyWire, sunMed, sunWink, uptime, versed, whiteChick, 
    alexTestimonial, cammyTestimonial, evanTestimonial, garrettTestimonial,
} from '../../assets/index'

const t = {
  dalmaName: 'Dalma Llinas',
  dalmaTaglines: ['Actress.', 'Singer.', 'Digital Strategist.', 'Content Creator'],
  dalmaIntro: 'I am a self-made multipotentialite based in Los Angeles. I teach people how to pursue multiple passions and amplify their success by rocking their social media game.',
  
  bioTitle: 'As a digital marketer and social media  strategist',
  bioText: 'I have helped brands in the US and Colombia boost their online visibility and achieve their business objectives by creating and implementing customized social media strategies that have enhanced their engagement, conversions, and revenue from social, and more importantly, improved the image they projected to their target audience.',
  
  brandHelp: 'Brands I\'ve helped across the globe',
  brandCollaborate: 'Brands I\'ve collaborated with on social',
  brandFeature: 'As featured in',

  filmTitle: 'As an actress and producer',
  filmText: 'I have used my social media influence to promote the projects that  have cast me as an actress and launch successful crowdfunding campaigns that have funded the entire pre and postproduction of my latest feature film.',
  limeAndVinegarCaption: 'Lime & Vinegar, directed by Evan Snyder',
  theSovereignCaption: 'The Sovereign, directed by Farah Y. Mourad Vera',

  socialMedia: 'Social media is the new frontier. My content strategies are crafted to make sure your potential followers enjoy the vibe of your profile with every scroll.',
  testimonialsTitle: 'Testimonials',
  testimonialsQuote: '"Nothing ruins your day more than a bad review." - Taylor Swift',

  classViral: 'All without having to go viral.',
  classTeach: 'And now, I\'m going to teach you.',
  classTitle: 'How to be successful on social media without having to go viral'
}

const Home = ({ currentUser, loggedIn, email }) => {

  return (
    <main id='homePage'>
      <section id='landing'>
        <div className='pageLeft'>
          <img src={dalmaLanding} alt={t.dalmaName} />
        </div>
        <div className='pageRight'>
          <h1>{t.dalmaName}</h1>
          <div>{t.dalmaTaglines.map(tagline => <span key={tagline}>{tagline}</span>)}</div>
          <p>{t.dalmaIntro}</p>
        </div>
      </section>
      <section id='bio'>
        <div className='pageLeft'>
          <img src={dalmaiVisa} alt={t.dalmaName} />
        </div>
        <div className='pageRight'>
          <h2>{t.bioTitle}</h2>
          <p>{t.bioText}</p>
        </div>
      </section>
      <section id='bio'>
        <div className='pageLeft'>
          <img src={dalmaiVisa} alt={t.dalmaName} />
        </div>
        <div className='pageRight'>
          <h2>{t.bioTitle}</h2>
          <p>{t.bioText}</p>
        </div>
      </section>
    </main>
  )
}

const mapState = (state) => ({
  loggedIn: state.currentUser.loggedIn,
  email: state.currentUser.email
})

export default connect(mapState)(Home);

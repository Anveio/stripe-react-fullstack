import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Layout } from '@shopify/polaris';
import './index.scss'

const Home = ({ currentUser, loggedIn, email }) => {

  return (
    <main id='homePage'>  
      <section id='welcome'>
        <div className='left'>
          <h1 id='welcomeHeader' className='header'>Dalma Daniela</h1>
          <ul id='welcomeLinks'>
            <li><a href='#welcome'>welcome</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#course'>my course</a></li>
            <li><a href='#press'>press</a></li>
            <li><a href='#socials'>socials</a></li>
          </ul>
        </div>
        <div className='right'>
          <img src='https://shoutoutla.com/wp-content/uploads/2023/03/c-PersonalDalmaLlinas__DalmaCommercialFINAL2_1676830999332.jpg' />
        </div>
      </section>
      <section id='about' className='homeSection'>
        <div className='left'>
          <img src='https://shoutoutla.com/wp-content/uploads/2023/03/c-DalmaLlinas__ecaaa1106c9e49e4b8f0ec59d5792046_1676831495797.jpg' />
        </div>
        <div className='right'>
          <h2>A little about me</h2>
          <p>I'm an actress, rock singer, songwriter, radio and TV personality, digital entrepreneur, and social media strategist.</p>
        </div>
      </section>
      <section id='course' className='homeSection'>
        <h2>How to be successful on social media without going viral</h2>
        <p>Do you have social media envy? Want to start a following online but don't know where to start? Are you intimidated by the idea of going viral? Well, I'll teach you how to start your online presence even without going viral.</p>
        <button>Click here to learn more</button>
      </section>
      <section id='press' className='homeSection'>
        <h2>Check out some of my press</h2>
        <ul>
          <li><a href='https://shoutoutla.com/meet-dalma-llinas-actress-singer-digital-creator/'><img src='https://shoutoutla.com/wp-content/uploads/2020/05/cropped-logo-black-2.png' alt='Shoutout LA' /></a></li>
          <li><a href='https://www.laweekly.com/top-female-entrepreneurs-to-follow-as-the-year-unfolds/'><img src='https://www.laweekly.com/wp-content/uploads/2019/03/law-logo2x-b-900905.png' alt='LA Weekly' /></a></li>
          <li><a href='https://nyweekly.com/entertainment/top-10-instagram-accounts-to-follow-2/'><img src='https://nyweekly.com/wp-content/uploads/2019/10/NY-Weekly-Black.png' alt='New York Weekly' /></a></li>
        </ul>
      </section>
      <section id='socials' className='homeSection'>
        <h2>Follow me</h2>
        <div id='socialsContainer'>
          <ul>
            <li><a href='https://www.instagram.com/dalma.llinas/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt='Instagram' /></a></li>
            <li><a href='linkedin.com/in/dalma-llin%C3%A1s-5851b549/'><img src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt='LinkedIn' /></a></li>
            <li><a href='https://www.facebook.com/dalmallinasconde/'><img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='Facebook' /></a></li> 
          </ul> 
          <ul> 
            <li><a href='https://www.imdb.com/name/nm12559836/'><img src='https://chrismugford.com/wp-content/uploads/2021/03/kisspng-imdb-film-director-computer-icons-television-u-5ac6f593dfa2f3.387615181522988435916.jpg' alt='IMDB' /></a></li> 
            <li><a href='https://en.wikipedia.org/wiki/Dalma_Llin%C3%A1s'><img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png' alt='Wikipedia' /></a></li> 
            <li><a href='https://www.youtube.com/channel/UCmTuTU9pvPTwpaYRXPiYxeA'><img src='freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png' alt='YouTube' /></a></li> 
          </ul>
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

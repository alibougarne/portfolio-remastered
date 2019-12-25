import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import homeImage from '../../assets/images/03.png';
import Container from '../../components/Container/Container';
import Hero from '../../components/Hero/Hero';

const SHome = styled.div`
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .mid {
    padding: 100px 0;
    @media (max-width: 768px) {
      padding: 0;
    }
    .experience {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      .item {
        .counter {
          font-size: 3rem;
          @media (max-width: 1200px) {
            font-size: 2.75rem;
          }
          @media (max-width: 992px) {
            font-size: 2.5rem;
          }
          @media (max-width: 768px) {
            font-size: 2.25rem;
          }
          @media (max-width: 576px) {
            font-size: 2rem;
          }
          color: ${({ theme }) => theme.colors.artery};
          font-family: 'Alegreya';
        }
        .title {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.primary};
          @media (max-width: 1200px) {
            font-size: 1.4rem;
          }
          @media (max-width: 992px) {
            font-size: 1.3rem;
          }
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
          @media (max-width: 576px) {
            font-size: 1.1rem;
          }
          font-family: 'Alegreya';
          font-weight: 900;
          margin-bottom: 1.2rem;
        }
        .text {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;

const Home = ({ pageTitle }) => {
  // Page content
  const line1 = `Welcome to my`;
  const line2 = `personal portfolio.`;
  const paragraph = `Hi. My name is Abderraouf. I am a front-end web developer from Aurès, Algeria. Have a look around and discover what I can offer for you or your business.`;
  const buttonText = `See some stuff I built`;

  useEffect(() => {
    document.title = `rofazayn | ${pageTitle}`;
  });

  return (
    <SHome className='page'>
      <Container>
        <div className='top'>
          <Hero
            pageTitle={pageTitle + '.'}
            line1={line1}
            line2={line2}
            paragraph={paragraph}
            buttonText={buttonText}
            buttonPath={'/projects'}
          />
          <Image src={homeImage} />
        </div>
        <div className='mid'>
          <div className='experience'>
            <div className='item'>
              <div className='counter'>9+</div>
              <div className='title'>Years' experience.</div>
              <div className='text paragraph'>
                In 2010, 12 yo me wrote his first HTML line. In 2011 I joined
                codecademy at its earliest starts and became a junior front-end
                developer with a descent knowledge of HTML, CSS & JavaScript. In
                2013, I was able to build websites for local businesses and
                companies.
              </div>
            </div>
            <div className='item'>
              <div className='counter'>50+</div>
              <div className='title'>Projects completed.</div>
              <div className='text paragraph'>
                Through my freelance journey, I delivered more than 50 complete
                projects, from web design to UI development, I did it all. With
                more than 5 years of freelancing (Late 2013 - Late 2018), I
                dealt with impossible deadlines. Get stuff done on time is a way
                of life for me.
              </div>
            </div>
            <div className='item'>
              <div className='counter'>1200+</div>
              <div className='title'>Github contributions.</div>
              <div className='text paragraph'>
                I love Git version control. And I show that love by contributing
                daily to GitHub. Though, I keep my repositories private due to
                secrecy agreements that I sign with my employers. Still, I have
                some side projects that you can check in the Projects section.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SHome>
  );
};

export default Home;

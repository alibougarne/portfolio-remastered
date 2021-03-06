import React, { useEffect, useRef } from 'react';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  staggerMenuReveal,
  staggerMenuHide,
  staggerTextReveal,
  staggerTextHide,
  handleHoverExit,
  handleHover,
} from '../../helpers/Animations';
import { SMenu } from './MenuStyled';
import { ReactComponent as ExternalLinkIcon } from '../../assets/icons/external-link.svg';

const Menu = ({ toggler }) => {
  // Elements to animate
  let myMenu = useRef(null),
    reveal1 = useRef(null),
    reveal2 = useRef(null),
    line1 = useRef(null),
    line2 = useRef(null),
    line3 = useRef(null),
    line4 = useRef(null),
    line5 = useRef(null);

  let html = document.querySelector('#html-element');

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (toggler.isClicked === false) {
      // If menu is closed and we want to open it.
      staggerTextHide(line1, line2, line3, line4, line5);
      staggerMenuHide(reveal2, reveal1);
      // Set menu to display none
      gsap.to(myMenu, { delay: 0.98, css: { display: 'none' } });

      html.classList.remove('no-sroll');
    } else if (
      toggler.isClicked === true ||
      (toggler.isClicked === true && toggler.initial === null)
    ) {
      // Set menu to display block
      gsap.set(myMenu, { css: { display: 'block' } });
      // Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerMenuReveal(reveal1, reveal2);
      staggerTextReveal(line1, line2, line3, line4, line5);
      html.classList.add('no-sroll');
    }
  }, [toggler, html]);

  return (
    <SMenu ref={(el) => (myMenu = el)}>
      <div
        className='menu-secondary-background'
        ref={(el) => (reveal1 = el)}
      ></div>
      <div className='menu-layer' ref={(el) => (reveal2 = el)}>
        <Container>
          <nav className='menu-links'>
            <ul>
              <li>
                <NavLink
                  to='/home'
                  ref={(el) => (line1 = el)}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  ref={(el) => (line2 = el)}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <a
                  href={process.env.PUBLIC_URL + '/docs/abderraouf-resume.pdf'}
                  target='_blank'
                  rel='noopener noreferrer'
                  ref={(el) => (line3 = el)}
                >
                  Resume <ExternalLinkIcon width='16px' />
                </a>
              </li>
              <li>
                <NavLink
                  to='/projects'
                  ref={(el) => (line4 = el)}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to='/hire'
                  ref={el => (line4 = el)}
                  onMouseEnter={e => handleHover(e)}
                  onMouseOut={e => handleHoverExit(e)}
                >
                  Hire me
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to='/contact'
                  ref={(el) => (line5 = el)}
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </SMenu>
  );
};

export default Menu;

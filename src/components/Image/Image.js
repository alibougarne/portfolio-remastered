import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/images/hero.webp';
import { revealImage } from '../../helpers/Animations';

const SImage = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  .background-layer1 {
    position: absolute;
    background: black;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .background-layer2 {
    position: absolute;
    background: tomato;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
  }
  .image-layer {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
    }
  }
`;

const Image = () => {
  let background1 = useRef(null);
  let background2 = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    revealImage(background1, background2, image);
  }, [background1, background2, image]);

  return (
    <SImage>
      <div className='background-layer1' ref={el => (background1 = el)}></div>
      <div className='background-layer2' ref={el => (background2 = el)}></div>
      <div className='image-layer'>
        <img src={HeroImage} alt='Hero' ref={el => (image = el)} />
      </div>
    </SImage>
  );
};

export default Image;
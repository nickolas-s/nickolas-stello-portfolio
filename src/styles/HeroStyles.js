import styled from 'styled-components';
import { colors } from './config';

const HeroStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 20px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    .info-container {
      color: ${colors.headline};
      padding-right: 30px;
      font-size: 20px;

      h1 {
        color: ${colors.accentColor};
        font-size: 35px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        font-weight: 500;
        line-height: normal;
        padding-bottom: 20px;
      }

      a {
        color: ${colors.paragraph};
        position: relative;
        transition: transform 250ms ease 0s, color 250ms ease 0s;
        display: inline-block;

        &:hover {
          transform: skew(-3deg, -3deg);

          &:after {
            height: 105%;
            width: 110%;
          }
        }

        &:after {
          background-color: ${colors.accentColor};
          bottom: 0px;
          content: '';
          height: 2px;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          transition: width 250ms ease 0s, height 250ms ease 0s;
          width: 100%;
          z-index: -1;
        }
      }
    }

    .img-container {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      border: 5px solid ${colors.paragraph};
      box-shadow: 0px 0px 8px ${colors.accentColor};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;
      }
    }
  }

  @media (max-width: 700px) {
    section {
      flex-direction: column-reverse;

      .info-container {
        padding-top: 20px;
        padding-right: 0px;
        text-align: center;
      }
    }
  }
`;

export default HeroStyles;

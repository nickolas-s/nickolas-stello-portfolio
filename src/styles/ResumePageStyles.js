import styled from 'styled-components';
import { colors } from './config';

const ResumePageStyles = styled.div`
  padding: 20px 20px 0px 20px;

  .wrapper {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 20px;

    .container {
      background-color: ${colors.cardBackground};
      border-radius: 3px;
      color: ${colors.headline};
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      align-self: start;

      h2 {
        font-weight: normal;
        letter-spacing: 1px;
        text-align: center;
        color: ${colors.paragraph};
      }

      hr {
        margin: 0px 20px;
        background-color: ${colors.accentColor};
        border: none;
        height: 1px;

        &:first-of-type {
          display: none;
        }
      }

      &-img {
        /* height: 250px; */
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 3px 3px 0px 0px;
        }
      }

      &-name {
        background-color: ${colors.accentColor};
        color: ${colors.paragraph};
        height: 100px;
        padding: 10px;
        text-align: center;
      }

      &-bio {
        padding: 20px;
        display: none;

        p {
          /* text-align: justify; */
        }
      }

      &-tech {
        padding: 20px;

        h2 {
          padding-bottom: 10px;
        }

        div {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px 10px;

          img {
            display: block;
          }

          .tooltip {
            position: relative;
            display: inline-block;
            justify-self: center;
            line-height: normal;
          }

          .tooltip .tooltiptext {
            visibility: hidden;
            width: 70px;
            background-color: rgba(0, 0, 0, 0.3);
            color: ${colors.paragraph};
            font-size: 12px;
            text-align: center;
            padding: 5px;
            border-radius: 6px;
            top: 100%;
            left: 50%;
            margin-left: -35px;
            position: absolute;
            z-index: 1;
          }

          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
        }
      }

      &-soft {
        padding: 20px;

        li {
          margin-left: 20px;
          line-height: 2.5rem;
        }
      }

      &-contact,
      &-social {
        padding: 20px;

        p {
          line-height: 2.5rem;
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 14px;

          .icon {
            color: ${colors.paragraph};
            font-size: 20px;
          }

          a {
            color: inherit;
          }
        }
      }
    }

    section {
      h2 {
        color: ${colors.paragraph};
        letter-spacing: 1px;
        font-weight: 400;
        border-bottom: 2px solid ${colors.accentColor};
        margin: 10px 0px;
        text-align: center;
      }

      .bio-wide {
        color: ${colors.headline};
        padding-bottom: 20px;
        letter-spacing: 0.5px;
      }
    }
  }

  @media (max-width: 700px) {
    .wrapper {
      grid-template-columns: 1fr;

      .container {
        max-width: 500px;
        justify-self: center;

        &-bio {
          display: block;

          p {
            text-align: justify;
          }
        }

        hr:first-of-type {
          display: block;
        }
      }

      .bio-wide {
        display: none;
      }
    }
  }

  @media (max-width: 415px) {
    section {
      h2 {
        font-size: 20px;
      }
    }
  }
`;

export default ResumePageStyles;

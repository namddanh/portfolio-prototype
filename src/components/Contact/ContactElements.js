import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: transparent;
  // background: linear-gradient(45deg, rgb(0 0 0 / 60%) 0%, rgb(0 0 0) 100%);
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 800px;
  margin: 50px auto;

  @media screen and (max-width: 986px) {
    margin: 25px 75px;
  }

  @media screen and (max-width: 540px) {
    margin: 10px 10px;
  }
`;

export const Icon = styled.div`
  right: 32px;
  top: 32px;
  text-align: right;
  position: absolute;

  @media screen and (max-width: 540px) {
    right: 20px;
    top: 15px;
  }
`;

export const Img = styled.img`
  width: auto;
  height: 75px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: content;
`;

export const Form = styled.form`
  position: relative;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 90%);
  background: linear-gradient(45deg, rgb(0 0 0 / 60%) 0%, rgb(0 0 0) 100%);

  @media screen and (max-width: 540px) {
    padding: 20px;
  }
`;

export const FormH1 = styled.h1`
  margin-top: 5px;
  margin-bottom: 15px;
  color: #fff;
  font-size: 20px;

  @media screen and (max-width: 414px) {
    font-size: 14px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormLabelError = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-style: bold;
  color: #ff0000;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    padding: 5px;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 15px;
  }
`;

export const FormButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--colorShadeA);
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
  padding: 0.5em 2em;
  border: 2px solid var(--colorShadeA);
  border-radius: 7px;
  background: var(--colorShadeE);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  width: 50%;
  margin: auto;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 90%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--colorShadeC);
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.75em 0 0 var(--colorShadeF);
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }

  &:hover {
    background: var(--colorShadeD);
    transform: translate(0, 0.075em);

    &:before {
      transform: translate3d(0, 0.75em, -1em);
    }
  }

  &:active {
    transform: translate(0, 0.75em);

    &:before {
      transform: translate3d(0, 0.35em, -1em);

      box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25em 0 0 var(--colorShadeF);
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormMsg = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-style: italic;
`;

export const BackButtonContainer = styled.div`
  margin: 10px;
`;

export const BackButtonSpan = styled.span`
  transition: all 0.2s ease-out;
  z-index: 2;
`;

export const BackButton = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;

  // Button background //
  color: #fff;
  border: 4px solid #000;
  box-shadow: 0 1px 3px rgb(0 0 0 / 90%);
  background-color: #000;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #000;

    border: 4px solid #666;
    background-color: #fff;
    box-shadow: 0px 0px 0px 4px #eee inset;

    &:after {
      background: #fff;
      border: 20px solid #000;
      opacity: 0;
      left: 120%;
      -webkit-transform: rotate(40deg);
      transform: rotate(40deg);
    }

    ${BackButtonSpan} + & {
      letter-spacing: 0.13em;
      color: #333;
    }
  }

  &:after {
    background: #fff;
    border: 0px solid #000;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.8;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    width: 50px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
    z-index: 1;
  }
`;

export const SocialLinkContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const SocialLinkSpan = styled.span`
  display: block;
  padding-top: 2px;
`;

export const SocialLinkedin = styled(Link)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 16px;
  color: var(--colorShadeWhite);
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  font-family: inherit;
  padding: 0.45em 1em;
  border: 2px solid var(--colorShadeBlue);
  border-radius: 7px;
  background: var(--colorShadeBlue);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  margin-right: 8px;
  margin-bottom: 20px;
  width: 150px;
  height: 50px;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 90%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--colorShadeDarkBlue);
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--colorShadeDarkBlue),
      0 0.75em 0 0 var(--colorShadeShadow);
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }

  &:hover {
    background: var(--colorShadeHoverBlue);
    border: 2px solid var(--colorShadeHoverBlue);
    color: var(--colorShadeWhite);
    transform: translate(0, 0.025em);
    text-decoration: none;

    &:before {
      transform: translate3d(0, 0.75em, -1em);
    }
  }

  &:active {
    transform: translate(0, 0.75em);

    &:before {
      transform: translate3d(0, 0.35em, -1em);

      box-shadow: 0 0 0 2px var(--colorShadeDarkBlue),
        0 0.25em 0 0 var(--colorShadeF);
    }
  }
`;

export const SocialGithub = styled(Link)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 16px;
  color: var(--colorShadeWhite);
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  font-family: inherit;
  padding: 0.45em 1em;
  border: 2px solid var(--colorShadeGrey);
  border-radius: 7px;
  background: var(--colorShadeGrey);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  margin-right: 8px;
  margin-bottom: 20px;
  width: 150px;
  height: 50px;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 90%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--colorShadeDarkGrey);
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--colorShadeDarkGrey),
      0 0.75em 0 0 var(--colorShadeShadow);
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }

  &:hover {
    background: var(--colorShadeHoverGrey);
    border: 2px solid var(--colorShadeHoverGrey);
    color: var(--colorShadeWhite);
    transform: translate(0, 0.025em);
    text-decoration: none;

    &:before {
      transform: translate3d(0, 0.75em, -1em);
    }
  }

  &:active {
    transform: translate(0, 0.75em);

    &:before {
      transform: translate3d(0, 0.35em, -1em);

      box-shadow: 0 0 0 2px var(--colorShadeDarkGrey),
        0 0.25em 0 0 var(--colorShadeF);
    }
  }
`;

export const SocialSvgs = styled.svg`
  overflow: hidden;
  vertical-align: middle;
  padding-right: 2px;
`;

export const fadeIn = {
  opacity: 1,
  transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
};

export const fadeOut = {
  opacity: 0,
  transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s",
};

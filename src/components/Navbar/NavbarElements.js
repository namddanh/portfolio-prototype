import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  // Temporary fix -96px; **
  // margin-top: -80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 21;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #28a745;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  // margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  // dimensions
  height: 100%;
`;

export const Img = styled.img`
  // margin: 0 0 10px 0;
  padding-right: 0;
  width: auto;
  margin: 7px 0 0 0;
  height: 75px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #9c909b;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
  }

  &.active {
    color: #9c909b;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    border-bottom: 3px solid #9a8e99;
  }
`;

export const NavBtnContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnSpan = styled.span`
  transition: all 0.2s ease-out;
  z-index: 2;
`;

export const NavBtnLink = styled(LinkR)`
  display: flex;
  flex-direction: column;
  text-align: center;
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  width: 100px;
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

    ${NavBtnSpan} + & {
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

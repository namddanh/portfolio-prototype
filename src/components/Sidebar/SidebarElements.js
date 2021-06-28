import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration; none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
      color: #01bf71;
      transition: 0.2s ease-in-out;
  }
`;

export const SideBtnContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideBtnSpan = styled.span`
  transition: all 0.2s ease-out;
  z-index: 2;
`;

export const SideBtnLink = styled(LinkR)`
  display: flex;
  flex-direction: column;
  text-align: center;
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  width: 130px;
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

    ${SideBtnSpan} + & {
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

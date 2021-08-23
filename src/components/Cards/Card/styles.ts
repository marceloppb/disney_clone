import styled, { css } from 'styled-components'
import Link from 'next/link'

import { CardsProps } from '.'

export const Container = styled.button<CardsProps>`
  padding: 24px;
  border: transparent;
  background-color: transparent;

  ${( props ) => props.size === 'small' && css`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid transparent;

    img {    
      inset: 0px;
      display: block;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position: absolute;
      transition: opacity 500ms ease-in-out 0s;
      width: 100%;
      z-index: 1;
      top: 0;
    }

    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
    }
  `}

  ${( props ) => props.size === 'large' && css`
    width: 100%;
    cursor: pointer;
    display: block;
    position: relative;
    pointer-events: none;
  
    img {    
      width: 100%;
      height: 100%;
      size: contain;
      border: 4px solid transparent;
      border-radius: 4px;
      box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    }

    &:hover img {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }

  `}
  
`
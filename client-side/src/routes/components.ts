import styled, { createGlobalStyle } from "styled-components";
import { useLocation } from "react-router-dom";
import {excluded} from "./excluded"

export const PublicRoutesContainer = styled.section`
    height: 80px;
    width: 100%;
    padding-top: ${() => {
        const {pathname} = useLocation()
        const givePadding = !excluded.some(path => pathname.includes(path));
        return givePadding ? "80px" : "0px"
    }};
`
export const AdminGlobalStyles = createGlobalStyle`
&::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px green;
  }

  &::-webkit-scrollbar-thumb {
    background: green;
    border-radius: 10px;
  }
`
export const AdminRoutesContainer = styled.section`
  
   
`
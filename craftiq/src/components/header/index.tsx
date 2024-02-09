
//import "../translations/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CategoryMenu, HeaderWrapper,SearchForm,SearchInput,SearchWrapper, StyledLink} from "./style"
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import React from 'react'; 
const Header = () =>{
    return (
    <>
                        <HeaderWrapper>
                        <CategoryMenu>
    <StyledLink href="#">
      <FontAwesomeIcon icon={faBars} />
      Categories
    </StyledLink>
                        </CategoryMenu>
                        <SearchWrapper>
    <SearchBar></SearchBar>
  </SearchWrapper>
                        </HeaderWrapper>                        
                        
                    
                    
    
    </>
    );
}


export default Header;
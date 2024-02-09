import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center; /* Align items vertically in the center */
`;

export const CategoryMenu = styled.div`
  display: flex;
  align-items: center; /* Align items vertically in the center */
  margin-right: 10px; /* Adjust the margin as needed */
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center; /* Align items vertically in the center */
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center; /* Align items vertically in the center */
`;

export const SearchInput = styled.input`
  width: 300px; /* Adjust the width as needed */
  margin-left: 5px; /* Adjust the margin as needed */
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 8px 12px; 
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
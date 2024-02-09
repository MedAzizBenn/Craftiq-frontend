import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  color:#132009;
  font-family: 'Roboto', sans-serif;
  line-height:1.4;

}
* {
  box-sizing: border-box;
}
#app {
  bottom: 0;
  display: flex;
  flex-direction: row;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  background:#fff;
}
p,
label {
  margin: 0;
}

* {
  box-sizing: border-box;
}
// grid specific styles

.ag-standard-button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  margin: 0px;
  padding: 5px 10px;
  vertical-align: middle;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  min-height: 30px;
  min-width: 30px;
  font-size: 14px;
  background: transparent;
  border-radius: 3px;
  &:hover,&:active,&:focus {
    color:"#fff";
    box-shadow:none
  }
}
}
.ag-name-container {
  line-height: 16px;
  height:37px;
}
   & .ag-name-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & .ag-name-container {
    padding-left: 5px;;
    & .title {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    & .description {
      color: #132009;
      font-size: 11px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    & .currency {
      color: #132009;
      font-size: 11px;
    }
  }

  & .ag-badge {
    text-align: center;
    width: 12px;
    height: 16px;
    font-size: 11px;
    border-radius: 2px;
    background: #f7f4ea;
    color:  #132009;
    font-weight: 600;
  }

  & .ag-label {
    border-radius: 2px;
    padding: 0 5px;
    margin: 2px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    display: inline-block;
  }


.ag-progressbar {
  height: 5px;;
  position: relative;
  overflow: hidden;
  background-color: #f7f4ea;
  border-radius:5px;
  width: 100%;
}
.ag-theme-alpine .ag-row {
  height: 40px;
}

.ag-theme-alpine .ag-cell {
line-height: 37px;
}
.ag-overlay-no-rows-wrapper {
  align-items: center;
  justify-content: center;
}
.ag-side-buttons {
display:none
}
.ag-column-select-header {
& .ag-column-select-header-checkbox {
  display: none;
}
}
`;

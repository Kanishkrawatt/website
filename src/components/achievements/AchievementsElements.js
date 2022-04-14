import styled from "styled-components"
export const Header = styled.header`
  padding: 50px 15px;
  background-color: ${props => props.theme.bg};
  text-align: center;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    font-weight: 300;
  }
  @media (max-width: 760px) {
    display: block;
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`
export const Tr = styled.tr`
  :nth-of-type(odd) {
    background: ${props => props.theme.bg};
  }
  @media (max-width: 760px) {
    display: block;
    position: absolute;
    top: -9999px;
    left: -9999px;
    tr {
      border: 1px solid #green;
    }
  }
`
export const Td = styled.td`
padding: 6px; 
border: 1px solid #ccc; 
text-align: left;
background-color: background-color: ${props => props.theme.bg};;
}

/* &:first-child {
  border-top: 1px solid #ccc;
} */
@media (max-width: 760px) {
	display: block; 
  border: none;
  :nth-child(even) {background-color:${props => props.theme.bg};}
  border-bottom: 1px solid ${props => props.theme.primary}; 
  position: relative;
  padding-left: 50%; 
  :before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
  &:last-child {
    border-bottom : none;
    padding-bottom:50px;
  }
  /* &:first-child {
    border-top: 1px solid ${props => props.theme.primary};
  } */
  
	:nth-of-type(1):before { content: "Date"; }
	:nth-of-type(2):before { content: "Winner Name"; }
	:nth-of-type(3):before { content: "Position"; }
	:nth-of-type(4):before { content: "Event Name"; }
	:nth-of-type(5):before { content: "College Name"; }
}

`
export const TableContainer = styled.section`
  max-width: 800px;
  
  width: 90%;
  padding: 5rem 0 0 0;
  margin: auto 40px;
  @media (max-width: 954px) {
    margin-top:220px;
    
  }
  @media (max-width: 760px) {
    display: block;
    top: 50%;
    left: 50%;
    align-items: center;
    margin:0px auto;
    margin-top:220px;
    justify-content: center;
  }
`
export const TableContainerTitle = styled.div`
  text-align: center;
  padding: 10px;
  h2 {
    font-size: 24px;
    font-weight: 300;
  }
`
export const TableContainerTable = styled.table`
  display: inline-table;
  width: 100%;
  top:20rem;
  text-align:center;
  border-collapse: collapse;
  @media (max-width: 760px) {
    display: inline-table;
    width:100%;
    margin:0px auto;
  }
`

import styled from 'styled-components';

export const Table = styled.div`
  width:90%;
  background: gray;
  color:#fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Th = styled.th`
 text-align: start;
 border-bottom: 2px solid;
 text-align: ${props => props.alignCenter ? "center" : "start"};
 width: ${props => props.width ? props.width + "%" : "auto"}
`;


export const Td = styled.td`
padding-top:15px;
 text-align: ${props => props.alignCenter ? "center" : "start"};
 word-break: break-all;
 color: #fff;


svg{
  width:20px;
  height:20px;
}

&:last-child{
cursor:pointer;
}

  `;

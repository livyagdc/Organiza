import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px auto;
  padding: 10px;
  background: gray;
  border-radius: 5px;
  border: 2px solid blue;
  max-width: 45%; /* Limita a largura máxima de cada formulário */

form{
display:flex;
align-items:center;
justify-content: center;
gap: 1em;
width: 90%;
::placeholder {
    opacity: 0.9;
    padding-left:0.5em;
    font-size:12px;
  }
}
.inputForm input,
.inputForm select,
.inputForm button {
    flex: 1; /* Distribui o espaço de forma proporcional */
    min-width: 120px; /* Define uma largura mínima para não ficar pequeno demais */
}
###button{
background: blue;
color: #fff;
border-radius: 5px;
padding:3px;
box-shadow: 1px 1px 10px 1px black;
}


`;


export const RadioGroup = styled.div`
display: flex;
align-itens:center;
color:#fff;
gap:0.5em;
`;

export const SelectCategoria = styled.select`
  max-height: 150px; /* Define a altura máxima do dropdown */
  overflow-y: auto; /* Adiciona o scroll vertical se necessário */
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: black;
`;

export const Input = styled.input`
  max-height: 150px; /* Define a altura máxima do dropdown */
  overflow-y: auto; /* Adiciona o scroll vertical se necessário */
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: black;
`;
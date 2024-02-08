import styled from 'styled-components';

const MainButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 36px;
  text-shadow:
    -1px 0px black,
    0px 1px black,
    1px 0px black,
    0px -1px black;
  border-radius: 20px;
  background-color: #ffdaed;
  color: white;
`;

export default MainButton;

export const SelectButton = styled.button`
  width: 128px;
  border: none;
  padding: 0;
  background: none;
  margin: 0;
  cursor: pointer;
`;

export const SelectImage = styled.img`
  width: 100%;
`;

import styled from "styled-components";


export const Wrapper = styled.div`
  margin-top: 2rem;

  form {
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    display: grid;
    gap: 1rem;
    width: 550px;
  }


  button {
    width: 250px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    outline: none;
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
    text-transform: uppercase;

    &:hover { 
      background-position: 100% 0;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
    }

  }
`;

export const DoubleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`;


export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: #4481eb;
  }

  h3,h4 {
    margin: 0;
  }

  div {
    display: flex;
    align-items: end;
    gap: 0.5rem;
  }
`;
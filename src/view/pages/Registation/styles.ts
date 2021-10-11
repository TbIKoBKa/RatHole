// Core
import styled from 'styled-components';

// Images
import bg from '../../../assets/images/login_bg.jpeg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80vw;
    height: 100vh;
    background: url(${bg}) no-repeat center;
    background-size: cover;
    box-shadow: 0 0 60px 40px rgba(0, 0, 0, 0.8);
`;

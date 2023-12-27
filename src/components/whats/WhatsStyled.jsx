import styled from 'styled-components'

export const IconContainer = styled.div`
    position: fixed;
    text-decoration: none;
    color: #25D366;
    right: 60px;
    bottom: 50px;
    transition: all .5s ease;
    z-index: 1;
    font-size: 50px;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`
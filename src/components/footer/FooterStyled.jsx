import styled from 'styled-components'

export const Icon = styled.i`
    color: #0e2c5d;
    font-size: 1.5rem;
    color: aliceblue;
    cursor: pointer;
`

export const FooterEnd = styled.footer`
    background-color: #0e2c5d;
`

export const Text = styled.span`
    color: aliceblue;
    text-decoration: none;

    @media (max-width: 400px) {
        font-size: 11px;
    }

    @media (max-width: 500px) {
        font-size: 11px;
    }

`

export const Image = styled.img`
    width: 50px;
    margin-top: .3rem;
    transition: all .5s ease-in-out;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }

    @media (max-width: 400px) {
        display: none;
    }

    @media (max-width: 500px) {
        display: none;
    }
`
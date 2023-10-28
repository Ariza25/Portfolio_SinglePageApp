import styled from 'styled-components'

export const Image = styled.img`
    width: 80px;
    margin-top: .3rem;
    transition: all .5s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    @media (max-width: 576px) {
        margin-right: 20rem;
    }

    @media (max-width: 500px) {
        margin-right: 12rem;
    }
`

export const Nav = styled.nav`
    background-color: #174794d2;
    font-size: 15px;

    .link {
        position: relative;
        text-decoration: none;
        color: aliceblue;
        font-weight: 400;
        cursor: pointer;
        transition: all .3s ease-in-out;
        margin-top: .3rem;

        &:hover {

        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: aliceblue;
            transition: width .3s ease-in-out;
        }

        &:hover::before{
            width: 70%;
        }
    }
`


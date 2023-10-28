import styled from 'styled-components'

export const Title = styled.h3`
    color: #0e2c5d;
    font-weight: 700;
`

export const Icon = styled.i`
    color: #0e2c5d;
    font-size: 1.5rem;

    @media (max-width: 576px) {
        font-size: 18px;
    }
`

export const Text = styled.span`
    color: #0e2c5d;
    font-weight: 500;
    

    @media (max-width: 576px) {
        font-size: 12px;
    }
`

export const Button = styled.button`
    background-color: #0e2c5d;
    color: aliceblue;
    border: none;

    &:hover{
        background-color: #174794;
    }
`

export const Container = styled.div`
margin-left: 27rem;

@media (max-width: 500px) {
    margin-left: 0px;
    }

@media (min-width: 768px) {
    margin-left: 15rem;
    }

@media (min-width: 992px) {
    margin-left: 19rem;
    }

@media (min-width: 1200px) {
    margin-left: 23rem;
    }


`
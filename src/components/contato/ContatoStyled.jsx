import styled from 'styled-components'

export const ContactContainer = styled.div`
    @media (max-width: 400px){
        margin-left: 15px;
}

    @media (max-width: 500px){
        margin-left: 10px;
}

`
export const Title = styled.h3`
    color: #0e2c5d;
    font-weight: 700;

    @media (min-width: 768px) {
    margin-left: 30px;
    }

    @media (min-width: 992px) {
    margin-left: 30px
    }

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
    
    @media (max-width: 500px) {
        font-size: 12px;
    }
`

export const Container = styled.div`
margin-left: 27rem;

@media (max-width: 400px) {
    margin-left: 10px;
    }

@media (max-width: 500px) {
    margin-left: 10px;
    }

@media (min-width: 768px) {
    margin-left: 15rem;
    }

@media (min-width: 992px) {
    margin-left: 20rem;
    }

@media (min-width: 1200px) {
    margin-left: 24rem;
    }
`

export const Text2 = styled.span`
    color: #0e2c5d;
    font-weight: 500;
    font-size: 14px;

    @media (min-width: 768px) {
    margin-left: 20px;
    }

    @media (min-width: 992px) {
    margin-left: 30px;
    }

    @media (min-width: 1200px) {
    margin-left: 35px;
    }
`

export const Button = styled.button`
    background-color: #0e2c5d;
    color: aliceblue;
    border: none;

    &:hover{
        background-color: #174794;
    }

    @media (min-width: 768px) {
    margin-left: 20px;
    }

    @media (min-width: 992px) {
    margin-left: 30px;
    }

    @media (min-width: 1200px) {
    margin-left: 35px;
    }
`

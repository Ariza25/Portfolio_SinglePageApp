import styled from "styled-components";

export const Title = styled.h3`
    color: #0e2c5d;
    @media (max-width: 992px) {
        margin-left: 25px;
    }

    @media (max-width: 768px) {
        margin-left: 15px;
    }

    @media (max-width: 500px) {
        margin-left: 15px;
    }

    @media (max-width: 400px) {
        margin-left: 15px;
    }


`
export const ProjectContainer = styled.div`
box-shadow: #0e2c5d3a 0px 7px 29px 0px;
border-radius: .5rem;
cursor: pointer;
border: 1px solid #0e2c5d8e;

    @media (max-width: 500px) {
        margin-left: 50px;
    }

    @media (max-width: 400px) {
        margin-left: 50px;
    }

img{
    border-radius: .4rem;
    height: 40vh;

    @media (max-width: 768px) {
        height: 20vh;
    }

    @media (max-width: 992px) {
        height: 20vh;
    }
}
`

export const Button = styled.button`
    background-color: #0e2c5d;
    color: aliceblue;
    border: none;

    &:hover{
        background-color: #174794;
        color: aliceblue;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }

    @media (max-width: 400px) {
        font-size: 14px;
    }
`

export const CardTitle = styled.div`
    color: #0e2c5d;
    font-weight: 500;
`
export const TextBody = styled.div`
height: 20vh;

@media (min-width: 1200px) {
    height: 30vh;
    }
`
export const Desc = styled.span`
    color: #0e2c5d;
    font-weight: 500;
    font-size: 12px;
`

export const Img = styled.img`
    width: auto;
    height: 30vh;
    border-radius: .4rem;
`




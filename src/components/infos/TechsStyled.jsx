import styled from 'styled-components'

export const Title = styled.h3`
    color: #0e2c5d;
    font-weight: 700;
`

export const TechsCard = styled.div`
    box-shadow: #0e2c5d3a 0px 7px 29px 0px;
    padding: 2rem;
    font-size: 25px;
    border-radius: .5rem;

    p{
        font-weight: 500;
        color: #0e2c5d;
    }  
    i{
        margin: 0px 5px;
        font-size: 30px;
    }
    @media (max-width: 576px) {
        margin: 0;
    }
`

export const TechsContainer = styled.div`
    @media (max-width: 576px) {
        margin: 0;
    }
`
import styled from 'styled-components'

export const Title = styled.h3`
    color: #0e2c5d;
    font-weight: 700;

    @media (max-width: 400px){
        margin-left: 40px;
}

    @media (max-width: 500px){
        margin-left: 40px;
}
`

export const SubTitle = styled.h5`
    color: #0e2c5d;
    font-weight: 600;

    @media (max-width: 400px){
        text-align: center;
        color: #0e2c5d;
}

@media (max-width: 500px){
        text-align: center;
        color: #0e2c5d;
}
`

export const Image = styled.img`
height: 75vh;
border-radius: 20px;
box-shadow: #0e2c5d3a 0px 7px 29px 0px;

@media (max-width: 400px){
    width: auto;
    height: auto;
}

@media (max-width: 500px){
    width: auto;
    height: auto;
}
`

export const Container = styled.div`
@media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    margin-left: -40px;
}

@media (max-width: 400px){
        font-size: 14px;
        text-align: center;
}

@media (max-width: 500px){
        font-size: 14px;
        text-align: center;
}
`
export const List = styled.ul`
    @media (max-width: 400px){
    list-style: none;
    padding: 0;
    text-align: center;
}

@media (max-width: 500px){
    list-style: none;
    padding: 0;
    text-align: center;
}
`
export const Paragraph = styled.p`
    @media (max-width: 400px){
        text-align: center;
        margin-top: 50px;
        color: #0e2c5d;
        font-size: 15px;
        font-weight: 600;
}

@media (max-width: 500px){
        text-align: center;
        margin-top: 50px;
        color: #0e2c5d;
        font-size: 15px;
        font-weight: 600;
}
`

export const InfoContainer = styled.div`
width: 100%;

    @media (max-width: 400px){
    margin-left: 10px;
}

    @media (max-width: 500px){
    margin-left: 10px;
}
`
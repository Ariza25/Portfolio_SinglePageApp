import styled from "styled-components"


export const Title = styled.h3`
    color: #0e2c5d;
    font-weight: 700;

    @media (max-width: 500px) {
    margin-bottom: -100px;
    display: none;
}

@media (max-width: 400px) {
    margin-bottom: -100px;
    display: none;
}
`
export const Service = styled.div`
height: 40vh;

    h4{
        color: #0e2c5d;
        font-weight: 500; 
    }
    p{
        font-weight: 400;
        font-size: 14px;
    }

    @media (max-width: 992px) {
    h4{
        font-size: 12px;
    }
    p{
        font-size: 10px;
    }
}

    @media (max-width: 768px) {
    h4{
        font-size: 14px;
    }
    p{
        font-size: 10px;
    }
    border: none;
}

@media (max-width: 576px) {
    h4{
        font-size: 12px;
    }
    p{
        font-size: 10px;
    } 
}

@media (max-width: 500px) {
    display: none;
}

@media (max-width: 400px) {
    display: none;
}
`
export const Icon = styled.i`
    color: #0e2c5ddc;
    font-size: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`
export const Background = styled.div`
    background-image: url("https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    width: auto;
    background-position: 30%;
    background-size: cover;
    border: 1px solid #0e2c5d2e;
    opacity: 80%;
    background-attachment: fixed;

    @media (max-width: 500px) {
    display: none;
    }

    @media (max-width: 400px) {
        display: none;
    }
`

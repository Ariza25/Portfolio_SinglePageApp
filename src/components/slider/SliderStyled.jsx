import styled from 'styled-components'

export const Image = styled.img`
height: 100vh;
width: 100vw;

@media (max-width: 992px) {
width: auto;
height: 70vh;
}

@media (max-width: 768px) {
width: auto;
height: 80vh;
}

@media (max-width: 576px) {
width: auto;
height: 80vh;
}

@media (max-width: 500px) {
     width: 100%;
     height: 60vh;
}

@media (max-width: 400px) {
     width: 100%;
     height: 60vh;
}

`
export const Caption = styled.div`
bottom: 20%;

h2{
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 0px 50px rgba(0,0,0,0.45);
}
`
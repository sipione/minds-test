import styled from "styled-components";
import { DetailsLightColorHex, PrimaryDarkColorHex, PrimaryLightColorHex, PrimaryTextColorHex, SecondaryLightColorRgba } from "../../common/foundation/variables";

export const UserContainer = styled.section`
    display: flex;
    flex-direction:column;
    width; 100%;
    min-height: 93vh;
    background: ${PrimaryLightColorHex}; 
    padding: 2.5vh 2.5vw;
    color: ${PrimaryTextColorHex};

    .page-title{
        font-size: 2vw;
        font-weight: 500;
        margin-bottom: 5vh;
    }

`;
    
export const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh 0;
`;
    
export const BoxTitle = styled.div`
    padding: 2vh 1vw; 
    width:100%;
    display: flex;
    justify-content: space-between;
    background: ${PrimaryDarkColorHex};

    .box-title{
        font-size: 1.5vw;
        font-weight: 600;
    }

    .show-more, .show-less{
        width: 2vw;
        height: auto;
        cursor: pointer;
    }

    .show-more{
        display:${props => props.hide ? "block": "none"};
    }

    .show-less{
        display:${props => props.hide ? "none": "block"};
    }
`;

export const BoxContent = styled.div`
    padding: 2.5vh 2.5vw;
    display: ${props=>props.hide ? "none" : "flex"};
    flex-direction: column;
    gap: 1vh;
    background: #fff;
    overflow: hidden;

    .checkfield{
        display: flex;
        align-items: center;
        gap: 1vw;
    }

    .checkfield__box{
        width: 1.75vw;
        height: 1.75vw;
        border-radius: 2.5px;
        border 1px solid ${PrimaryDarkColorHex};
        transition: 0.5s;
    }

    .checkfield__input{
        display:none;
    }

    .checkfield__svg{
        display: none;
        width: 1.75vw;
        height: 1.75vw;
        border-radius: 2.5px;
        background: ${DetailsLightColorHex};
        position: relative;

        svg{
            width: 60%;
            fill: white;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            z-index:1;
        }
    }

    .checkfield__label{
        font-size: 1.25vw;
    }

    .checkfield__input:checked ~ .checkfield__box{
        display: none;
    }

    .checkfield__input:checked ~ .checkfield__svg{
        display: block;
    }

    .checkfield__input:checked ~ .checkfield__label{
        font-weight: 700;
    }
`;

export const BoxContent2 = styled(BoxContent)`
    flex-direction: row;
    flex-wrap: wrap;
    
    .textfield{
        display:flex;
        flex-direction:column;
        width: 40%;
        margin-bottom: 2.5vh;
    }

    .textfield__input{
        padding: 2.5%;
        outline: none;
        border: none;
        border-bottom: 1px solid ${PrimaryDarkColorHex};
        font-size: 1vw;
    }

    .textfield__label{
        font-size:1.25vw;
        font-weight: 700;
        color: grey;
    }
`;

export const UserButton = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 5vh;
    gap: 2.5vw;

    .cancel, .save{
        cursor: pointer;
        width: 20%;
        padding: 1% 5%;
        border-radius: 50px;
        outline: none;
        font-size: 1.25vw;
        border: 1px solid ${PrimaryDarkColorHex};
        transition: 0.5s;

        :hover{
            filter: drop-shadow(0 5px 10px ${SecondaryLightColorRgba(0.25)});
        }
    }

    .cancel{
        background: #fff;
    }

    .save{
        background: ${DetailsLightColorHex};
        color: #fff;
    }
`;
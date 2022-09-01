import styled from "styled-components";
import { SecondaryLightColorHex, SecondaryTextColorHex } from "../../common/foundation/variables";

export const SideBarContainer = styled.section`
    position: fixed;
    top:0;
    left:0;
    width: 20vw;
    min-height: 100vh;
    height; 100%;
    background: ${SecondaryLightColorHex}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 17vh;
`;
    
export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5vh;
    
    a{
        color: ${SecondaryTextColorHex};
        text-decoration: none;
        font-size: 1.25vw;
        font-weight: 400;
        transition: 0.5s;

        :hover{
            transform: scale(1.1);
        }
    }

    .select{
        font-weight: 700;
    }
`;
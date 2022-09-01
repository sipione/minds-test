import styled from "styled-components";
import { PrimaryDarkColorRgba, SecondaryDarkColorHex } from "../../common/foundation/variables";

export const FooterContainer = styled.footer`
    width: 100%;
    background: ${SecondaryDarkColorHex};
    padding: 2.5vh 0;
    color: #fff;
    font-size: 0.75vw;
    text-align: center;
    border-top: 0.5px solid ${PrimaryDarkColorRgba(0.25)}
`;
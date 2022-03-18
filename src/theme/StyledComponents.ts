import styled from "@emotion/styled"
import Button from '@mui/material/Button';
import FONTS_FAMILY from "./FontsFamily";

export const StyledButtonPrimary = styled(Button)({
    minHeight: '32px',
    //I SET WIDTH IN 100% BECAUSE YOU CAN ADJUST A CONTAINER OR PASS A SPECIFIC WITH AS Style
    width: '100%',
    borderRadius: '5px',
    color: '#FFFFFF',
    backgroundColor: '#3f48ad',
    textTransform:'none',
    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '14px',
    },
    fontFamily: FONTS_FAMILY.primaryFamily.bold.body,
    '&:hover,&:focus,&:active': {
        //IN FOCUS, ACTIVE OR HOVER CAN YOU CHANGE THE COLORS
        color: '#FFFFFF',
        backgroundColor: '#3f48ad',
    }
});

export const StyledButtonSecondary = styled(Button)({
    minHeight: '32px',
    //I SET WIDTH IN 100% BECAUSE YOU CAN ADJUST A CONTAINER OR PASS A SPECIFIC WITH AS Style
    width: '100%',
    borderRadius: '5px',
    borderColor:'#6e6d8c',
    color: '#6e6d8c',
    backgroundColor: '#FFFFFF',
    textTransform:'none',
    '@media (min-width:320px)': {
        fontSize: '12px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '14px',
    },
    fontFamily: FONTS_FAMILY.primaryFamily.bold.body,
    '&:hover,&:focus,&:active': {
        //IN FOCUS, ACTIVE OR HOVER CAN YOU CHANGE THE COLORS
        color:  '#6e6d8c !important',
        backgroundColor:'#FFFFFF',
    }
});
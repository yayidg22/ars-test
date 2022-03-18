import styled from "@emotion/styled"
import FONTS_FAMILY from "../../../../../theme/FontsFamily";

export const ProcedureCardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    position:'relative',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    alignItems:'center',
    justifyContent:'center',
    minHeight: '80px',
    padding:'15px',
    '@media (min-width:320px)': {
        width: '300px',
    },
    '@media (min-width:768px)': {
        width: '650px',
    },
    '@media (min-width:1200px)': {
        width: '1000px',
    },
});

export const Header = styled('p')({
    margin: 0,
    textAlign:'left',
    color: '#949494',
    fontFamily: FONTS_FAMILY.primaryFamily.regular.body,
    '@media (min-width:320px)': {
        fontSize: '13px'
    },
    '@media (min-width:768px)': {
        fontSize: '14px'
    },
    '@media (min-width:1200px)': {
        fontSize: '16px'
    },
});

export const BodyText = styled('p')({
    margin: 0,
    marginTop:'7px',
    textAlign:'left',
    color: '#000000',
    fontFamily: FONTS_FAMILY.primaryFamily.medium.body,
    '@media (min-width:320px)': {
        fontSize: '13px'
    },
    '@media (min-width:768px)': {
        fontSize: '14px'
    },
    '@media (min-width:1200px)': {
        fontSize: '16px'
    },
});

export const ContentContainer = styled('div')({
    display:'flex',
    width:'95%',
});
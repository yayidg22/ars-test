import styled from "@emotion/styled"
import { Button, TextField } from "@mui/material";
import FONTS_FAMILY from "../../../theme/FontsFamily";

export const HomeContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#edf3f1'
});

export const ContentDivider = styled('div')({
    height: '35px'
});

export const ProceduresContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width:320px)': {
        marginLeft: '30px',
        marginTop: '50px',
    },
    '@media (min-width:768px)': {
        marginLeft: '65px',
        marginTop: '90px',
    },
    '@media (min-width:1200px)': {
        marginLeft: '65px',
        marginTop: '100px',
    },
});


export const ScreenTitle = styled('h1')({
    margin: 0,
    color: '#000000',
    fontFamily: FONTS_FAMILY.primaryFamily.bold.title,
    '@media (min-width:320px)': {
        fontSize: '17px'
    },
    '@media (min-width:768px)': {
        fontSize: '22px'
    },
    '@media (min-width:1200px)': {
        fontSize: '25px'
    },
});

export const ModalTitle = styled('h1')({
    margin: 0,
    marginRight: '10px',
    color: '#1e2469',
    fontFamily: FONTS_FAMILY.primaryFamily.regular.title,
    '@media (min-width:320px)': {
        fontSize: '20px'
    },
    '@media (min-width:768px)': {
        fontSize: '28px'
    },
    '@media (min-width:1200px)': {
        fontSize: '32px'
    },
});

export const ModalHeaderButton = styled(Button)({
    minHeight: '32px',
    //I SET WIDTH IN 100% BECAUSE YOU CAN ADJUST A CONTAINER OR PASS A SPECIFIC WITH AS Style
    width: '100%',
    color: '#07b284',
    textTransform: 'none',
    '@media (min-width:320px)': {
        fontSize: '10px',
    },
    '@media (min-width:768px)': {
        fontSize: '13.5px',
    },
    '@media (min-width:1200px)': {
        fontSize: '15px',
    },
    fontFamily: FONTS_FAMILY.secondaryFamily.bold.body,
});

export const ModalContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width:'90%',
    alignSelf:'center',
    '@media (min-width:320px)': {
        minHeight: '200px',
        padding: '10px'
    },
    '@media (min-width:768px)': {
        minHeight: '200px',
        padding: '70px'
    },
    '@media (min-width:1200px)': {
        minHeight: '350px',
        padding: '60px'
    },
});

export const ModalContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',    
    width: '100%'
});

export const ModalHeader = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    width: '86%'
});

export const ModalInputHeader = styled('p')({
    margin: 0,
    marginBottom: '10px',
    textAlign: 'left',
    color: '#000000',
    fontFamily: FONTS_FAMILY.secondaryFamily.regular.body,
    fontWeight: 'normal',
    lineHeight: 1.5,
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

export const StyledTextInput = styled(TextField)({
    borderWidth: '10px',
    width: '100%',

    '& .MuiInputBase-input ': {
        fontSize: '17px',
        backgroundColor: '#f6f6fb',
        padding: 10,
        borderRadius: '10px',
        borderWidth: '10px',
        width: '100%',
    },
    '&:hover fieldset': {
        borderColor: '#9cbeb3 !important',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#9cbeb3',
            borderRadius: '10px',
            minHeight: '45px',
            borderWidth: '2px',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#9cbeb3',
        },
    },
});

export const ButtonsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignSelf:'flex-end',
    justifyContent:'space-evenly',
    '@media (min-width:320px)': {
        width:'300px',
        marginRight:'-5%',
    },
    '@media (min-width:768px)': {
        width:'400px',
        marginRight:'7%',
    },
    '@media (min-width:1200px)': {
        width:'400px',
        marginRight:'7%',
    },
});
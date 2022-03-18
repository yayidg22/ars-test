import React, { Fragment, useState } from 'react';
import {
  HomeContainer,
  ProceduresContainer,
  ScreenTitle,
  ContentDivider,
  ModalTitle,
  ModalHeaderButton,
  ModalContainer,
  ModalContentContainer,
  ModalHeader,
  ModalInputHeader,
  StyledTextInput,
  ButtonsContainer
} from './styles/homeStyles';
import ProcedureCard from './components/procedureCard/procedureCard'
import { StyledButtonPrimary, StyledButtonSecondary } from '../../theme/StyledComponents';
import EditIcon from '@mui/icons-material/Edit';
import { proceduresInitialState } from './homeConstants';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { procedureCardProps } from './components/procedureCard/procedureCardConstants'
function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [procedures, setProcedures] = useState(proceduresInitialState);
  const [proceduresForModify, setProceduresForModify] = useState(proceduresInitialState);

  const proceduresLines = proceduresForModify.length;

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const handleAddNewProcedure = () => {
    setProceduresForModify((prev) => [
      ...prev,
      {
        procedure: '',
        code: '',
        reclaim: 1,
        diference: 1,
        authorized: 1,
      }
    ]
    )
  }

  const handleRemoveProcedure = (position: number) => {
    const newProcedures = proceduresForModify.filter((item, index) => index != position);
    setProceduresForModify(newProcedures);
  }

  const handleChangeInputValue = (position: number, key: string, newValue: string | number) => {
    let _proceduresForModify = proceduresForModify[position];
    switch (key) {
      case 'procedure':
        _proceduresForModify.procedure = newValue.toString();
        break;
      case 'code':
        _proceduresForModify.code = newValue.toString();
        break;
      case 'reclaim':
        _proceduresForModify.reclaim = Number(newValue)
        break;
      case 'diference':
        _proceduresForModify.diference = Number(newValue)
        break;
      case 'authorized':
        _proceduresForModify.authorized = Number(newValue)
        break;
    }
  }

  const handleEditProcedures = () => {
    setProcedures(proceduresForModify);
    handleModalOpen();
  }

  return (
    <HomeContainer>
      <ProceduresContainer>
        <ScreenTitle>Procedimientos</ScreenTitle>
        <ContentDivider />
        {
          procedures.map((item, index) => (
            <Fragment>
              <ProcedureCard procedure={item.procedure} code={item.code}
                reclaim={item.reclaim} diference={item.diference} authorized={item.authorized} />
              {
                index + 1 < procedures.length && <div style={{ height: '15px' }} />
              }
            </Fragment>
          ))
        }
        <ContentDivider />
        <StyledButtonPrimary onClick={handleModalOpen} style={{ width: '215px' }} startIcon={<EditIcon />}>
          Editar procedimientos
        </StyledButtonPrimary>
        <ContentDivider />

      </ProceduresContainer>

      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        open={modalIsOpen}
        onClose={handleModalOpen}
      >
        <ModalContainer>
          <ModalContentContainer>
            <ModalHeader>
              <ModalTitle>Procedimientos</ModalTitle>
              <ModalHeaderButton onClick={handleAddNewProcedure} variant='text' style={{ width: '250px' }}>
                <AddIcon sx={{ color: '#07b284', marginRight: '2px', fontSize: '2em' }} />
                Añadir procedimiento
              </ModalHeaderButton>
            </ModalHeader>
            <ContentDivider />

            {
              proceduresForModify.map((item, index) => (
                <Fragment>
                  <Grid alignItems='center' justifyContent="flex-start" container direction="row" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={0.8} key={index}>
                      <IconButton onClick={() => handleRemoveProcedure(index)} size="large" sx={{ marginTop: '30px' }}>
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4} sm={4} md={2.2} key={index}>
                      <ModalInputHeader>Procedimiento {index + 1}</ModalInputHeader>
                      <StyledTextInput placeholder='Ej: Escleorosis' defaultValue={item.procedure}
                        onChange={((e) => handleChangeInputValue(index, 'procedure', e.target.value))}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} key={index}>
                      <ModalInputHeader>Código</ModalInputHeader>
                      <StyledTextInput placeholder='Ej: 8844' defaultValue={item.code}
                        onChange={((e) => handleChangeInputValue(index, 'code', e.target.value))}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} key={index}>
                      <ModalInputHeader>Reclamado RD$</ModalInputHeader>
                      <StyledTextInput placeholder='Ej: 200' type="number" defaultValue={item.reclaim}
                        onChange={((e) => handleChangeInputValue(index, 'reclaim', e.target.value))}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} key={index}>
                      <ModalInputHeader>Diferencia RD$</ModalInputHeader>
                      <StyledTextInput placeholder='Ej: 200' type="number" defaultValue={item.diference}
                        onChange={((e) => handleChangeInputValue(index, 'diference', e.target.value))}
                      />
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} key={index}>
                      <ModalInputHeader>Autorizado RD$</ModalInputHeader>
                      <StyledTextInput placeholder='Ej: 200' type="number" defaultValue={item.authorized}
                        onChange={((e) => handleChangeInputValue(index, 'authorized', e.target.value))}
                      />
                    </Grid>
                  </Grid>
                  <div style={{ height: '35px' }} />
                </Fragment>
              ))
            }
            <ContentDivider />
            <ButtonsContainer>
              <StyledButtonSecondary onClick={handleModalOpen} variant="outlined" style={{ width: '30%' }}>
                Cancelar
              </StyledButtonSecondary>
              <StyledButtonPrimary onClick={handleEditProcedures} style={{ width: '60%' }} startIcon={<EditIcon />}>
                Editar procedimientos
              </StyledButtonPrimary>
            </ButtonsContainer>
            <ContentDivider />

          </ModalContentContainer>
        </ModalContainer>
      </Dialog>


    </HomeContainer>
  );
}

export default Home;

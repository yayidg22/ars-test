import { Grid } from '@mui/material';
import React from 'react';
import { procedureCardProps } from './procedureCardConstants';
import { Header, ProcedureCardContainer, ContentContainer, BodyText } from './styles/procedureCardStyles';

function ProcedureCard(props: procedureCardProps) {
    return (
        <ProcedureCardContainer>
            <ContentContainer>
                <Grid alignItems='center' justifyContent="flex-start" container direction="row" spacing={{ xs: 4, sm: 13, md: 9 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={1.5} sm={1.6} md={2.4}>
                        <Header>Procedimiento 01</Header>
                        <BodyText>{props.procedure}</BodyText>
                    </Grid>

                    <Grid item xs={1.5} sm={1.6} md={2.4}>
                        <Header>Código</Header>
                        <BodyText>{props.code}</BodyText>
                    </Grid>

                    <Grid item xs={1.5} sm={1.6} md={2.4}>
                        <Header>Reclamado</Header>
                        <BodyText>RD$ {props.reclaim}</BodyText>
                    </Grid>


                    <Grid item xs={1.5} sm={1.6} md={2.4}>
                        <Header>Diferencia RD$</Header>
                        <BodyText>RD$ {props.diference}</BodyText>
                    </Grid>

                    <Grid item xs={1.5} sm={1.6} md={2.4}>
                        <Header>Autorizado RD$</Header>
                        <BodyText>RD$ {props.authorized}</BodyText>
                    </Grid>
                </Grid>
            </ContentContainer>
        </ProcedureCardContainer >
    );
}

export default ProcedureCard;

import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Header from '../../components/Header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          THREE POSITIVE RULES OF ACCOMPLISHMENT 1. Read the list of what you want three times each day: morning, noon
          and night. 2. Think of what you want as often as possible. 3. Do not talk to any one about your plan except to
          the Great Power within you which will unfold to your Objective Mind the method of accomplishment.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          THREE POSITIVE RULES OF ACCOMPLISHMENT 1. Read the list of what you want three times each day: morning, noon
          and night. 2. Think of what you want as often as possible. 3. Do not talk to any one about your plan except to
          the Great Power within you which will unfold to your Objective Mind the method of accomplishment.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          THREE POSITIVE RULES OF ACCOMPLISHMENT 1. Read the list of what you want three times each day: morning, noon
          and night. 2. Think of what you want as often as possible. 3. Do not talk to any one about your plan except to
          the Great Power within you which will unfold to your Objective Mind the method of accomplishment.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          THREE POSITIVE RULES OF ACCOMPLISHMENT 1. Read the list of what you want three times each day: morning, noon
          and night. 2. Think of what you want as often as possible. 3. Do not talk to any one about your plan except to
          the Great Power within you which will unfold to your Objective Mind the method of accomplishment.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          THREE POSITIVE RULES OF ACCOMPLISHMENT 1. Read the list of what you want three times each day: morning, noon
          and night. 2. Think of what you want as often as possible. 3. Do not talk to any one about your plan except to
          the Great Power within you which will unfold to your Objective Mind the method of accomplishment.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

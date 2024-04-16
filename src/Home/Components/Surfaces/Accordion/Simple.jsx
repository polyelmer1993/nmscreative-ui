import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "nms-creative-ui";
import * as SolarIconSet from "solar-icon-set";


const Simple = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <SolarIconSet.AltArrowDown size={24} iconStyle="BoldDuotone" />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <SolarIconSet.AltArrowDown size={24} iconStyle="BoldDuotone" />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <SolarIconSet.AltArrowDown size={24} iconStyle="BoldDuotone" />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Accordion 3
          </Typography>
          <Typography>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <SolarIconSet.AltArrowDown size={24} iconStyle="BoldDuotone" />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Accordion 4
          </Typography>
          <Typography>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>  
  );
};

export default Simple;
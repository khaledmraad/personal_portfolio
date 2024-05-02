import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Skills() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <h1 className="text-6xl  my-10">SKILLS</h1>

      

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
          <div class="grid grid-cols-3 gap-4  ">

<div class="">
<img src={require("../../assets/img/cyber-security.png")} className="w-20 h-20 m-0 p-0" alt=""/>

</div>
<div class="col-span-2  ml-4">
    
<h1 className='text-3xl font-bold'>Cyber Security</h1>
</div>

</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
          <div class="grid grid-cols-3 gap-4  ">

<div class="">
<img src={require("../../assets/img/cloud-computing.png")} className="w-15 h-15 m-0 p-0" alt=""/>

</div>
<div class="col-span-2  ml-4">
    
<h1 className='text-3xl font-bold'>Cloud</h1>
</div>

</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
            <div class="grid grid-cols-3 gap-4  ">

              <div class="">
              <img src={require("../../assets/img/ai (1).png")} className="w-20 h-20 m-0 p-0" alt=""/>

              </div>
              <div class="col-span-2  ml-4">
                  
              <h1 className='text-3xl font-bold'>Artificial Intelligence</h1>
              </div>

            </div>
          



          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
          <div class="grid grid-cols-3 gap-4  ">

<div class="">
<img src={require("../../assets/img/webdev.png")} className="w-15 h-15 m-0 p-0" alt=""/>

</div>
<div class="col-span-2  ml-4">
    
<h1 className='text-3xl font-bold'>Web Development</h1>
</div>

</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

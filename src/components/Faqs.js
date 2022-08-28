import React from "react";
import Records from '../urbanExpertCleaning-common.json'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Prowork.css'

export default function App() {
  const { faq } = Records[0];
  return (
    <>
    <div style={{margin:"35px 0"}}>
    <div className="titlefaq" style={{fontWeight: 700,fontSize : "21.3098px",textAlign:"center"}}>FAQ's Before Home Cleaning Services In Delhi NCR</div>
      {faq.map((item) => {
        return (
          <div>
          <Accordion style={{ background: '#F6F6F6', width: "60%", margin: "20px auto",boxShadow:"none",borderRadius:"6px" }} className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header" 
              >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        );
      })}
    </div>
    </>
  );
}

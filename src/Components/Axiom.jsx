import * as React from "react";
import * as Radio from '@material-ui/core/Radio';
import * as RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

function Axiom(props) {  
  const [value, setValue] = React.useState('undecided');
  const [color, setColor] = React.useState('text.secondary');

  const onChange = (event) => {
    const { value } = event.target;
    props.onChange(event);
    setValue(value);
    switch (value) {
      case "true":
        setColor('success.main');
        break;
      case "false":
        setColor('error.main');
        break;
      default:
        setColor('text.secondary')
        break;
    }
  };

  return (
    <div className="Axiom">
      <Box maxWidth="sm" bgcolor={color}>
        {props.sentence}
        <RadioGroup aria-label="belief" name="belief" value={value} onChange={onChange}>
          <FormControlLabel value="undecided" control={<Radio />} label="Undecided" />
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </Box>
    </div>
  );
}

export default Axiom;

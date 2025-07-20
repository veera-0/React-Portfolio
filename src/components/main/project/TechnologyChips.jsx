/* eslint-disable react/prop-types */
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function TechnologyChips({ technology }) {
    /*2B6CB08  1A202C FEF0F3*/
  const techArray = technology.split('|').map(item => item.trim());

  return (
    <Stack direction="row" spacing={1}>
      {techArray.map((tech, index) => (
        <Chip style={{background: '#FF7043', color: 'white'}} key={index} label={tech} variant="outlined" />
      ))}
    </Stack>
  );
}
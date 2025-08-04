/* eslint-disable react/prop-types */
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function TechnologyChips({ technology }) {
  const techArray = technology.split('|').map(item => item.trim());

  return (
    <Stack direction="row"
          spacing={1}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
          }}
        >
      {techArray.map((tech, index) => (
        <Chip style={{background: '#FF7043', color: 'white'}} key={index} label={tech} variant="outlined" />
      ))}
    </Stack>
  );
}
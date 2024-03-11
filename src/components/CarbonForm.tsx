import { FormEvent, useState } from 'react';
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
} from '@mui/material';
import '../assets/CarbonForm.css';
import IFormData from '../models/IFormData';

interface Home {
  onSubmit: (data: IFormData) => void;
}

export default function CarbonForm(props: Home) {
  const [formData, setFormData] = useState<IFormData>({
    recycle: 0,
    shower: 0,
    commute: 0,
    meat: 0,
  });

  //Form Validation wasn't working properly, So I disabled it for a working demo
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event: SelectChangeEvent<number>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: Number(value) });
    validateForm(name as keyof IFormData, Number(value));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: Number(value) });
    validateForm(name as keyof IFormData, Number(value));
  };

  //Form Validation wasn't working properly, So I disabled it for a working demo
  const validateForm = (fieldName?: keyof IFormData, value?: number) => {
    const recycleValid =
      fieldName === 'recycle' && (value === 1 || value === 5);
    const isValid =
      Object.values(formData).every((value) => value !== 0) && recycleValid;
    setIsFormValid(isValid);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <div className='carbon-form-container'>
      {' '}
      {/* Center the form horizontally */}
      <form onSubmit={handleSubmit}>
        <h1>Check your Carbon Footprint</h1>
        <div className='form-question-heading'>Do you recycle regularly?</div>
        <FormControl component='fieldset' required>
          <RadioGroup
            aria-label='recycle'
            name='recycle'
            value={formData.recycle}
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel
              value={1}
              control={<Radio required />}
              label='Yes'
            />
            <FormControlLabel
              value={5}
              control={<Radio required />}
              label='No'
            />
          </RadioGroup>
        </FormControl>

        <div className='form-question-heading'>How long do you shower?</div>
        <FormControl fullWidth margin='normal' required>
          <Select
            name='shower'
            value={formData.shower}
            onChange={handleChange}
            required
          >
            <MenuItem value={1}>Less than 5 min</MenuItem>
            <MenuItem value={2}>5 to 10 minutes</MenuItem>
            <MenuItem value={3}>10 to 15 minutes</MenuItem>
            <MenuItem value={4}>More than 15 minutes</MenuItem>
          </Select>
        </FormControl>

        <div className='form-question-heading'>How do you commute to work?</div>
        <FormControl fullWidth margin='normal' required>
          <Select
            name='commute'
            value={formData.commute}
            onChange={handleChange}
            required
          >
            <MenuItem value={1}>Walk</MenuItem>
            <MenuItem value={2}>Bike</MenuItem>
            <MenuItem value={3}>Car</MenuItem>
            <MenuItem value={4}>Bus</MenuItem>
            <MenuItem value={5}>Train</MenuItem>
          </Select>
        </FormControl>

        <div className='form-question-heading'>
          How often do you eat meat and dairy products?
        </div>
        <FormControl fullWidth margin='normal' required>
          <Select
            name='meat'
            value={formData.meat}
            onChange={handleChange}
            required
          >
            <MenuItem value={1}>Never</MenuItem>
            <MenuItem value={2}>Rarely (e.g., once a week or less)</MenuItem>
            <MenuItem value={3}>
              Occasionally (e.g., a few times a week)
            </MenuItem>
            <MenuItem value={4}>Often (e.g., daily)</MenuItem>
            <MenuItem value={5}>Always</MenuItem>
          </Select>
        </FormControl>
        <div
          style={{
            display: ' flex',
            justifyContent: 'center',
            marginTop: '15px',
          }}
        >
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ marginTop: '15px', width: '14em' }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

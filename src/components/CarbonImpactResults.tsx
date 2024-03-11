import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import MinimalImpact from '../../public/images/minimal-impact.svg';
import SignificantImpact from '../../public/images/significant-impact.svg';
import MediumImpact from '../../public/images/medium-impact.svg';
import IFormData from '../models/IFormData';

interface Home {
  formData: IFormData | null;
  setShowResults: (value: boolean) => void;
}

export default function CarbonImpactResults(props: Home) {
  const { formData } = props;
  const [total, setTotal] = useState<number>(0);

  const sumResults = () => {
    if (formData) {
      return (
        formData.recycle + formData.shower + formData.commute + formData.meat
      );
    }
    return 0;
  };

  useEffect(() => {
    setTotal(sumResults());
  }, [formData]);

  return (
    <>
      {formData && (
        <>
          <div>
            {total > 8 ? (
              <div>
                <h1 style={{ textAlign: 'center' }}>
                  Minimal Carbon Footprint
                </h1>
                <img
                  src={MinimalImpact}
                  alt='Minimal impact Logo'
                  className='logo'
                />
                <p style={{ marginTop: '20px', color: '#696e71' }}>
                  You demonstrate a commendable commitment to minimizing
                  environmental impact. By consistently making eco-conscious
                  choices in recycling, water usage, transportation, and dietary
                  habits, they contribute positively to global sustainability
                  efforts.
                </p>
              </div>
            ) : total > 10 ? (
              <div>
                <h1 style={{ textAlign: 'center' }}>Medium Carbon Footprint</h1>

                <img
                  src={MediumImpact}
                  alt='Medium Impact Logo'
                  className='logo'
                />

                <p style={{ marginTop: '20px', color: '#696e71' }}>
                  The assessment indicates that the participant's lifestyle
                  choices contribute to a medium-sized environmental impact. By
                  acknowledging areas of improvement and adopting more
                  sustainable practices, they can further reduce their
                  ecological footprint and contribute to environmental
                  conservation efforts.
                </p>
              </div>
            ) : (
              <div>
                <h1 style={{ textAlign: 'center' }}>
                  Sinificant Carbon Footprint
                </h1>

                <img
                  src={SignificantImpact}
                  alt='Significant Impact Logo'
                  className='logo'
                />
                <p style={{ marginTop: '20px', color: '#696e71' }}>
                  Your lifestyle choices significantly impact the environment.
                  Addressing areas of high environmental impact, such as
                  recycling, water usage, transportation, and dietary habits, is
                  essential for reducing their ecological footprint and
                  fostering sustainability.
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          ></div>
          <div
            style={{
              display: ' flex',
              justifyContent: 'center',
              marginTop: '15px',
            }}
          >
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                props.setShowResults(false);
              }}
            >
              Retake Test
            </Button>
          </div>
        </>
      )}
    </>
  );
}

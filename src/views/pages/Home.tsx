import { useState } from 'react';
import CarbonForm from '../../components/CarbonForm';
import CarbonImpactResults from '../../components/CarbonImpactResults';

interface FormData {
  recycle: number;
  shower: number;
  commute: number;
  meat: number;
}

export default function HomePage() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setShowResults(true);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {showResults ? (
          <CarbonImpactResults
            formData={formData}
            setShowResults={setShowResults}
          />
        ) : (
          <CarbonForm onSubmit={handleFormSubmit} />
        )}
      </div>
    </>
  );
}

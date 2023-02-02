import React, { useState } from 'react';

const SelectForm = () => {
  const options = [
    { value: 'Mata Kuliah', label: 'Mata Kuliah' },
    { value: 'Manajemen', label: 'Manajemen' },
    { value: 'Akuntansi', label: 'Akuntansi' },
    { value: 'Ekspor & Impor', label: 'Ekspor & Impor' },
    { value: 'Statistika Bisnis', label: 'Statistika Bisnis' },
    { value: 'Metode Penelititan', label: 'Metode Penelititan' },
    { value: 'Manajemen Keuangan', label: 'Manajemen Keuangan' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className='option'>
      <select className='select-opt' value={selectedOption} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectForm;

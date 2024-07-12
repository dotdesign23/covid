import React, { useState } from 'react';
import styles from './Form.module.css';
import provincesData from '../../utils/constants/provinces.js';

const Form = () => {
  const [provinsi, setProvinsi] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      provinsi,
      status,
      jumlah,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h1>Form Data Covid-19</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="provinsi">Provinsi:</label>
        <select
          id="provinsi"
          value={provinsi}
          onChange={(event) => setProvinsi(event.target.value)}
        >
          <option value="">Pilih Provinsi</option>
          {provincesData.provinces.map((province, index) => (
            <option key={index} value={province.kota}>
              {province.kota}
            </option>
          ))}
        </select>

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">Pilih Status</option>
          <option value="positif">Positif</option>
          <option value="sembuh">Sembuh</option>
          <option value="dirawat">Dirawat</option>
          <option value="meninggal">Meninggal</option>
        </select>

        <label htmlFor="jumlah">Jumlah:</label>
        <input
          type="number"
          id="jumlah"
          value={jumlah}
          onChange={(event) => setJumlah(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
import { useState, useEffect } from 'react';
import styles from './DataTable.module.css'; 
import formImage from '../../assets/form.png'; 

const DataTable = ({ title, subtitle, data, withForm }) => {
  const [provinsiData, setProvinsiData] = useState(data);
  const [provinsi, setProvinsi] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');

  useEffect(() => {
    setProvinsiData(data)
  }, [data])

  const addData = (inputProvinsi, inputStatus, inputJumlah) => {
    const newProvinsiData = provinsiData.map((province) => {
      if (province.name === inputProvinsi) {
        province.numbers[inputStatus] += Number(inputJumlah)
      }
      return province;
    });

    setProvinsiData(newProvinsiData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!provinsi || !status || !jumlah) {
      alert('Mohon lengkapi semua kolom input');
      return;
    }
    addData(provinsi, status, jumlah);
    setProvinsi('');
    setStatus('');
    setJumlah('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.provinsiContainer}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <table className={styles.provinsiTable}>
          <thead>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {provinsiData.map((dataItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dataItem.name}</td>
                <td>{dataItem.numbers.confirmed}</td>
                <td>{dataItem.numbers.recovered}</td>
                <td>{dataItem.numbers.treatment}</td>
                <td>{dataItem.numbers.death}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {withForm && (
        <div className={styles.formContainer}>
          <h1>Form Data Covid-19</h1>
          <div className={styles.formContent}>
            <img src={formImage} alt="Form" className={styles.formImage} />
            <form onSubmit={handleSubmit}>
              <label htmlFor="provinsi">Provinsi:</label>
              <select
                id="provinsi"
                value={provinsi}
                onChange={(event) => setProvinsi(event.target.value)}
              >
                <option value="">Pilih Provinsi</option>
                {provinsiData.map((dataItem, index) => (
                  <option key={index} value={dataItem.name}>
                    {dataItem.name}
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
                <option value="confirmed">Positif</option>
                <option value="recovered">Sembuh</option>
                <option value="treatment">Dirawat</option>
                <option value="death">Meninggal</option>
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
        </div>
      )}
    </div>
  );
};

export default DataTable;

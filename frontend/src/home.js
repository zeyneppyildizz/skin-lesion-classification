import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file)); 
    setPredictions([]); 
  };

  const onFileUpload = async () => {
    if (!selectedFile) return alert("Lütfen bir resim seçin!");

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/predict", formData);
      setPredictions(res.data.predictions);
    } catch (error) {
      console.error("Hata:", error);
      alert("Analiz sırasında bir hata oluştu.");
    }
    setLoading(false);
  };

return (
  <div className="container">
    <h1>DermAI Asistan</h1>
    <p className="subtitle">Yapay Zeka Destekli Deri Hastalığı Analizi</p>

    <div className="upload-area">
      <input 
        type="file" 
        id="file-upload" 
        onChange={onFileChange} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />
      
      <label htmlFor="file-upload" className="upload-label">
        {!selectedFile ? (
          <>
            <div className="upload-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            </div>
            <span className="upload-text">Fotoğraf Yüklemek İçin Tıkla</span>
            <span className="upload-hint">veya sürükleyip buraya bırak</span>
          </>
        ) : (
          <div className="file-selected"> 
          <div className="checkmark-wrapper" key={selectedFile.name}>
        <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
            <span className="filename">{selectedFile.name}</span>
            <span className="change-text">(Değiştirmek için tıkla)</span>
          </div>
        )}
      </label>

      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Önizleme" className="preview-img" />
        </div>
      )}
    </div>

   <button onClick={onFileUpload} disabled={loading} className="analyze-btn">
  {loading ? (
    "Analiz Ediliyor..."
  ) : (
    <>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      Hastalığı Analiz Et
    </>
  )}
</button>

    {predictions.length > 0 && (
      <div className="results-card">
        <h3>Analiz Sonuçları</h3>
        {predictions.map((item, index) => (
          <div key={index} className="result-item">
            <div className="result-info">
              <span className="disease-name">
                {index + 1}. {item.disease}
              </span>
              <span className="score">%{item.score}</span>
            </div>
            <div className="progress-bg">
              <div 
                className="progress-fill" 
                style={{ width: `${item.score}%`, backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        ))}
        <p className="disclaimer">⚠️ Bu sonuçlar sadece tavsiye niteliğindedir. Kesin teşhis için doktora başvurunuz.</p>
      </div>
    )}
  </div>
);
}

export default Home;
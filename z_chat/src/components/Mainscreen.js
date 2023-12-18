// src/components/Mainscreen.js
import React, { useState } from 'react';
import ChatWindow from './chatwindow'; // Yeni eklenen bileşeni import ediyoruz

const Mainscreen = () => {
  const [oturumAcilanKullanicilar, setOturumAcilanKullanicilar] = useState([]);

  const handleOturumAc = (kullaniciAdi) => {
    setOturumAcilanKullanicilar([...oturumAcilanKullanicilar, kullaniciAdi]);
  };

  const handleOturumKapat = (kullaniciAdi) => {
    setOturumAcilanKullanicilar(oturumAcilanKullanicilar.filter((kullanici) => kullanici !== kullaniciAdi));
  };

  return (
    <div>
      <h2>Oturum Açan Kullanıcılar</h2>
      <ul>
        {oturumAcilanKullanicilar.map((kullanici) => (
          <li key={kullanici}>
            {kullanici}
            <button onClick={() => handleOturumKapat(kullanici)}>Oturumu Kapat</button>
          </li>
        ))}
      </ul>

      {/* Eklenen ChatWindow bileşenini kullanıyoruz */}
      <ChatWindow chatName="Chat 1" />
      <ChatWindow chatName="Chat 2" />
    </div>
  );
};

export default Mainscreen;

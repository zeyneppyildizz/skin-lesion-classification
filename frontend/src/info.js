import React from 'react';
import './App.css'; 

const Info = () => {
  return (
    <div className="container" style={{ maxWidth: '1000px' }}> 
      <h1>Cilt Hastalıkları Rehberi</h1>
      
      <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba', padding: '15px', borderRadius: '5px', marginBottom: '20px', color: '#856404' }}>
        <strong>⚠️ Yasal Uyarı:</strong> Bu yapay zeka modeli (Dermnet Veri Seti ile eğitilmiştir) sadece bilgilendirme amaçlıdır. Kesin teşhis ve tedavi için lütfen bir dermatoloğa başvurunuz.
      </div>

      <p>Aşağıdaki tabloda, modelimizin tespit edebildiği 23 farklı cilt hastalığı kategorisi, nedenleri ve yaygın belirtileri listelenmiştir.</p>

      <table className="info-table">
        <thead>
          <tr>
            <th style={{width: '20%'}}>Hastalık Sınıfı</th>
            <th style={{width: '40%'}}>Nedenler</th>
            <th style={{width: '40%'}}>Yaygın Belirtiler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Acne and Rosacea</strong></td>
            <td>
              Akne ve Gül Hastalığı<br/><br/>
              <em>Nedenler:</em> Hormonal değişimler, tıkanmış gözenekler, bakteriler, stres.
            </td>
            <td>Siyah/beyaz noktalar, kırmızı şişlikler, yüz kızarıklığı (flushing), iltihaplı sivilceler.</td>
          </tr>
          <tr>
            <td><strong>Actinic Keratosis</strong></td>
            <td>
              Aktinik Keratoz<br/><br/>
              <em>Nedenler:</em> Uzun süreli UV (Güneş) hasarı. Kanser öncesi lezyondur.
            </td>
            <td>Deride sert, pullu, zımpara kağıdı hissi veren lekeler; kaşıntı veya yanma hissi.</td>
          </tr>
          <tr>
            <td><strong>Atopic Dermatitis</strong></td>
            <td>
              Atopik Dermatit<br/><br/>
              <em>Nedenler:</em> Genetik, bağışıklık sistemi, kuru cilt.
            </td>
            <td>Şiddetli kaşıntı, özellikle eklem yerlerinde (dirsek içi vb.) kızarık, pullu ve kuru lekeler.</td>
          </tr>
          <tr>
            <td><strong>Bullous Disease</strong></td>
            <td>
              Büllöz Hastalıklar<br/><br/>
              <em>Nedenler:</em> Genellikle otoimmün bozukluklar.
            </td>
            <td>Ciltte su dolu büyük kabarcıklar, cilt yüzeyinin soyulması, ağrılı açık yaralar.</td>
          </tr>
          <tr>
            <td><strong>Cellulitis Impetigo</strong></td>
            <td>
              Selülit ve Bakteriyel Enfeksiyonlar<br/><br/>
              <em>Nedenler:</em> Deri bütünlüğünün bozulmasıyla giren bakteriler.
            </td>
            <td>Bölgesel sıcaklık artışı, yoğun kızarıklık, şişlik, ağrı ve bazen ateş.</td>
          </tr>
          <tr>
            <td><strong>Eczema</strong></td>
            <td>
              Egzama<br/><br/>
              <em>Nedenler:</em> Tahriş ediciler (sabun vb.), stres, alerjenler.
            </td>
            <td>Kuru, çatlamış cilt, inatçı kaşıntı, kabuklanma ve zamanla deri kalınlaşması.</td>
          </tr>
          <tr>
            <td><strong>Exanthems Drug Eruptions</strong></td>
            <td>
              İlaç Döküntüleri<br/><br/>
              <em>Nedenler:</em> İlaçlara alerjik reaksiyon veya viral enfeksiyonlar.
            </td>
            <td>Vücuda yayılan kırmızı döküntüler, kaşıntı, bazen hafif ateş ve halsizlik.</td>
          </tr>
          <tr>
            <td><strong>Hair Loss (Alopecia)</strong></td>
            <td>
              Saç Dökülmesi (Alopesi)<br/><br/>
              <em>Nedenler:</em> Genetik, stres, hormonal sorunlar.
            </td>
            <td>Saçlarda bölgesel açılmalar (para şeklinde), genel seyrelme veya tam kellik.</td>
          </tr>
          <tr>
            <td><strong>Herpes HPV</strong></td>
            <td>
              Viral Enfeksiyonlar (Uçuk/Siğil)<br/><br/>
              <em>Nedenler:</em> Herpes virüsü veya HPV.
            </td>
            <td>Dudak çevresinde sulu kabarcıklar (uçuk) veya karnabahar görünümlü sert kabartılar (siğil).</td>
          </tr>
          <tr>
            <td><strong>Light Diseases</strong></td>
            <td>
              Işık Hastalıkları<br/><br/>
              <em>Nedenler:</em> Güneşe aşırı duyarlılık.
            </td>
            <td>Güneşe maruz kalan bölgelerde aniden oluşan kızarıklık, kabarma ve yanma.</td>
          </tr>
          <tr>
            <td><strong>Lupus</strong></td>
            <td>
              Lupus<br/><br/>
              <em>Nedenler:</em> Otoimmün (Vücudun kendine saldırması).
            </td>
            <td>Yüzde burun ve yanakları kaplayan "kelebek" şeklinde kırmızı döküntü, güneşe hassasiyet.</td>
          </tr>
          <tr>
            <td><strong>Melanoma Skin Cancer</strong></td>
            <td>
              Melanom ve Benler<br/><br/>
              <em>Nedenler:</em> UV ışınları, genetik. En riskli kanser türüdür.
            </td>
            <td>Asimetrik, kenarları düzensiz, birden fazla renk içeren veya çapı büyüyen/kanayan benler.</td>
          </tr>
          <tr>
            <td><strong>Nail Fungus</strong></td>
            <td>
              Tırnak Hastalıkları<br/><br/>
              <em>Nedenler:</em> Mantar enfeksiyonu, travma.
            </td>
            <td>Tırnakta kalınlaşma, sarı/kahverengi renk değişimi, kırılganlık ve şekil bozukluğu.</td>
          </tr>
          <tr>
            <td><strong>Poison Ivy</strong></td>
            <td>
              Temas Dermatiti<br/><br/>
              <em>Nedenler:</em> Zehirli bitki veya kimyasala temas.
            </td>
            <td>Temas edilen bölgede çizgisel kızarıklık, su toplanması ve şiddetli yanma/kaşıntı.</td>
          </tr>
          <tr>
            <td><strong>Psoriasis</strong></td>
            <td>
              Sedef Hastalığı<br/><br/>
              <em>Nedenler:</em> Hızlı cilt hücresi üretimi (Bağışıklık sorunu).
            </td>
            <td>Üzeri gümüş rengi pullarla kaplı, kalın, kırmızı plaklar (genelde dirsek ve dizlerde).</td>
          </tr>
          <tr>
            <td><strong>Scabies Lyme</strong></td>
            <td>
              Uyuz ve Böcek Isırıkları<br/><br/>
              <em>Nedenler:</em> Parazitler, keneler, böcekler.
            </td>
            <td>Gece artan şiddetli kaşıntı, parmak aralarında tüneller (uyuz) veya hedef tahtası şeklinde kızarıklık (Lyme).</td>
          </tr>
          <tr>
            <td><strong>Seborrheic Keratoses</strong></td>
            <td>
              Seboreik Keratoz<br/><br/>
              <em>Nedenler:</em> Yaşlanma (İyi huylu tümör).
            </td>
            <td>Cilde yapışmış gibi duran, mumsu, kahverengi veya siyah, ağrısız kabartılar.</td>
          </tr>
          <tr>
            <td><strong>Systemic Disease</strong></td>
            <td>
              Sistemik Hastalıklar<br/><br/>
              <em>Nedenler:</em> Diyabet, karaciğer vb. iç hastalıklar.
            </td>
            <td>Vücut genelinde kaşıntı, iyileşmeyen yaralar, cilt renginde sararma veya koyulaşma.</td>
          </tr>
          <tr>
            <td><strong>Tinea Ringworm</strong></td>
            <td>
              Mantar (Vücut Mantarı)<br/><br/>
              <em>Nedenler:</em> Nemli ortamlar, bulaşıcı mantarlar.
            </td>
            <td>Ortası soluk, kenarları belirgin kırmızı ve halka şeklinde (yüzük gibi) kaşıntılı lekeler.</td>
          </tr>
          <tr>
            <td><strong>Urticaria Hives</strong></td>
            <td>
              Kurdeşen (Ürtiker)<br/><br/>
              <em>Nedenler:</em> Alerjik reaksiyonlar.
            </td>
            <td>Aniden beliren, yeri değişebilen, kaşıntılı, soluk ortalı kırmızı kabartılar.</td>
          </tr>
          <tr>
            <td><strong>Vascular Tumors</strong></td>
            <td>
              Damarsal Tümörler<br/><br/>
              <em>Nedenler:</em> Kan damarı toplanmaları.
            </td>
            <td>Parlak kırmızı (çilek gibi) veya mor renkli, yumuşak şişlikler veya lekeler.</td>
          </tr>
          <tr>
            <td><strong>Vasculitis</strong></td>
            <td>
              Vaskülit<br/><br/>
              <em>Nedenler:</em> Damar iltihabı.
            </td>
            <td>Ciltte basmakla solmayan küçük mor noktalar (peteşi), ağrılı nodüller.</td>
          </tr>
          <tr>
            <td><strong>Warts Molluscum</strong></td>
            <td>
              Siğiller ve Molluskum<br/><br/>
              <em>Nedenler:</em> Viral enfeksiyonlar.
            </td>
            <td>Üzeri pürüzlü sert kabartılar (siğil) veya ortası göbekli, inci parlaklığında küçük kabartılar.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Info;
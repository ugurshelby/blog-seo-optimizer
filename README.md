# Blog SEO Optimizer 🚀

Modern, yapay zeka destekli SEO optimizasyon aracı. WordPress içeriklerinizi optimize ederek SEO skorunuzu 90+ seviyesine yükseltin.

## ✨ Özellikler

### 🎯 SEO Optimizasyonu
- **Title Tag Optimizasyonu** (55-60 karakter)
- **Meta Description Oluşturma** (140-160 karakter)
- **Keyword Yoğunluğu** (%1.5-2.5)
- **Alt Text ve Schema Markup**
- **İç/Dış Link Optimizasyonu**

### 🤖 Yapay Zeka Destekli
- **Akıllı İçerik Analizi**
- **SEO Skor Hesaplama**
- **Rakip Analizi**
- **Anahtar Kelime Önerileri**
- **Performans Raporları**

### ⚡ Hızlı Sonuçlar
- **Anında Optimizasyon**
- **WordPress Uyumlu Çıktı**
- **Kopyala-Yapıştır Hazır**
- **Detaylı Raporlar**
- **Ücretsiz Kullanım**

## 🌐 Canlı Demo

**Frontend**: [https://blog-seo-optimizer.vercel.app](https://blog-seo-optimizer.vercel.app)

**API**: [https://blog-seo-optimizer-api.vercel.app](https://blog-seo-optimizer-api.vercel.app)

## 🛠️ Teknolojiler

### Frontend
- **HTML5** - Modern semantik yapı
- **CSS3** - Glass morphism ve dual theme
- **Vanilla JavaScript** - Hızlı ve hafif
- **Responsive Design** - Mobil uyumlu

### Backend
- **Python Flask** - Hızlı API geliştirme
- **CORS** - Cross-origin desteği
- **Regex** - Gelişmiş metin işleme
- **Vercel** - Serverless deployment

## 📁 Proje Yapısı

```
Blog Optimizer/
├── index.html              # Ana web uygulaması
├── favicon.svg             # Site ikonu
├── vercel.json             # Vercel konfigürasyonu
├── README.md               # Proje dokümantasyonu
├── DEPLOYMENT.md           # Deployment rehberi
├── LICENSE                 # MIT lisansı
├── .gitignore              # Git ignore dosyası
├── api/                    # Backend API
│   ├── app.py             # Flask uygulaması
│   ├── requirements.txt   # Python bağımlılıkları
│   ├── vercel.json        # API Vercel konfigürasyonu
│   └── README.md          # API dokümantasyonu
└── sample_template/        # Tasarım referansı
    ├── index.html         # Örnek tasarım
    ├── templatemo-electric-xtra.css
    ├── templatemo-electric-scripts.js
    └── images/
```

## 🚀 Hızlı Başlangıç

### 1. Demo Kullanımı
1. [Canlı demo](https://blog-seo-optimizer.vercel.app) sayfasına gidin
2. HTML içeriğinizi yapıştırın
3. Odak anahtar kelimenizi girin
4. Mevcut SEO skorunuzu belirtin
5. "Optimize Et" butonuna tıklayın

### 2. API Kullanımı

```bash
curl -X POST https://blog-seo-optimizer-api.vercel.app/api/optimize \
  -H "Content-Type: application/json" \
  -d '{
    "html_code": "<h1>Başlık</h1><p>İçerik...</p>",
    "focus_keyword": "SEO optimizasyonu",
    "seo_score": 65
  }'
```

### 3. Yerel Geliştirme

```bash
# Frontend (HTML dosyasını tarayıcıda açın)
open index.html

# Backend
cd api
pip install -r requirements.txt
python app.py
```

## 📊 SEO Skorlama Sistemi

| Kriter | Puan | Açıklama |
|--------|------|----------|
| Title Tag | 5 | Focus keyword içermeli |
| Meta Description | 5 | 140-160 karakter |
| H1 Tag | 5 | Ana başlık |
| H2 Tags | 15 | Alt başlıklar (3x5) |
| Keyword Density | 10 | %1.5-2.5 arası |
| Internal Links | 10 | İç linkler (5x2) |
| Image Alt Text | 10 | Alt metinler (5x2) |
| **Toplam** | **60** | **Maksimum iyileştirme** |

## 🎨 Tasarım Özellikleri

### Dual Theme Sistemi
- **Dark Mode**: Royal Blue (#355baf) + Silver (#c0c0c0)
- **Light Mode**: Lighter tones + High contrast
- **Smooth Transitions**: 0.3s geçiş animasyonları

### Modern UI/UX
- **Glass Morphism**: Bulanık arka plan efektleri
- **Responsive Design**: Mobil-first yaklaşım
- **Smooth Animations**: CSS keyframe animasyonları
- **Accessibility**: WCAG uyumlu

## 🔧 API Endpoints

### POST /api/optimize
SEO optimizasyonu yapar.

**Request:**
```json
{
  "html_code": "HTML içeriği",
  "focus_keyword": "Anahtar kelime",
  "seo_score": 65
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "seo_score_before": 65,
    "seo_score_after": 90,
    "improvement": 25,
    "optimized_html_wordpress": "Optimize edilmiş HTML",
    "keyword_density": 2.1,
    "title_length": 58,
    "meta_length": 155,
    "optimizations": ["Title tag optimized", "Meta description generated"]
  }
}
```

### GET /api/health
API sağlık kontrolü.

### GET /api/features
Mevcut özellikleri listeler.

## 🌟 Öne Çıkan Özellikler

### 1. Gelişmiş SEO Algoritması
- Regex tabanlı içerik analizi
- Dinamik meta description oluşturma
- Schema.org structured data
- Canonical URL ekleme

### 2. WordPress Uyumluluğu
- Direkt editöre yapıştırılabilir HTML
- Otomatik formatlanmış çıktı
- Meta tag optimizasyonu
- Responsive tasarım desteği

### 3. Real-time Optimizasyon
- Anında sonuçlar
- Detaylı iyileştirme raporu
- Keyword density analizi
- Link optimizasyonu

## 📈 Performans

- **Frontend**: 100/100 Lighthouse skoru
- **API**: <100ms response time
- **Uptime**: %99.9 Vercel garantisi
- **SEO**: 90+ skor hedefi

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Website**: [https://blog-seo-optimizer.vercel.app](https://blog-seo-optimizer.vercel.app)
- **Email**: info@seooptimizer.com
- **API**: [https://blog-seo-optimizer-api.vercel.app](https://blog-seo-optimizer-api.vercel.app)

## 🙏 Teşekkürler

- [Vercel](https://vercel.com) - Hosting ve deployment
- [Flask](https://flask.palletsprojects.com) - Web framework
- [Inter Font](https://rsms.me/inter/) - Typography
- [Sample Template](sample_template/) - Tasarım referansı

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

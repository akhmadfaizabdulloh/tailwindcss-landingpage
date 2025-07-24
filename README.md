# YiBi Creative Digital Agency Landing Page

---

## 📘 Panduan Penggunaan dan Instalasi

### 1. Pendahuluan

Landing page ini merupakan template modern dan responsif yang dirancang untuk kebutuhan agensi digital atau company profile, dikembangkan menggunakan **Tailwind CSS v3**.

### 2. Struktur folder

Berikut adalah struktur folder utama dalam template ini:

```bash
yibi-landingpage/
├── public/               # Aset publik
│   ├── css/              # File CSS
│   │   ├── output.css    # Output Tailwind (watch mode)
│   │   ├── style.css     # CSS hasil build akhir
│   ├── img/              # Gambar dan ikon
│   ├── js/               # File JavaScript
│   └── index.html        # Halaman utama website
├── src/                  # Sumber file pengembangan
│   └── input.css         # File konfigurasi Tailwind awal
├── tailwind.config.js    # Konfigurasi Tailwind
├── package.json          # Informasi proyek dan dependensi
├── package-lock.json     # Versi terkunci untuk dependensi
└── README.md             # Dokumentasi proyek

```

### 3. Mengedit konten

Untuk mengedit konten pada halaman website, buka file ```public/index.html``` menggunakan editor teks atau kode, lalu cari bagian yang ingin diubah. Setelah melakukan perubahan, simpan file tersebut dan periksa hasilnya di browser.

#### 3.1 Mengganti Gambar

Semua gambar yang digunakan dalam website disimpan di folder ```public/img/```.
Untuk mengganti gambar, lakukan langkah berikut:
1. Ganti gambar lama dengan file gambar baru di dalam folder ```public/img/```.
2. Ubah sumber gambar di file ```public/index.html``` dengan mengganti nilai atribut src pada elemen ```<img>```.

```bash
<img src="img/namagambar.png" alt="Gambar 1">
```

### 4. Mengubah atau menyesuaikan template

Untuk keperluan ini, kamu perlu menggunakan npm atau yarn agar file ```public/css/output.css``` dapat diperbarui sesuai dengan style yang kamu gunakan. Berikut langkah-langkahnya:

1. Buka terminal dan masuk ke direktori project ini.
2. Pastikan **Node.js** sudah terinstal di perangkat kamu. Jika belum, silakan unduh dan instal dari [sini](https://nodejs.org/en).
3. Jalankan perintah ```npm install``` atau ```yarn install``` untuk menginstal dependensi.
4. Setelah itu, jalankan ```npm run dev``` untuk memulai proses pengembangan.
5. Buka file ```public/index.html``` di browser. Setiap kali kamu melakukan perubahan pada class HTML, file ```output.css``` akan diperbarui secara otomatis. Jangan lupa untuk me-refresh halaman agar perubahan terlihat.

Silakan kunjungi dokumentasi Tailwind [di sini](https://v3.tailwindcss.com/) untuk melakukan perubahan.

#### 4.1 Mengubah Warna dan Tema

Warna dan tema dapat di konfigurasi file ```tailwind.config.js```.

**Contoh :** 

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
      },
    },
  },
}
```

### 5. Build untuk produksi

Jika website sudah siap untuk diunggah ke lingkungan produksi, ikuti langkah-langkah berikut:
1. Jalankan perintah npm run build di terminal untuk menghasilkan file CSS yang telah dioptimasi.
2. Ubah pemanggilan file CSS di ```public/index.html``` dari ```./css/output.css``` menjadi ```./css/style.css```

```bash
<link rel="stylesheet" href="./css/output.css" />
```

Dengan langkah ini, website akan menggunakan versi CSS yang lebih ringan dan efisien untuk produksi. 


### 6. Lisensi

[Lisensi Penggunaan GNU GPL](https://www.gnu.org/licenses/gpl-3.0.en.html) untuk **YiBi Creative Digital Agency Landing Page**  ini, memungkinkan penyuntingan dan penggunaan secara bebas, baik untuk keperluan pribadi maupun komersial. Namun, **dilarang keras** menjual kembali atau mendistribusikan ulang kode template ini tanpa izin tertulis dari pemiliknya.

### 7. Kontak
Jika kamu memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi saya [di sini](https://api.whatsapp.com/send/?phone=6288235518211) atau [email](codewithfz@gmail.com).

Terima kasih telah memilih Study Program Profile Landing Page Template! Saya berharap kamu dapat membuat website yang luar biasa dengan bantuan template ini.

**Selamat berkarya!**

**Terima kasih!**





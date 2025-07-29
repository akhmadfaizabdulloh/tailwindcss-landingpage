# YiBi - Creative Digital Agency Landing Page

---

## List of contents
- [English Version : Usage and Installation Guide](#-usage-and-installation-guide)
- [Versi Bahasa Indonesia : Panduan Penggunaan dan Instalasi](#-panduan-penggunaan-dan-instalasi)

---

## 📘 Usage and Installation Guide

### 1. Introduction

This landing page is a modern and responsive template designed for digital agencies or company profiles, developed using **Tailwind CSS v3**.

### 2. Folder Structure

The following is the main folder structure of this template:

```bash
yibi-landingpage/
├── public/       # Contains public assets accessible to everyone
│   ├── css/      # Folder for CSS files used in the project
│   │   ├── style.css   # CSS development or build results
│   ├── img/      # Contains images and icons used on the website
│   ├── js/       # Folder for JavaScript files used in the project
│   ├── index.html  # Main website file (HTML entry point)
├── src/          # Source folder for files used during development
│   ├── input.css # Main file containing Tailwind CSS configurations before compilation
├── tailwind.config.js  # Tailwind CSS configuration file
├── package.json  # Project information, dependencies, and npm scripts
├── package-lock.json  # Locks dependency versions to ensure consistency
├── README.md     # Project documentation, including installation and usage guides
```

### 3. Editing Content

To edit the content on a website, open the ```public/index.html``` file using a text or code editor and find the section you want to change. After making changes, save the file and review the results in a browser.

#### 3.1 Replacing Images

All images used on the website are stored in the ```public/img/``` folder.
To replace an image, follow these steps:
1. Replace the old image with the new image file in the ```public/img/``` folder.
2. Change the image source in the ```public/index.html``` file by changing the value of the src attribute on the ```<img>``` element.

```bash
<img src="img/image-name.png" alt="Image 1">
```

### 4. Modifying or Customizing the Template

For this purpose, you'll need to use npm or yarn to update the ```public/css/style.css``` file to reflect your style. Here are the steps:

1. Open a terminal and go to this project directory.
2. Make sure **Node.js** is installed on your device. If not, please download and install it from [here](https://nodejs.org/en).
3. Run the ```npm install``` or ```yarn install``` command to install the dependencies.
4. After that, run ```npm run dev``` to start the development process.
5. Open the ```public/index.html``` file in a browser. Every time you make changes to the HTML class, the ```style.css``` file will update automatically. Don't forget to refresh the page for the changes to take effect.

Please visit the Tailwind v3 documentation [here](https://v3.tailwindcss.com/) to make changes.

#### 4.1 Changing Colors and Themes

Colors and themes can be configured in the ```tailwind.config.js``` file.

**Example :** 

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
      },
    },
  },
}
```

### 5. Building for Production

If the website is ready to be deployed in a production environment, follow these steps:
1. Run the command ```npm run build``` in the terminal.
2. Then the contents of the CSS file ```./css/style.css``` will be changed to an optimized CSS file.

With this step, the website will use a lighter and more efficient version of CSS for production.

### 6. License

[The GNU GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html) for **YiBi Creative Digital Agency Landing Page**  allows free modification and use for both personal and commercial purposes. However, redistributing or reselling the template code without written permission from the owner is **strictly prohibited**.

### 7. Contact
If you have any questions or need assistance, feel free to contact me [here](https://www.instagram.com/codewithfz) or via [email](codewithfz@gmail.com).

Thank you for choosing the **YiBi Creative Digital Agency Landing Page**! I hope this template helps you create an outstanding website.

**Happy coding!**

**Thank you!**

---
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
│   │   ├── style.css     # CSS hasil development atau build 
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
<img src="img/nama-gambar.png" alt="Gambar 1">
```

### 4. Mengubah atau menyesuaikan template

Untuk keperluan ini, kamu perlu menggunakan npm atau yarn agar file ```public/css/style.css``` dapat diperbarui sesuai dengan style yang kamu gunakan. Berikut langkah-langkahnya:

1. Buka terminal dan masuk ke direktori project ini.
2. Pastikan **Node.js** sudah terinstal di perangkat kamu. Jika belum, silakan unduh dan instal dari [sini](https://nodejs.org/en).
3. Jalankan perintah ```npm install``` atau ```yarn install``` untuk menginstal dependensi.
4. Setelah itu, jalankan ```npm run dev``` untuk memulai proses pengembangan.
5. Buka file ```public/index.html``` di browser. Setiap kali kamu melakukan perubahan pada class HTML, file ```style.css``` akan diperbarui secara otomatis. Jangan lupa untuk me-refresh halaman agar perubahan terlihat.

Silakan kunjungi dokumentasi Tailwind v3 [di sini](https://v3.tailwindcss.com/) untuk melakukan perubahan.

#### 4.1 Mengubah Warna dan Tema

Warna dan tema dapat di konfigurasi file ```tailwind.config.js```.

**Contoh :** 

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
      },
    },
  },
}
```

### 5. Build untuk produksi

Jika website sudah siap untuk diunggah ke lingkungan produksi, ikuti langkah-langkah berikut:
1. Jalankan perintah ```npm run build``` di terminal.
2. Maka isi file CSS ```./css/style.css``` akan diubah menjadi file CSS yang telah dioptimasi.

Dengan langkah ini, website akan menggunakan versi CSS yang lebih ringan dan efisien untuk produksi. 


### 6. Lisensi

[Lisensi Penggunaan GNU GPL](https://www.gnu.org/licenses/gpl-3.0.en.html) untuk **YiBi Creative Digital Agency Landing Page**  ini, memungkinkan penyuntingan dan penggunaan secara bebas, baik untuk keperluan pribadi maupun komersial. Namun, **dilarang keras** menjual kembali atau mendistribusikan ulang kode template ini tanpa izin tertulis dari pemiliknya.

### 7. Kontak
Jika kamu memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi saya [di sini](https://www.instagram.com/codewithfz) atau [email](codewithfz@gmail.com).

Terima kasih telah memilih **YiBi Creative Digital Agency Landing Page**! Saya berharap kamu dapat membuat website yang luar biasa dengan bantuan template ini.

**Selamat berkarya!**

**Terima kasih!**





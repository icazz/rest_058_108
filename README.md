<div align="center">

# Tugas Rest API

Proyek ini adalah tugas pembuatan REST API sederhana menggunakan Node.js dan Express.js untuk mengelola data produk (CRUD).

</div>

## Anggota Kelompok
| Nama | NRP |
| :--- | :--- |
| Ica Zika Hamizah | 5027241058 |
| Erlinda Annisa Zahra | 5027241108 |

## 🛠️ Persiapan (Prerequisites)
Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal:
1.  **Node.js** (untuk menjalankan server)
2.  **Postman / Apidog** (untuk melihat dan menguji dokumentasi API)

## 📝 Penjelasan Kode & Fungsionalitas API

API ini mengimplementasikan operasi CRUD (Create, Read, Update, Delete) menggunakan Express.js. Untuk penyederhanaan pada tugas ini, data disimpan secara lokal di dalam memori menggunakan struktur *array* (bukan *database* eksternal).

### 1. Konfigurasi Dasar
* **`app.use(express.json())`**: *Middleware* wajib yang dipasang agar server dapat mengenali dan membaca data berformat JSON yang dikirimkan oleh klien (melalui *Request Body* saat melakukan POST atau PUT).
* **`let data`**: Variabel *array* penyimpan data produk sementara. Jika server dimatikan (*restart*), data yang baru ditambahkan akan hilang dan kembali ke isi bawaan (Laptop dan Mouse).

### 2. Rincian Endpoint

| HTTP Method | Endpoint | Fungsi Utama | Keterangan Logika Kode |
| :--- | :--- | :--- | :--- |
| **GET** | `/produk` | Menampilkan Semua Data | Mengembalikan seluruh isi dari *array* `data` ke dalam bentuk JSON. |
| **GET** | `/produk/:id` | Menampilkan Detail Produk | Mengambil `id` dari URL (diubah ke integer dengan `parseInt`), lalu mencari data menggunakan `.find()`. Mengembalikan status `404` (Not Found) jika produk tidak ada. |
| **POST** | `/produk` | Menambahkan Produk Baru | Menerima objek JSON dari *body*. ID di-generate secara otomatis menggunakan rumus `data.length + 1` agar ID selalu bertambah. Data baru di-`.push()` ke *array*. |
| **PUT** | `/produk/:id` | Memperbarui Data Produk | Mencari produk berdasarkan `id`. Jika ditemukan, properti `nama` dan `harga` di-*update* dengan nilai baru yang dikirimkan melalui *Request Body*. |
| **DELETE** | `/produk/:id` | Menghapus Produk | Menyaring ulang *array* menggunakan `.filter()` untuk menyingkirkan produk yang memiliki `id` sesuai permintaan, kemudian memunculkan pesan berhasil. |

### 3. Server Port
Server diatur untuk berjalan dan "mendengarkan" permintaan secara lokal pada **port 3000** melalui perintah `app.listen(3000)`.

## 🚀 Langkah-langkah Menjalankan Proyek

### Instalasi Dependensi

```bash
npm install
```

### Jalankan server `http://localhost:3000`

```bash
node server.js
```

## 📚 Dokumentasi
[Buka Dokumentasi API Lengkap](./dokumentasi/rest_058_108_dokumentasi.md)
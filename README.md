# EduPrima — E-Learning

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Local_Persistence-00b894)

> [EduPrima adalah aplikasi sistem pembelajaran digital terpadu yang dibangun untuk mendukung produktivitas mahasiswa. Aplikasi ini menyelesaikan masalah aksesibilitas informasi akademik yang sering terpencar dengan menyediakan satu platform sentral untuk materi belajar, pengumpulan tugas, dan aktivtas akademik mahasiswa]

---

## 📸 Screenshots

| Login Screen | Home Screen | Feature Screen |
|:---:|:---:|:---:|
| ![assets/screenshots/login.png] | ![assets/screenshots/home.png] | ![assets/screenshots/feature.png] |

---

## ✨ Fitur Utama

- [x] **Autentikasi Pengguna:** Login system terintegrasi menggunakan `AuthContext`.
- [x] **Manajemen State & UI:** Menggunakan `useState` dengan *conditional rendering* (termasuk *Loading Spinner* dan *Empty State* saat data kosong).
- [x] **Daftar & Detail Kursus:** Menampilkan `CourseCard` menggunakan `FlatList` dan navigasi Stack untuk melihat detail.
- [x] **Pengumpulan Tugas:** Fitur spesifik domain (Assignment Upload Screen) untuk mengelola pengumpulan tugas perkuliahan.
- [x] **Pelacakan Progres:** Visualisasi progres belajar menggunakan komponen `ProgressBar`.
- [x] **Persistensi Data:** Menyimpan sesi pengguna dan progres secara lokal menggunakan `AsyncStorage` via modul `storage.js`.
- [x] **Navigasi Tab & Stack:** Menggunakan React Navigation (`AppNavigator`) untuk perpindahan halaman yang mulus.

---

## 🛠️ Tech Stack

Layer | Teknologi |
|-------|-----------|
| **Framework** | React Native + Expo |
| **State Management** | React Hooks (`useState`, `useEffect`, `useContext`) |
| **Navigation** | React Navigation v6 (Bottom Tab + Native Stack) |
| **Storage** | `@react-native-async-storage/async-storage` |
| **Build System** | EAS Build (Expo Application Services) |
---

## 🚀 Cara Menjalankan

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
npm install
npx expo start
```
Scan QR Code dengan Expo Go di HP.

---

## 📦 Download APK

[Download APK terbaru](LINK_APK_GITHUB_RELEASE_ATAU_DRIVE)

---

## 🌐 Expo Snack

[https://snack.expo.dev/@teuku.zaky/fba760]
---

## 👤 Developer

**Teuku Aulia Muhammad Zaky** | 243303621272 | Sistem Informasi 4 Pagi B
Universitas Prima Indonesia — Prodi Sistem Informasi
Mata Kuliah: Pemrograman Mobile (TI-MOBILE-01)
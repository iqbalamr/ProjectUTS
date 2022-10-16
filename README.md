<b> UJIAN TENGAH SEMESTER </b>
<b> Pengembangan Aplikasi Mobile</b>

<b>Identitas Mahasiswa</b>

    Nama    : Iqbal Amrulloh
    NIM     : 119140161
    Kelas   : Pengembangan Aplikasi Mobile - RB

<b> Dekripsi Aplikasi </b>

<b> Cam Scanner </b>

Cam Scanner adalah aplikasi scanner sederhana yang dapat melakukan scan barcode dengan mudah. 
Kamera yang digunakan yaitu kamera depan dan belakang, ini dapat diatur dengan mengklik icon flip camera. 
Tracking barcode pada aplikasi ini ditandai oleh box curved berwarna biru.
Untuk aplikasi ini terdapat dua kondisi, yang pertama saat barcode berupa url maka aplikasi akan langsung otomatis 
redirect membuka default browser dan menuju pada link yang disisipkan pada barcode dan kondisi kedua adalah saat barcode disisipkan teks maka 
pengguna dapat melakukan copy teks dan akan disimpan pada clipboard dengan cara mengklik icon copy. Untuk format barcode yang tersedia dapat dilihat lebih detail pada /
link berikut : https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/

<b> Extra dependencies: </b>
        "dependencies": {
          "@react-navigation/native": "^6.0.10",
          "@react-navigation/native-stack": "^6.6.1",
          "expo": "~44.0.0",
          "expo-barcode-scanner": "~11.2.0",
          "expo-clipboard": "~2.1.0",
          "expo-linking": "~3.0.0",
          "expo-status-bar": "~1.2.0",
          "expo-updates": "~0.11.6",
          "react": "17.0.1",
          "react-dom": "17.0.1",
          "react-native": "0.64.3",
          "react-native-safe-area-context": "3.3.2",
          "react-native-screens": "~3.10.1",
          "react-native-web": "0.17.1"
        },

<b> Expo package </b>
  1. expo-barcode-scanner
  2. expo-linking
  3. expo-clipboard
  4. expo/vector-icons

To download dependencies:

    npm install


To start the app:

    npm start



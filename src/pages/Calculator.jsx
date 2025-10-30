import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const questions = [
  "Saya merasa lebih gugup dan cemas dari biasanya",
  "Saya merasa takut tanpa alasan sama sekali",
  "Saya mudah marah atau merasa panik",
  "Saya merasa seperti jatuh terpisah dan akan hancur berkeping-keping",
  "Saya merasa bahwa semuanya baik-baik saja dan tidak ada hal buruk akan terjadi",
  "Lengan dan kaki saya bergetar",
  "Saya terganggu oleh nyeri kepala, leher, dan nyeri punggung",
  "Saya merasa lemah dan mudah lelah",
  "Saya merasa tenang dan dapat duduk diam dengan mudah",
  "Saya merasakan jantung saya berdebar-debar",
  "Saya merasa pusing tujuh keliling",
  "Saya telah pingsan atau merasa seperti itu",
  "Saya dapat bernapas dengan mudah",
  "Saya merasa jari-jari tangan dan kaki mati rasa dan kesemutan",
  "Saya terganggu oleh nyeri lambung dan gangguan pencernaan",
  "Saya sering buang air kecil",
  "Tangan saya biasanya kering dan hangat",
  "Wajah saya merasa panas dan merah merona",
  "Saya mudah tertidur dan dapat istirahat malam dengan baik",
  "Saya mimpi buruk",
];

function Calculator() {
  const [biodata, setBiodata] = useState({ name: "", age: "", gender: "" });
  const [responses, setResponses] = useState(Array(questions.length).fill(0));
  const [step, setStep] = useState(1);
  // const [visibleQuestions, setVisibleQuestions] = useState(6);
  const navigate = useNavigate();

  const handleResponse = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
  };

  const calculateScore = () => {
    const totalScore = responses.reduce((acc, curr) => acc + curr, 0);

    if (responses.includes(0)) {
      alert("Harap isi semua pertanyaan sebelum melanjutkan!");
      return;
    }

    // Fungsi untuk mendapatkan hasil dan solusi
    const getResultMessage = (score) => {
      if (score >= 20 && score <= 44) {
        return {
          level: "Normal/Tidak Cemas",
          message:
            "Anda dalam kondisi baik dan tidak menunjukkan tanda-tanda kecemasan. Pertahankan gaya hidup sehat Anda!",
          solution: [
            "Lakukan aktivitas fisik seperti olahraga ringan secara rutin.",
            "Tidur yang cukup dan makan makanan yang bergizi.",
            "Gunakan teknik relaksasi sederhana, seperti pernapasan dalam atau meditasi.",
            "Hindari stres dengan mengatur waktu dan prioritas.",
          ],
        };
      } else if (score >= 45 && score <= 59) {
        return {
          level: "Kecemasan Ringan",
          message:
            "Anda mengalami kecemasan ringan. Ini mungkin terkait dengan stres sehari-hari. Tenangkan diri dan coba kendalikan pemicunya.",
          solution: [
            "Lakukan teknik relaksasi seperti mindfulness atau yoga untuk menenangkan diri.",
            "Luangkan waktu untuk melakukan aktivitas menyenangkan atau hobi favorit Anda.",
            "Bicarakan perasaan Anda dengan orang yang dipercaya, seperti teman atau keluarga.",
          ],
        };
      } else if (score >= 60 && score <= 74) {
        return {
          level: "Kecemasan Sedang",
          message:
            "Anda mengalami kecemasan sedang. Kondisi ini dapat memengaruhi keseharian Anda. Ada baiknya untuk mulai mencari bantuan profesional.",
          solution: [
            "Konsultasi dengan psikolog untuk mendapatkan dukungan dan strategi penanganan.",
            "Batasi konsumsi kafein, alkohol, atau zat yang dapat meningkatkan kecemasan.",
            "Cobalah membuat rutinitas yang teratur untuk mengurangi perasaan tidak terkendali.",
          ],
        };
      } else if (score >= 75 && score <= 80) {
        return {
          level: "Kecemasan Berat",
          message:
            "Anda mengalami kecemasan berat. Kondisi ini dapat mengganggu kehidupan sehari-hari. Segera dapatkan bantuan profesional.",
          solution: [
            "Segera konsultasi dengan tenaga profesional seperti psikolog atau psikiater.",
            "Pertimbangkan terapi seperti terapi kognitif-perilaku (CBT) untuk mengubah pola pikir negatif.",
            "Jika diperlukan, psikiater dapat merekomendasikan pengobatan untuk membantu mengurangi gejala.",
            "Libatkan diri dalam terapi kelompok atau komunitas untuk memperkuat dukungan sosial.",
          ],
        };
      } else {
        return {
          level: "Tidak Valid",
          message: "Skor tidak valid. Pastikan Anda menjawab semua pertanyaan.",
          solution: [],
        };
      }
    };

    const result = getResultMessage(totalScore);

    // Ambil data yang sudah ada di localStorage, jika ada
    const savedData = JSON.parse(localStorage.getItem("srasData")) || [];

    // Menambahkan data pengguna baru ke dalam array data yang sudah ada
    const newData = {
      biodata,
      totalScore,
      resultLevel: result.level,
      resultMessage: result.message,
      solutions: result.solution,
      responses,
    };

    // Tambahkan data baru ke dalam array data yang ada
    savedData.push(newData);

    // Simpan data gabungan ke localStorage
    localStorage.setItem("srasData", JSON.stringify(savedData));

    // Navigasi ke halaman hasil
    navigate("/result", { state: { score: totalScore, biodata } });
  };

  const isBiodataComplete = biodata.name && biodata.age && biodata.gender;

  // Tambahkan lebih banyak pertanyaan saat scroll ke bawah
  // const handleScroll = () => {
  //   const bottom =
  //     Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
  //     document.documentElement.offsetHeight;
  //   if (bottom && visibleQuestions < questions.length) {
  //     setVisibleQuestions(visibleQuestions + 6); // Tambah 6 pertanyaan setiap kali scroll sampai selesai
  //   }
  // };

  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cek apakah semua pertanyaan sudah terisi
  const isAllQuestionsAnswered = responses.every((response) => response !== 0);

  return (
    <div className="container mx-auto p-6 min-h-screen">
      {step === 1 && (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center mb-4 inline-flex flex-col justfy-center items-center w-full">
            SRAS (Self Rating Anxiety Scale)
            <span>Biodata Peserta</span>
          </h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                className="mt-2 w-full p-2 border rounded-lg"
                placeholder="Masukkan nama lengkap"
                value={biodata.name}
                onChange={(e) =>
                  setBiodata({ ...biodata, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Usia</label>
              <input
                type="number"
                className="mt-2 w-full p-2 border rounded-lg"
                placeholder="Masukkan usia"
                value={biodata.age}
                onChange={(e) =>
                  setBiodata({ ...biodata, age: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Jenis Kelamin</label>
              <select
                className="mt-2 w-full p-2 border rounded-lg"
                value={biodata.gender}
                onChange={(e) =>
                  setBiodata({ ...biodata, gender: e.target.value })
                }>
                <option value="">Pilih jenis kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
            <button
              type="button"
              disabled={!isBiodataComplete}
              className={`w-full py-2 px-4 rounded-lg text-white ${
                isBiodataComplete
                  ? "bg-primary hover:bg-primary/80"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => setStep(2)}>
              Lanjutkan ke Kalkulator
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-2xl font-bold text-center mb-6">
            Self Rating Anxiety Scale (SRAS)
          </h1>
          <p className="text-gray-700 text-start mb-3">
            SRAS (Self Rating Anxiety Scale) adalah penilaian kecemasan pada
            pasien dewasa yang dikembangkan berdasar gejala kecemasan. Terdapat
            20 pertanyaan dimana setiap pertanyaan dinilai 1-4 (1: tidak pernah,
            2: kadang kadang, 3: sebagian waktu, 4: hampir setiap waktu).
            <br />
            <br />
            Rentang penilaian 20-80:
            <br />
            Skor 20-44 = normal/tidak cemas
            <br />
            Skor 45-59 = kecemasan ringan
            <br />
            Skor 60-74 = kecemasan sedang
            <br />
            Skor 75-80 = kecemasan berat.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-gray-700 mb-6 text-center">
            Jawab setiap pertanyaan dengan memilih salah satu opsi di bawah ini.
          </p>
          {questions.map((question, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              className="mb-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-medium">
                {index + 1}. {question}
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  "Tidak Pernah",
                  "Kadang-kadang",
                  "Sebagian Waktu",
                  "Hampir Setiap Waktu",
                ].map((label, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 w-full sm:w-auto mb-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i + 1}
                      onChange={() => handleResponse(index, i + 1)}
                      className="form-radio text-primary"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          ))}
          {/* Tombol submit hanya muncul setelah semua pertanyaan dijawab */}
          {isAllQuestionsAnswered && (
            <button
              onClick={calculateScore}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 mt-6">
              Submit
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Calculator;

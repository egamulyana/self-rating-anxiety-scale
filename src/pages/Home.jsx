import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { Autoplay } from "swiper/modules";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    if (localStorage.getItem("error")) {
      localStorage.removeItem("error");
      toast.error(
        "Data tidak ditemukan. Harap selesaikan kalkulator terlebih dahulu.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeButton: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        }
      );
    }
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-start" data-aos="fade-up">
        <h1 className="md:text-4xl text-2xl font-bold text-primary">
          Kenali Kecemasan Anda, Atasi dengan Tepat
        </h1>
        <p className="text-base mt-4 text-gray-700">
          Gangguan kecemasan atau anxiety disorder adalah salah satu gangguan
          mental yang paling umum dan memengaruhi banyak orang di seluruh dunia.
          Kondisi ini ditandai dengan perasaan cemas, khawatir, dan ketakutan
          yang berlebihan terhadap berbagai hal dalam kehidupan sehari-hari.
          Namun, kecemasan yang berlebihan ini tidak selalu terkait dengan
          situasi yang sebenarnya mengancam.
        </p>
      </div>
      <div className="flex justify-center mt-6" data-aos="fade-up">
        <button
          onClick={() => navigate("/calculator")}
          className="bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-lg text-lg">
          Screening Anxiety Disorder
        </button>
      </div>
      <div className="space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">
          Apakah anda merasa cemas berlebihan ?
        </h2>
        <p className="text-gray-700">
          Jika kecemasan yang Anda rasakan sudah mulai mengganggu aktivitas
          sehari-hari, kualitas tidur, atau hubungan sosial Anda, penting untuk
          segera mengetahui lebih jauh tentang kondisi ini
        </p>
      </div>
      <div className="space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">
          Apa itu Anxiety Disorder?
        </h2>
        <p className="text-gray-700">
          Anxiety Disorder adalah kondisi kesehatan mental yang ditandai dengan
          rasa khawatir atau ketakutan berlebihan yang sulit dikendalikan.
          Berbeda dengan kecemasan normal yang biasanya muncul dalam situasi
          tertentu, kecemasan pada gangguan ini cenderung lebih intens,
          berlangsung lebih lama, dan mengganggu aktivitas sehari-hari. Gangguan
          ini dapat menyebabkan seseorang merasa cemas hampir sepanjang waktu
          atau mengalami episode singkat dengan kecemasan yang sangat intens,
          bahkan tanpa alasan yang jelas. Orang dengan gangguan kecemasan sering
          kali merasa begitu tidak nyaman sehingga mereka menghindari kegiatan
          atau rutinitas harian yang berpotensi memicu kecemasan. Dalam beberapa
          kasus, individu mungkin mengalami serangan kecemasan yang sangat hebat
          hingga merasa ketakutan atau tidak mampu bergerak.
        </p>
      </div>

      {/* Jenis-jenis Anxiety Disorder (Slide) */}
      <div className="space-y-2" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">
          Jenis-jenis Anxiety Disorder
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500, // Waktu interval antara slide (dalam milidetik)
            disableOnInteraction: false, // Slide akan terus berjalan meskipun pengguna berinteraksi
          }}
          loop={true}
          modules={[Autoplay]}
          className="w-full">
          <SwiperSlide>
            <div className="p-4 bg-white rounded-lg shadow flex flex-wrap gap-5 md:items-start items-center justify-center md:justify-start">
              <img
                src="./image/Jenis/generalized-anxiety.jpg"
                alt="image"
                className="w-72 "
              />
              <div className="flex flex-col mt-3">
                <h3 className="text-lg font-semibold">
                  Generalized Anxiety Disorder (GAD)
                </h3>
                <p className="text-gray-700">
                  Perasaan cemas yang berlarut-larut terhadap banyak hal dalam
                  kehidupan, bahkan tanpa alasan yang jelas.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-white rounded-lg shadow flex flex-wrap gap-5 md:items-start items-center justify-center md:justify-start">
              <img
                src="./image/Jenis/panic.jpg"
                alt="image"
                className="w-72 "
              />
              <div className="flex flex-col mt-3">
                <h3 className="text-lg font-semibold">Panic Disorder</h3>
                <p className="text-gray-700">
                  Serangan panik mendadak dengan gejala fisik yang intens,
                  seperti detak jantung cepat, sesak napas, dan rasa takut akan
                  kematian.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-white rounded-lg shadow flex flex-wrap gap-5 md:items-start items-center justify-center md:justify-start">
              <img
                src="./image/Jenis/social-anxiety.jpg"
                alt="image"
                className="w-72 "
              />
              <div className="flex flex-col mt-3">
                <h3 className="text-lg font-semibold">
                  Social Anxiety Disorder
                </h3>
                <p className="text-gray-700">
                  Ketakutan berlebihan terhadap situasi sosial atau interaksi
                  dengan orang lain.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 bg-white rounded-lg shadow flex flex-wrap gap-5 md:items-start items-center justify-center md:justify-start">
              <img
                src="./image/Jenis/phobias.jpg"
                alt="image"
                className="w-72 "
              />
              <div className="flex flex-col mt-3">
                <h3 className="text-lg font-semibold">Phobias</h3>
                <p className="text-gray-700">
                  Ketakutan yang ekstrem terhadap objek atau situasi tertentu,
                  seperti takut ketinggian atau hewan.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Add "Swipe" Indicator */}
        {/* <div className="text-start text-gray-500 ">
          <span className="italic text-sm">
            *Geser untuk melihat lebih banyak
          </span>
        </div> */}
      </div>

      {/* Gejala Anxiety Disorder */}
      <div className="space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">
          Gejala Anxiety Disorder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow" data-aos="fade-right">
            <h3 className="text-lg font-semibold">Gejala Emosional</h3>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li className="flex items-center">
                <img
                  src="/image/Gejala/emosional-1.jpg"
                  alt="Gejala emosional 1"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Perasaan khawatir atau takut
              </li>
              <li className="flex items-center">
                <img
                  src="/image/Gejala/emosional-2.jpg"
                  alt="Gejala emosional 2"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Merasa tegang dan gelisah
              </li>
              <li className="flex items-center">
                <img
                  src="/image/Gejala/emosional-3.jpg"
                  alt="Gejala emosional 3"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Kegelisahan atau mudah tersinggung
              </li>
              <li className="flex items-center">
                <img
                  src="/image/Gejala/emosional-4.jpg"
                  alt="Gejala emosional 4"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Mengantisipasi hal buruk
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow" data-aos="fade-left">
            <h3 className="text-lg font-semibold">Gejala Fisik</h3>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              <li className="flex items-center">
                <img
                  src="/image/Gejala/fisik-1.jpg"
                  alt="Gejala fisik 1"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Jantung berdebar kencang dan sesak napas
              </li>
              <li className="flex items-center">
                <img
                  src="/image/Gejala/fisik-2.jpg"
                  alt="Gejala fisik 2"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Sakit perut dan kelelahan
              </li>
              <li className="flex items-center">
                <img
                  src="/image/Gejala/fisik-3.jpg"
                  alt="Gejala fisik 3"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Berkeringat, gemetar, dan berkedut
              </li>
              <li className="flex items-center">
                <img
                  src="/image/Gejala/fisik-4.jpg"
                  alt="Gejala fisik 4"
                  className="w-20 h-20 mr-3 rounded mb-3"
                />
                Sulit tidur atau insomnia
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800">
            Kenapa Penting untuk Mengenali Anxiety Disorder?
          </h2>
          <p className="text-gray-700">
            Jika kecemasan tidak diatasi, dapat mempengaruhi kehidupan pribadi
            dan pekerjaan, bahkan menyebabkan gangguan fisik seperti masalah
            pencernaan dan hipertensi. Dengan melakukan screening kecemasan
            adalah langkah pertama untuk mengetahui lebih dalam tentang kondisi
            kesehatan mental Anda, dengan menggunakan Self-Rating Anxiety Scale
            (SAS/SRAS) yang telah terbukti valid, Anda bisa mengetahui apakah
            Anda mengalami kecemasan yang perlu perhatian khusus dan mengetahui
            langkah-langkah yang perlu diambil untuk penanganan lebih lanjut.
          </p>
        </div>
      </div>
      <div className="space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-gray-800">
          Mulai screening sekarang !
        </h2>
        <p className="text-gray-700">
          Cukup luangkan waktu 5 menit untuk menjawab pertanyaan dan ketahui
          tingkat kecemasan Anda.
        </p>
      </div>
      <div className="flex justify-center mt-6" data-aos="fade-up">
        <button
          onClick={() => navigate("/calculator")}
          className="bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-lg text-lg">
          Screening Anxiety Disorder
        </button>
      </div>
      {/* Motivational Section */}
      <div
        className="p-6 bg-blue-100 rounded-lg shadow text-center"
        data-aos="fade-up">
        <h2 className="text-2xl font-bold text-red-600 uppercase">Ingat!</h2>
        <p className="text-lg text-gray-700 mt-4">
          Kesehatan mental Anda sama pentingnya dengan kesehatan fisik. Jika
          Anda merasa cemas berlebihan atau mengalami gangguan tidur, jangan
          ragu untuk mencari bantuan. Kami di sini untuk mendukung Anda.
        </p>
      </div>
    </div>
  );
}

export default Home;

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Components
import { CultureCard } from "~/components/molecule/culture-card";

export default component$(() => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375902/ethno-inquiry/ethno-inquiry-header-banner_jwcyon.webp"
        alt="Ethno Inquiry"
        className="w-full"
      />
      <div className="w-full bg-[url('https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375903/ethno-inquiry/bg-batik_ggnnpg.webp')] bg-fixed bg-center">
        <div className="container mx-auto py-24 px-10 md:px-32 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-4xl text-gray-900 font-semibold text-center">
            ETHNO - INQUIRY LEARNING
          </h2>
          <p className="text-base sm:text-2xl text-gray-900 text-center mt-4">
            Suatu Model Pembelajaran Dikembangkan untuk Meningkatkan
            Keterampilan Berpikir Kritis Mahasiswa
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-100">
        <div className="container mx-auto p-20 px-5 sm:px-20">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
            FENOMENA ETHNOSAINS DI INDONESIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <CultureCard
              image="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375902/ethno-inquiry/kesenian-presean_d5mqmo.webp"
              title="Kesenian Presean"
            />
            <CultureCard
              image="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375903/ethno-inquiry/rumah-sasak_amac0s.webp"
              title="Rumah Adat Sasak"
            />
            <CultureCard
              image="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375903/ethno-inquiry/menyunggi_zqypgu.webp"
              title="Wanita Bali menyunggi"
            />
            <CultureCard
              image="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375904/ethno-inquiry/reok-ponorogo_erujnu.webp"
              title="Reok Ponorogo"
            />
            <CultureCard
              image="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375903/ethno-inquiry/pasar-terapung_cuz4r2.webp"
              title="Pasar Terapung Bugis"
            />
            <CultureCard
              image="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375902/ethno-inquiry/cidomo_ahsvxc.webp"
              title="Alat Transportasi Cidomo"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Ethno Inquiry",
};

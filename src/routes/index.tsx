import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Components
import { CultureCard } from "~/components/molecule/culture-card";

export default component$(() => {
  return (
    <div>
      <img
        src="/img/ethno-inquiry-header-banner.jpeg"
        alt="Ethno Inquiry"
        className="w-full"
      />
      <div className="w-full bg-[url('/img/bg-batik.jpeg')] bg-fixed bg-center">
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
              image="/img/kesenian-presean.jpeg"
              title="Kesenian Presean"
            />
            <CultureCard
              image="/img/rumah-sasak.jpeg"
              title="Rumah Adat Sasak"
            />
            <CultureCard
              image="/img/menyunggi.jpeg"
              title="Wanita Bali menyunggi"
            />
            <CultureCard
              image="/img/reok-ponorogo.jpeg"
              title="Reok Ponorogo"
            />
            <CultureCard
              image="/img/pasar-terapung.jpeg"
              title="Pasar Terapung Bugis"
            />
            <CultureCard
              image="/img/cidomo.jpeg"
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

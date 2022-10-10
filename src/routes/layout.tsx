import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Navbar } from "~/components/organism/navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <footer className="w-full bg-gray-900">
        <div className="container mx-auto p-5 py-10 flex flex-col">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col flex-1 mr-4 mb-5">
              <h2 className="text-lg font-semibold text-white text-center mb-1 md:text-left">
                About Us
              </h2>
              <p className="text-sm text-white font-regular text-center sm:text-left">
                ETHNO-INQUIRY LEARNING Merupkan Suatu Model Pembelajaran yang
                Dikembangkan untuk Meningkatkan Keterampilan Berpikir Kritis
                Mahasiswa
              </p>
            </div>
            <div className="flex flex-col flex-1 ml-4 gap-2">
              <h2 className="text-lg font-semibold text-white text-center md:text-left">
                Contact Us
              </h2>
              <Link
                href="mailto:saifulprayogi@undikma.ac.id"
                className="text-sm text-white font-regular"
              >
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
                  </svg>
                  <span className="ml-2">saifulprayogi@undikma.ac.id</span>
                </div>
              </Link>
              <div className="text-sm text-white font-regular">
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-10 h-10 md:w-6 md:h-6 fill-white"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                  </svg>
                  <span className="ml-2">
                    FAKULTAS SAINS, TEKNIK DAN TERAPAN (FSTT) - UNDIKMA. Jl.
                    Pemuda No.59A, Dasan Agung Baru, Kec. Mataram, Kota Mataram,
                    NTB. 83125
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-center text-white text-xs mt-5">
            &copy;2022 Ethno Inquiry
          </div>
        </div>
      </footer>
    </>
  );
});

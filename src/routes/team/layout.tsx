import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <div className="w-full bg-[url('/img/bg-batik.jpeg')] bg-fixed bg-center">
    <div className="container mx-auto py-12 px-12 flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-4xl text-gray-900 font-semibold text-center mb-16">
        Our Team
      </h2>
      <Slot />
    </div>
  </div>
));

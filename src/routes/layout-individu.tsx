import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <div className="w-full h-full min-h-screen md:w-screen md:h-screen bg-yellow-100 p-5 md:py-20 md:px-0 flex items-center justify-center">
    <div className="w-full md:max-w-3xl mx-auto bg-white rounded-lg p-4 drop-shadow-xl">
      <Slot />
    </div>
  </div>
));

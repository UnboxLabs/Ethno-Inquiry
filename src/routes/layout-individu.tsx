import { component$, Slot } from "@builder.io/qwik";

export default component$(() => (
  <div className="w-screen h-screen bg-yellow-100 py-20 flex items-center justify-center">
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 drop-shadow-xl">
      <Slot />
    </div>
  </div>
));

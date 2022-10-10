import { component$, Slot } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const { title } = useDocumentHead();

  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto py-20 px-10 md:px-32 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-4xl text-gray-900 font-semibold text-center mb-4">
            {title}
          </h2>
          <div id="article" className="text-sm text-gray-900 text-justify mt-4">
            <Slot />
          </div>
        </div>
      </div>
    </>
  );
});

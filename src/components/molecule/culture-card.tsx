import { component$ } from "@builder.io/qwik";

export interface CultureCardProps {
  image: string;
  title: string;
}

export const CultureCard = component$((props: CultureCardProps) => {
  const { image, title } = props;

  return (
    <div className="group bg-white shadow hover:shadow-md rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform object-cover w-full h-[145px] lg:h-[165px] rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
});

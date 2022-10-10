import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { TEAMS } from "~/constants/team";

export default component$(() => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {TEAMS.map((team) => (
        <div className="flex flex-col flex-1 group bg-white shadow hover:shadow-md rounded-lg overflow-hidden">
          <img
            src={team.avatar}
            alt={team.name}
            className="group-hover:scale-110 transition-transform object-fit w-full h-[250px] md:h-[150px] lg:h-[220px] xl:h-[270px] rounded-t-lg"
          />
          <div className="p-4 flex flex-1 flex-col justify-between">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold text-gray-900">
                {team.name}
              </h3>
              <p className="text-xs text-gray-500">{team.description}</p>
            </div>
            <div className="flex justify-center mt-5">
              <Link
                href={`/team/${team.slug}`}
                className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-center text-sm font-semibold mx-auto"
              >
                See Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

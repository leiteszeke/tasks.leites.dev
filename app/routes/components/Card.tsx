import { useMemo } from "react";

export type Task = {
  id: string;
  name: string;
  status: "to_do" | "done" | "in_progress" | "new";
  code: string;
  project: {
    id: string;
    name: string;
  };
};

type BadgeProps = {
  variant: Task["status"];
};

const Badge = ({ variant }: BadgeProps) => {
  const { color, text } = useMemo(() => {
    switch (variant) {
      case "to_do":
        return {
          color: "indigo",
          text: "Por hacer",
        };

      case "in_progress":
        return {
          color: "yellow",
          text: "En progreso",
        };

      case "done":
        return {
          color: "green",
          text: "Hecho",
        };

      case "new":
      default:
        return {
          color: "blue",
          text: "Nuevo",
        };
    }
  }, [variant]);

  return (
    <span
      className={`bg-${color}-500 text-${color}-800 text-xs font-semibold text-white uppercase mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-600 dark:text-${color}-800`}
    >
      {text}
    </span>
  );
};

const Card = (task: Task) => {
  return (
    <div className="flex-col cursor-pointer rounded hover:bg-blue-100">
      <div className="py-3 px-3 cursor-pointer text-gray-700 rounded text-sm font-normal antialiased tracking-normal">
        {task.name}
      </div>
      <div className="flex px-3 justify-between">
        <div className="flex">
          <div className="bg-red-500 rounded h-4 w-4 p-1">
            <svg
              className="h-2 w-2 text-white"
              fill="currentColor "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a7 7 0 10.001 13.999A7 7 0 0010 3z"
              ></path>
            </svg>
          </div>
          <div className="font-bold text-gray-500 ml-1 text-xs">
            {task.code}
          </div>
        </div>
        <Badge variant={task.status} />
      </div>
      <div className="border mt-3"></div>
    </div>
  );
};

export default Card;

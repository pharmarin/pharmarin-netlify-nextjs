import React from "react";

const SingleTitle: React.FC<{
  date?: Date;
  subtitle?: string | React.ReactElement;
  title: string;
}> = ({ date, subtitle, title }) => {
  return (
    <div className="flex flex-col relative sm:-mx-4">
      <div className="absolute h-full w-full rounded-2xl bg-gray-300 transform -rotate-3"></div>
      <div className="absolute h-full w-full rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 transform -rotate-1"></div>
      <div className="relative p-4 pb-2">
        <h1 className="text-2xl text-white font-bold">{title}</h1>
        {subtitle && <div className="text-gray-800 italic">{subtitle}</div>}
        {date && (
          <p className="text-sm text-green-900">
            Posté le{" "}
            <time dateTime={date.toISOString()}>
              {date.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleTitle;

import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";

const WebInformation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="">
      <h1 className="text-4xl font-bold tracking-tight pb-5 pt-10 text-center">
        About
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="text-justify indent-8 ">
          <p className="pt-8 pb-2">
            <span className="font-bold text-xl">Klima</span> is a sleek and
            modern weather web application built with{" "}
            <span className="font-bold">ReactJS</span>, designed to provide
            users with real-time weather information in an intuitive and
            visually engaging format. The app leverages the power of the
            <span className="font-bold"> OpenWeatherAPI</span> to deliver
            accurate and up-to-date weather data from around the globe.
          </p>
          <p className="pb-2">
            The frontend is styled with{" "}
            <span className="font-bold">Tailwind CSS</span>, ensuring a clean
            and responsive design, while{" "}
            <span className="font-bold">ShadcnUI</span> components add a
            polished and professional user interface. For seamless and efficient
            data fetching and caching,{" "}
            <span className="font-bold">TanStack Query</span> is used under the
            hood. Weather trends and statistics are visualized using{" "}
            <span className="font-bold">Recharts</span>, offering users
            interactive and insightful data representations.
          </p>
          <p className="pb-2">
            Whether you're checking today's forecast or exploring weather
            trends, Klima offers a fast, elegant, and informative experience.
          </p>
        </div>
        <div>
          <Link to={"/"}>
            <img
              // Change the icon based on the theme
              src={isDark ? "/klima-logo.png" : "/klima-logo2.png"}
              alt="Klima Logo"
              className="h-80 w-420"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebInformation;

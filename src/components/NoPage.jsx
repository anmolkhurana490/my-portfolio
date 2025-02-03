import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const NoPage = () => {
  const { darkTheme } = useContext(AppContext)

  const [headingColor, setheadingColor] = useState('')
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    setTextColor(darkTheme ? "text-white" : "text-gray-900")
  }, [darkTheme])

  return (
    <section className={"min-h-screen flex flex-col items-center justify-center px-6 " + textColor}>
      <h2 className="text-6xl font-bold">404</h2>
      <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
        Go Back Home
      </Link>
    </section>
  );
};

export default NoPage;
import { useTranslation } from "react-i18next";
import Logo from "./assets/RezaTech.png";
import WebsiteIcon from "./assets/Website.png";
import WebAppIcon from "./assets/WebApp.png";
import SoftwareIcon from "./assets/Software.png";
import ProjectCard from './components/ProjectCard';
import SweetnSour from './assets/Sweet & Sour Screen.png';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "nl" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="font-sans bg-[#E6F6E6] text-[#2C2C2C] min-h-screen px-6 py-12">
      {/* Hero/About Section */}
      <section className="relative flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6 mb-10 items-start">
        <img
          src={Logo}
          alt="RezaTech Logo"
          className="w-48 h-48 md:w-56 md:h-56 shadow-xl object-contain border-4 border-[#4DA96B] bg-white"
        />
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-[#4DA96B]">
            {t("name")}
          </h1>
          <p className="text-lg leading-relaxed text-[#2C2C2C]">{t("intro")}</p>
        </div>
        <button
          onClick={toggleLang}
          className="absolute top-6 right-6 bg-[#4DA96B] hover:bg-[#388a52] transition-colors text-white px-5 py-2 rounded-full font-semibold shadow-md"
        >
          {i18n.language === "en" ? "Nederlands" : "English"}
        </button>
      </section>

      {/* Services Section */}
      <div className="min-h-screen bg-[#E6F6E6] flex flex-col items-center">
        <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-12">
          {/* Websites */}
          <div className="flex flex-col items-start text-left bg-white rounded-lg shadow-md p-8 border-t-4 border-[#4DA96B]">
            <img
              src={WebsiteIcon}
              alt="Websites Logo"
              className="h-16 w-16 mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-[#4DA96B] mb-2">Websites</h2>
            <p className="text-gray-700 mb-6">{t("websiteText")}</p>
          </div>
          {/* Webapps */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-8 border-t-4 border-[#4DA96B]">
            <img
              src={WebAppIcon}
              alt="Webapps Logo"
              className="h-16 w-16 mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-[#4DA96B] mb-2">
              {t("webApps")}
            </h2>
            <p className="text-gray-700 mb-6">{t("webAppsText")}</p>
          </div>
          {/* Software & IT-diensten */}
          <div className="flex flex-col items-end text-right bg-white rounded-lg shadow-md p-8 border-t-4 border-[#4DA96B]">
            <img
              src={SoftwareIcon}
              alt="Software Logo"
              className="h-16 w-16 mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-[#4DA96B] mb-2">
              {t("software")}
            </h2>
            <p className="text-gray-700 mb-6">{t("softwareText")}</p>
          </div>
        </section>
        <div className="w-full flex justify-center mb-16">
          <a
            href="/contact"
            className="bg-[#4DA96B] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#388a52] transition text-lg shadow-lg"
          >
            {t("contact")}
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <section className="p-8 bg-white rounded-2xl shadow-lg mb-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#4DA96B]">
          {t("projects")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            image={SweetnSour}
            title="Sweet and Sour Screen"
            description="A review hub for movies and series — from brilliant masterpieces to laughably bad gems that circle back to greatness."
            link="/sweet-and-sour-screen"
          />
        </div>
      </section>
    </div>
  );
}

export default App;

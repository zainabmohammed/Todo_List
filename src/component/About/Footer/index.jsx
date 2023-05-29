import { useStore } from "../../../Store";
import trans from "../../../trans";
import "./style.css";

const AboutFooter = () => {
  const { lang } = useStore();
  return (
    <div className="about-footer">
      <p>
        {trans[lang].nav_textfooter} <a>{trans[lang].nav_zainab}</a>{" "}
      </p>
    </div>
  );
};

export default AboutFooter;

import { container, title} from "../../assets/img/jss/material-react.js";
import image from "../../assets/img/bg.jpg"

const pillsStyle = {
  section: {
    padding: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "2em",
    textDecoration: "none"
  },
  imgHome: {
    backgroundImage: "url(" + image + ")",
    height: "100%",
    padding: "1em",
    minimumHeight: "10em",
    borderRadius: "2em",
    
    boxShadow: 
    "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4)"

  }
};

export default pillsStyle;

// Menu.jsx
// import PremImage from "../../assets/prem-league-snapshot.png";
import PremImage from "../../assets/prem-league-snapshot.svg";
import Top5Soccer from "../../assets/uefa.svg";
// import PraxisIcon from '../../assets/PraxisIcon.svg'; 
import PraxisIcon from "../../assets/FitnessIcon.svg"
import StrokeIcon from "../../assets/StrokeIcon.svg";
import JobIcon from "../../assets/JobHunt.svg";
import DegreeIcon from "../../assets/money.svg";
import DMVIcon from "../../assets/Figures.svg";
// import StrokeIcon from "src\assets\StrokeIcon.svg"

const Menu = [
  {
  id: 1,
  image: Top5Soccer,  
  title: "Multi-Season Analysis of Football Excellence",
  category: "Data Analytics",
  link: "/project/european-leagues-project"  
  },
  {
    id: 2,
    image: PraxisIcon,
    title: "Praxis Fitness Data App (UI/UX)",
    category: "Web UI/UX",
    link: "/project/praxis-fitness-app",
  },
  {
    id: 3,
    image: StrokeIcon,
    title: "Stroke Logistics Report",
    category: "Machine Learning",
    link: "/project/stroke-logistics",
  },
  {
    id: 4,
    image: JobIcon,
    title: "Job Trends Geospatial Report",
    category: "Data Analytics",
    link: "/project/job-trends-geo",
  },
  {
    id: 5,
    image: DegreeIcon,
    title: "Degrees That Pay Back",
    category: "Visualization",
    link: "/project/degrees-payback",
  },
  {
    id: 6,
    image: PremImage,
    title: "Premier League Data Insights",
    category: "Data Analytics",
    link: "/project/premier-league-insights",
  },
  {
    id: 7,
    image: DMVIcon,
    title: "DMV Public Figures SQL Project",
    category: "SQL & Database",
    link: "/project/dmv-sql",
  },
];


export default Menu;

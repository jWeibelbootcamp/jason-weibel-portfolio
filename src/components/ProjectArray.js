import EmpireCheesecake from "../images/projectScreenshots/cheesecakeScreenshot.png";
import CupOTears from "../images/projectScreenshots/cupScreenshot.png";
import Weather from "../images/projectScreenshots/weatherScreenshot.png";
import Muttel6 from "../images/projectScreenshots/muttelScreenshot.png";
import TeamGen from "../images/projectScreenshots/teamScreenshot.png";
import EmployeeTracker from "../images/projectScreenshots/cmsScreenshot.png";

const projectArray = [
    {
        title: "Empire Cheesecake",
        image: EmpireCheesecake,
        description: "An e-commerce site built with React and Mongodb using Stripe for a dynamic checkout system.",
        gitHub: "https://github.com/jWeibelbootcamp/Project-3",
        deployed: "https://shrouded-headland-51374.herokuapp.com/",
    },
    {
        title: "Cup O'Tears Coffee",
        image: CupOTears,
        description: "A single-page, reactive website allowing a user to search for various coffee drinks, returning an image, description, ingredients, and nutritional facts. Includes links to a Coffee Guide, maps showing local coffee shops, and a personal notepad saving to local storage.",
        gitHub: "https://github.com/jWeibelbootcamp/CupOTears",
        deployed: "https://jweibelbootcamp.github.io/CupOTears/",
    },
    {
        title: "Weather Dashboard",
        image: Weather,
        description: "A single page weather dashboard application with a a search function, including recent searches saved to local storage. Displays a large card for the current weather with the city name, weather icon, current conditions description, temperature in degrees Farenheit, and humidity.",
        gitHub: "https://github.com/jWeibelbootcamp/Weather-Dashboard",
        deployed: "https://jweibelbootcamp.github.io/Weather-Dashboard/",
    },
    {
        title: "Muttel 6",
        image: Muttel6,
        description: "A full-stack pet care, lodging, and grooming site utilizing Handlebars, MySQL, and Sequelize.",
        gitHub: "https://github.com/jWeibelbootcamp/Google-OAuth-Login",
        deployed: "https://howl-ton.herokuapp.com/",
    },
    {
        title: "Team Generator",
        image: TeamGen,
        description: "A CLI team generator using Inquirer which displays the team in generated HTML.",
        gitHub: "https://github.com/jWeibelbootcamp/team-profile-generator",
        deployed: "https://drive.google.com/file/d/1kPZW-vvR3PzePqmLf0wLZTYg3HDAc3XN/view",
    },
    {
        title: "Employee Tracker",
        image: EmployeeTracker,
        description: "Content Management System (CMS) for employees, managers, roles, and departments using Inquirer and MySQL.",
        gitHub: "https://github.com/jWeibelbootcamp/Employee-Tracker",
        deployed: "https://drive.google.com/file/d/1pFmOcPseUzI2VRjXzVJY1_QQ0Ej-xyaq/view",
    },
];

export default projectArray;
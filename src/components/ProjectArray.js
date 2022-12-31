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
        description: "An e-commerce site built with React and Mongodb using a shopping cart modal and Stripe for a dynamic checkout system. Also includes user accounts, password authentication, and order history.",
        gitHub: "https://github.com/jWeibelbootcamp/Project-3",
        deployed: "https://shrouded-headland-51374.herokuapp.com/",
    },
    {
        title: "Muttel 6",
        image: Muttel6,
        description: "A full-stack pet care, lodging, and grooming e-commerce site utilizing Handlebars, MySQL, and Sequelize. Allows for user accounts with several pets, each having their own appointments.",
        gitHub: "https://github.com/jWeibelbootcamp/Google-OAuth-Login",
        deployed: "https://howl-ton.herokuapp.com/",
    },
    {
        title: "Cup O'Tears Coffee",
        image: CupOTears,
        description: "A single-page site allowing users to search various coffees, returning an image, description, ingredients, and nutritional facts via multiple APIs. Includes a personal notepad saving to local storage.",
        gitHub: "https://github.com/jWeibelbootcamp/CupOTears",
        deployed: "https://jweibelbootcamp.github.io/CupOTears/",
    },
    {
        title: "Weather Dashboard",
        image: Weather,
        description: "A weather dashboard application showing current conditions, temperature, and humidity with search history saved to local storage. Displays current weather as well as a 5-day forecast.",
        gitHub: "https://github.com/jWeibelbootcamp/Weather-Dashboard",
        deployed: "https://jweibelbootcamp.github.io/Weather-Dashboard/",
    },
    {
        title: "Team Generator",
        image: TeamGen,
        description: "A command line team generator for a baseball team using Inquirer and Node.js which displays the team in generated HTML after a series of question prompts.  Also includes Jest testing.",
        gitHub: "https://github.com/jWeibelbootcamp/team-profile-generator",
        deployed: "https://drive.google.com/file/d/1kPZW-vvR3PzePqmLf0wLZTYg3HDAc3XN/view",
    },
    {
        title: "Employee Tracker",
        image: EmployeeTracker,
        description: "A command line Content Management System (CMS) for employees, managers, roles, and departments using Inquirer and MySQL.  Also allows for updates and deletions.",
        gitHub: "https://github.com/jWeibelbootcamp/Employee-Tracker",
        deployed: "https://drive.google.com/file/d/1pFmOcPseUzI2VRjXzVJY1_QQ0Ej-xyaq/view",
    },
];

export default projectArray;
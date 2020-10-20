require("@penthouse/psystem/PSystem-v2.js")
require("@penthouse/psystem/PStyle.scss")

requireApp([
    "./controllers/Root",
    "./controllers/Controllers",
    "./controllers/Home",
    "./controllers/Detail",
    "./controllers/Upload",
    "./systemComponents/TransitionContainer",
    "./systemComponents/System",
    "./systemComponents/NavBarContainer",
    "./systemComponents/TabBarContainer", 
    "./views/icons", 
    "./views/utility",
    "./views/Buttons",
    "./models/CData"

],s => require(s+""))

startApp(Root)


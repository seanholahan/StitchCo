require("@penthouse/psystem/PSystem-v2.js")
require("@penthouse/psystem/PStyle.scss")

requireApp([
    "./controllers/Root",
    "./controllers/Controllers",
    "./systemComponents/TransitionContainer",
    "./systemComponents/System",
    "./systemComponents/NavBarContainer",
    "./systemComponents/TabBarContainer", 
    "./views/icons", 
    "./views/utility", 

],s => require(s+""))

startApp(Root)


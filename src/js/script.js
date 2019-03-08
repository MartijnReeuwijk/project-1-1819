import { makestudieElements } from "./module/studieElement.js";
import { getMap } from "./module/map.js";
import { removeMap } from "./module/map.js";
import { makeIndex } from "./module/map.js";
import { addClickMap } from "./module/map.js";
import { removeClickMap } from "./module/map.js";
// import { getData } from "./module/api.js";
// import { API } from "/node_modules/oba-wrapper/js/index.js";
// import { getStudie } from "./module/studie.js";

makestudieElements();
addClickMap();
removeClickMap();
// getData("economie", "book");
makeIndex();

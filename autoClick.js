var btn1 = document.querySelector("body > div.HH-MainContent.HH-Supernova-MainContent > div > div > div.bloko-columns-wrapper > div > div.sticky-container > div > div.vacancy-serp-wrapper.HH-SearchVacancyDropClusters-Serp > div > div:nth-child(3) > div > div > div:nth-child(2) > div.vacancy-serp-item__row.vacancy-serp-item__row_controls > div.HH-VacancyResponseTrigger-Button > span > a");
var event = new Event('click', [true, false]);
btn1.dispatchEvent(event);
function click2() {
var btn2 = document.querySelector("body > div.bloko-modal-container.bloko-modal-container_visible > div.bloko-modal > div > form > div.bloko-modal-footer > div > button > span.bloko-button__content");
var event2 = new Event('click', [true, false]);
btn2.dispatchEvent(event2);
console.log('wtf');
};
setTimeout(click2, 3000);




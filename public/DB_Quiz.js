// let democrat = document.getElementById('democrat');
// let republican = document.getElementById('republican');
// let kanye = document.getElementById('kanye');
// let skinny = document.getElementById('skinny');
// let perfectWeight = document.getElementById('perfectWeight');
// let fat = document.getElementById('Fat');
// let tall = document.getElementById('Tall');
// let perfectHeight = document.getElementById('perfectHeight');
// let short = document.getElementById('short');
// let canCook = document.getElementById('canCook');
// let cantCook = document.getElementById('cantCook');
// let canClean = document.getElementById('canClean');
// let cantClean = document.getElementById('cantClean');
// let notSexuallyInclined = document.getElementById('notSexuallyInclined');
// let lilSexuallyInclined = document.getElementById('lilSexuallyInclined');
// let yesSexuallyInclined = document.getElementById('yesSexuallyInclined');
// let verySexuallyInclined = document.getElementById('verySexuallyInclined');
let submit = document.getElementById('submitQuizBtn');
let politicalAffiliation = document.getElementById('politicalAffiliation');
let weightCategory = document.getElementById('weightCategory');
let currentHeight = document.getElementById('currentHeight');
let cookingSkill = document.getElementById('cookingSkill');
let cleaningSkill = document.getElementById('cleaningSkill');
let sexualInclination = document.getElementById('sexualInclination');


submit.addEventListener('click', () => {
    console.log('submitting form...');
    triggerApi().then(() =>{
        console.log('done');
        window.location.reload();
    });
});

async function triggerApi(){
    // Init Data Array
    let data2 = {
        // democrat: democrat.value,
        // republican: republican.value,
        // kanye: kanye.value,
        // skinny: skinny.value,
        // perfectWeight: perfectWeight.value,
        // fat: fat.value,
        // tall: tall.value,
        // perfectHeight: perfectHeight.value,
        // short: short.value,
        // canCook: canCook.value,
        // cantCook: cantCook.value,
        // canClean: canClean.value,
        // cantClean: cantClean.value,
        // notSexuallyInclined: notSexuallyInclined.value,
        // lilSexuallyInclined: lilSexuallyInclined.value,
        // yesSexuallyInclined: yesSexuallyInclined.value,
        // verySexuallyInclined: verySexuallyInclined.value,
        politicalAffiliation: politicalAffiliation.value,
        weightCategory: weightCategory.value,
        currentHeight: currentHeight.value,
        cookingSkill: cookingSkill.value,
        cleaningSkill: cleaningSkill.value,
        sexualInclination: sexualInclination.value,


    };
    console.log(data2);

    // Push to API Route
    await fetch('/api/tinderQuiz/quizForMatt/submit', {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2)
    })
        .then(response => (response.json()))
        .then((data2) => {
            console.log("received back to api route");
            console.log(data2);
        });


}
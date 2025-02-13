var input = document.getElementById('input')

    input.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (element[2] !== "forNavn" && element[3] !== "etterNavn") {
                    console.log(element[2] + " " + element[3]);
                }
            });
        })
      })

//Antall jenter
var input1 = document.getElementById('input1')

    input1.addEventListener('change', function apply() {
        console.clear()
        let count = 0;
        readXlsxFile(input1.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (element[11] == "kvinne") {
                    console.log(element[2] + " " + element[3]);
                    count++;
                }
            });
            console.log(`Det er ${count} kvinner på listen`);
        })
      })

var input2 = document.getElementById('input2')

    input2.addEventListener('change', function apply() {
        console.clear()
        let count1 = 0;
        readXlsxFile(input2.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (element[11] == "kvinne" && element[10] == "1MKB") {
                    console.log(element[2] + " " + element[3]);
                    count1++;
                }
            });
            console.log(`Det er ${count1} kvinner på listen på 1MKB`);
        })
      })

var input3 = document.getElementById('input3')
let alleBilder = document.getElementById("alleBilder")
    input3.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input3.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (element[7] !== "bilder") {
                    let bilder = document.createElement("img")
                    bilder.src = element[7];
                    alleBilder.append(bilder)
                }
            });
        })
      })

var input4 = document.getElementById('input4')
let bildeFjort = document.getElementById("bildeFjort")
    input4.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input4.files[0]).then(function(rows) {
            rows.forEach(element => {
                let bildet = document.createElement("img")
                if (element[0] == 14) {
                    bildet.src = element[7];  
                }
                bildeFjort.append(bildet)
            });
        })
      })

var input5 = document.getElementById('input5')
let askerElever = document.getElementById("askerElever")
    input5.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input5.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (element[8] == "Asker") {
                    let askerBilder = document.createElement("img")
                    askerBilder.src = element[7]
                    askerElever.appendChild(askerBilder)
                }
            });
        })
      })

var input6 = document.getElementById('input6')
    input6.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input6.files[0]).then(function(rows) {
            let maxNummer = 0;
            let eldesteElever = [];
            rows.forEach(element => {
                if (typeof element[4] === "number") {
                    //Om alder pålagt er høyere en maxNummer;
                    if (element[4] > maxNummer) {
                        //Max nummer vil bli endret til pålagt alder,
                        maxNummer = element[4]
                        //Og eldesteElever arrayen vil bestå av elevens alder
                        eldesteElever = [element]
                    }
                    //Dersom det finnes flere med samme alder, etter at vi har kjørt på med å finne ut høyeste alder;
                    else if (element[4] === maxNummer) {
                        //Push pålagte alderen inne i arrayen
                        eldesteElever.push(element)
                    }
                }
            });
            //Inne i arrayen vil vi kjøre forEach
            eldesteElever.forEach(element => {
                //For disse eldeste elever vil vi vise fram fornavn, etternavn og alder.
                console.log(element[2] + " " + element[3] + " " + element[4]);
            });
        })
      })

var input7 = document.getElementById('input7')
    input7.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input7.files[0]).then(function(rows) {
            let alder = []
            rows.forEach(element => {
                //Dytt verdiene inn i en array
                if (typeof element[4] === "number") {
                    alder.push(element[4])
                }

            });
            let total = alder.reduce(sum)
            function sum(previous, next){
                return (previous + next)
            }
            console.log(`Gjennomsnitts alderen er ${Math.round(total/alder.length)}`);
        })
      })

var input8 = document.getElementById('input8')
    input8.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input8.files[0]).then(function(rows) {
            let navn = [];
            rows.forEach(element => {
                if (typeof element[2] === "string") {
                    navn.push(element[2])
                }
            });
            let minLength = "StartNavn";
            let longest = [];
            navn.forEach(element => {
                if (minLength.length > element.length) {
                    minLength = element;
                    longest = [minLength]
                }
                else if (minLength.length === element.length) {
                    longest.push(element)
                }
            });
            longest.forEach(element => {
                console.log(element);
            })
        })
      })

var input9 = document.getElementById('input9')
    input9.addEventListener('change', function apply() {
        console.clear()
        let frav = [];
        readXlsxFile(input9.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (typeof element[12] === "number") {
                    if (element[12] >= 6) {
                        frav.push(element[2] + " " + element[3] + ` som har ${Math.round(element[12])}% fravær`)
                    } 
                }
            })
            frav.forEach(element => {
                console.log(element);
            })
        })
      })

var input10 = document.getElementById('input10')
    input10.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input10.files[0]).then(function(rows) {
            let maxNummer = 0;
            let minNummer = Infinity;
            let eldesteElever = [];
            let yngsteElever = [];
            rows.forEach(element => {
                if (typeof element[4] === "number") {
                    //Om alder pålagt er høyere en maxNummer;
                    if (element[4] > maxNummer) {
                        //Max nummer vil bli endret til pålagt alder,
                        maxNummer = element[4]
                        //Og eldesteElever arrayen vil bestå av elevens alder
                        eldesteElever = [element]
                    }
                    //Dersom det finnes flere med samme alder, etter at vi har kjørt på med å finne ut høyeste alder;
                    else if (element[4] === maxNummer) {
                        //Push pålagte alderen inne i arrayen
                        eldesteElever.push(element)
                    }
                }
                if (typeof element[4] === "number") {
                    //Om alder pålagt er høyere en maxNummer;
                    if (minNummer > element[4]) {
                        //Max nummer vil bli endret til pålagt alder,
                        minNummer = element[4]
                        //Og eldesteElever arrayen vil bestå av elevens alder
                        yngsteElever = [element]
                    }
                    else if (element[4] < minNummer) {
                        minNummer = element[4]
                        yngsteElever.push(minNummer)
                    }
                }
            });
            //Inne i arrayen vil vi kjøre forEach
            eldesteElever.forEach(element => {
                //For disse eldeste elever vil vi vise fram fornavn, etternavn og alder.
                console.log(element[2] + " " + element[3] + " " + element[4]);
            });
            yngsteElever.forEach(element => {
                //For disse eldeste elever vil vi vise fram fornavn, etternavn og alder.
                console.log(element[2] + " " + element[3] + " " + element[4]);
            });
        })
      })

var input11 = document.getElementById('input11')
let bilderFemten = document.getElementById("bilderFemten")
    input11.addEventListener('change', function apply() {
        console.clear()
        readXlsxFile(input11.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (element[4] == "15") {
                    let bilder15 = document.createElement("img")
                    bilder15.src = element[7]
                    bilderFemten.appendChild(bilder15)
                    console.log(element[2] + " " + element[3]);
                }
            });
        })
      })

var input12 = document.getElementById('input12')
let inputBox = document.getElementById("inputBox")

    input12.addEventListener('change', function apply() {
        let navnet = document.getElementById("insertName").value
        console.clear()
        let fornavn = [];

        readXlsxFile(input12.files[0]).then(function(rows) {
            rows.forEach(element => {
                if (typeof element[2] === "string" && element[2] === navnet) {
                    if (element[2] === navnet) {
                        fornavn.push(element)
                    }
                }
            });
            let names = [];
            fornavn.forEach(element => {
                names.push(element[2] + " " + element[3])
                let inputImg = document.createElement("img")
                inputImg.src = element[7]
                inputBox.appendChild(inputImg)
            })
        })
      })
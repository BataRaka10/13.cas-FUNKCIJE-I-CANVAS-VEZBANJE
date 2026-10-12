
/**
 *  1. napraviti addEventListener za klik unutar canvasa
 *  2. pratiti da li je prvi klik ili drugi klik, na treci klik resetujemo
 *  3. uzeti poziciju na ekranu na kliku
 *  4. nacrtati liniju
 * 
 */

let clickEvent = []; // [x, y], [x, y]

let canvasElement = document.getElementById("drawArea")

let context = canvasElement.getContext("2d")


canvasElement.addEventListener("click",  function(e) {

    


})

















// let clickPoints = []; // [x, y], [x, y]

// let canvasElement = document.getElementById("drawArea")

// let context = canvasElement.getContext("2d")

// let drawButton = document.getElementById("drawButton")

// let resetButton = document.getElementById("resetButton")


// canvasElement.addEventListener("click", function(event) {

//     let rect = canvasElement.getBoundingClientRect();
//     // console.log(rect)
//     // console.log(event.clientX)

//     let x = event.clientX - rect.left

//     let y = event.clientY - rect.top

//     // clickPoints.push("A")
//     // console.log(clickPoints)
//     clickPoints.push({x:x, y: y})
//     console.log(clickPoints)

//     // if (clickPoints.length >= 2) {

//     //     context.beginPath()
//     //     context.moveTo(clickPoints[0].x, clickPoints[0].y)
//     //     context.lineTo(clickPoints[1].x, clickPoints[1].y)
//     //     context.stroke()

//     //     clickPoints = [];
//     // }

//     // domaci:
//     // if (clickPoints.length >= 5) {

//     //     context.beginPath()
//     //     context.moveTo(clickPoints[0].x, clickPoints[0].y)

//     //     for (let i in clickPoints) {
//     //         if (i == 0) {
//     //             continue
//     //         }
//     //         context.lineTo(clickPoints[i].x, clickPoints[i].y)
//     //     }

//     //     context.lineTo(clickPoints[1].x, clickPoints[1].y)
//     //     context.lineTo(clickPoints[2].x, clickPoints[2].y)
//     //     context.lineTo(clickPoints[3].x, clickPoints[3].y)
//     //     context.lineTo(clickPoints[4].x, clickPoints[4].y)
//     //     context.stroke()

//     //     clickPoints = [];
//     // }
// })

// drawButton.addEventListener("click", function() {

//     context.beginPath()
//         context.moveTo(clickPoints[0].x, clickPoints[0].y)

//         for (let i in clickPoints) {
//             if (i == 0) {
//                 continue
//             }
//             context.lineTo(clickPoints[i].x, clickPoints[i].y)
//         }

//         context.stroke()

//         clickPoints = [];
// })

// resetButton.addEventListener("click", function() {
//     context.clearRect(0, 0, canvasElement.width, canvasElement.height)
// })


// let clickPoints = []; // [x, y], [x, y]

// let canvasElement = document.getElementById("drawArea")

// let context = canvasElement.getContext("2d")
// console.log(context)
// let drawButton = document.getElementById("drawButton")

// let resetButton = document.getElementById("resetButton")


// canvasElement.addEventListener("click", function(event) {
     // Ako je clickPoints prazan = znamo da je prvi klik
    // ako clickPoints ima jedan upis, znamo da je drugi klik
    // ako clickPoints ima vec dva upisa, onda je to treci kolik (vreme da ga isprazninmo)

    // let rect = canvasElement.getBoundingClientRect()

    // let x = event.clientX - rect.left

    // let y = event.clientY - rect.top

    // clickPoints.push({x: x, y: y})

    // if (clickPoints.length >= 2) {
        // beginPath = kreni da crtas
    //     context.beginPath()
        // kreni da pomeras od 1. element x i 1. element y
    //     context.moveTo(clickPoints[0].x, clickPoints[0].y)
        // lineTo = nacrtaj liniju do = 2. element x i 2. element y
    //     context.lineTo(clickPoints[1].x, clickPoints[1].y)
    //     context.stroke()

        // ako ima 2 vec = resetovace ga
    //     clickPoints = [];
    // }

    // vezba:

    // if (clickPoints.length >= 5) {

    //     context.beginPath()
    //     context.moveTo(clickPoints[0].x, clickPoints[0].y)

        /**
        //      * moramo da krenemo da crtamo i i moramo da krenemo od nulte pozicije
        //      * beginPath  i moveTo - moraju da ostanu
        //      *  -> petlja koja radi lineTo:
        //      *  -> preskoci broj 0
        //      * stroke isto ostasje
        //      */

        // for (let i in clickPoints) {
        //     console.log(i)
        //     if (i == 0) {
        //         // da ga preskci inicajalnu poziciju
        //         continue
        //     }
        //     // console.log(i)
        //     context.lineTo(clickPoints[i].x, clickPoints[i].y)
        // }

        // context.lineTo(clickPoints[1].x, clickPoints[1].y)
        // context.lineTo(clickPoints[2].x, clickPoints[2].y)
        // context.lineTo(clickPoints[3].x, clickPoints[3].y)
        // context.lineTo(clickPoints[4].x, clickPoints[4].y)
    //     context.stroke()

    //     clickPoints = [];
    // }

// })

// drawButton.addEventListener("click", function() {
    
//     context.beginPath()
//     context.moveTo(clickPoints[0].x, clickPoints[0].y)

//     for (let i in clickPoints) {
//         console.log(i)
//         if (i == 0) {
//             continue
//         }
//         context.lineTo(clickPoints[i].x, clickPoints[i].y)
//     }

//     context.stroke()

//     clickPoints = [];

// })

// resetButton.addEventListener("click", function() {
//     context.clearRect(0, 0, canvasElement.width, canvasElement.height)
// })








// gde smo kliknuli na ekranu


    // console.log(rect)

    // console.log(event.clientX)

    // console.log(x)
    
    // clickPoints.push("A")
    //   pusujem novi objekat(x, y)
    // console.log(clickPoints)

    // if (clickPoints.length >= 2) {

        // beginPath = kreni da crtas
    //     context.beginPath()
        // kreni da pomeras od (moveTo)
    //     context.moveTo(clickPoints[0].x, clickPoints[0].y)
        // (lineTo) nacrtaj linijiu do x od drug elementa i y od drugog elementa
    //     context.lineTo(clickPoints[1].x, clickPoints[1].y)
    //     context.stroke()

    //     clickPoints = [];
    // }

    // vezba
    // if (clickPoints.length >= 5) {

        // beginPath = kreni da crtas
    //     context.beginPath()
        // kreni da pomeras od (moveTo)
    //     context.moveTo(clickPoints[0].x, clickPoints[0].y)

    //     /**
    //      * moramo da krenemo da crtamo i i moramo da krenemo od nulte pozicije
    //      * beginPath  i moveTo - moraju da ostanu
    //      *  -> petlja koja radi lineTo:
    //      *  -> preskoci broj 0
    //      * stroke
    //      */

    //     for (let i in clickPoints) {
            // console.log(i)
    //         if (i == 0) {
    //             continue
                // preskoci 0 (inicajalnu poziciju)
    //         }
    //         console.log(i);
    //         context.lineTo(clickPoints[i].x, clickPoints[i].y)
    //     }

        // context.lineTo(clickPoints[1].x, clickPoints[1].y)
        // context.lineTo(clickPoints[2].x, clickPoints[2].y)
        // context.lineTo(clickPoints[3].x, clickPoints[3].y)
        // context.lineTo(clickPoints[4].x, clickPoints[4].y)
    //     context.stroke()

    //     clickPoints = [];
    // }













// canvasElement.addEventListener("click", function(event) {

    // let rect = canvasElement.getBoundingClientRect()
    // console.log(rect)

    // let x = event.clientX - rect.left
    // let y= event.clientY - rect.top
    // console.log(x, y)

    // console.log(event.clientX)

    // clickPoints.push({x: x, y : y})
    // console.log(clickPoints)

    // ako on ima 2 vec = on ce njega resetovati
    // sledeci put kad se klikne on ce poceti ispocetka
    
    // if (clickPoints.length >= 5) {

    //     // beginPath (kliknuo i vodim do)

    //     context.beginPath()
    //     context.moveTo(clickPoints[0].x, clickPoints[0].y)
    //     /**
    //      * beginPath i moveTo - moraju da ostanu (moramo da krenemo da crtamo i moramo da krenemo od 0 pozicije)
    //      *    -> petlja koja radi lineTo: preskoci broj 0
    //      * Stroke isto ostaje
    //      * 
    //      */

    //     for (let i in clickPoints) {
            // console.log(i)
    //         if (i == 0) {
                // i == 0 preskoci inicajalnu poziciju
                // u smislu da ga preskoci
    //             continue
    //         }
            // console.log(i)
    //         context.lineTo(clickPoints[i].x, clickPoints[i].y)
    //     }

        
        // context.lineTo(clickPoints[1].x, clickPoints[1].y)
        // context.lineTo(clickPoints[2].x, clickPoints[2].y)
        // context.lineTo(clickPoints[3].x, clickPoints[3].y)
        // context.lineTo(clickPoints[4].x, clickPoints[4].y)/
    //     context.stroke()

    //     clickPoints = [];
    // }

    // ako je clickPoints prazan = znamo da je prvci klik
    // ak oje clickPoints ima jedan upis , znamo da je drugi klik
    // ako clickPoints ima vec 2 upisa onda je to treci klik (vreme da ga ispraznimo)

// })

// drawButton.addEventListener("click", function() {

    // beginPath (kliknuo i vodim do)

    // context.beginPath()
    // context.moveTo(clickPoints[0].x, clickPoints[0].y)
    /**
     * beginPath i moveTo - moraju da ostanu (moramo da krenemo da crtamo i moramo da krenemo od 0 pozicije)
     *    -> petlja koja radi lineTo: preskoci broj 0
     * Stroke isto ostaje
     * 
     */

    // for (let i in clickPoints) {
        // console.log(i)
        // if (i == 0) {
            // i == 0 preskoci inicajalnu poziciju
            // u smislu da ga preskoci
            // continue
        // }
        // console.log(i)
    //     context.lineTo(clickPoints[i].x, clickPoints[i].y)
    // }

    
    // context.lineTo(clickPoints[1].x, clickPoints[1].y)
    // context.lineTo(clickPoints[2].x, clickPoints[2].y)
    // context.lineTo(clickPoints[3].x, clickPoints[3].y)
    // context.lineTo(clickPoints[4].x, clickPoints[4].y)
//     context.stroke()

//     clickPoints = [];
    
// })

// resetButton.addEventListener("click", function() {

//     context.clearRect(0, 0, canvasElement.width, canvasElement.height)

// })







// domaci
// drawButton.addEventListener("click", function() {

//     if (clickPoints.length >= 5) {

//         context.beginPath()
//         context.moveTo(clickPoints[0].x, clickPoints[0].y)

//         for (let i in clickPoints) {
//             if (i == 0) {
//                 continue
//             }
//             context.lineTo(clickPoints[i].x, clickPoints[i].y)
//         }



//     }


// })





// let clickPoints = []; // [x, y], [x, y]

// let canvasElement = document.getElementById("drawArea")

// canvasElement.addEventListener("click", function(event) {

//     let rect = canvasElement.getBoundingClientRect()

//     let x = event.clientX - rect.left

//     let y = event.clientY - rect.top

    // console.log(x, y)

    // console.log(rect)

    // console.log(event.clientX)


    // clickPoints.push({x: x, y: y})
    // console.log(clickPoints)

    // if (clickPoints.length >= 2) {
    //     clickPoints = [];
    // }

    // ako je clickPoints prazan = znamo da je prvci klik
    // ak oje clickPoints ima jedan upis , znamo da je drugi klik
    // ako clickPoints ima vec 2 upisa onda je to treci klik (vreme da ga ispraznimo)

// })










// let clickButton = document.getElementById("clickMe")

// let clickButton2 = document.getElementById("clickMe2")

// clickButton.addEventListener("click", clickEvent)

// function clickEvent() {
//     console.log("test click event")
// }










// let clickPoints = []; // [x, y], [s, y]

// let canvasElement = document.getElementById("drawArea")

// let context = canvasElement.getContext("2d")
// console.log(context)


// let drawButton = document.getElementById("draw")

// let resetButton = document.getElementById("reset")


// canvasElement.addEventListener("click", function(event) {

//     let rect = canvasElement.getBoundingClientRect()
    // console.log(rect)

    // console.log(event.clientX)

//     let x = event.clientX - rect.left

//     let y = event.clientY - rect.top

    // console.log(x, y)


    // clickPoints.push("A")
//     clickPoints.push({x: x, y: y})


    

    // if (clickPoints.length >= 2) {

    //     context.beginPath()
        // pomeraj 
    //     context.moveTo(clickPoints[0].x, clickPoints[0].y)
        // nacrtaj liniju do
    //     context.lineTo(clickPoints[1].x, clickPoints[1].y)
    //     context.stroke()

    //     clickPoints = [];
    // }
    // domaci
//     if (clickPoints.length >= 5) {

//         context.beginPath()
//         context.moveTo(clickPoints[0].x, clickPoints[0].y)

        // beginPath i moveTo
        //  -> petlja koja radi lineTo: preskoci broj 0
        // stroke isto ostaje

//         for (let i in clickPoints) {
//             // console.log(i)
//             if (i == 0) {
//                 continue
//             }
//             // console.log(i)
//             context.lineTo(clickPoints[i].x, clickPoints[i].y)
//         }


//         context.lineTo(clickPoints[1].x, clickPoints[1].y)
//         context.lineTo(clickPoints[2].x, clickPoints[2].y)
//         context.lineTo(clickPoints[3].x, clickPoints[3].y)
//         context.lineTo(clickPoints[4].x, clickPoints[4].y)
        // context.lineTo(clickPoints[5].x, clickPoints[5].y)
        // context.lineTo(clickPoints[6].x, clickPoints[6].y)
        // context.lineTo(clickPoints[7].x, clickPoints[7].y)
        // context.lineTo(clickPoints[8].x, clickPoints[8].y)
        // context.lineTo(clickPoints[9].x, clickPoints[9].y)
    //     context.stroke()

    //     clickPoints = [];
    // }

    // ako je klik clickPoints prazan
    // ako clickPoints ima jedan upis znamo da je drugi click
    // ako clickPoints ima vec 2 upisa onda je to treci klik(vreme da ga ispraznimo!)

// })

// domaco
// drawButton.addEventListener("click", function() {
//     console.log("clicked")

//     if (clickPoints.length >= 5) {

//         context.beginPath()
//         context.moveTo(clickPoints[0].x, clickPoints[0].y)

        // beginPath i moveTo
        //  -> petlja koja radi lineTo: preskoci broj 0
        // stroke isto ostaje

//         for (let i in clickPoints) {
//             console.log(i)
//             if (i == 0) {
//                 continue
//             } 
//             context.lineTo(clickPoints[i].x, clickPoints[i].y)
//         }

//         context.lineTo(clickPoints[1].x, clickPoints[1].y)
//         context.lineTo(clickPoints[2].x, clickPoints[2].y)
//         context.lineTo(clickPoints[3].x, clickPoints[3].y)
//         context.lineTo(clickPoints[4].x, clickPoints[4].y)

//         context.stroke()

//         clickPoints = []
//     }

// })

// resetButton.addEventListener("click", function() {
    
//     context.clearReact(0, 0, canvasElement.width, canvasElement.height)
    
// })



// let clickButton = document.getElementById("clickMe")

// let clickButton2 = document.getElementById("clickMe2")


// clickButton.addEventListener("click", clickEvent)

// clickButton2.addEventListener("click", clickEvent)

// function clickEvent() {
//     console.log("Test click event")
// }
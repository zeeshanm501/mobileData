let mobile = {
    iphone: {
        v14pro: {
            ram: 64,
            rom: 512,
            price: 300000,
        },
        v13: {
            ram: 32,
            rom: 256,
            price: 200000,
        },
        v13pro: {
            ram: 16,
            rom: 128,
            price: 250000,
        },
        v12: {
            ram: 8,
            rom: 64,
            price: 190000,
        }
    },
    samsung: {
        a30: {
            ram: 32,
            rom: 128,
            price: 300000,
        },
        a31: {
            ram: 16,
            rom: 128,
            price: 200000,
        },
        a32: {
            ram: 8,
            rom: 64,
            price: 250000,
        },
        s21: {
            ram: 8,
            rom: 16,
            price: 190000,
        }
    },
    Oppo: {
        F3: {
            ram: 32,
            rom: 512,
            price: 300000,
        },
        F4: {
            ram: 16,
            rom: 128,
            price: 200000,
        },
        F11: {
            ram: 32,
            rom: 256,
            price: 250000,
        },
        F13s: {
            ram: 8,
            rom: 64,
            price: 190000,
        }
    }
}


let values = Object.values(mobile);

let dropVal = document.getElementById("dropVal");
let dropKey = document.getElementById("dropValKey")

function rendMobile() {
    let mainKeys = Object.keys(mobile);
    dropVal.innerHTML = "";
    for (let i = 0; i < mainKeys.length; i++) {
        dropVal.innerHTML += `
        <option>${mainKeys[i]}</option>
        `;
    }
}
rendMobile();

function Fillmodels() {
    dropKey.disabled = false;
    dropKey.innerHTML = "";
    let nastedkeys = Object.keys(mobile[dropVal.value])
    for (let i = 0; i < nastedkeys.length; i++) {
        dropKey.innerHTML += `<option>${nastedkeys[i]}</option>`
    }
}

let printData = document.getElementById('userShow')

function getVal() {
    printData.innerHTML = "";
    let res = ((mobile[dropVal.value][dropKey.value]));
    let value1 = Object.keys(res);
    let value2 = Object.values(res);
    for (let i = 0; i < value1.length; i++) {
        printData.innerHTML += `
        <p class="my-3">${value1[i]}: ${value2[i]}</p>      `
    }
}

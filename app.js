// query selectors

let myCheckbox = document.querySelector(".switch input"),

duration = document.querySelector(".month"),
price = document.querySelector(".price .pricefix"),
switcher = document.querySelector(".switch"),
range = document.querySelector(".myrange");
let pageViews = document.querySelector(".tariff span");

// create price onswitch 

switcher.onclick = function() {
    if(myCheckbox.checked == true) {
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
         duration.textContent = '/year';
    }

    else {
        updatePrice()

        duration.textContent = '/month';
    }
}



// update price 

function updatePrice() {
    console.log(range.value)
    if(range.value == 1) {
        if(myCheckbox.checked == true) {
            price.textContent = 108
        }
        else {
            price.textContent = 8;
            pageViews.textContent = "10k";
            
        }
    }
        
    if(range.value == 2) {
        if(myCheckbox.checked == true) {
            price.textContent = 122
        }

        else {
            price.textContent = 12;
            pageViews.textContent = "50K";
            
        }
    }

    if(range.value == 3) {
        if(myCheckbox.checked == true) {
            price.textContent = 144
        }
        else {
            price.textContent = 16;
        }
        pageViews.textContent = "100K";
    }
    if(range.value == 4) {
        if(myCheckbox.checked == true) {
            price.textContent = 216
        }
        else {
            price.textContent = 24;
        }
        pageViews.textContent = "500K";
    }

    if(range.value == 5) {
        if(myCheckbox.checked == true) {
            price.textContent = 324
        }
        else {
            price.textContent = 36;
        }
        pageViews.textContent = "1M";
    }

    
}

// add selector to page-view



// add event listener to input 

range.addEventListener("input", updatePrice)
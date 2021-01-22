// https://github.com/udaymondal/Assignment3

// Problem 1:

function kilometerToMeter(kilometer)
{
    if(kilometer >= 0){
        var meter = kilometer * 1000 ;
        return meter;
    }
    else{
        return ("Invalid kilometer");
    }
}

//console.log(kilometerToMeter(-595));

// Problem 2:

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop)
{
    if(numberOfWatch >=0 && numberOfMobile>= 0 && numberOfLaptop>= 0)
    {
        var watchPrice = 50 * numberOfWatch;
        var mobilePrice = 100 * numberOfMobile;
        var laptopPrice = 500 * numberOfLaptop;
        var totalCost = watchPrice + mobilePrice + laptopPrice;
        return totalCost;
    }
    else{
        return ("Enter valid numbers");
    }  
}

//console.log(budgetCalculator(10, 5, 3));

// Problem 3:
function hotelCost(numberOfDays){
    if(numberOfDays>=1 && numberOfDays<=10){
        return numberOfDays * 100;
    }
    else if(numberOfDays>=11 && numberOfDays<=20){
        return ((numberOfDays-10)*80)+1000;
    }
    else if(numberOfDays>=21){
        return ((numberOfDays-20)*50) + 1000 + 800;
    }
    else{
        return ("Enter valid number of days");
    }

}

//console.log(hotelCost(43));

// Problem 4:

function megaFriend(friendNames){

    var longName = "";
    for (var i = 0; i < friendNames.length; i++) {
        if (longName.length < friendNames[i].length) {
        longName = friendNames[i];
        }
    }
    return longName;
}

//console.log(megaFriend(['Ashraf', 'Muktadir Hossian', 'Rafiul']));
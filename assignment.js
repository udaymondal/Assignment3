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




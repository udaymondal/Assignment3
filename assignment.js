// https://github.com/udaymondal/Assignment3

// Problem 1:

function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        var meter = kilometer * 1000 ;
        return meter;
    }
    else{
        return ("Invalid kilometer");
    }
}

console.log(kilometerToMeter(-595));
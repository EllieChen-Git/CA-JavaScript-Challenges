//20191213-Mo-Ch-12-Days-of-Christmas
//Challenge: Write a program to output the lyrics of "The Twelve Days of Christmas"

let daysTillXmas = ["first", "second", "third", "fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"]

let xmasGifts = [
    "A partridge in a pear tree",
    "Two turtle doves",
    "Three French hens",
    "Four calling birds",
    "Five gold rings",
    "Six geese a laying",
    "Seven swans a swimming",
    "Eight maids a milking",
    "Nine drummers drumming",
    "Ten pipers piping",
    "Eleven ladies dancing",
    "Twelve Lords a leaping"
]

function song(){
    for(let i = 0; i < daysTillXmas.length; i++){
        console.log(`On the ${daysTillXmas[i]} day of Christmas my true love sent to me,`)
        if(i === 0) {
            console.log( `${xmasGifts[i]}.\n`);
        } else {
            giftForDays(i);
        }
    }
}

function giftForDays(gift){
    if(gift === 0){
        console.log(`And ${xmasGifts[gift].toLowerCase()}.\n`);
    }else{
        console.log (`${xmasGifts[gift]},`);
        giftForDays(gift - 1);
    }
}

song();

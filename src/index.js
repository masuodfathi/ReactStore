const { indexOf, slice } = require("lodash");
import { Map } from "immutable";
import { produce } from "immer";

let book = {title:'Harry Potter'};

function Publish(book){
    return produce(book,draftBook =>{
        draftBook.isPublished = true;
    })
}

let updatedBook = Publish(book);
console.log(book);
console.log(updatedBook);

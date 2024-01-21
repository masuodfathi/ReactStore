const { indexOf, slice } = require("lodash");
import { Map } from "immutable";

let book = Map({title:'Harry Potter'});

function Publish(book){
    return book.set("isPublished",true);
}

book = Publish(book);
console.log(book.toJS());
console.log(book.get("title"));

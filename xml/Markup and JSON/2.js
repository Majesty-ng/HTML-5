let bookDetails = `<userDetails>
    <book>
        <title>eat that frog</title>
        <price>$3.00</price>
        <author>1998</author>
    </book>
    <book>
        <title>chike is boy</title>
        <price>$30.00</price>
        <author>2001</author>
    </book>
</userDetails>`

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(bookDetails, "text/xml")

console.log(xmlDoc);
//node properties
//nodename // element name
//node value// value inside the node
//node type// type of node 1 (element) 2() 3 (attribute)

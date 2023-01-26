//xml parser

let text, parser,xmlDoc

text = `

<bookstore>
    <book>
        <title> movements of the idiots for chelsea things</title>
        <author>dan brown</author>
        <year>2005</year>
    </book>
    <book>
        <title>Chelsea things are stupid</title>
        <author>dan brown</author>
        <year>2018</year>
    </book>
</bookstore>`

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");
//console.log(xmlDoc.querySelector("title"))
//console.log(xmlDoc.querySelector("bookstore"))
//console.log(xmlDoc)
//accessing xml documents
//getbytagname
//loop through nodes
//node relationship

//by tag name
let title = xmlDoc.getElementsByTagName("title");
//okay
console.log(title);
document.querySelector("h1").innerHTML = title[1].innerHTML
// console.log(title[1])

//loop through elements
for(let i = 0; i < title.length; i++){
    console.log(title[i].innerHTML);
    console.log(xmlDoc.firstChild)
    console.log(xmlDoc.firstChild.parentNode)
}
function customRender(reactElement,Container){
/*
const element = document.createElement(reactElement.type)
element.href = reactElement.props.href
element.innerHTML = ` ${reactElement.children}`
Container.appendChild(element) ;
*/

const element = document.createElement(reactElement.type)
element.innerHTML = ` ${reactElement.children}`
for(prop in reactElement.props) {
if(prop === 'children') continue;
element.setAttribute(prop,reactElement.props[prop])

}

Container.appendChild(element)


}



const reactElement = {
type : 'a',
props : {
href : 'https://google.com',
target : '_blank'
},
children : 'Click me to visit google '
}

const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)





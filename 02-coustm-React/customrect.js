function coustomRender(ReactElement, container){
const domElement = document.createElement(ReactElement.type)
domElement.innerHTML = ReactElement.Children
domElement.setAttribute("href", ReactElement.props.href)
 domElement.setAttribute("target", ReactElement.props.target)
container.appendChild(domElement)

}
const ReactElement = {
    type : "a",
    props :{
        href : "https://www.google.com",
        target :  "_blank",
    },
    Children : "click me to visit google"
}

const maincontainer = document.querySelector("#root")

coustomRender(ReactElement, maincontainer)
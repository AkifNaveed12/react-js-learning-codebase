const mainContainer = document.querySelector(`#root`)

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    child : 'click me to visit google.com'
}

//crating am elemn to render the react element in the root div
function customRender(reactElement, mainContainer){
    //creating an element (currently empty)
    const domElement = document.createElement(reactElement.type)

    //adding inner html in domElement
    domElement.innerHTML = reactElement.child

    //setting attributes
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    //adding the domelement in the root div
    mainContainer.appendChild(domElement)
}

//calling function
customRender(reactElement, mainContainer)
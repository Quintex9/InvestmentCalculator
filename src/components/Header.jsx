import image from "../assets/investment-calculator-logo.png"


export default function Header(){
    return (
        <header id="header">
            <img src={image} alt="obrazok"></img>
            <h1>React investment calculator</h1>
        </header>
    )
}
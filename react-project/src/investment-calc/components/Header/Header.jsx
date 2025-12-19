import potOfGold from '../../../assets/pot-of-gold.png'

export default function Header() {
    return (
     <>
        <div id="header">
            <header>
                <img src={potOfGold} alt="Pot of gold image"></img>
                <h1>Investment Calculator</h1>
            </header>
        </div>
          
        </>
    );
}
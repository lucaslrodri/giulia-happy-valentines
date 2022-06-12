import Heart from "../components/Heart"
import Equation from "../components/Equation"

export default function HeartPage(){
    return (
        <main className="main">
            <Equation/>
            <Heart size={2}/>
        </main>
    )
}
import CurrencyRow from "./CurrencyRow";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

function CurrencyRowContainer() {
    
    return(
        <>
            <CurrencyRow/>
            <HiMiniArrowsRightLeft />
            <CurrencyRow/>
        </>
    )
}


export default CurrencyRowContainer
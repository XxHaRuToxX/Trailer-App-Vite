import React, { Fragment, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';

import { useToggle } from '../../contexts/ToggleContext';

import './prices.css';

export const Prices = () => {

    const [toggleBasic, setToggleBasic] = useState(true);
    const [toggleStandard, setToggleStandard] = useState(true)
    const [togglePremium, setTogglePremium] = useState(true);

    const [basicCost, setBasicCost] = useState("7.99");
    const [standardCost, setStandardCost] = useState("12.99");
    const [premiumCost, setPremiumCost] = useState("18.99");

    const { toggle } = useToggle();

    return (
        <Fragment>
            <div className={toggle ? "background-Color-Main" : "background-Color-secondary"}>
                <div className="Pricing-container">
                    <div className={toggle ? "Pricing-option1" : "light-Theme1"}>
                        <h2>Básico</h2>
                        <div className="Price">
                            <h3>S/. {basicCost}</h3>
                            <h4 id="MonthlyYearly">{toggleBasic ? "/Mensual" : "/Anual"}</h4>
                        </div>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Ilimintadas películas y programas de Tvs.</span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Mira en dispositivosde celulares y tablets. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Cancelar en cualquir momento. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Primer mes completamente gratis. </span>
                        <button id="button1">Comprar ahora</button>
                        <div id="darktheme">
                            <div 
                                className="Pricing-yearly-darktheme"
                                onClick={()=>{
                                    setToggleBasic(!toggleBasic);
                                    if(toggleBasic){
                                        setBasicCost("60");
                                    }else{
                                        setBasicCost("7.99");
                                    }
                                }}
                            >
                                <div className={toggleBasic ? "Pricing-monthly-darktheme" : "Pricing-monthly-light"} ></div>
                            </div>
                        </div>
                    </div>
                    <div className={toggle ? "Pricing-option2" : "light-Theme2"}>
                        <h2>Estándar</h2>
                        <div className="Price">
                            <h3>S/. {standardCost}</h3>
                            <h4 id="MonthlyYearly">{toggleStandard ? "/Mensual" : "/Anual"}</h4>
                        </div>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Ilimintadas películas y programas de Tvs.</span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Mira en dispositivosde celulares y tablets. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Cancelar en cualquir momento. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Primer mes completamente gratis. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />HD disponible. </span>
                        <button id="button2">Comprar ahora</button>
                        <div id="darktheme">
                            <div 
                                className="Pricing-yearly-darktheme"
                                onClick={()=>{
                                    setToggleStandard(!toggleStandard);
                                    if(toggleStandard){
                                        setStandardCost("120");
                                    }else{
                                        setStandardCost("12.99");
                                    }
                                }}
                            >
                                <div className={toggleStandard ? "Pricing-monthly-darktheme" : "Pricing-monthly-light"} ></div>
                            </div>
                        </div>
                    </div>
                    <div className={toggle ? "Pricing-option3" : "light-Theme3"}>
                        <h2>Premium</h2>
                        <div className="Price">
                            <h3>S/. {premiumCost}</h3>
                            <h4 id="MonthlyYearly">{togglePremium ? "/Mensual" : "/Anual"}</h4>
                        </div>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Ilimintadas películas y programas de Tvs.</span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Mira en dispositivosde celulares y tablets. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Cancelar en cualquir momento. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Primer mes completamente gratis. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />HD disponible. </span>
                        <span><FcCheckmark id="checkmark" fontSize={25} />Ultra HD. </span>
                        <button id="button3">Comprar ahora</button>
                        <div id="darktheme">
                            <div 
                                className="Pricing-yearly-darktheme"
                                onClick={()=>{
                                    setTogglePremium(!togglePremium);
                                    if(togglePremium){
                                        setPremiumCost("180");
                                    }else{
                                        setPremiumCost("18.99");
                                    }
                                }}
                            >
                                <div className={togglePremium ? "Pricing-monthly-darktheme" : "Pricing-monthly-light"} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

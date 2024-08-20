import {useEffect, useState} from "react";

function Selector(){
    const [selectedCar,setSelectedCar] = useState("0")
    const [valueSelectedCar,setValueSelectedCar] = useState("")
    const [selectedColor,setSelectedColor] = useState("0")
    const [valueSelectedColor,setValueSelectedColor] = useState("")
    const choiceCar = e => {
        setSelectedCar(e.target.value)
    };
    const choiceColor = e => {
        setSelectedColor(e.target.value)
    };

    useEffect(() => {
        switch (selectedCar){
            case "0":
                setValueSelectedCar("Mercedes");
                break;
            case "1":
                setValueSelectedCar("BMW");
                break;
            case "2":
                setValueSelectedCar("Porsche");
                break;
            case "3":
                setValueSelectedCar("Lamborghini");
                break;
        }
    }, [selectedCar]);
    useEffect(() => {
        switch (selectedColor){
            case "0":
                setValueSelectedColor("black");
                break;
            case "1":
                setValueSelectedColor("white");
                break;
            case "2":
                setValueSelectedColor("red");
                break;
            case "3":
                setValueSelectedColor("green");
                break;
        }
    }, [selectedColor]);

    return (
        <div>
            <h1>Select your car</h1>
            <p>
                Select a car :
                <select
                    onChange={e => {
                        choiceCar(e);
                    }}
                >
                    <option value="0">Mercedes</option>
                    <option value="1">BMW</option>
                    <option value="2">Porsche</option>
                    <option value="3">Lamborghini</option>
                </select>
            </p>
            <p>
                Select a color :
                <select
                    onChange={e => {
                        choiceColor(e);
                    }}
                >
                    <option value="0">black</option>
                    <option value="1">white</option>
                    <option value="2">red</option>
                    <option value="3">green</option>
                </select>
            </p>
            <h3>Your selected a {valueSelectedColor}-{valueSelectedCar}</h3>
        </div>
    );
}

export default Selector;
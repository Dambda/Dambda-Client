import React from "react";
import CharacterBox from "./CharacterBox";
import Container from "../../styles/components/charactercomponents";

const CharacterComponents = () => {
    return (
        <Container>
            <h1>특별했던 감정 Day</h1>
            <div>
                <CharacterBox state={0} date={"4월 12일"}/>
                <CharacterBox state={1} date={"4월 12일"}/>
            </div>
            <div>
                <CharacterBox state={2} date={"4월 12일"}/>
                <CharacterBox state={3} date={"4월 12일"}/>
            </div>
        </Container>
    );
}

export default CharacterComponents;
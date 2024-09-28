function calculateRhombusArea(){
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');

    const area = 0.5 * diagonal1 * diagonal2;
    setInnerText ('rhombus-area', area);
}
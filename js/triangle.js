// console.log('Hello');
function calculateTriangleArea(){
   const baseInput = document.getElementById('triangle-base');
   const baseText = baseInput.value;
   const base = parseFloat (baseText);

   const heightInput = document.getElementById('triangle-height');
   const heightText = heightInput.value;
   const height = parseFloat (heightText);

   //calculated
   const area = 0.5 * base * height;

  const final = document.getElementById('triangle-area');
  final.innerText = area;
  
}


//rectangle
function calculateRectangleArea(){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    //calculated2
    const area = width * length;

    const final = document.getElementById('rectangle-area');
    final.innerText = area;

    
}
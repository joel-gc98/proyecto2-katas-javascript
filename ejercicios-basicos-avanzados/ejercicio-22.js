const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Arroz", isVegan: true },
  { name: "Poll", isVegan: false },
  { name: "Pavo", isVegan: false },
  { name: "Pescado", isVegan: false},
  { name: "Croquetas", isVegan: false },
];

const arrayNuevo = []

let contador = 0

for(const fruta of foodSchedule){
    if(fruta.isVegan){
        arrayNuevo.push(fruta)
    } else {
        contador ++
        if (contador >= fruits.length){
            console.log("No hay mas frutas")
        } else {
            arrayNuevo.push({name: fruits[contador], isVegan: true})
        }        
    }
}

console.log(arrayNuevo);

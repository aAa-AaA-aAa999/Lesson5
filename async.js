//Задание 1
console.log("\x1b[31mКрасный\x1b[0m")
const sleep = (ms) => new Promise (resolve => setTimeout(resolve, ms))


//Задания 2, 3
const cookDinner = async () => {
    try{
        const isGasOn = true
        if(isGasOn == false) throw new Error("Газ выключен!")
        console.log("🔥 Включаю плиту ...")
        await sleep(1000)

        console.log("🔪 Режу овощи ...")
        await sleep(2000)
   
        console.log("🍜 Варю суп ...")
        await sleep(3000)

        console.log("✅ Ужин готов ✅")
    }
    catch(err){
        console.log("\x1b[31m❗️ Ошибка\x1b[0m:", err.message, "❗️")
    }
}
cookDinner()



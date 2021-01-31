function inicia() {
    let btn = document.getElementById("botao")

    btn.addEventListener("click", function () {

        let n = document.getElementById("name").value
        let i = document.getElementById("age").value
        let c = document.getElementById("city").value

        if (document.getElementById("name").value == "" || document.getElementById("age").value == "" || document.getElementById("city").value == "") {
            alert("Campo em branco")
        }
        else {
            let t = document.getElementById("tabela")
            let totalLinhas = t.rows.length
            let addLinhas = t.insertRow(totalLinhas)

            let celula1 = addLinhas.insertCell(0)
            let celula2 = addLinhas.insertCell(1)
            let celula3 = addLinhas.insertCell(2)

            celula1.innerHTML = n
            celula2.innerHTML = i
            celula3.innerHTML = c

            document.getElementById("name").value = ""
            document.getElementById("age").value = ""
            document.getElementById("city").value = ""
        }
    })
}
window.addEventListener("load", inicia);
const lista = document.getElementById("Lista")

const alunos = ["Afonso", "Maria", "Rafaela"]

for(const aluno of alunos){
    const p = document.createElement("p")
    p.textcontent = aluno
    lista.appendChild(p)
}
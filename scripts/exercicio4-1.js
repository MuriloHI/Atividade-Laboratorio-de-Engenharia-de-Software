document.getElementById("selecionarProfessor").addEventListener("change", atualizarForms);
document.getElementById("selecionarAluno").addEventListener("change", atualizarForms);

document.getElementById("btnRedefinir").addEventListener("click", resetarFormulario);

function atualizarForms()
{
    let prof_area_Section = document.getElementById("profAreas");
    let prof_lattesSection = document.getElementById("profLattes");
    let aluno_curso_Section = document.getElementById("aluCurso");
    
    prof_area_Section.innerHTML = "";
    prof_lattesSection.innerHTML = "";
    aluno_curso_Section.innerHTML = "";

    if (document.getElementById("selecionarProfessor").checked) {
        //Forms 1 do professor: ÁREA
        let labelProfessor = document.createElement("label");
        let texto_labelProfessor = document.createTextNode("Área: ");
        labelProfessor.appendChild(texto_labelProfessor)

        prof_area_Section.appendChild(labelProfessor);

        let inputProfessor = document.createElement("input");
        inputProfessor.type = "text";
        inputProfessor.placeholder = "Digite sua área de atuação";

        prof_area_Section.appendChild(inputProfessor)


        //Forms 2 do professor: LATTES
        let labelProfessor2 = document.createElement("label");
        let texto_labelProfessor2 = document.createTextNode("Lattes: ");
        labelProfessor2.appendChild(texto_labelProfessor2);

        prof_lattesSection.appendChild(labelProfessor2);

        let inputProfessor2 = document.createElement("input");
        inputProfessor2.type = "text";
        inputProfessor2.placeholder = "Digite aqui o endereço para o seu Lattes";

        prof_lattesSection.appendChild(inputProfessor2);
    }

    if (document.getElementById("selecionarAluno").checked) {
        //Forms 1 do aluno: CURSO
        let labelAluno = document.createElement("label");
        let texto_labelAluno = document.createTextNode("Curso: ");
        labelAluno.appendChild(texto_labelAluno);

        aluno_curso_Section.appendChild(labelAluno);

        let inputAluno = document.createElement("input");
        inputAluno.type = "text";
        inputAluno.placeholder = "Digite seu curso";

        aluno_curso_Section.appendChild(inputAluno)
    }
}

function resetarFormulario() {
    let inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='date']");
    inputs.forEach(input => input.value = "");

    let radios = document.querySelectorAll("input[type='radio']");
    radios.forEach(radio => radio.checked = false);

    document.getElementById("profAreas").innerHTML = "";
    document.getElementById("profLattes").innerHTML = "";
    document.getElementById("aluCurso").innerHTML = "";
}
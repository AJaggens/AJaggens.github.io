function readInput() {
    var input = document.getElementById("inputArea").value;
    document.getElementById("inputCheck").innerHTML = input;
}
        
let outputContainer = document.querySelector('.inp-out')
let outputPara = document.createElement('p')
outputPara.classList.add('output');


function formReport() {
    let text = document.getElementById("inputArea").value;

    text = text.replace(/\n/g, ' ');
    text = text.replace(/ прошу/g, '');
    text = text.replace(/удалить/g, 'удалил');
    text = text.replace(/создать/g, 'создал');
    text = text.replace(/добавить/g, 'добавил');
    text = text.replace(/отправить/g, 'отправил');
    text = text.replace(/установить/g, 'установил');
    text = text.replace(/подменить/g, 'подменил');
    text = text.replace(/Анна Аксенова/g, '\nАнна Аксенова');
    text = text.replace(/Анна Аксенова, \[/g, '');
    text = text.replace(/MCC=/g, '');
    text = text.replace(/MNC=/g, '');
    text = text.replace(/\]/g, '');
    text = text.replace(/\d\d-\w\w\w-2\d /g, "<br>");

    outputPara.innerHTML = text;
    outputContainer.appendChild(outputPara)

}

function trimRouteChange() {
    let text = document.getElementById("inputArea").value;

    text = text.replace(/edited routing rule /g, 'отредактировал правило #');
    text = text.replace(/created new routing rule /g, 'создал правило ');
    text = text.replace(/created new partners pool /g, 'создал новый пул ');
    
    text = text.replace(/for client/g, 'клиенту');
    text = text.replace(/network/g, 'сеть');
    text = text.replace(/удалить/g, 'удалил');
    text = text.replace(/\d\d-\w\w\w-2\d /g, "<br>");
    text = text.replace(/EngineAdminBot, \[/g, '');
    text = text.replace(/\]/g, '');
    text = text.replace(/\[/g, '');
    text = text.replace(/changed distribution for partners pool/g, 'изменил распределение в пуле');
    text = text.replace(/Old distribution/g, 'Было');
    text = text.replace(/New distribution/g, '; Стало');
    text = text.replace(/\[/g, '');


    outputPara.innerHTML = text;
    outputContainer.appendChild(outputPara)
}
        
// function formSql() {
//     let text = document.getElementById("inputArea").value;

//     text = text.replace(/MNC/g, 'and MNC');
//     text = text.replace(/(MCC=\d+ and MNC=\d+)/g, '($1) or');
//     text = text.replace(/.*(\(MCC=\d+ and MNC=\d+\) or ).*/g, '$1');
//     text = text.replace(/^.*\s/, 'delete from sms_scheme_traffic where id_client= and \(');
//     text = text.replace(/ or $/, '\)');


//     outputPara.innerHTML = text;
//     outputContainer.appendChild(outputPara)
// }
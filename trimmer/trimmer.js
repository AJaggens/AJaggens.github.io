
const outputContainer = document.querySelector('.out')

function readInput() {
    var input = document.getElementById("inputArea").value;
    document.getElementById("inputCheck").innerHTML = input;
}

function formReport() {
    let rawMsg = document.getElementById("inputArea").value
    let msgs = rawMsg.split('Анна Аксенова, ')
    msgs.shift()
    
    for (const msg of msgs) {
        let text = msg

        text = text.replace(/\n/g, ' ');
        text = text.replace(/прошу/g, '');
        text = text.replace(/Прошу/g, '');
        text = text.replace(/удалить/g, 'удалил');
        text = text.replace(/создать/g, 'создал');
        text = text.replace(/добавить/g, 'добавил');
        text = text.replace(/отправить/g, 'отправил');
        text = text.replace(/установить/g, 'установил');
        text = text.replace(/подменить/g, 'подменил');
        text = text.replace(/внести изменение в частное правило и /g, '');
        text = text.replace(/MCC=/g, '');
        text = text.replace(/MNC=/g, '');
        text = text.replace(/\]/g, '');
        text = text.replace(/\[/g, '');
        text = text.replace(/\d\d-\w\w\w-2\d /g, "");
        

        let outputPara = document.createElement('p')
        outputPara.classList.add('output');
        outputPara.textContent = text;
        outputContainer.appendChild(outputPara)
    }

    const delimiter = document.createElement('p')
    delimiter.textContent = '--------------------------------------------------------------------------------------------'
    delimiter.classList.add('output');
    outputContainer.appendChild(delimiter)
}

function trimRouteChange() {
    let rawMsg = document.getElementById("inputArea").value
    let msgs = rawMsg.split('EngineAdminBot, ')
    msgs.shift()

    for (const msg of msgs) {
        let text = msg

        text = text.replace(/edited routing rule /g, 'отредактировал правило #');
        text = text.replace(/created new routing rule /g, 'создал правило ');
        text = text.replace(/created new partners pool /g, 'создал новый пул ');
        
        text = text.replace(/for client/g, 'клиенту');
        text = text.replace(/network/g, 'сеть');
        text = text.replace(/\]/g, '');
        text = text.replace(/\[/g, '');
        text = text.replace(/changed distribution for partners pool/g, 'изменил распределение в пуле');
        text = text.replace(/Old distribution/g, 'Было');
        text = text.replace(/New distribution/g, '; Стало');
        text = text.replace(/\d\d-\w\w\w-2\d /g, "");

        let outputPara = document.createElement('p')
        outputPara.classList.add('output');
        outputPara.textContent = text;
        outputContainer.appendChild(outputPara)
        }
    
    const delimiter = document.createElement('p')
    delimiter.textContent = '--------------------------------------------------------------------------------------------'
    delimiter.classList.add('output');
    outputContainer.appendChild(delimiter)
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
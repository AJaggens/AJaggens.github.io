document.getElementById('test_senders').value = 'SMS';
document.getElementById('test_message').value = 'Ваш код доступа: {code}';
document.getElementById('selected_networks').value = "25001_25001";
document.getElementById('partners_pools').value = "615";

application/x-www-form-urlencoded

function selectOption(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
function generateReport() {
    const report = document.querySelector('#output');
    const result = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    rows.forEach(row => {
        const current = {};
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if(checks[i].checked){
                current[checks[i].name] = x.textContent
            }
        })
        result.push(current);
    })

    report.value = JSON.stringify(result);
    //debugger;
}
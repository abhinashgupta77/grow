const tbody = document.getElementById('tbody');

let stateData = [];

fetchCovidData();

async function fetchCovidData(){

    const response = await fetch('https://api.covid19india.org/v4/min/data.min.json');
    const data = await response.json();
    stateData = data;  
    // console.log(stateData); 
    loadDistrictWise();
    
    // console.log(stateData)
    Object.entries(data).forEach(ele => {
        // console.log(ele[1].districts);

        let tr  = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdConfirmed = document.createElement('td');
        let tdRecovered = document.createElement('td');
        let tdDeceased = document.createElement('td');
        let tdActive = document.createElement('td');

        const stateName = ele[0];
        const confirmedData = ele[1].total.confirmed;
        const deceasedData = ele[1].total.deceased;
        const recoveredData = ele[1].total.recovered;
        const testedData = ele[1].total.tested;

        tdName.textContent = stateName;
        tdConfirmed.textContent = confirmedData;
        tdActive.textContent = testedData;
        tdRecovered.textContent = recoveredData;
        tdDeceased.textContent = deceasedData;
        tr.appendChild(tdName);
        tr.appendChild(tdConfirmed);
        tr.appendChild(tdActive);
        tr.appendChild(tdRecovered);
        tr.appendChild(tdDeceased);
        tbody.appendChild(tr);

      });
}
function loadDistrictWise(){
    console.log(stateData)
    Object.entries(stateData).forEach(ele => {
        console.log(ele[1].districts);



        // let tr  = document.createElement('tr');
        // let tdName = document.createElement('td');
        // let tdConfirmed = document.createElement('td');
        // let tdRecovered = document.createElement('td');
        // let tdDeceased = document.createElement('td');
        // let tdActive = document.createElement('td');

        // const stateName = ele[0];
        // const confirmedData = ele[1].total.confirmed;
        // const deceasedData = ele[1].total.deceased;
        // const recoveredData = ele[1].total.recovered;
        // const testedData = ele[1].total.tested;

        // tdName.textContent = stateName;
        // tdConfirmed.textContent = confirmedData;
        // tdActive.textContent = testedData;
        // tdRecovered.textContent = recoveredData;
        // tdDeceased.textContent = deceasedData;
        // tr.appendChild(tdName);
        // tr.appendChild(tdConfirmed);
        // tr.appendChild(tdActive);
        // tr.appendChild(tdRecovered);
        // tr.appendChild(tdDeceased);
        // tbody.appendChild(tr);

      });
}
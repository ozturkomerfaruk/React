fetch('http://localhost:3000/students/', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})
    .then(async (response) => {
        const res = await response.json()
        res.map((e) => {
            const custom_nav = document.querySelector('c-sayfalama');
            const navigation = custom_nav.querySelector(".elements")
            const tableRow = document.createElement('c-tablo')
            tableRow.setAttribute("tid", e.id)
            tableRow.setAttribute("fname", e.fname)
            tableRow.setAttribute("lname", e.lname)
            tableRow.setAttribute("num", e.num)
            tableRow.setAttribute("dept", e.dept)
            tableRow.setAttribute("pob", e.pob)
            tableRow.setAttribute("dob", e.dob)
            navigation.appendChild(tableRow)
        })
        navigationLoaded(10)
    })

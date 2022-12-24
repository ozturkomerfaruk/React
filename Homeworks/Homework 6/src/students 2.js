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
            const customRow = document.createElement('c-tablo')
            customRow.setAttribute("tid", e.id)
            customRow.setAttribute("fname", e.fname)
            customRow.setAttribute("lname", e.lname)
            customRow.setAttribute("num", e.num)
            customRow.setAttribute("dept", e.dept)
            customRow.setAttribute("pob", e.pob)
            customRow.setAttribute("dob", e.dob)
            navigation.appendChild(customRow)
        })
        navigationLoaded(10)
    })

class CustomRow extends HTMLElement {
    connectedCallback() {
        const depts = {
            "1": "Bilgisayar Müh.",
            "2": "Elektrik-Elektronik Müh.",
            "3": "Endüstri Müh.",
            "4": "İnşaat Müh.",
        };
        this.tid = this.getAttribute('tid')
        this.firstname = this.getAttribute('fname')
        this.lastname = this.getAttribute('lname')
        this.number = this.getAttribute('num')
        this.departmant = this.getAttribute('dept')
        this.placecofbirth = this.getAttribute('pob')
        this.dateofbirth = this.getAttribute('dob')

        this.innerHTML = `
            <div class="col">${this.firstname} ${this.lastname}</div>
            <div class="col number">${this.number}</div>
            <div class="col dept">${depts[this.departmant]}</div>
            <div class="col">
                <div class="row">
                    <button type="button" data-toggle="modal" data-target="#veriSil-${this.tid}" class="col my-2 mx-2 btn btn-danger">Sil</button>
                    <button type="button" data-toggle="modal" data-target="#studentUpdate-${this.tid}" class="col my-2 btn btn-primary">Düzenle</button>
                    <button type="button" data-toggle="modal" data-target="#studentDetail-${this.tid}" class="col my-2 mx-2 btn btn-success">Detay</button>
                </div>
            </div>
            <delete-student tid=${this.tid}></delete-student>
            <add-update-student tid=${this.tid}></add-update-student>
            <add-update-student tid=${this.tid} detail></add-update-student>`
        this.className = "row"
    }
}

customElements.define("c-tablo", CustomRow)

var bigMedia = window.matchMedia("(max-width: 992px)")
bigMedia.addEventListener("change", () => {
    const dept = document.querySelectorAll(".table .dept")
    dept.forEach(e => {
        e.style.display = !bigMedia.matches ? "flex" : "none"
    });
})

var smallMedia = window.matchMedia("(max-width: 768px)")
smallMedia.addEventListener("change", () => {
    const number = document.querySelectorAll(".table .number")
    number.forEach(e => {
        e.style.display = !smallMedia.matches ? "flex" : "none"
    });
})

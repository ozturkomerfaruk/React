export default function addUpdateButtonAction(base, tid = -1) {
    console.log(tid)
    const dogumYeriFormu = base.querySelector('#dogumYeriFormu')
    const dogumYeri = base.querySelector('#dogumYeri');
    const dogumTarihiFormu = base.querySelector('#dogumTarihiFormu')
    const dogumTarihi = base.querySelector('#dogumTarihi');
    const isimFormu = base.querySelector('#isimFormu')
    const isim = base.querySelector('#isim');
    const ogrNoFormu = base.querySelector('#ogrNoFormu')
    const ogrNo = base.querySelector('#ogrNo');
    const depFormu = base.querySelector('#depFormu')
    const dep = base.querySelector('#dep');
    const soyadFormu = base.querySelector('#soyadFormu')
    const soyad = base.querySelector('#soyad');

    const dogumYeriKosullari = dogumYeri.value.length >= 3
    const dogumTarihiKosullari = dogumTarihi.value.length >= 3
    const isimKosullari = isim.value.length >= 3
    const soyadKosullari = soyad.value.length >= 3
    const ogrNoKosullari = ogrNo.value.length === 12
    const depKosullari = dep.value !== "Bölüm Seçiniz"

    ogrNoFormu.querySelector(".valid").style.display = ogrNoKosullari ? "block" : "none"
    ogrNoFormu.querySelector(".invalid").style.display = !ogrNoKosullari ? "block" : "none"
    isimFormu.querySelector(".valid").style.display = isimKosullari ? "block" : "none"
    isimFormu.querySelector(".invalid").style.display = !isimKosullari ? "block" : "none"
    dogumYeriFormu.querySelector(".valid").style.display = dogumYeriKosullari ? "block" : "none"
    dogumYeriFormu.querySelector(".invalid").style.display = !dogumYeriKosullari ? "block" : "none"
    soyadFormu.querySelector(".valid").style.display = soyadKosullari ? "block" : "none"
    soyadFormu.querySelector(".invalid").style.display = !soyadKosullari ? "block" : "none"
    depFormu.querySelector(".valid").style.display = depKosullari ? "block" : "none"
    depFormu.querySelector(".invalid").style.display = !depKosullari ? "block" : "none"
    dogumTarihiFormu.querySelector(".valid").style.display = dogumTarihiKosullari ? "block" : "none"
    dogumTarihiFormu.querySelector(".invalid").style.display = !dogumTarihiKosullari ? "block" : "none"

    if (dogumYeriKosullari) {
        dogumYeri.classList.add('validForm')
        dogumYeri.classList.remove('invalidForm')
    } else {
        dogumYeri.classList.add('invalidForm')
        dogumYeri.classList.remove('validForm')
    }
    if (isimKosullari) {
        isim.classList.add('validForm')
        isim.classList.remove('invalidForm')
    } else {
        isim.classList.add('invalidForm')
        isim.classList.remove('validForm')
    }
    if (ogrNoKosullari) {
        ogrNo.classList.add('validForm')
        ogrNo.classList.remove('invalidForm')
    } else {
        ogrNo.classList.add('invalidForm')
        ogrNo.classList.remove('validForm')
    }
    if (depKosullari) {
        dep.classList.add('validForm')
        dep.classList.remove('invalidForm')
    } else {
        dep.classList.add('invalidForm')
        dep.classList.remove('validForm')
    }
    if (soyadKosullari) {
        soyad.classList.add('validForm')
        soyad.classList.remove('invalidForm')
    } else {
        soyad.classList.add('invalidForm')
        soyad.classList.remove('validForm')
    }
    if (dogumTarihiKosullari) {
        dogumTarihi.classList.add('validForm')
        dogumTarihi.classList.remove('invalidForm')
    } else {
        dogumTarihi.classList.add('invalidForm')
        dogumTarihi.classList.remove('validForm')
    }

    let sonucKosul;

    if (isimKosullari && ogrNoKosullari && dogumYeriKosullari && dogumTarihiKosullari && soyadKosullari && depKosullari) {
        sonucKosul = true
    } else {
        sonucKosul = false
    }

    console.log(sonucKosul)
    if (sonucKosul) {
        if (tid === -1) {
            console.log('New Student')
            let data = {
                "fname": isim.value,
                "lname": soyad.value,
                "num": ogrNo.value,
                "dept": dep.value,
                "pob": dogumYeri.value,
                "dob": dogumTarihi.value
            }
            fetch('http://localhost:3000/students/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } else {
            let data = {
                "id": tid,
                "fname": isim.value,
                "lname": soyad.value,
                "num": ogrNo.value,
                "dept": dep.value,
                "pob": dogumYeri.value,
                "dob": dogumTarihi.value
            }
            fetch('http://localhost:3000/students/' + tid, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
    }
}
function deleteByID(tid) {
    fetch('http://localhost:3000/students/' + tid, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

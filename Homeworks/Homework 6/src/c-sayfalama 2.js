import React, { Component, useRef } from 'react'

export default CustomNavigation = () => {
    const Ref = useRef(this);
    return (<>
        <div className="elements"></div>
        {Ref.current.innerHTML}
    </>);
}


customElements.define("c-sayfalama", CustomNavigation)

const navigationLoaded = (pageSize = 10, currPage = 1) => {
    const paginationNumbers = document.querySelector("c-sayfalama .paginationNumbers")
    const paginatedList = document.querySelector("c-sayfalama>.elements")
    const listItems = [...paginatedList.children]

    const pageCount = Math.ceil(listItems.length / pageSize)
    paginationNumbers.innerHTML = ``

    const addPageNo = (index) => {
        const pageNumber = document.createElement('div')
        pageNumber.className = "paginationNumber"
        pageNumber.innerHTML = index.toString()
        pageNumber.setAttribute("page-index", index)
        paginationNumbers.appendChild(pageNumber)
    };

    fetchAsync('http://localhost:8000/students', 'GET', null)
        .then(async (response) => {
            const res = await response.json()
            res.map((el) => {
                const c_nav = document.querySelector('custom-navigation');
                const navigation = c_nav.querySelector(".elements")
                const customRow = document.createElement('custom-row')
                customRow.setAttribute("tid", el.id)
                customRow.setAttribute("fname", el.fname)
                customRow.setAttribute("lname", el.lname)
                customRow.setAttribute("num", el.num)
                customRow.setAttribute("dept", el.dept)
                customRow.setAttribute("pob", el.pob)
                customRow.setAttribute("dob", el.dob)
                navigation.appendChild(customRow)
            })
            navigationLoaded(10)
        })

    const getPaginationNumbers = () => {
        for (let i = 1; i <= pageCount; i++) {
            addPageNo(i);
        }
    };

    const handleActivePageNumber = () => {
        document.querySelectorAll(".paginationNumber").forEach((button) => {
            button.classList.remove("active");
            const pageIndex = Number(button.getAttribute("page-index"));
            if (pageIndex == currPage) {
                button.classList.add("active");
            }
        });
    };
    const boldList = document.querySelectorAll(".pageNo>.bold")

    const setCurrentPage = (pageNum) => {
        currPage = pageNum > pageCount ? pageCount : pageNum;

        boldList[0].innerHTML = listItems.length

        let bottom = (currPage - 1) * pageSize + 1
        bottom = listItems.length < bottom ? listItems.length : bottom

        let top = currPage * pageSize
        top = listItems.length < top ? listItems.length : top

        boldList[1].innerHTML = `${bottom}-${top}`
        handleActivePageNumber();

        const prevRange = (currPage - 1) * pageSize;
        const currRange = currPage * pageSize;

        listItems.forEach((item, index) => {
            item.classList.add("hidden");
            if (index >= prevRange && index < currRange) {
                item.classList.remove("hidden");
            }
        });
    };
    getPaginationNumbers();
    setCurrentPage(currPage);

    document.querySelectorAll(".paginationNumber").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });


    const pageCounterChildren = document.querySelectorAll(".pageCounter>*")
    pageCounterChildren.forEach((button) => {
        const count = button.innerHTML;
        if (count === pageSize.toString()) {
            button.classList.add("active")
        } else {
            button.classList.remove("active")
        }
        if (count) {
            button.addEventListener("click", () => {
                navigationLoaded(count, currPage)
            });
        }
    });
}

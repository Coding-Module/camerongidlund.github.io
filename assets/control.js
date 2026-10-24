const section_tabs = document.querySelectorAll('[data-section-target]')
const section_tabContents = document.querySelectorAll('[data-section-content]')

const project_tabs = document.querySelectorAll('[data-project-target]')
const project_tabContents = document.querySelectorAll('[data-project-content]')

section_tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.sectionTarget)
        section_tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        section_tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

project_tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.projectTarget)
        project_tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        project_tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})
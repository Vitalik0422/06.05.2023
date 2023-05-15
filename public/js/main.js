const btnSub = document.querySelector('.btnSub')
const formEl = document.querySelector('.info')

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    console.log(formData);
    push(formData)
})


const push = async (formData) => {
    const data = await axios.post('/data', formData)
}
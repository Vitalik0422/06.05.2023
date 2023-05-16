const btnSub = document.querySelector('.btnSub')
const formEl = document.querySelector('.info')
const mongoBtn = document.querySelector('.testBtn')

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    console.log(formData);
    push(formData)
})

mongoBtn.addEventListener('click', async ()=> {
    const {data} = await axios.post('/mongo')
    console.log(data);
})


const push = async (formData) => {
    const data = await axios.post('/write', formData)
    console.log(data);
}
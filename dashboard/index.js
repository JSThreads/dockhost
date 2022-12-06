async function bloob(e) {
    e.target.classList.add('bloob')
    await new Promise(r => setTimeout(r, 1000));
    e.target.classList.remove('bloob')
}
async function smallBloob(e) {
    e.target.classList.add('smallBloob')
    await new Promise(r => setTimeout(r, 1000));
    e.target.classList.remove('smallBloob')
}

async function bloob(e) {
    e.target.classList.add('bloob')
    await new Promise(r => setTimeout(r, 1000));
    e.target.classList.remove('bloob')
}

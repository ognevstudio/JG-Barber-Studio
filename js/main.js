const template = `
    <a class="inst" href="https://instagram.com/xruizzxx?igshid=NzZlODBkYWE4Ng==">@Josue</a>
    <div class="square"></div>
    <a class="inst" href="https://instagram.com/rr_gab?igshid=NzZlODBkYWE4Ng==">@Gabriel</a>
    <div class="square"></div>
`;

const line = document.querySelector(".poster-line__container");

for (let i = 0; i < 20; i++) {
    const lineBody = document.createElement('div');
    lineBody.classList.add('line__body');
    lineBody.innerHTML = template;
    line.appendChild(lineBody);
}
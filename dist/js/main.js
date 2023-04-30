let cuttent = () => {
    // date
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    let currentDate = document.querySelector("#current-date")
    currentDate.innerHTML = `${y}-${m}-${d}`;

    // time
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh.toString().padStart(2, "0");
    mm = mm.toString().padStart(2, "0");
    ss = ss.toString().padStart(2, "0");

    //string
    let clock = `${hh}:${mm}:${ss}`
    //array
    let clocks = clock.split("");

    let time = document.querySelector('.clock');


    clocks.forEach((s, i) => {
        let c = time.querySelector(`div:nth-child(${i + 1})`);
        c.innerHTML = s;
    })

}
cuttent();

let timer = setInterval(() => {
    cuttent();
}, 1000)

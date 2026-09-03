// Header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hero slide rotation
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots button');
  let cur = 0;
  function showSlide(i){
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
    cur = i;
  }
  dots.forEach((d,i) => d.addEventListener('click', () => showSlide(i)));
  setInterval(() => showSlide((cur+1) % slides.length), 5500);

  // AIS ticker content
  const aisData = [
    ["MV NORDIC STAR","AT BERTH — COLOMBO"],
    ["ETA 06:40 LT","MV PEARL TRADER — KATUNAYAKE ANCHORAGE"],
    ["BUNKERING IN PROGRESS","MT SILVER WAVE"],
    ["CREW CHANGE COMPLETE","MV HORIZON ACE"],
    ["SAILED 03:12 LT","MV BLUE MERIDIAN — NEXT PORT: GALLE"],
    ["PROVISIONS DELIVERED","MV OCEAN VOYAGER"]
  ];
  const track = document.getElementById('aisTrack');
  function buildTicker(){
    let html = '';
    for(let r=0;r<3;r++){
      aisData.forEach(item => {
        html += `<span class="ais-item"><span class="ais-dot"></span><b>${item[0]}</b>${item[1]}</span>`;
      });
    }
    track.innerHTML = html;
  }
  buildTicker();

  // Mobile nav
  const burger = document.getElementById('burgerBtn');
  const mnav = document.getElementById('mnav');
  const mnavClose = document.getElementById('mnavClose');
  burger.addEventListener('click', () => mnav.classList.add('open'));
  mnavClose.addEventListener('click', () => mnav.classList.remove('open'));
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));

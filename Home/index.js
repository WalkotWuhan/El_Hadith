function Home() {

    var variable = `
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
      <script src="/GlobalAssets/vendor/jquery/jquery.min.js"></script>
      <link rel="stylesheet" href="/Home/style.css">
      <script src="/GlobalAssets/js/load_vendor.js"></script>
    </head>
    
    <body class="pattern">
      <div class="container-md back_colour">
        <section id="header">
          <script defer>$("#header").load("/GlobalAssets/html/header.html");</script>
        </section>
        <section id="carousel" class="revert_container" style="margin-top:7.2rem;">
          <div class="carousel-flip">
            <div class="">
              <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators mb-5">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="/GlobalAssets/imgd/mosq_1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="/GlobalAssets/imgd/mosq_2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="/GlobalAssets/imgd/mosq_3.jpg" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon custom-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon custom-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="menu">
          <div id="title" class="grid_judul">
            <div class="anak_judul">Ulumul Hadis</div>
          </div>
          <div class="parent pb-4">
            <div class="div1">
              <a href="/Musthalah-Al-Hadits/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/mh.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Musthalah al-Hadis
                </div>
              </a>
            </div>
            <div class="div2">
              <a href="/Sanad/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/sm.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Sanad dan Matan
                </div>
              </a>
            </div>
            <div class="div3">
              <a href="/Klasifikasi/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/klasifikasi.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Klasifikasi
                </div>
              </a>
            </div>
            <div class="div4">
              <a href="javascript:cabang();">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/cabang.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Cabang-Cabang
                </div>
              </a>
            </div>
            <div class="div5">
              <a href="/kitab/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/kitab.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Kitab-Kitab
                </div>
              </a>
            </div>
            <div class="div6">
              <a href="/hadits/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/Hadist-pilihan.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Hadis-Hadis Pilihan
                </div>
              </a>
            </div>
          </div>
          <div id="title" class="grid_judul">
            <div class="anak_judul">Ulumul Hadis</div>
          </div>
          <div class="parent_kajian pb-4">
            <div class="div7">
              <a href="/living/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/living-hadist.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Living Hadis
                </div>
              </a>
            </div>
            <div class="div8">
              <a href="/hermeneutika/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/Hermeneutika.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Hermeneutika Hadis
                </div>
              </a>
            </div>
            <div class="div9">
              <a href="/artikel/">
                <div class="icon_menu">
                  <img src="/Home/assets/menu-icon/artikel.svg" alt="">
                </div>
                <div class="judul_div_1">
                  Artikel-Artikel
                </div>
              </a>
            </div>
          </div>
          <div id="kitab" class="d-flex justify-content-evenly m-5 rounded-4 kitab">
            <div class=" kitab-item">
              <img src="/Home/assets/kitab-icon/bukhori.svg" alt="">
            </div>
            <div class=" kitab-item">
              <img src="/Home/assets/kitab-icon/muslim.svg" alt="">
            </div>
            <div class=" kitab-item">
              <img src="/Home/assets/kitab-icon/abu_daud.svg" alt="">
            </div>
            <div class=" kitab-item">
              <img src="/Home/assets/kitab-icon/tirmidzi.svg" alt="">
            </div>
            <div class=" kitab-item">
              <img src="/Home/assets/kitab-icon/nasai.svg" alt="">
            </div>
            <div class=" kitab-item">
              <img src="/Home/assets/kitab-icon/ibnu_majah.svg" alt="">
            </div>
          </div>
        </section>
        <section id="footer">
          <script defer>$("#footer").load("/GlobalAssets/html/footer.html");</script>
        </section>
      </div>
    </body>
    <script src="/GlobalAssets/vendor/touchSwipe/jquery.touchSwipe.min.js"></script>
    <script src="script.js"></script>
    `;
    var lokasi = document.querySelector('html');
    lokasi.innerHTML = variable;

}

Home();

function nodeScriptReplace(node) {
    if (nodeScriptIs(node) === true) {
        node.parentNode.replaceChild(nodeScriptClone(node), node);
    }
    else {
        var i = -1, children = node.childNodes;
        while (++i < children.length) {
            nodeScriptReplace(children[i]);
        }
    }
    return node;
}
function nodeScriptClone(node) {
    var script = document.createElement("script");
    script.text = node.innerHTML;

    var i = -1, attrs = node.attributes, attr;
    while (++i < attrs.length) {
        script.setAttribute((attr = attrs[i]).name, attr.value);
    }
    return script;
}

function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}
nodeScriptReplace(document.getElementsByTagName("head")[0]);
window.onload = function() {
    nodeScriptReplace(document.getElementsByTagName("body")[0]);
  }

function cabang() {
    var elemenScript = document.createElement('script');
    elemenScript.src = '/cabang/index.js'; 
    var elemenHead = document.querySelector('head');
    elemenHead.appendChild(elemenScript);
}

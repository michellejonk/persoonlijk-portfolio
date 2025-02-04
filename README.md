<h1>Stap 1</h1>
<p>Ga naar cards.json en copy en paste het volgende</p>
<p>
,
    {
        "id": vul id in,
        "title": "project-naam",
        "image": "img/afbeelding met zwart balk",
        "mobileImage": "img/afbeelding zonder zwarte balk",
        "link": "pagina-naam.html"
    }
</p>

<h1>Stap 2</h1>
<p>Maak een nieuwe .html.
dat doe je door op persoonlijk-portfolio met rechter muis knop te klikken en dan new file te selecteren. ZORG DAT DE NAAM VAN FILE EINDIGD MET .html</p>

<h1>Stap 3</h1>
<p>Copy en paste de volgende code in de nieuwe .html:</p>
<p>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>portfolio Michelle Jonk</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/bedrijfs.css">
</head>
<body>
    <nav id="navbar">
        <div class="nav-header">
            <strong>MICHELLE JONK</strong>
        </div>
        <div id="hamburgermenu">
            <div id="navigatie">
                <button id="menu-toggle" class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul id="nav-links" class="nav-links">
                <li>
                    <p><a href="index.html">HOME</a></p>
                </li>
                <li>
                    <p><a href="index.html#aboutme">OVER MIJ</a></p>
                </li>
                <li>
                    <p><a href="index.html#projecten">PROJECTEN</a></p>
                </li>
                <li>
                    <p><a href="index.html#contact">CONTACT</a></p>
                </li>
            </ul>
        </div>
    </nav>
    <section id="afbeeldingen">
        <img loading="lazy" src="img/afbeelding me tekst.png" alt="">
    </section>
    <section id="buttons">
        <button id="nextbutton"><a href="laatste project dat je hebt toegevoegd.html">  < 
        laatste project dat je hebt toegevoegd</a></button>
        <button id="back-button"><a href="index.html">Home</a></button>
    </section>
    <footer id="contact">
        <div id="cardcontainer">
            <div>
                <h5>pagina's</h5>
                <div>
                    <p><a href="index.html">Home</a></p>
                    <p><a href="index.html#aboutme">Over Mij</a></p>
                    <p><a href="index.html#projecten">Projecten</a></p>
                </div>
            </div>
            <div>
                <h5>Referenties</h5>
                <div>
                    <a href="tel: +31 22180355">René Pannekeet, Zwembad De Waterdam, 06 22180355</a>
                    <a href="tel: +31 24446024">Franklin Verhoeven, New York Pizza, 06 24446024</a>
                    <a href="tel: +31 30925048">Kees van den Dikkenberg, Björn Borg, 06 30925048</a>
                    <a href="tel: +31 26320107">Sven Kwakman, Padelcentrum Bol, 06 26320107</a>
                </div>
            </div>
            <div>
                <h5>Contact</h5>
                <div>
                    <a href="mailto: Michellejonk17@gmail.com">Michellejonk17@gmail.com</a>
                    <a href="tel: +31 20451380">06 20451380</a>
                    <a href="https://www.linkedin.com/in/michelle-jonk-6b876526b/">@Michelle Jonk</a>
                </div>
            </div>
        </div>
    </footer>
    <script src="mobile.js"></script>
</body>
</html>
</p>

<h1> Stap 4</h1>
<p>Ga naar je laatste project dat je hebt gemaakt en herplaats dit:</p>
<p>
    <section id="buttons">
        <button id="nextbutton"><a href="je laatste project.html">  < Lamp Project</a></button>
        <button id="back-button"><a href="index.html">Home</a></button>
    </section>
</p>

<h3>Met dit:</h3>
<p>
    <section id="buttons">
        <button id="nextbutton"><a href="vorige project.html">  < Rave run</a></button>
        <button id="back-button"><a href="index.html">Home</a></button>
        <button id="nextbutton"><a href="nieuwe project.html">Lamp Project ></a></button>
</section>
</p>

<h1>En nu heb je een nieuw project</h1>
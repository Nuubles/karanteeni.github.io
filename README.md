# Karanteeni

Peruspaske sivut (HTML, CSS, JS) :D

Versio: 4.2.1

## "Hei pukki, mullois vaan yks toive... että maailmassa olisi rauha..."

ja sitten se, että kuka ikinä tätä lukeekaan ymmärtää nämä "ohjeet". Tämän repositorion muokkaamiseen tarvitaan JavaScript osaamista (mieluiten Reactilla), Node.js
ja npm niiden viimeisimmässä versiossaan.

## Muokkaaminen

**Yleistä:** JavaScript moduulit löytyy kansiosta `/modules`, taustakuvat (sekä yleensäkin muut kuvat) löytää kansiosta `/assets/images/` ja skinit löytää kansiosta `/assets/skins/`, joille toistaiseksi ei ole mitään käyttöä. Paketti myös sisältää pohjasivun, jolla voit luoda samantyylisen sivun helposti tarvittaessa. Paketti sisältää myös JSX-komponentit helppoa muokkaamista varten, mutta komponentit täytyy esikääntää selaimelle luettavaksi JavaScriptiksi, jotka löytää `/src` kansiosta. Lisää tästä löydät [React-komponenttien kääntämisestä](#React-komponenttien-kääntäminen)

### React komponentit

Navigaatiopalkki (samoin kuin moni muu komponentti) on toteutettu Reactilla. Jokaisessa tiedostossa on erikseen script tagit kyseiseen komponenttiin.

```html
<!-- Navbar -->
<div id="nav"></div>

<!-- Sivun alalaidassa erikseen script tagi, joka kutsuu kyseisen JSX komponentin. -->
<script src="./dist/navbar.js"></script>
```

Jokainen komponentti toimii samalla tavalla. Muita komponentteja esimerkiksi ovat muutoslokin nappi (`changelog_button.js`), footer (`footer.js`), pelaaja-arvot (`table_ranks.js`), sekä reseptit (`recipes.js`).

### Ylläpitosivut

Ylläpitosivut ovat käytännössä vain rakenne. Ylläpitäjien lisääminen tapahtuu käytännössä `/modules/Operators/operators.json` tiedoston kautta, jolloin `operators.js` luo elementit kyseisten ylläpitäjien ympärille. `/modules/Operators/operators.json` sisältää arrayn omistajille, admineille ja rakentajille, jolloin elementit tulevat varmasti oikean kategorian alapuolelle ylläpitosivussa. Alta löytyy esimerkki:

```json
{
    "omistajat": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": [
                "Vahvuus"
            ],
            "uuid": "numeroita"
        }
    ],
    "adminit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": [
                "Vahvuus"
            ],
            "uuid": "numeroita"
        }
    ],
    "operaattorit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": [
                "Vahvuus"
            ],
            "uuid": "numeroita"
        }
    ],
    "moderaattorit": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": [
                "Vahvuus"
            ],
            "uuid": "numeroita"
        }
    ],
    "rakentajat": [
        {
            "nimi": "Jomeee",
            "kuvaus": "Ylläpitäjä",
            "vahvuudet": [
                "Vahvuus"
            ],
            "uuid": "numeroita"
        }
    ]
}
```
UUID:tä käytetään lähinnä skinin hakemiseen, joka päivittyy automaattisesti tietyn ajan kuluessa. Kuvaus ja nimi luonnollisesti tuvat näkyviin elementteinä oikeisiin paikkoihin.

### #vainylläpitojutut

"Vain ylläpitojutut" ovat koottu etusivulle JavaScriptin avulla. Kyseisiä juttuja voi lisätä sijainnissa `/modules/Jutut/` nimellä `jutut.js`. Alla on vielä esimerkkimalli `jutut.js` sisällöstä.

```javascript
       {
          teksti: "Vois käydä kuolemassa.",
          kuuluisuus: "LouNii"
       }
```

## React-komponenttien kääntäminen



Reactin JSX-komponentit täytyy kääntää selaimelle luettavaksi JavaScriptiksi. Tämä onnistuu helposti, mikäli omistat Node Package Managerin (npm), mikä tulee autom. Node.js mukana. 

Ensin pidä huolta, että tarvittavat paketit ovat asennettu terminaalin komennolla:

`npm install`

### Vaihtoehto 1 - Tiedostojen automaattinen kääntäminen

Mikäli haluat Babelin kääntävän JSX-tiedostot automaattisesti kehityksen yhteydessä, suorita komento:

`npm run watch-jsx`

Tämän jälkeen voit muokata rauhassa JSX-tiedostoja. Babel hoitaa kääntämisen JavaScriptiksi, eikä sinun tarvitse koskea niihin :).

### Vaihtoehto 2 - Tiedostojen kääntäminen scriptillä tarvittaessa

Mikäli haluat kääntää JSX-tiedostot manuaalisesti, suorita aina käännön yhteydessä komento:

`npm run build-jsx`


## Tiedettyjä "ongelmia"

* Kaikki kunnossa toistaiseksi.

## Kasattu

* [Bootstrap](https://getbootstrap.com/) - Frontend Web-kehys (CSS)
* [React](https://reactjs.org/) - Frontend Web-kehys (JavaScript)
* [jQuery](https://jquery.com/) - JavaScript kirjasto
* [Rakkaus](https://fi.wikipedia.org/wiki/Rakkaus) - Koska ilman verta, hikeä, kyyneleitä ja rakkautta ei tätäkään sivua olisi saatu aikaiseksi

## Hatunnosto

* [Visage](https://visage.surgeplay.com/) - Käytetty skinien kyselyyn
* [Minecraft Server Status](https://mcsrvstat.us/) - Käytetty palvelimen statukseen
* [Clipboard.js](https://clipboardjs.com/) - Käytetty elementtien kopioimiseen leikepöydälle
* [March08 Animated Burgers](https://march08.github.io/animated-burgers/) - Käytetty mobiilinavigointipalkin ikonina 
* [Toastr](https://toastrjs.com/) - Käytetty paahtoleipien paahtamiseen
* [particles.js](https://vincentgarreau.com/particles.js/) - Käytetty partikkeleihin etusivulla

## Lisenssi

Voit katsoa lisenssin tiedostosta [LICENSE](https://raw.githubusercontent.com/Karanteeni/karanteeni.github.io/master/LICENSE.md). Tiedosto on myös pakattu mukaan.

## Kiitos

Kiitos, että sain auttaa teitä ja että hyväksyitte avun edellisistä vastoinkäymisistä huolimatta. Voin jatkaa näiden päivityksiä, mikäli sen sallitte, mutta voin jättää pallon myös kokonaan teidän haltuun. -Ixynas

Sei incaricato di creare un marketplace di libri online.
Usa tutti i nuovi tools e features che hai imparato per creare un'applicazione con i
seguenti requisiti:

    (x) Una homepage che mostri tutti i libri con delle card di bootstrap
    (x) Le card dovrebbero avere un pulsante per aggiungere al carrello e uno per "saltare" un prodotto
    (x) Una sezione per il carrello
    (x) Un input di testo per cercare i libri

Troverai più istruzioni nella prossima slide

Per raggiungere questo risultato, segui queste istruzioni:
    • Usa questo API per ottenere la lista di libri:
        https://striveschool-api.herokuapp.com/books
    • Renderizza tutti i libri usando i template literals e forEach o .map
    • Assicurati che dentro ad ogni card ci sia un pulsante "Aggiungi al carrello"

    Quando il pulsante viene cliccato...
    (x) Aggiungi il libro alla lista del carrello
    (x) Cambia lo stile della card per mostrare che è già stata aggiunta (un bordo colorato o un badge vanno bene)

    (x) Aggiungi un input di testo che funzioni come una barra di ricerca. Quando l'utente scrive più di 3 caratteri, filtra il risultato    dell'API per renderizzare solo i libri con un titolo che corrisponda, anche parzialmente, al contenuto dell'input. SUGGERIMENTO: usa .filter()

EXTRA FACOLTATIVI:
    (x) Dai la possibilità all'utente di cancellare libri dal loro carrello
    () Conta gli elementi nel carrello e mostra il risultato nella sezione carrello
    (x) Crea un pulsante per svuotare il carrello

------------------------------------------------------------------------------------------
TODO 
(X) Sezione per il carrello
(x) Sezione "search" per cercare titoli di libri

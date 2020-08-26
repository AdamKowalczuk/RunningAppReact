import React, { Component } from "react";

export default class Cytaty extends Component {
  state = {
    quotesCollecton: [
      `"Maraton zaczyna się na 32. kilometrze."`,
      `"Bieganie to dobry początek, jeśli chcesz poprawić formę, trening to kolejny krok"`,
      `"Jeśli chcesz biegać – przebiegnij kilometr. Jeśli chcesz zmienić swoje życie – przebiegnij maraton."`,
      `"Bieganie – jest ogromnym znakiem zapytania stawianym sobie kazdego dnia. Czy będziesz mięczakiem, czy bedziesz silny dzisiaj?"`,
      `"Nie ma czegoś takiego jak zła pogoda, są tylko zbyt delikatni ludzie"`,
      `"Jeśli nie umiesz latać, biegnij. Jeśli nie umiesz biegać, chodź. Jeśli nie umiesz chodzić, czołgaj się. Ale bez względu na wszystko – posuwaj się naprzód."`,
      `"Ból jest nieunikniony. Cierpienie jest wyborem."`,
      `"Biegnij, aż już nie będziesz mógł. A potem pobiegnij jeszcze trochę. Znajdź nowe źródło energii i woli. I biegnij jeszcze szybciej."`,
      `"Rozwijasz się jako człowiek jedynie wtedy, gdy znajdujesz się poza własną strefą komfortu."`,
      `"Mięśnie są pojętne jak woły robocze. Jeśli ostrożnie, krok po kroku, zwiększa się obciążenie, uczą się je znosić."`,
      `"Przyszłość należy do tych, którzy wierzą w piękno swoich marzeń"`,
      `"Tam, gdzie nie ma walki, nie ma siły."`,
      `"Pamiętaj - to, co czujesz po dobrym biegu jest o niebo lepsze od tego, co czujesz siedząc i myśląc, że chciałabyć biegać."`,
      `"Nikt nigdy nie utonął we własnym pocie."`,
      `"Za każdym razem kiedy startuję mam cel – żeby biec szybciej niż kiedykolwiek wcześniej."`,
      `"Najważniejszym i największym triumfem człowieka jest zwycięstwo nad samym sobą."`,
      `"Musisz wierzyć w siebie wtedy, gdy nikt inny w Ciebie nie wierzy – to czyni Cię wygranym już na początku."`,
      `"Dawać z siebie mniej niż to co najlepsze – to marnowanie talentu."`,
      `"Ból to słabość opuszczająca ciało"`,
      `"Wyścig to życie, z narodzinami przy wstawaniu z łóżka rano i śmiercią następującą po przekroczeniu mety."`,
      `"Bieganie jest jak wycieczka do źródła: każdy z nas pije do woli, a nowi biegacze przychodzą i wypychają na zewnątrz tych z przodu."`,
      `"Cierpiący biegacz płci męskiej to postać heroiczna. Cierpiąca biegaczka to kolejny dowód na to, że jesteśmy delikatnymi istotami, fizjologicznie niezdolnymi do biegania maratonów."`,
      `"Sukces to suma niewielkiego wysiłku powtarzanego z dnia na dzień."`,
    ],
    authorCollection: [
      "Frank Shorter",
      "Jack Daniels",
      "Emil Zatopek",
      "Peter Maher",
      "Bill Bowerman",
      "Martin Luther King",
      "Haruki Murakami",
      "Scott Jurek",
      "Scott Jurek",
      "Haruki Murakami",
      "Eleanor Roosevelt",
      "Oprah Winfrey",
      "Sarah Condor",
      "Lou Holtz",
      "Paula Radcliffe",
      "Platon",
      "Venus Williams",
      "Steve Prefontaine",
      "slogan amerykańskich Marines",
      "Kilian Jornet Burgada",
      "Michael Sandrock",
      "Kathrine Switzer",
      "Robert Collier",
    ],
    quotes: "",
    author: "",
  };

  handleSubmit = () => {
    const random = Math.floor(
      Math.random() * this.state.quotesCollecton.length
    );
    console.log(random);
    this.setState({
      quotes: this.state.quotesCollecton[random],
      author: this.state.authorCollection[random],
    });
  };
  render() {
    return (
      <>
        <div className="quotes-container">
          <h1>Generator cytatów</h1>
          <h3>{this.state.quotes}</h3>
          <h5>{this.state.author}</h5>
          <button className="btn btn-green" onClick={this.handleSubmit}>
            Generuj
          </button>
        </div>
      </>
    );
  }
}

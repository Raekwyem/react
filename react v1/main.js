
/*//////////////////////////////CREATION d'UNE CLASS React//////////////////////////////////////////// */

// Declaration de l'état d'une classe d'un composant  en étendant à une React CLASS
class Counter extends React.Component{

        //STATE = Propriété spéciale des classe sreact qui contient l'état de notre composant
        //State est un objet
    state = {

        counter : 0 //Création d'un état compteur
        
    };
/*///////////////////////////////// FONCTION onCLICK ///////////////////////////////////////// */

        // = () => Est une fonction fléché permet au "THIS" de fonctionner
    onClickButton = () => {


            //bouton plus///// THIS représente la class où on se trouve
        this.setState({ counter: this.state.counter +1 });// permet de mettre à jour le state dans l'état du composant
        
    }

    onClickButtonMinus = () => {

        this.setState({ counter: this.state.counter -1 });// bouton moins
        
    }

/*///////////////////////////////  Affiche RENDER  /////////////////////////////////////////// */

    // Comment notre composant s'affiche avec la fonction RENDER de reactJS
    //RENDER est obligatoire

    render() {
    
        //La parenthèse doit être collé à return
    return(
        <div>
            <h2>Bienvenue !</h2>

            <button onClick={ this.onClickButton }>Cliquez sur moi en plus</button>
            <button onClick={ this.onClickButtonMinus }>Cliquez sur moi en moins</button>

            <p>Compteur : <span>{ this.state.counter }</span></p>
            
        </div>
        );
    
    }
}

// Utilisation du JSX permet d'utiliser la Class Counter comme des balises
// Initialise React dans 'reat-root'
ReactDOM.render(
<Counter></Counter>,                    //Quel composant
document.getElementById('react-root')   //Où?

);




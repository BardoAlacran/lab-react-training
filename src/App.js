import './App.css';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import DriverCard from './Components/DriverCard';
import Greetings from './Components/Greetings';
import IdCard from './Components/IdCard';
import Random from './Components/Random';
import Rating from './Components/Rating';
import { cardArray, creditCardArray, driverCardArray } from './info';


function App() {
  return (
    <div className="App">
      {cardArray.map(card => {
        return <IdCard 
        key={card.id}
        firstName={card.firstName}
        lastName={card.lastName}
        gender={card.gender}
        height={card.height}
        birth={card.birth}
        picture={card.picture}
        />
      })}

      <Greetings lang='es'>
        Peter
      </Greetings>
      <Greetings lang='fr'> 
        Marçel
      </Greetings>
      <Greetings lang='de'> 
        Johan
      </Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {creditCardArray.map(card => {
        return <CreditCard 
        key={card.id}
        type={card.type}
        number={card.number}
        expirationMonth={card.expirationMonth}
        expirationYear={card.expirationYear}
        bank={card.bank}
        owner={card.owner}
        bgColor={card.bgColor}
        color={card.color}
        />
      })}

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {driverCardArray.map(card => {
        return <DriverCard 
        key={card.id}
        name={card.name}
        rating={card.rating}
        img={card.img}
        car={card.car}
        />  
      })}
    </div>
  );
}

export default App;

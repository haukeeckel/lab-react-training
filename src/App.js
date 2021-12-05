import React from 'react';
import BoxColor from './components/BoxColor';
import Carousel from './components/Carousel';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import NumbersTable from './components/NumbersTable';
import Random from './components/Random';
import Rating from './components/Rating';

function App() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      {/* Iteration 1 */}
      <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-2 gap-4 ">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      {/* Iteration 2 */}
      <div className="my-4">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      {/* Iteration 3 */}
      {/* TODO Style */}
      <div className="my-4">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      {/* Iteration 4 */}
      <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/* Iteration 5 */}
      <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-3 my-4">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      {/* Iteration 6 */}
      <div className="my-6">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      {/* Iteration 7 */}
      <div className="w-full grid justify-items-center grid-cols-1 lg:grid-cols-2">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>

      {/* Iteration 8 */}
      {/* TODO Style */}
      <div>
        <LikeButton />
        <LikeButton />
      </div>

      {/* Iteration 9 */}
      {/* TODO Style */}
      <div>
        <ClickablePicture
          img="./assets/images/maxence.png"
          imgClicked="./assets/images/maxence-glasses.png"
        />
      </div>

      {/* Iteration 10 */}
      {/* TODO Style */}
      <div>
        <Dice />
      </div>

      {/* Iteration 11 */}
      {/* TODO Style */}
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      {/* Iteration 12 */}
      {/* TODO Style */}
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;

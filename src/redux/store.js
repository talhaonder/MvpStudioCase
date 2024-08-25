// Redux Toolkit'ten configureStore fonksiyonunu çağırdım.
// Bu fonksiyonla, Redux store'umuzu kolayca kurabiliyoruz.
import {configureStore} from '@reduxjs/toolkit';

// flightReducer ve twoWayFlightReducer'ı da dosyalarından import ettim.
// Bunlar, tek yönlü ve iki yönlü uçuşları yönetmek için gerekli.
import flightReducer from './flightSlice';
import twoWayFlightReducer from './twoWaySlice';

// configureStore fonksiyonunu çağırarak, store'u oluşturdum.
// İçine, flightReducer ve twoWayFlightReducer'ı ekledim.
// Bu sayede, bu reducer'lar ilgili state'leri yönetebilecek.
const store = configureStore({
  reducer: {
    flights: flightReducer, // Tek yönlü uçuşları yöneten reducer'ı buraya koydum.
    twoWayFlights: twoWayFlightReducer, // İki yönlü uçuşları yöneten reducer'ı da buraya ekledim.
  },
});

// Son olarak, oluşturduğum store'u export ettim.
// Bu store'u uygulamanın genelinde kullanacağız, böylece tüm state yönetimi buradan yapılacak.
export default store;

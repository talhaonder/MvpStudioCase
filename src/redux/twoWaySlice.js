// Redux Toolkit'ten createSlice fonksiyonunu import ediyorum.
import {createSlice} from '@reduxjs/toolkit';

// İki yönlü uçuşlar için slice oluşturuyorum.
const twoWaySlice = createSlice({
  name: 'twoWayFlights', // Slice'a isim veriyorum.
  initialState: {
    twoWayFlightCards: [], // İki yönlü uçuş kartlarını tutacak boş bir dizi oluşturuyorum.
    selectedTwoWayFlight: null, // Seçili uçuşu başlangıçta null olarak ayarlıyorum.
  },
  reducers: {
    // Yeni bir iki yönlü uçuş eklemek için reducer tanımlıyorum.
    addTwoWayFlight: (state, action) => {
      state.twoWayFlightCards.push(action.payload); // Gelen uçuşu diziye ekliyorum.
    },
    // Belirli bir iki yönlü uçuşu kaldırmak için reducer tanımlıyorum.
    removeTwoWayFlight: (state, action) => {
      state.twoWayFlightCards = state.twoWayFlightCards.filter(
        flight => flight.id !== action.payload, // Belirtilen ID'ye sahip uçuşu diziden çıkarıyorum.
      );
    },
    // Bir iki yönlü uçuşu seçmek için reducer tanımlıyorum.
    setSelectedTwoWayFlight: (state, action) => {
      state.selectedTwoWayFlight = action.payload; // Seçili uçuşu güncelliyorum.
    },
    // Seçili iki yönlü uçuşu temizlemek için reducer tanımlıyorum.
    clearSelectedTwoWayFlight: state => {
      state.selectedTwoWayFlight = null; // Seçili uçuşu null yapıyorum.
    },
  },
});

// Reducer fonksiyonlarını dışa aktarıyorum.
export const {
  addTwoWayFlight,
  removeTwoWayFlight,
  setSelectedTwoWayFlight,
  clearSelectedTwoWayFlight,
} = twoWaySlice.actions;

// Slice'ın reducer'ını dışa aktarıyorum.
export default twoWaySlice.reducer;

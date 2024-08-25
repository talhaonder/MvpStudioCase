// Redux Toolkit'ten createSlice fonksiyonunu import ediyorum.
import {createSlice} from '@reduxjs/toolkit';

// Tek yönlü uçuşlar için slice oluşturuyorum.
const flightSlice = createSlice({
  name: 'flights', // Slice'a isim veriyorum.
  initialState: {
    flightCards: [], // Tek yönlü uçuş kartlarını tutacak boş bir dizi oluşturuyorum.
    selectedFlight: null, // Seçili uçuşu başlangıçta null olarak ayarlıyorum.
  },
  reducers: {
    // Yeni bir tek yönlü uçuş eklemek için reducer tanımlıyorum.
    addFlight: (state, action) => {
      state.flightCards.push(action.payload); // Gelen uçuşu diziye ekliyorum.
    },
    // Belirli bir tek yönlü uçuşu kaldırmak için reducer tanımlıyorum.
    removeFlight: (state, action) => {
      state.flightCards = state.flightCards.filter(
        flight => flight.id !== action.payload, // Belirtilen ID'ye sahip uçuşu diziden çıkarıyorum.
      );
    },
    // Bir tek yönlü uçuşu seçmek için reducer tanımlıyorum.
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload; // Seçili uçuşu güncelliyorum.
    },
    // Seçili tek yönlü uçuşu temizlemek için reducer tanımlıyorum.
    clearSelectedFlight: state => {
      state.selectedFlight = null; // Seçili uçuşu null yapıyorum.
    },
  },
});

// Reducer fonksiyonlarını dışa aktarıyorum.
export const {addFlight, removeFlight, setSelectedFlight, clearSelectedFlight} =
  flightSlice.actions;

// Slice'ın reducer'ını dışa aktarıyorum.
export default flightSlice.reducer;

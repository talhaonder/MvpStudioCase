// Gerekli kütüphaneleri ve bileşenleri import ediyorum.
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EmptyState from '../components/flightsComponents/EmptyState';
import Header from '../components/flightsComponents/Header';
import TwoWayFlightCard from '../components/flightsComponents/TwoWayFlightCard';
import FlightCard from '../components/flightsComponents/FlightCard';
import RemoveButton from '../components/flightsComponents/RemoveButton';
import twoWayFlightData from '../data/twoWayFlightData.json';
import flightData from '../data/flightData.json';
import {
  addTwoWayFlight,
  removeTwoWayFlight,
  setSelectedTwoWayFlight,
  clearSelectedTwoWayFlight,
} from '../redux/twoWaySlice';
import {
  addFlight,
  removeFlight,
  setSelectedFlight,
  clearSelectedFlight,
} from '../redux/flightSlice';
import {colors, spacing} from '../style';

// Ana bileşeni oluşturuyorum.
const FlightsScreen = () => {
  // Redux dispatch fonksiyonunu kullanıma alıyorum.
  const dispatch = useDispatch();

  // Redux store'dan gerekli state'leri alıyorum.
  const twoWayFlightCards = useSelector(
    state => state.twoWayFlights.twoWayFlightCards,
  );
  const flightCards = useSelector(state => state.flights.flightCards);
  const selectedTwoWayFlight = useSelector(
    state => state.twoWayFlights.selectedTwoWayFlight,
  );
  const selectedFlight = useSelector(state => state.flights.selectedFlight);

  // Kombine edilmiş uçuşları tutmak için local state oluşturuyorum.
  const [combinedFlights, setCombinedFlights] = useState([]);

  // Yeni bir uçuş eklemek için fonksiyon tanımlıyorum.
  const handleAddFlight = () => {
    // Rastgele olarak iki yönlü veya tek yönlü uçuş eklemeye karar veriyorum.
    const addTwoWay = Math.random() < 0.5;

    if (addTwoWay) {
      // Eşsiz bir iki yönlü uçuş alıyorum.
      const newTwoWayFlight = getUniqueTwoFlight();
      if (newTwoWayFlight) {
        // Yeni uçuşu Redux store'a ekliyorum.
        dispatch(addTwoWayFlight(newTwoWayFlight));
        // Yeni uçuşu local state'e ekliyorum.
        setCombinedFlights(prev => [
          ...prev,
          {...newTwoWayFlight, type: 'twoWay'},
        ]);
      } else {
        // Eğer iki yönlü uçuş kalmadıysa tek yönlü uçuş eklemeye çalışıyorum.
        const newFlight = getUniqueFlight();
        if (newFlight) {
          dispatch(addFlight(newFlight));
          setCombinedFlights(prev => [...prev, {...newFlight, type: 'oneWay'}]);
        } else {
          // Eğer ekleyecek uçuş kalmadıysa kullanıcıyı bilgilendiriyorum.
          alert('Ekleyebileceğiniz başka uçuş kalmadı.');
        }
      }
    } else {
      // Tek yönlü uçuş eklemeye çalışıyorum.
      const newFlight = getUniqueFlight();
      if (newFlight) {
        dispatch(addFlight(newFlight));
        setCombinedFlights(prev => [...prev, {...newFlight, type: 'oneWay'}]);
      } else {
        // Eğer tek yönlü uçuş kalmadıysa iki yönlü uçuş eklemeye çalışıyorum.
        const newTwoWayFlight = getUniqueTwoFlight();
        if (newTwoWayFlight) {
          dispatch(addTwoWayFlight(newTwoWayFlight));
          setCombinedFlights(prev => [
            ...prev,
            {...newTwoWayFlight, type: 'twoWay'},
          ]);
        } else {
          // Eğer ekleyecek uçuş kalmadıysa kullanıcıyı bilgilendiriyorum.
          alert('Ekleyebileceğiniz başka uçuş kalmadı.');
        }
      }
    }
  };

  // Eşsiz bir iki yönlü uçuş almak için fonksiyon tanımlıyorum.
  const getUniqueTwoFlight = () => {
    // Belirli ID aralığındaki uçuşları filtreliyorum.
    const filteredFlights = twoWayFlightData.filter(
      flight => flight.id >= 1 && flight.id <= 4,
    );

    // Halihazırda eklenmemiş uçuşları belirliyorum.
    const availableFlights = filteredFlights.filter(
      flight => !twoWayFlightCards.some(card => card.id === flight.id),
    );

    // Eğer eklenebilecek uçuş yoksa null döndürüyorum.
    if (availableFlights.length === 0) {
      return null;
    }

    // Mevcut uçuşlar arasından rastgele birini seçiyorum.
    const newFlight =
      availableFlights[Math.floor(Math.random() * availableFlights.length)];
    return newFlight;
  };

  // Eşsiz bir tek yönlü uçuş almak için fonksiyon tanımlıyorum.
  const getUniqueFlight = () => {
    // Belirli ID aralığındaki uçuşları filtreliyorum.
    const filteredFlights = flightData.filter(
      flight => flight.id >= 1 && flight.id <= 4,
    );

    // Halihazırda eklenmemiş uçuşları belirliyorum.
    const availableFlights = filteredFlights.filter(
      flight => !flightCards.some(card => card.id === flight.id),
    );

    // Eğer eklenebilecek uçuş yoksa null döndürüyorum.
    if (availableFlights.length === 0) {
      return null;
    }

    // Mevcut uçuşlar arasından rastgele birini seçiyorum.
    const newFlight =
      availableFlights[Math.floor(Math.random() * availableFlights.length)];
    return newFlight;
  };

  // Uçuş kartına tıklandığında çalışacak fonksiyonu tanımlıyorum.
  const handleCardPress = (id, type) => {
    if (type === 'twoWay') {
      // Seçili iki yönlü uçuşu Redux store'da güncelliyorum.
      dispatch(setSelectedTwoWayFlight(id));
    } else {
      // Seçili tek yönlü uçuşu Redux store'da güncelliyorum.
      dispatch(setSelectedFlight(id));
    }
  };

  // Seçili uçuşu kaldırmak için fonksiyon tanımlıyorum.
  const handleRemoveFlight = () => {
    if (selectedTwoWayFlight !== null) {
      // Seçili iki yönlü uçuşu Redux store'dan kaldırıyorum.
      dispatch(removeTwoWayFlight(selectedTwoWayFlight));
      dispatch(clearSelectedTwoWayFlight());
    } else if (selectedFlight !== null) {
      // Seçili tek yönlü uçuşu Redux store'dan kaldırıyorum.
      dispatch(removeFlight(selectedFlight));
      dispatch(clearSelectedFlight());
    }
    // Seçili uçuşu local state'den kaldırıyorum.
    setCombinedFlights(prev =>
      prev.filter(
        flight =>
          !(
            (flight.type === 'twoWay' && flight.id === selectedTwoWayFlight) ||
            (flight.type === 'oneWay' && flight.id === selectedFlight)
          ),
      ),
    );
  };

  // Seçili uçuşun verilerini almak için fonksiyon tanımlıyorum.
  const getSelectedFlightData = () => {
    if (selectedTwoWayFlight !== null) {
      // Seçili iki yönlü uçuşun verilerini döndürüyorum.
      return twoWayFlightCards.find(
        flight => flight.id === selectedTwoWayFlight,
      );
    } else if (selectedFlight !== null) {
      // Seçili tek yönlü uçuşun verilerini döndürüyorum.
      return flightCards.find(flight => flight.id === selectedFlight);
    }
    // Eğer hiçbir uçuş seçili değilse null döndürüyorum.
    return null;
  };

  // Uçuş kartlarını render etmek için fonksiyon tanımlıyorum.
  const renderFlightCard = ({item}) => (
    <TouchableOpacity onPress={() => handleCardPress(item.id, item.type)}>
      {item.type === 'twoWay' ? (
        // İki yönlü uçuş kartını render ediyorum.
        <TwoWayFlightCard flight={item} />
      ) : (
        // Tek yönlü uçuş kartını render ediyorum.
        <FlightCard flight={item} />
      )}
    </TouchableOpacity>
  );

  // Seçili uçuş kartını modal içinde render etmek için fonksiyon tanımlıyorum.
  const renderSelectedFlightCart = () => {
    // Seçili uçuşun verilerini alıyorum.
    const selectedFlightData = getSelectedFlightData();
    if (!selectedFlightData) return null;

    return selectedTwoWayFlight !== null ? (
      // Seçili iki yönlü uçuş kartını odaklanmış şekilde render ediyorum.
      <TwoWayFlightCard flight={selectedFlightData} isFocused={true} />
    ) : (
      // Seçili tek yönlü uçuş kartını odaklanmış şekilde render ediyorum.
      <FlightCard flight={selectedFlightData} isFocused={true} />
    );
  };

  return (
    // Güvenli alan oluşturarak ana container'ı tanımlıyorum.
    <SafeAreaView style={styles.container}>
      {/* Header bileşenini ekliyorum ve uçuş ekleme fonksiyonunu prop olarak veriyorum. */}
      <Header onAddFlight={handleAddFlight} />
      {combinedFlights.length === 0 ? (
        // Eğer uçuş listesi boşsa EmptyState bileşenini gösteriyorum.
        <View style={styles.main}>
          <EmptyState onAddFlight={handleAddFlight} />
        </View>
      ) : (
        // Eğer uçuşlar varsa FlatList ile listeyi render ediyorum.
        <FlatList
          data={combinedFlights}
          renderItem={renderFlightCard}
          keyExtractor={item => `${item.type}-${item.id}`}
          contentContainerStyle={styles.listContent}
        />
      )}
      {/* Seçili uçuşu göstermek için Modal bileşenini kullanıyorum. */}
      <Modal
        transparent={true}
        visible={selectedTwoWayFlight !== null || selectedFlight !== null}
        animationType="fade"
        onRequestClose={() => {
          dispatch(clearSelectedTwoWayFlight());
          dispatch(clearSelectedFlight());
        }}>
        {/* Modal arka planına tıklandığında seçimi temizliyorum. */}
        <TouchableWithoutFeedback
          onPress={() => {
            dispatch(clearSelectedTwoWayFlight());
            dispatch(clearSelectedFlight());
          }}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <>
                {/* Seçili uçuş kartını render ediyorum. */}
                {renderSelectedFlightCart()}
                <View style={styles.removeButtonContainer}>
                  {/* Uçuşu kaldırmak için butonu ekliyorum. */}
                  <RemoveButton onPress={handleRemoveFlight} />
                </View>
              </>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

// Stil dosyasını tanımlıyorum.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  removeButtonContainer: {
    marginTop: spacing.ten * 2,
    alignItems: 'center',
  },
});

// Bileşeni dışa aktarıyorum.
export default FlightsScreen;

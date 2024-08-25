# Uçuş Yönetim Uygulaması

Bu proje, basit bir Figma tasarımını fonksiyonel bir React Native uygulamasına dönüştürmeyi amaçlayan bir çalışmadır. Bu uygulama, uçuş bilgilerini yönetmek için kullanıcı dostu bir arayüz sunar ve boş durum, uçuş ekleme, uçuş kartı etkileşimi ve uçuş silme özelliklerini içerir.

## İçindekiler

- [Amaç](#amaç)
- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Redux Durum Yönetimi](#redux-durum-yönetimi)
- [UI Bileşenleri](#ui-bileşenleri)
- [Veri Yönetimi](#veri-yönetimi)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)
- [Notlar](#notlar)

## Amaç

Bu proje, basit bir Figma tasarımını fonksiyonel bir React Native uygulamasına dönüştürme becerinizi değerlendirmek için hazırlanmıştır. Tasarımı koda dönüştürmek, durum yönetimi yapmak ve yeniden kullanılabilir bileşenler oluşturmak gibi becerileriniz test edilecektir.

**Figma dosyası**: [Figma Tasarımı](https://www.figma.com/design/cgODek1Y7g0s7B7VVhPlBn/mvpstudio-Case?node-id=81-3256&t=XSoINedjBQ0ZNVMQ-1)

## Özellikler

1. **Boş Durum**:

   - Uygulama başladığında, uçuş eklenmediğini belirten bir mesajla birlikte boş durum ekranı görüntülenir.
   - "Uçuş Ekle" butonu veya bir "+" simgesi bulunur.

2. **Uçuş Ekle**:

   - "Uçuş Ekle" butonuna veya "+" simgesine tıklandığında listeye yeni bir uçuş eklenir.
   - Uçuş kartı, rastgele oluşturulan veya önceden belirlenmiş uçuş bilgileri (uçuş numarası, kalkış şehri, varış şehri ve saatler) ile doldurulur.
   - Her uçuş kartı, sağlanan uçuş detaylarıyla render edilir.

3. **Uçuş Kartı Etkileşimi**:

   - Bir uçuş kartına tıklandığında, kart vurgulanır.
   - Bu etkileşim, kullanıcıya görsel geri bildirim sağlar.

4. **Uçuş Sil**:
   - Her uçuş kartında bir "Uçuşu Kaldır" butonu bulunur.
   - Bu butona tıklandığında, ilgili uçuş listeden kaldırılır.

## Kurulum

Projenin yerel bilgisayarınıza kurulumu için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın**:
   ```sh
   git clone https://github.com/your-username/flight-management-app.git
   cd flight-management-app
   ```
2. **Bağımlılıkları Yükleyin**:
   ```sh
   npm install
   ```
3. **Projeyi Başlatın**:

   ```sh
   npm run start
   ```

   **Android için**:

   ```sh
   npm run android
   ```

   **iOS için**:

   ```sh
   npm run ios
   ```

## Kullanım

### Uçuş Ekleme

**Uçuş Ekle Butonu**: Başlık kısmındaki `+` butonuna tıklayarak rastgele bir uçuş ekleyin. Uygulama, rastgele olarak bir tek yönlü veya iki yönlü uçuş ekler.

### Uçuş Detaylarını Görüntüleme

**Uçuş Listesi**: Ana ekran, eklenen tüm uçuşların listesini görüntüler. Herhangi bir uçuşa tıklayarak detaylarını görüntüleyebilirsiniz.

### Uçuşu Silme

**Uçuşu Kaldır Butonu**: Bir uçuş seçildiğinde, ekranın altında bir kaldırma butonu belirir. Bu butona tıklayarak seçili uçuşu kaldırabilirsiniz.

### Boş Durum

**Boş Durum Ekranı**: Eğer hiç uçuş eklenmemişse, bir uçuş eklemeniz gerektiğini belirten bir boş durum ekranı gösterilir.

## Redux Durum Yönetimi

Bu projede, uygulamanın durum yönetimi için Redux Toolkit kullanılmıştır. Tek yönlü ve iki yönlü uçuşlar için ayrı ayrı slice'lar oluşturulmuş ve bu slice'lar `store.js` dosyasında birleştirilmiştir.

### `flightSlice.js`

- `addFlight`: Yeni bir tek yönlü uçuş ekler.
- `removeFlight`: Belirli bir tek yönlü uçuşu listeden çıkarır.
- `setSelectedFlight`: Bir uçuşu seçili olarak ayarlar.
- `clearSelectedFlight`: Seçili uçuşu temizler.

### `twoWaySlice.js`

- `addTwoWayFlight`: Yeni bir iki yönlü uçuş ekler.
- `removeTwoWayFlight`: Belirli bir iki yönlü uçuşu listeden çıkarır.
- `setSelectedTwoWayFlight`: Bir uçuşu seçili olarak ayarlar.
- `clearSelectedTwoWayFlight`: Seçili uçuşu temizler.

## UI Bileşenleri

Projedeki her bileşen, yeniden kullanılabilir ve özelleştirilebilir olacak şekilde tasarlanmıştır. Ana bileşenler şunlardır:

- **FlightCard**: Uçuş bilgilerini gösteren ana kart bileşeni.
- **TwoWayFlightCard**: İki yönlü uçuşları gösteren kart bileşeni.
- **Header**: Uygulamanın başlık kısmını içerir.
- **EmptyState**: Uygulamada uçuş olmadığı zaman gösterilen boş durum bileşeni.
- **RemoveButton**: Uçuş kartını kaldırmak için kullanılan buton.

## Veri Yönetimi

Veri yönetimi için projede JSON dosyaları kullanılmıştır. `flightData.json` ve `twoWayFlightData.json` dosyaları, uçuş bilgilerinin tutulduğu dosyalardır. Bu veriler, uygulamanın bileşenlerine geçilerek kartlar üzerinde gösterilir.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

1. Projeyi Fork'layın
2. Yeni bir Branch oluşturun (`feature/AmazingFeature`)
3. Değişikliklerinizi Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e Push yapın (`git push origin feature/AmazingFeature`)
5. Bir Pull Request açın

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.

## Notlar

Bu proje bir Windows cihaz üzerinde geliştirildiği için, Android emülatör üzerinde test edilmesi tavsiye edilir. iOS build ve testleri yapılamadığından bazı eksiklikler bulunabilir.

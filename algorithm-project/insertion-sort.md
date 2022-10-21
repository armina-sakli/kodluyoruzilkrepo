# Insertion Sort
#### [22,27,16,2,18,6] -> Insertion sort

1. *Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.*
* En basit sorting algoritmalarından biridir.
* Türkçe karşılığı **araya sokma sıralaması**dır.
* Bu algoritmada döngümüz her bir tur döndüğünde sıradaki elemanı sondan başa doğru karşılaştırarak yerine **yerleştirme** esaslıdır.
* En kısa anlatımı ile verilen örüntüye ait en küçük elemanı buluyor ve en baştaki sayı ile yer değiştiriyor.

2. *Big-O gösterimini yazınız.*
* Big-O notation O(n^2)'dir.

3. **Time Complexity:**
**Average case:** Aradığımız sayının ortada olması
**Worst case:** Aradığımız sayının sonda olması 
**Best case:** Aradığımız sayının dizinin en başında olması.

4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
* Dizenin sıralanmış hali [2,6,16,18,22,27]'dir.
* 18 sayısı *Average case* kapsamına girer.

5. **[7,3,5,8,2,9,4,15,6]** dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
* **1.adım:** İlk öncelikle burada time complexity worst case işlenir. Çünkü her bir sayıya tek tek bakar. Big-O ise O(n^2)'dir.
* **2.adım:** 7 ve 3'ü karşılaştırır ve hangisinin küçük olduğuna bakılır. 3, 7'den küçük ise 3, 7'nin yerine yazılır ve 7'de 3'ün yerine yazılır.
* **3.adım:** Şimdi sıralama **[3,7,5,8,2,9,4,15,6]** böyle oldu. Şimdi 7 ile 5 arasına bakılır. 5, 7'den küçük olduğu için 5, 7'nin yerine yazılır.
* **4.adım:** Yeni sıralama **[3,5,7,8,2,9,4,15,6]** oldu. Sırada 7 ile 8 arasındaki sayı bakılır. 7'i zaten 8'den küçük olduğu için yerine karışmaz diğer sayıya geçer.

Kaynak [https://www.patika.dev/](Patika.dev)
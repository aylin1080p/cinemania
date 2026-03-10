# Cinemania — Section Bazlı 8 Kişilik Görev Dağılımı

Bu projede her geliştirici **bir UI section'ın tam sahibi** olacaktır. Yani bir kişi:

* HTML markup
* SCSS stilleri (mobile / tablet / desktop responsive)
* JavaScript davranışı
* event listener'lar
* API bağlantıları
* navigation / modal tetiklemeleri

hepsinden sorumlu olur.

Böylece:

* Her section'ın net bir sahibi olur
* Hata çıktığında sorumlu kişi hızlı bulunur
* Çakışma ve merge problemi azalır
* Her geliştirici full‑stack frontend deneyimi kazanır

---

# Genel Kurallar

### Branch kuralı

Her geliştirici kendi branch'inde çalışır

Örnek:

```
feature/header-hero
feature/home-trends
feature/home-upcoming
feature/catalog-search
feature/catalog-pagination
feature/movie-modal
feature/library-section
feature/footer-theme
```

### Pull Request

Her iş PR ile gelir.

PR açıklaması:

```
Ne yapıldı
Nasıl test edilir
Ekran görüntüsü
Bilinen eksikler
```

### Kimse şu dosyalara dokunamaz

(Sadece Team Lead)

```
vite.config.js
package.json
src/services/tmdb-api.js
src/utils/storage.js
src/utils/theme.js
src/sass/index.scss
```

---

# Developer 1 — Header + Hero (GLOBAL)

### Section

* Header
* Navigation
* Mobile menu
* Hero section

### Sorumluluklar

Header ve hero tüm sayfalarda çalışır:

* Home
* Catalog
* Library

Bu yüzden global component olarak yazılmalıdır.

### Yapılacaklar

Header:

* logo
* Home link
* Catalog link
* My Library link
* active link state
* mobile menu toggle

Hero:

* günlük trend film
* fallback hero
* More details butonu
* Watch trailer butonu

### Responsive

* mobile
* tablet
* desktop

### Çalışacağı dosyalar

```
src/partials/header.html
src/partials/mobile-menu.html
src/partials/hero.html

src/components/header.js
src/components/mobile-menu.js
src/components/hero.js

src/sass/layouts/_header.scss
src/sass/layouts/_hero.scss
src/sass/components/_navigation.scss
```

### Branch

```
feature/header-hero
```

---

# Developer 2 — Home: Weekly Trends Section

### Section

Home sayfasındaki **Weekly Trends** bloğu

### Yapılacaklar

* haftanın trend filmlerini çekmek
* kart render etmek
* See All linki
* karta tıklayınca modal açılması

### Responsive

* mobile grid
* tablet grid
* desktop grid

### Çalışacağı dosyalar

```
src/partials/weekly-trends.html

src/components/weekly-trends.js

src/templates/movie-card.hbs

src/sass/layouts/_movie-list.scss
src/sass/components/_cards.scss
```

### Branch

```
feature/home-trends
```

---

# Developer 3 — Home: Upcoming This Month

### Section

Home sayfasındaki:

**Upcoming this month**

### Yapılacaklar

* upcoming film çekmek
* rastgele film seçmek
* film poster
* release date
* rating
* genres
* açıklama

### Library butonu

```
Add to My Library
Remove from My Library
```

### Responsive

* mobile stacked
* tablet layout
* desktop layout

### Çalışacağı dosyalar

```
src/partials/upcoming.html

src/components/upcoming.js

src/sass/layouts/_upcoming.scss
src/sass/components/_buttons.scss
```

### Branch

```
feature/home-upcoming
```

---

# Developer 4 — Catalog: Search Section

### Section

Catalog sayfasındaki:

* search bar
* year filter
* clear button

### Davranışlar

* keyword search
* year filter
* clear input
* boş sonuç mesajı

### Çalışacağı dosyalar

```
src/partials/search-bar.html

src/components/catalog-search.js

src/sass/components/_forms.scss
src/sass/layouts/_catalog.scss
```

### Branch

```
feature/catalog-search
```

---

# Developer 5 — Catalog: Movie List + Pagination

### Section

Catalog sayfası:

* movie grid
* pagination

### Yapılacaklar

* film kartı render
* sayfa değişimi
* server pagination

### Çalışacağı dosyalar

```
src/partials/movie-list.html
src/partials/pagination.html

src/components/movie-list.js

src/utils/pagination.js

src/sass/layouts/_pagination.scss
src/sass/layouts/_movie-list.scss
```

### Branch

```
feature/catalog-pagination
```

---

# Developer 6 — Modal System

### Section

Modal sistemi:

* Movie details modal
* Trailer modal

### Davranışlar

Modal kapanmalı:

* ESC
* overlay click
* close button

### Çalışacağı dosyalar

```
src/partials/movie-modal.html
src/partials/trailer-modal.html

src/components/modal.js
src/components/trailer.js

src/templates/modal-details.hbs

src/sass/components/_modal.scss
```

### Branch

```
feature/modal-system
```

---

# Developer 7 — My Library Page

### Section

Library sayfası

### Yapılacaklar

* kullanıcı eklediği filmleri görmek
* boş library mesajı
* load more
* genre filter

### Çalışacağı dosyalar

```
src/pages/library/index.html

src/partials/library-list.html

src/components/library-list.js

src/templates/library-card.hbs

src/sass/layouts/_library.scss
```

### Branch

```
feature/library-section
```

---

# Developer 8 — Footer + Theme + Loader + Scroll Up

### Section

* footer
* theme switch
* loader
* scroll up
* team modal

### Davranışlar

Theme:

```
dark
light
```

LocalStorage kullanılmalı.

### Çalışacağı dosyalar

```
src/partials/footer.html
src/partials/team-modal.html
src/partials/loader.html

src/components/footer.js
src/components/theme-switch.js
src/components/team-modal.js

src/utils/loader.js
src/utils/scroll-up.js

src/sass/layouts/_footer.scss
src/sass/components/_loader.scss
src/sass/components/_theme-switch.scss
src/sass/components/_scroll-up.scss
```

### Branch

```
feature/footer-theme
```

---

# Sayfa Entegrasyon Sorumluluğu

### Home

| Section       | Developer |
| ------------- | --------- |
| Header        | Dev 1     |
| Hero          | Dev 1     |
| Weekly Trends | Dev 2     |
| Upcoming      | Dev 3     |
| Modal         | Dev 6     |
| Footer        | Dev 8     |

### Catalog

| Section    | Developer |
| ---------- | --------- |
| Header     | Dev 1     |
| Search     | Dev 4     |
| Movie List | Dev 5     |
| Pagination | Dev 5     |
| Modal      | Dev 6     |
| Footer     | Dev 8     |

### Library

| Section      | Developer |
| ------------ | --------- |
| Header       | Dev 1     |
| Library List | Dev 7     |
| Modal        | Dev 6     |
| Footer       | Dev 8     |

---

# Team Lead

Team Lead:

* mimariyi korur
* merge yapar
* deploy yapar
* API entegrasyonunu denetler
* çatışmaları çözer

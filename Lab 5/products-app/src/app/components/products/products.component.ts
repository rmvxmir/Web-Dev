import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],  // Enables *ngFor and *ngIf
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categories = ['Smartphones', 'Watches', 'Laptops', 'Accessories'];
  selected = 'Smartphones';

  products = [
    { 
      id: 1,
      category: 'Smartphones',
      name: 'iPhone 15 Pro (Blue)', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074012827408/231108150147921100.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074012827408/231108150148460299.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074012827408/231108150148653225.png@webp'
      ], 
      description: 'Flagship smartphone with an advanced camera and A17 Pro chip.', 
      rating: 4.8,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-sinii-113138222/?m=1365000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYrWl1k5tpsNZfXa45azxnDucNFGxdRPCjlApun8s0z6uPM4baS9A24aAgNQEALw_wcB' 
    },
    { 
      id: 2,
      category: 'Smartphones',
      name: 'iPhone 15 Pro (Black)',
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074006947495/231108150046076891.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074006947495/231108150046593148.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074006947495/231108150046770017.png@webp'
      ], 
      description: 'Sleek and powerful smartphone with ProMotion display.', 
      rating: 4.7,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?m=4865013&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYpyuxBwVZTO63HA601s-phABXs3Ey7VUQ8HifO6xpkgeDj5bsr_1DwaAnVYEALw_wcB' 
    },
    { 
      id: 3,
      category: 'Smartphones',
      name: 'iPhone 15 Pro (Natural Titanium)', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074011980865/231108150112172839.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074011980865/231108150112704887.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913074011980865/231108150112873140.png@webp'
      ], 
      description: 'Premium titanium design with best-in-class performance.', 
      rating: 4.9,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?srsltid=AfmBOooPo6p13KxAaWImhXKd51I1cH9Vgc-xBtLd1DOIL3MonS2lp8HU' 
    },
    { 
      id: 4, 
      category: 'Laptops',
      name: 'MacBook Pro M2', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011151695.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011224734.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140014297077.png@webp'
      ], 
      description: 'Powerful laptop with M2 chip and Retina display.', 
      rating: 4.9, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-macos-mtl73-114877279/?m=Smarttimekz&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    },
    { 
      id: 5,
      category: 'Accessories',
      name: 'iPhone 15 Pro Clear Case', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081112320996/230915140014197276.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081112320996/230915140014197276.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081112320996/230915140014197276.jpg@webp'
      ], 
      description: 'Transparent case that showcases the phone design.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-clear-case-magsafe-dlja-apple-iphone-15-pro-prozrachnyi-114014356/?m=Sulpak&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYpZOTY0dpI5jNKQPiF30r3BJQj9JeRovl9SybR8Wz3Axr4i_1ZPpqAaAop5EALw_wcB' 
    },
    { 
      id: 6, 
      category: 'Accessories',
      name: 'iPhone 15 Pro Max Clear Case', 
      imageUrls: [
      'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081112320996/230915140014197276.jpg@webp',
      'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081112320996/230915140014197276.jpg@webp',
      'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081112320996/230915140014197276.jpg@webp'
      ], 
      description: 'Durable case providing ultimate protection.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-clear-case-magsafe-dlja-apple-iphone-15-pro-max-prozrachnyi-114014345/?m=8826016&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYq21dOP6gM27cU5GIDQhv5ScklgWOce6PCo8uem9vL0P-jNMxvzFCIaAkQ8EALw_wcB' 
    },
    { 
      id: 7, 
      category: 'Smartphones',
      name: 'iPhone 16 Pro Max (Desert Titanium)', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909224127623936/240911100044508480.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909224127623936/240911100044630545.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909224127623936/240911100044508480.png@webp'
      ], 
      description: 'Next-gen iPhone with cutting-edge features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-zolotistyi-123888919/?m=400003&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqYengMswBKq8iL6EnVyDc5KkMjpKVhN8eD-Fu8f_SCeukm05yoJ2YaApibEALw_wcB' 
    },
    { 
      id: 8, 
      category: 'Accessories',
      name: 'iPhone charge adapter', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/201014082109079002/201014160037119159.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/201014082109079002/201014160037129462.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/201014082109079002/201014160037129462.jpg@webp'
      ], 
      description: 'Fast and efficient charger for iPhones.', 
      rating: 4.8, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?m=Apples%20Kazakhstan&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_10k-30k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYr8ErloDPgszpwv43b6XfvxFjxVY2LkVLjbLpbbvgN-w_aAMksxxFIaAtvaEALw_wcB' 
    },
    { 
      id: 9, 
      category: 'Watches',
      name: 'Apple Watch Series 10', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032615725.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp'
      ], 
      description: 'Brand new watches with more features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-chernyi-128355493/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYq_sGBgsw42n_YxJApTTiOCfWCXtXcjIMOhp31oLj98Fu9YvK2ZJsEaAripEALw_wcB' 
    },
    { 
      id: 10, 
      category: 'Accessories',
      name: 'Apple Watch Nike Band', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083258363855/220909140012521144.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083258363855/220909140012538387.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083258363855/220909140012553446.jpg@webp'
      ], 
      description: 'A stylish sport band.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/remeshok-apple-dlja-apple-watch-series-7-watch-series-8-45-mm-chernyi-106653134/?srsltid=AfmBOorilgR0rF5g3zkUOYSgER5oiUU3I40T5SWJGqlVLaRugdFeOf4p&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    },
    { 
      id: 11, 
      category: 'Smartphones',
      name: 'iPhone 16 Pro Max (Desert Titanium)', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909224127623936/240911100044508480.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909224127623936/240911100044630545.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909224127623936/240911100044508480.png@webp'
      ], 
      description: 'Next-gen iPhone with cutting-edge features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-zolotistyi-123888919/?m=400003&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqYengMswBKq8iL6EnVyDc5KkMjpKVhN8eD-Fu8f_SCeukm05yoJ2YaApibEALw_wcB' 
    },
    { 
      id: 12, 
      category: 'Watches',
      name: 'Apple Watch Series 10', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032615725.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp'
      ], 
      description: 'Brand new watches with more features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-chernyi-128355493/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYq_sGBgsw42n_YxJApTTiOCfWCXtXcjIMOhp31oLj98Fu9YvK2ZJsEaAripEALw_wcB' 
    },
    { 
      id: 13, 
      category: 'Watches',
      name: 'Apple Watch Series 10', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032615725.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp'
      ], 
      description: 'Brand new watches with more features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-chernyi-128355493/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYq_sGBgsw42n_YxJApTTiOCfWCXtXcjIMOhp31oLj98Fu9YvK2ZJsEaAripEALw_wcB' 
    },
    { 
      id: 14, 
      category: 'Watches',
      name: 'Apple Watch Series 10', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032615725.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp'
      ], 
      description: 'Brand new watches with more features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-chernyi-128355493/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYq_sGBgsw42n_YxJApTTiOCfWCXtXcjIMOhp31oLj98Fu9YvK2ZJsEaAripEALw_wcB' 
    },
    { 
      id: 15, 
      category: 'Watches',
      name: 'Apple Watch Series 10', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032615725.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/240909223955069986/240913080032723740.png@webp'
      ], 
      description: 'Brand new watches with more features.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-chernyi-128355493/?m=3233010&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYq_sGBgsw42n_YxJApTTiOCfWCXtXcjIMOhp31oLj98Fu9YvK2ZJsEaAripEALw_wcB' 
    },
    { 
      id: 16, 
      category: 'Laptops',
      name: 'MacBook Pro M2', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011151695.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011224734.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140014297077.png@webp'
      ], 
      description: 'Powerful laptop with M2 chip and Retina display.', 
      rating: 4.9, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-macos-mtl73-114877279/?m=Smarttimekz&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    },
    { 
      id: 17, 
      category: 'Laptops',
      name: 'MacBook Pro M2', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011151695.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011224734.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140014297077.png@webp'
      ], 
      description: 'Powerful laptop with M2 chip and Retina display.', 
      rating: 4.9, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-macos-mtl73-114877279/?m=Smarttimekz&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    },
    { 
      id: 18, 
      category: 'Laptops',
      name: 'MacBook Pro M2', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011151695.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011224734.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140014297077.png@webp'
      ], 
      description: 'Powerful laptop with M2 chip and Retina display.', 
      rating: 4.9, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-macos-mtl73-114877279/?m=Smarttimekz&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    },
    { 
      id: 19, 
      category: 'Laptops',
      name: 'MacBook Pro M2', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011151695.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140011224734.png@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220607122439330551/220831140014297077.png@webp'
      ], 
      description: 'Powerful laptop with M2 chip and Retina display.', 
      rating: 4.9, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-8-gb-ssd-512-gb-macos-mtl73-114877279/?m=Smarttimekz&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    },
    { 
      id: 10, 
      category: 'Accessories',
      name: 'Apple Watch Regular Band', 
      imageUrls: [
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083258363855/220909140012521144.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083258363855/220909140012538387.jpg@webp',
        'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083258363855/220909140012553446.jpg@webp'
      ], 
      description: 'A stylish silicon band.', 
      rating: 5.0, 
      likes: 0,
      link: 'https://kaspi.kz/shop/p/remeshok-apple-dlja-apple-watch-series-7-watch-series-8-45-mm-chernyi-106653134/?srsltid=AfmBOorilgR0rF5g3zkUOYSgER5oiUU3I40T5SWJGqlVLaRugdFeOf4p&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_500k&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYqCmHg6ELGFQCN83fLw84ZJJ0ppUu4MkT_Oa_uOQQ6D21430OFhEeQaAp9nEALw_wcB' 
    }
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  activeIndex: number[] = this.products.map(() => 0);

  prevImage(index: number) {
    if (this.activeIndex[index] > 0) {
      this.activeIndex[index]--;
    } else {
      this.activeIndex[index] = this.products[index].imageUrls.length - 1;
    }
  }

  nextImage(index: number) {
    if (this.activeIndex[index] < this.products[index].imageUrls.length - 1) {
      this.activeIndex[index]++;
    } else {
      this.activeIndex[index] = 0;
    }
  }

  shareProductWhatsapp(product: any) {
    const message = `Check out this product:`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  shareProductTelegram(product: any) {
    const message = 'Check out this product:';
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  }
}

angular.module('myApp').controller('ProductController',function($scope,$rootScope){
	

$rootScope.products = [
  {
    "id":"1",
    "title":"20 Foot Equipment Trailer",
    "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
    "price":6000,
    "posted":"2015-10-24",
    "contact": {
      "name":"John Doe",
      "phone":"(555) 555-5555",
      "email":"johndoe@gmail.com"
    },
    "categories":[
      "Vehicles",
      "Parts and Accessories"
    ],
    "image": "http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
    "views":213
  },
  {
    "id":"2",
    "title":"Canada Goose Jacket",
    "description":"Red woman's Canada Goose Montebello jacket. It was used for two seasons. This jacket retails for $745. The jacket has been professionally cleaned since it was last worn by anyone.",
    "price": 500,
    "posted": "2015-10-28",
    "contact": {
      "name": "Jane Doe",
      "phone": "(555) 555-5555",
      "email": "janedoe@gmail.com"
    },
    "categories": [
      "Clothing"
    ],
    "image":"http://canadagoose-jacket.weebly.com/uploads/9/2/3/3/9233177/9087323_orig.jpg",
    "views":422
  },
  {
    "id":"3",
    "title":"Baby Crib and Matress",
    "description":"Good condition.",
    "price":50,
    "posted":"2015-10-27",
    "contact": {
      "name":"Jane Doe",
      "phone":"(555) 555-5555",
      "email":"janedoe@gmail.com"
    },
    "categories":[
      "Furniture"
    ],
    "image":"http://images.landofnod.com/is/image/LandOfNod/Crib_Anderson_Nat_V1/$web_setitem$/1308310657/andersen-crib-maple.jpg",
    "views":23
  },
  {
    "id":"4",
    "title":"Leather Sofa",
    "description":"Brown leather sofa for sale.  Good condition but small tear on one cushion.",
    "price":250,
    "posted":"2015-11-01",
    "contact": {
      "name":"John Doe",
      "phone":"(555) 555-5555",
      "email":"johndoe@gmail.com"
    },
    "categories":[
      "Furniture"
    ],
    "image":"data:image/jpeg;base64,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",
    "views":77
  },
  {
    "id":"5",
    "title":"MacBook Air",
    "description":"2013 MacBook Air. Great condition, but a few scratches.",
    "price":1150,
    "posted":"2015-11-02",
    "contact": {
      "name":"John Doe",
      "phone":"(555) 555-5555",
      "email":"johndoe@gmail.com"
    },
    "categories":[
      "Electronics",
      "Computer Parts and Accessories"
    ],
    "image":"http://cdn.macrumors.com/article-new/2014/11/macbook_air_yosemite-800x450.jpg?retina",
    "views":889
  },
  {
    "id":"6",
    "title":"2008 Dodge Caliber",
    "description":"Battery blanket and block heater installed. Winter tires, good tread left are on the car currently. Car comes with 4 summer tires with also good treads left. Hydraulic power steering fluid line installed so this won't break on you in the cold Yellowknife winters! Synthetic oil used, good for 1000+ more KMs. AC/Sunroof/power doors/steering, CD player/radio. Red accented dash and upolstry.",
    "price":4800,
    "posted":"2015-11-03",
    "contact": {
      "name":"John Doe",
      "phone":"(555) 555-5555",
      "email":"johndoe@gmail.com"
    },
    "categories":[
      "Vehicles",
      "Cars"
    ],
    "image":"http://images.buysellsearch.com/image/orig/8dfc4f6c5d411130d19dedd28d61bc2b/2009-dodge-caliber-se.jpg",
    "views":423
  }
]
});
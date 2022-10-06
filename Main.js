Vue.component('product-item', {
  props: ['item'],
  template: `
  <div id="item">
    <div id="product-image">
      <img :src="item.src">
    </div>
    <div id="product-details">
      <h2>{{item.name}}</h2>
      <p>{{item.des}}</p>
    </div>
    <h1 id="theprice">{{item.price}}</h1>
    <button @click="$emit('add',item.id)" id="basket-button">Add to basket</button>
    <button @click="$emit('remove',item.id)" id="basket-remove">Delete from basket</button>
  </div>`
})


var app = new Vue({
  el: '#app',
  data: {
    company: 'ISH BEAUTY',
    ph: '+91 6283078041',
    email: 's222184902@deakin.edu.au',
    github: 'Github Profile',
    isproduct: true,
    isabout: false,
    iscontact: false,
    isfeedback: false,
    isJoinus: false,
    isbaby: true,
    iscosmetic: false,
    ishaircare: false,
    ismedicine: false,
    isbasket: false,
    basket: [],
    finalbasket: [],
    products: [ { src: "https://static.chemistwarehouse.com.au/ams/media/pi/84028/2DF_200.jpg", name: "Aveeno Moisturizer", des: "Can be used as a baby shampoo and as a baby bath wash, Gentle enough for newborns and babies with sensitive skin, Cleans without drying, Hypoallergenic, Tear free and soap free for minimal irritation, No added parabens and no added phthalates, Lightly fragranced with a fresh scent", price: "$10", type: "baby", id: "A1", qty: 1 },
    { src: "https://cdn0.woolworths.media/content/wowproductimages/large/140756.jpg", name: "Sudocrem Nappy Cream Healing ", des: "Sudocrem Healing Cream is a barrier formulation to help protect skin against nappy rash. Protects & provides soothing relief of nappy rash symptoms. A soothing emollient cream which helps protect skin against nappy rash and provides relief of nappy rash symptoms.", price: "$9", type: "baby", id: "A2", qty: 1 },
    { src: "https://cdn0.woolworths.media/content/wowproductimages/large/1073838418.jpg", name: "Johnson's Baby Bath", des: " NATURALCALM aroma with the scent of jasmine & lily, NO MORE TEARS formula is as gentle to the eyes as pure water, Dermatologist-tested and hypoallergenic, No added parabens, phthalates, sulfates and dyes", price: "$16", type: "baby", id: "A3", qty: 1 },
    { src: "https://cdn0.woolworths.media/content/wowproductimages/large/961095.jpg", name: "Little One's Wipes", des: "Little One's is a great quality and value baby care range that consistants of wipes, nappy bags, nappies and nappy pants across various life stages. Our award winning Little One's Baby Wipes are enriched with Aloe Vera, Vitamin E and Chamomile extract and are gentle enough for your baby’s hands and face. The hypoallergenic formulation is alcohol and soap free, pH balanced and has been dermatologically tested", price: "$3", type: "baby", id: "A4", qty: 1 },
    { src: "https://images.scentregroup.io/image/fetch/c_pad,b_auto,w_750,h_1125,f_auto,dpr_1/https://media-prod-use-1.mirakl.net/SOURCE/30014e0b3cb746169180e00258a6d78a", name: "Gaia Body Wash", des: "Made with coconut-derived cleansing agents, this Baby Hair and Body Wash is GENTLE ON SKIN yet tough on dirt. Formulated for everyday use - no soap or sulphates which can cause dryness and it’s pH balanced which means it won’t strip them of NATURAL PROTECTIVE OILS.", price: "$5", type: "baby", id: "A5", qty: 1 },

    { src: "https://sdcdn.io/mac/au/mac_sku_M0N904_1x1_0.png?width=1080&height=1080", name: "Mac lipstick", des: "A long-wearing Lipstick formula with intense colour payoff and a completely matte finish. Intense colour payoff meets tenacious wear in a fade-proof, non-feathering formula.Ensures the colour glides onto lips smoothly without causing skin dehydration.", price: "$25", type: "cosmetic", id: "B1", qty: 1 },
    { src: "https://cdn.shopify.com/s/files/1/1491/3294/products/Victoria_s-Secret-Bare-Vanilla-Fragrance-Mist-250ml_600x.jpg?v=1588683419", name: "Victoria Secret Body Mist", des: "Victoria's Secret Bare Vanilla Fragrance Mist is a fresh oriental body mist featuring fruit notes, apple blossom and vanilla. Warm, comforting like a second skin. This is the top-selling Victoria's Secret scent, and for good reason.", price: "$15", type: "cosmetic", id: "B2", qty: 1 },
    { src: "https://image-optimizer-reg.production.sephora-asia.net/images/product_images/closeup_1_Product_6291106034271-Huda-Beauty-Nude-Obsessions-Eyeshadow-Palette-Mini-Medium_d464db0e697ff871b3ac8ca4d5d5c0c36f63896e_1570605411.png", name: "Huda Beauty Eye Shadow Palette", des: "Clean & Clear Foaming Face Wash helps prevent oily skin and pimples. Its rich foam gently cleanses to remove dirt without drying your skin. It is specially designed unique formulation cleanses skin thoroughly preventing common skin problems..", price: "$14", type: "cosmetic", id: "B3", qty: 1 },
    { src: "https://img1.theiconic.com.au/4tAG1jbu0lgxjtppAZemxoOcTco=/fit-in/1000x0/filters:fill(ffffff):quality(85):format(webp)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fmaybelline-9717-5747171-1.jpg", name: "Maybelline Mascara", des: "Waterproof volumising and lengthening mascara for sky high eyelashes; Buildable formula with nourishing bamboo extract and fibres for fuller and longer lashes; Suitable for all lashes. For limitless lengthening volume from every angle; Lightweight body without the weigh-down;Richly pigmented colour without flakes; Defining, curling and lash-multiplying effect", price: "$13", type: "cosmetic", id: "B4", qty: 1 },
    { src: "https://tartecosmetics.com/dw/image/v2/BBPW_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dwa8c31701/836/RECTANGLE_MAIN/836-shape-tape-concealer-20B-lght-MAIN2-0.jpg?sw=2000&sh=2667&sm=fit", name: "Tarte Concealer", des: " This liquid concealer works to conceal redness, flaws, and blemishes to achieve a more flawless skin complexion. This oil free and non Comedogenic concealer banishes the signs of fatigue creating a more rested appearance. Achieve complete, yet natural concealer coverage with a formula that blends effortlessly to the skin", price: "$40", type: "cosmetic", id: "B5", qty: 1 },

    { src: "https://m.media-amazon.com/images/I/71Ndx9ej5NL._AC_SX679_.jpg", name: "Ogx Shampoo", des: "Awaken your senses, Fragrant scents of cherry blossom extract and green tea, Tantalizes your senses, Leaves you with voluminous, moisture-rich hair and Lightly quench strands while adding body with sheer hydration", price: "$11", type: "haircare", id: "C1", qty: 1 },
    { src: "https://assets.kogan.com/images/yourdiscount/YDT-214759/1-91c37595dd-214759.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753", name: "Sunsilk Conditioner", des: "This exclusive formula, with Biotin & Sunflower Seed Oil, gives your hair more body and bounce.Use After Every Shampoo. Simple, vibrant, full of colour and scents, Sunsilk stands shoulder to shoulder with you every step of the way. In a vibrant and constantly changing world, we can celebrate each challenge with protected, repaired, strong and well-groomed hair. Gently Massage Through To The Ends Of Your Hair, Then Rinse Thoroughly.", price: "$13", type: "haircare", id: "C2", qty: 1 },
    { src: "https://m.media-amazon.com/images/I/71+WpPh3ohS._AC_SX679_.jpg", name: "Lo'real Paris Hair Mask", des: "Dry hair can lack nourishment leaving it feeling rough, dull and lifeless. Deeply hydrates and nourishes hair, No weigh down, Addictive coconut fragrance, Smooths hair fiber for infinite shine, Hair mask treatment", price: "$9", type: "haircare", id: "C3", qty: 1 },
    { src: "https://cdn0.woolworths.media/content/wowproductimages/large/726290.jpg", name: "Toni & Guy Heat Protectant", des: "The unique formula in our Heat Protection Mist controls and protects hair against heat damage from regular blow-drying and heat styling up to 230°C. Leaves hair feeling soft and smooth, Improve the manageability of your hair and protect against future damage, Before heat styling, spritz evenly over damp hair and comb through, Ideal for all hair types, and perfect to use with other styling products to maximise your style, To help repair damaged hair, use with Toni&Guy Damage Repair Shampoo and Conditioner, and Leave In Conditione", price: "$15", type: "haircare", id: "C4", qty: 1 },

    { src: "https://cdn0.woolworths.media/content/wowproductimages/large/309789.jpg", name: "Cetaphil Cleanser", des: "Gentle Skin CleanserFor dry to normal, sensitive skinThis creamy formula is clinically proven to provide continuous hydration to protect against dryness. Formula that gently yet effectively removes dirt, makeup and impurities.• Designed with a science backed blend of niacinamide (essential vitamin B3) , panthenol (pro-vitamin B5) and hydrating glycerin to help improve the resilience of sensitive skin• 94% of users felt the product gently cleansed their skin • Dermatologist tested and clinically proven to be gentle on sensitive skin. This creamy formula is clinically proven to provide very good hydration to protect from dryness, all while leaving the skin hydrated after cleansing.", price: "$11", type: "skincare", id: "D1", qty: 1 },
    { src: "https://www.homegeneral.com.au/assets/full/95050065.jpg?20210309031234", name: "Cancer Council", des: "SPF30 protection, Broad spectrum UVA + UVB protection, Easily applied with no white residue, Light, non-greasy lotion for daily use, Suitable for all skin types. Not suitable for babies under 6 months oldTested to 4 hours water resistance. Cancer Council recommends reapplying every 2 hours.", price: "$6", type: "skincare", id: "D2", qty: 1 },
    { src: "https://www.adorebeauty.com.au/media/catalog/product/t/h/the_ordinary_glycolic_acid_7_toning_solution.png?width=600&height=600", name: "The Ordinary", des: "Designed to target textural irregularities and lackluster tone, The Ordinary Glycolic Acid 7% Toning Solution contains  7% Glycolic Acid, Amino Acids, Aloe Vera, Ginseng and Tasmanian Pepperberry. Glycolic Acid is an alpha hydroxyl acid that exfoliates the skin. Glycolic Acid exfoliates the skin for smoother skin texture, improves skin radiance and offers visibly improved clarity, Contains derivatives to reduce irritation, pH optimised", price: "$20", type: "skincare", id: "D3", qty: 1 },
    { src: "https://www.adorebeauty.com.au/pim_media/000/405/947/CeraVe_AM.png?width=600&height=600", name: "Cera Ve", des: "Lightweight and fast-absorbing, Hydrates and nourishes the skin, Maintains and strengthens the skin’s barrier, Provides 24-hour long hydration, Soothes the skin, Maintains hydration throughout the day, Contains SPF15+", price: "$23", type: "skincare", id: "D4", qty: 1 },
    { src: "https://cdn.shopify.com/s/files/1/0222/2427/3482/products/HeyBud-mask_brush-crop_1024x1024.jpg?v=1664867641", name: "Hey Bud", des: "Improves moisture for makeup-free glow, Reduces acne, scarring, blackheads, Helps regulate oil for dry or oily skin, Fades dark spots and hyperpigmentation, Works for all skin types and ages, 120g of goodness", price: "$8", type: "skincare", id: "D5", qty: 1 }]
  },
  methods: {
    toogleproduct: function () {
      this.isproduct = true;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.isJoinus = false;
    },
    toogleabout: function () {
      this.isproduct = false;
      this.isabout = true;
      this.iscontact = false;
      this.isfeedback = false;
      this.isJoinus = false;
    },
    tooglecontact: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = true;
      this.isfeedback = false;
      this.isJoinus = false;
    },
    tooglefeedback: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = false;
      this.isJoinus = false;
    },
    toogleJoinus: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.isJoinus = true;
    },
    toogleproduct: function () {
      this.isproduct = true;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.isJoinus = false;
    },
    tooglebaby: function () {
      this.isbaby = true;
      this.ishaircare = false;
      this.iscosmetic = false;
      this.ismedicie = false;
    },
    tooglehaircare: function () {
      this.isbaby = false;
      this.ishaircare = true;
      this.iscosmetic = false;
      this.isskincare = false;
    },
    tooglecosmetic: function () {
      this.isbaby = false;
      this.ishaircare = false;
      this.iscosmetic = true;
      this.isskincare = false;
    },
    toogleskincare: function () {
      this.isbaby = false;
      this.ishaircare = false;
      this.iscosmetic = false;
      this.isskincare = true;
    },
    contains: function (obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }
      return false;
    },

    mounted() {
      const JoinusText = document.querySelector(".title-text .Joinus");
      const JoinusForm = document.querySelector("form.Joinus");
      const JoinusBtn = document.querySelector("label.Joinus");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = () => {
        JoinusForm.style.marginLeft = "-50%";
        JoinusText.style.marginLeft = "-50%";
      };
      JoinusBtn.onclick = () => {
        JoinusForm.style.marginLeft = "0%";
        JoinusText.style.marginLeft = "0%";
      };
      signupLink.onclick = () => {
        signupBtn.click();
        return false;
      };
      // Joinus1.onclick = () => {
      //    @click="toogleproduct";
      // }
    },

    add: function (id) {
      for (let i = 0; i < this.products.length; i++) {
        var qty = 0;

        if (this.products[i].id == id) {
          if (this.contains(this.products[i], this.basket)) {
            for (let j = 0; j < this.basket.length; j++) {
              if (this.basket[j].id == id) {
                this.basket[j].qty += 1;
              }
            }

            console.log("alreay there");
          }
          else {
            this.basket.push(this.products[i]);
          }
        }
      }
    },
    remove: function (id) {
      for (let i = 0; i < this.products.length; i++) {
        var qty = 0;

        if (this.products[i].id == id) {
          if (this.contains(this.products[i], this.basket)) {
            for (let j = 0; j < this.basket.length; j++) {
              if ((this.basket[j].id == id) && (this.basket[j].qty >= 1)) {
                this.basket[j].qty -= 1;
                if (this.basket[j].qty == 0) {
                  this.basket.pop(this.products[j]);
                }
              }
            }
          }
          else {
            // this.basket.push(this.products[i]);
          }
        }
      }
    },
    myfunc: function() {
      alert("Thanks for placing your order");
    }
  }
})

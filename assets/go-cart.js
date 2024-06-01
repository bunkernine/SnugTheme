class GoCart {
  constructor(options) {
    const defaults = {
      cartModalFail: ".js-go-cart-modal-fail",
      cartModalFailClose: ".js-go-cart-modal-fail-close",
      cartModal: ".js-go-cart-modal",
      cartModalClose: ".js-go-cart-modal-close",
      cartModalContent: ".js-go-cart-modal-content",
      cartDrawer: ".js-go-cart-drawer",
      cartDrawerContent: ".js-go-cart-drawer-content",
      cartDrawerSubTotal: ".js-go-cart-drawer-subtotal",
      cartDrawerDiscount: ".js-go-cart-drawer-discount",
      cartDrawerBasketTotal: ".js-go-cart-drawer-basket_total",
      cartDrawerItemCount: ".js-go-cart-drawer-item-count",
      cartDrawerMainHeader: ".js-go-cart-drawer-main-header",
      cartDrawerFooter: ".js-go-cart-drawer-footer",
      cartDrawerClose: ".js-go-cart-drawer-close",
      cartMiniCart: ".js-go-cart-mini-cart",
      cartMiniCartContent: ".js-go-cart-mini-cart-content",
      cartMiniCartSubTotal: ".js-go-cart-mini-cart-subtotal",
      cartMiniCartFooter: ".js-go-cart-mini-cart-footer",
      cartTrigger: ".js-go-cart-trigger",
      cartOverlay: ".js-go-cart-overlay",
      cartCount: ".js-go-cart-counter",
      addToCart: ".js-go-cart-add-to-cart",
      addToCartQuick: ".js-go-cart-add-to-cart-quick",
      removeFromCart: ".js-go-cart-remove-from-cart",
      removeFromCartNoDot: "js-go-cart-remove-from-cart",
      itemQuantity: ".js-go-cart-quantity",
      itemQuantityPlus: ".js-go-cart-quantity-plus",
      itemQuantityMinus: ".js-go-cart-quantity-minus",
      cartMode: "drawer",
      drawerDirection: "right",
      displayModal: false,
      // eslint-disable-next-line no-template-curly-in-string
      moneyFormat: window.theme.moneyFormat,
      labelAddedToCart: window.translations.labelAddedToCart,
      labelCartIsEmpty: window.translations.labelCartIsEmpty,
      labelQuantity: "",
      labelRemove:
        '<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2941 1.6C16.684 1.6 17 1.24183 17 0.800001C17 0.358173 16.684 9.59734e-07 16.2941 9.25653e-07L5.70588 0C5.31603 -3.40819e-08 5 0.358172 5 0.8C5 1.24183 5.31603 1.6 5.70588 1.6L16.2941 1.6ZM0 3.80039C0 3.35856 0.358172 3.00039 0.8 3.00039H3V2.99844H19V3.00039H20.8C21.2418 3.00039 21.6 3.35856 21.6 3.80039C21.6 4.24222 21.2418 4.60039 20.8 4.60039H19V19.9984C19 22.2076 17.2091 23.9984 15 23.9984H7C4.79086 23.9984 3 22.2076 3 19.9984V4.60039H0.8C0.358172 4.60039 0 4.24222 0 3.80039ZM17.4 4.60039H4.6V19.9984C4.6 21.3239 5.67452 22.3984 7 22.3984H15C16.3255 22.3984 17.4 21.3239 17.4 19.9984V4.60039ZM14.0008 7.00039C14.4426 7.00039 14.8008 7.31643 14.8008 7.70627V18.2945C14.8008 18.6844 14.4426 19.0004 14.0008 19.0004C13.559 19.0004 13.2008 18.6844 13.2008 18.2945V7.70627C13.2008 7.31643 13.559 7.00039 14.0008 7.00039ZM8.80078 7.70627C8.80078 7.31643 8.44261 7.00039 8.00078 7.00039C7.55895 7.00039 7.20078 7.31643 7.20078 7.70627L7.20078 18.2945C7.20078 18.6844 7.55895 19.0004 8.00078 19.0004C8.44261 19.0004 8.80078 18.6844 8.80078 18.2945V7.70627Z" fill="#B2B4B3"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2941 1.6C16.684 1.6 17 1.24183 17 0.800001C17 0.358173 16.684 9.59734e-07 16.2941 9.25653e-07L5.70588 0C5.31603 -3.40819e-08 5 0.358172 5 0.8C5 1.24183 5.31603 1.6 5.70588 1.6L16.2941 1.6ZM0 3.80039C0 3.35856 0.358172 3.00039 0.8 3.00039H3V2.99844H19V3.00039H20.8C21.2418 3.00039 21.6 3.35856 21.6 3.80039C21.6 4.24222 21.2418 4.60039 20.8 4.60039H19V19.9984C19 22.2076 17.2091 23.9984 15 23.9984H7C4.79086 23.9984 3 22.2076 3 19.9984V4.60039H0.8C0.358172 4.60039 0 4.24222 0 3.80039ZM17.4 4.60039H4.6V19.9984C4.6 21.3239 5.67452 22.3984 7 22.3984H15C16.3255 22.3984 17.4 21.3239 17.4 19.9984V4.60039ZM14.0008 7.00039C14.4426 7.00039 14.8008 7.31643 14.8008 7.70627V18.2945C14.8008 18.6844 14.4426 19.0004 14.0008 19.0004C13.559 19.0004 13.2008 18.6844 13.2008 18.2945V7.70627C13.2008 7.31643 13.559 7.00039 14.0008 7.00039ZM8.80078 7.70627C8.80078 7.31643 8.44261 7.00039 8.00078 7.00039C7.55895 7.00039 7.20078 7.31643 7.20078 7.70627L7.20078 18.2945C7.20078 18.6844 7.55895 19.0004 8.00078 19.0004C8.44261 19.0004 8.80078 18.6844 8.80078 18.2945V7.70627Z" fill="black" fill-opacity="0.05"/> </svg>',
      gift_products: [],
    };
    this.defaults = Object.assign({}, defaults, options);
    this.cartModalFail = document.querySelector(this.defaults.cartModalFail);
    this.cartModalFailClose = document.querySelector(
      this.defaults.cartModalFailClose
    );
    this.cartModal = document.querySelector(this.defaults.cartModal);
    this.cartModalClose = document.querySelectorAll(
      this.defaults.cartModalClose
    );
    this.cartModalContent = document.querySelector(
      this.defaults.cartModalContent
    );
    this.cartDrawer = document.querySelector(this.defaults.cartDrawer);
    this.cartDrawerContent = document.querySelector(
      this.defaults.cartDrawerContent
    );
    this.cartDrawerSubTotal = document.querySelectorAll(
      this.defaults.cartDrawerSubTotal
    );
    this.cartDrawerDiscount = document.querySelectorAll(
      this.defaults.cartDrawerDiscount
    );
    this.cartDrawerBasketTotal = document.querySelectorAll(
      this.defaults.cartDrawerBasketTotal
    );
    this.cartDrawerItemCount = document.querySelectorAll(
      this.defaults.cartDrawerItemCount
    );
    this.cartDrawerMainHeader = document.querySelector(
      this.defaults.cartDrawerMainHeader
    );
    this.cartDrawerFooter = document.querySelector(
      this.defaults.cartDrawerFooter
    );
    this.cartDrawerClose = document.querySelectorAll(
      this.defaults.cartDrawerClose
    );
    this.cartMiniCart = document.querySelector(this.defaults.cartMiniCart);
    this.cartMiniCartContent = document.querySelector(
      this.defaults.cartMiniCartContent
    );
    this.cartMiniCartSubTotal = document.querySelector(
      this.defaults.cartMiniCartSubTotal
    );
    this.cartMiniCartFooter = document.querySelector(
      this.defaults.cartMiniCartFooter
    );
    this.cartTrigger = document.querySelectorAll(this.defaults.cartTrigger);
    this.cartOverlay = document.querySelector(this.defaults.cartOverlay);
    this.cartCount = document.querySelectorAll(this.defaults.cartCount);
    this.addToCart = document.querySelectorAll(this.defaults.addToCart);
    this.removeFromCart = this.defaults.removeFromCart;
    this.removeFromCartNoDot = this.defaults.removeFromCartNoDot;
    this.itemQuantity = this.defaults.itemQuantity;
    this.itemQuantityPlus = this.defaults.itemQuantityPlus;
    this.itemQuantityMinus = this.defaults.itemQuantityMinus;
    this.cartMode = this.defaults.cartMode;
    this.drawerDirection = this.defaults.drawerDirection;
    this.displayModal = this.defaults.displayModal;
    
    this.moneyFormat = window.theme.moneyFormat;
    
    this.labelAddedToCart = this.defaults.labelAddedToCart;
    this.labelCartIsEmpty = this.defaults.labelCartIsEmpty;
    this.labelQuantity = this.defaults.labelQuantity;
    this.labelRemove = this.defaults.labelRemove;
    this.gift_products = this.defaults.gift_products;
    this.init();
  }
  set addGiftProduct(variantID) {
    if (!this.gift_products.some((element) => element === variantID)) {
      this.gift_products.push(variantID);
    }
  }
  set removeGiftProduct(variantID) {
    this.gift_products.filter(function (e) {
      return e !== variantID;
    });
  }
  get emptyGiftProduct() {
    this.gift_products = [];
    return this.gift_products.length == 0;
  }
  get getGiftProducts() {
    return this.gift_products;
  }
  get isDrawerMode() {
    return this.cartMode === "drawer";
  }
  init() {
    this.fetchCart();
    if (this.isDrawerMode) {
      this.setDrawerDirection();
    }
    document.addEventListener(
      "click",
      (event) => {
        
        if (event.target.matches(this.defaults.addToCart)) {
          event.preventDefault();
          let item = event.target;
          let form = item.parentNode;
          while ("form" !== form.tagName.toLowerCase()) {
            form = form.parentNode;
          }
          const formID = form.getAttribute("id");
          this.addItemToCart(formID);
          
        }
      },
      false
    );
    document.addEventListener(
      "click",
      (event) => {
        if (event.target.matches(this.defaults.addToCartQuick)) {
          event.preventDefault();
          let item = event.target;
          let id = item.dataset.variantid;
          this.addItemToCartQuick(id);
        }
      },
      false
    );
    this.cartTrigger.forEach((item) => {
      item.addEventListener("click", () => {
        if (this.isDrawerMode) {
          this.openCartDrawer();
        } else {
          this.openMiniCart();
        }
        this.openCartOverlay();
      });
    });
    this.cartOverlay.addEventListener("click", () => {
      this.closeFailModal();
      this.closeCartModal();
      if (this.isDrawerMode) {
        this.closeCartDrawer();
      } else {
        this.closeMiniCart();
      }
      this.closeCartOverlay();
    });
    if (this.isDrawerMode) {
      this.cartDrawerClose.forEach(close => {
        close.addEventListener("click", () => {
          this.closeCartDrawer();
          this.closeCartOverlay();
        });
      })
    }
    if (this.displayModal) {
      this.cartModalClose.forEach((item) => {
        item.addEventListener("click", () => {
          this.closeFailModal();
          this.closeCartModal();
          if (this.isDrawerMode) {
            this.closeCartDrawer();
          } else {
            this.closeMiniCart();
          }
          this.closeCartOverlay();
        });
      });
    }
    this.cartModalFailClose.addEventListener("click", () => {
      this.closeFailModal();
      this.closeCartModal();
      if (this.isDrawerMode) {
        this.closeCartDrawer();
      } else {
        this.closeMiniCart();
      }
      this.closeCartOverlay();
    });
  }
  fetchCart(callback) {
    window
      .fetch("/cart.js", {
        credentials: "same-origin",
        method: "GET",
      })
      .then((response) => response.json())
      .then((cart) => this.fetchHandler(cart, callback))
      .catch((error) => {
        console.log(error);
        this.ajaxRequestFail();
        throw new Error(error);
      });
  }
  addItemToCart(formID) {
    if (document.querySelector('[name="id"]').value == "") {
      // document.querySelector(".button__tooltip").classList.add("active");
    } else {
      // document.querySelector(".button__tooltip").classList.remove("active");
      const form = document.querySelector(`#${formID}`);
      const formData = new FormData(form);

      const formDataEntries = {};
      formData.forEach((value, key) => {
        formDataEntries[key] = value;
      });

      this.addToCart.forEach((el) => {
        el.classList.add("button--loading");
      });
      var that = this;
      window
        .fetch("/cart/add.js", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataEntries),
        })
        .then((response) => response.json())
        .then((product) => {
          that.addItemToCartHandler(product);
          that.addToCart.forEach((el) => {
            el.classList.remove("button--loading");
          });
          if (window.rtbhEvents) {
            (window.rtbhEvents || []).push(
              {
                eventType: "basketadd",
                offerId: product.sku,
              },
              {
                eventType: "uid",
                id: window.userId,
              }
            );
          }
        })
        .catch((error) => {
          this.ajaxRequestFail();
          throw new Error(error);
        });
    }
  }
  addItemToCartQuick(id) {
    const formData = {
      id: id,
      quantity: 1,
    };
    var that = this;
    window
      .fetch("/cart/add.js", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((product) => {
        that.addItemToCartHandler(product);
      })
      .catch((error) => {
        this.ajaxRequestFail();
        throw new Error(error);
      });
  }
  removeItem(line) {
    const quantity = 0;
    window
      .fetch("/cart/change.js", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({ quantity, line }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then(() => this.fetchCart())
      .catch((error) => {
        this.ajaxRequestFail();
        throw new Error(error);
      });
  }
  changeItemQuantity(line, quantity) {
    window
      .fetch("/cart/change.js", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({ quantity, line }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then(() => this.fetchCart())
      .catch((error) => {
        this.ajaxRequestFail();
        throw new Error(error);
      });
  }
  cartItemCount(cart) {
    this.cartCount.forEach((el) => {
      el.innerHTML = cart.item_count;
    });
  }
  fetchAndOpenCart() {
    this.fetchCart(() => {
      if (this.isDrawerMode) {
        this.openCartDrawer();
      } else {
        this.openMiniCart();
      }
      this.openCartOverlay();
    });
  }
  fetchAndOpenModal(product) {
    this.fetchCart(() => {
      this.renderCartModal(product);
      this.openCartModal();
      this.openCartOverlay();
    });
  }
  fetchHandler(cart, callback) {
    function goMinicartFromGiftBoxControl(e) {
      if (window.gift.inBasket == true) {
        var giftNote = document.querySelector("#gift-note-textarea").value;
        if (!giftNote.length) {
          document.querySelector("#gift-note-input").value = "";
        } else {
          document.querySelector("#gift-note-input").value = giftNote;
        }
        document
          .querySelector(".modal--giftBoxAndNote")
          .classList.remove("modal--show");
      }
    }
    function removeBlurText() {
      var container = document.querySelector(".giftNoteContainer");
      var blurText = container.querySelector(".text-on-blur");
      if (blurText) {
        container.removeChild(blurText);
      }
    }
    this.cartItemCount(cart);
    if (this.isDrawerMode) {
      if (cart.item_count === 0) {
        this.renderBlankCartDrawer();
        this.cartDrawerFooter.classList.add("is-invisible");
        this.cartDrawerFooter.classList.add("!hidden");
        this.cartDrawerMainHeader.classList.add("!hidden");
        //document.querySelector(".policy-input").classList.add("is-invisible");
      } else {
        this.renderDrawerCart(cart);
        this.cartDrawerFooter.classList.remove("is-invisible");
        this.cartDrawerFooter.classList.remove("!hidden");
        this.cartDrawerMainHeader.classList.remove("!hidden");
        //document.querySelector(".policy-input").classList.remove("is-invisible");
        if (typeof callback === "function") {
          callback(cart);
        }
      }
    } else if (cart.item_count === 0) {
      this.renderBlankMiniCart();
      this.cartMiniCartFooter.classList.add("is-invisible");
      //document.querySelector(".policy-input").classList.add("is-invisible");
    } else {
      this.renderMiniCart(cart);
      this.cartMiniCartFooter.classList.remove("is-invisible");
      //document.querySelector(".policy-input").classList.remove("is-invisible");
      if (typeof callback === "function") {
        callback(cart);
      }
    }
    if (cart.items && cart.items.length > 0) {
      var items = [];
      for (let index = 0; index < cart.items.length; index++) {
        const item = cart.items[index];
        items.push(item.sku);
      }
      if (window.rtbhEvents) {
        (window.rtbhEvents || []).push(
          {
            eventType: "basketstatus",
            offerIds: items,
          },
          {
            eventType: "uid",
            id: window.customerId,
          }
        );
      }
      window.gift.inBasket = false;
      document.querySelectorAll(".gift-product-card").forEach(function (item) {
        if (item.querySelector(".button.gift-product-card__size")) {
          item
            .querySelector(".button.gift-product-card__size")
            .classList.remove("button--green_light", "pointer-events-none");
          item
            .querySelector(".button.gift-product-card__size")
            .classList.add("button--black");
          item.querySelector(".button.gift-product-card__size").innerHTML =
            window.gift.lang.add_to_basket;
        }
      });
      for (var i = 0; i < cart.items.length; i++) {
        for (var y = 0; y < window.gift.product.length; y++) {
          if (cart.items[i].variant_id == window.gift.product[y].variantID) {
            window.gift.inBasket = true;
            document
              .querySelector(
                "#" +
                  window.gift.product[y].handle +
                  " button.gift-product-card__size"
              )
              .classList.remove("button--black");
            document
              .querySelector(
                "#" +
                  window.gift.product[y].handle +
                  " button.gift-product-card__size"
              )
              .classList.add("button--green_light", "pointer-events-none");
            document.querySelector(
              "#" +
                window.gift.product[y].handle +
                " button.gift-product-card__size"
            ).innerHTML = "\u2713 EKLEND\u0130";
          }
        }
      }
      if (window.gift.inBasket == true) {
        document
          .querySelector(".giftNoteContainer")
          .classList.remove("pointer-events-none");
        document
          .querySelector("#giftNoteArea")
          .classList.remove("blur-background");
        document.querySelector("#gift-note-textarea").innerHTML =
          document.querySelector("#gift-note-input").value;
        removeBlurText();
      } else {
        if (document.querySelector(".giftNoteContainer")) {
          document
            .querySelector(".giftNoteContainer")
            .classList.add("pointer-events-none");
          if (!document.querySelector(".text-on-blur")) {
            var blurTextDiv = document.createElement("div");
            blurTextDiv.className = "text-on-blur";
            blurTextDiv.innerHTML =
              "Hediye notu eklemek i\xE7in hediye paketini sepete eklemeniz gerekmektedir.";
            document
              .querySelector(".giftNoteContainer")
              .appendChild(blurTextDiv);
          }
        }
        if (document.querySelector("#giftNoteArea"))
          document
            .querySelector("#giftNoteArea")
            .classList.add("blur-background");
        if (document.querySelector("#gift-note-input"))
          document.querySelector("#gift-note-input").value = "";
      }
      if (
        document.querySelector(".button.go-minicart-from-giftBox") &&
        document.querySelector("#gift-note-textarea")
      ) {
        document
          .querySelector(".button.go-minicart-from-giftBox")
          .removeEventListener("click", goMinicartFromGiftBoxControl);
        document
          .querySelector(".button.go-minicart-from-giftBox")
          .addEventListener("click", goMinicartFromGiftBoxControl);
      }
    }
    //CartBox - Campaing - Start Block
      var tiers = window.rs_minicart.tiers;
      window.foundTierIndex = -1;
      var progressValue = 0.04;
      var minPrice = 0;
      this.emptyGiftProduct;
      var that = this;
      for (i = 0; i < tiers.length; i++) {
        for (var j = 0; j < tiers[i].products.length; j++) {
          var product = tiers[i].products[j];
          if (minPrice > product.min_price || minPrice == 0) {
            minPrice = product.min_price;
          }
          if (cart.original_total_price >= product.min_price) {
            window.foundTierIndex = i + 1;
            break;
          }
        }
      }
      if (
        cart.items &&
        cart.items.length > 0 &&
        minPrice > cart.original_total_price
      )
        window.foundTierIndex = 0;
      var shippingBarElement = document.querySelector(".shipping-bar");
      var shippingBarText = document.querySelector(".shipping-bar__text");
      /*progressValue = (window.foundTierIndex) / tiers.length;*/
      if (tiers.length > 1) {
        if (!shippingBarElement.className.includes("range"))
          shippingBarElement.classList.add("range");
      } else {
        if (shippingBarElement.className.includes("range"))
          shippingBarElement.classList.remove("range");
      }
      if (window.foundTierIndex > 0) {
        for (var box = 1; box <= tiers.length; box++) {
          var tier_box;
          for (var tierbox = 1; tierbox <= window.foundTierIndex; tierbox++) {
            if (box <= tierbox) {
              tier_box = document.getElementById("tier-" + box);
              if (tier_box)
                tier_box.style.border =
                  window.rs_minicart.lang.border_css_when_product_matches;
            } else {
              tier_box = document.getElementById("tier-" + box);
              if (tier_box)
                tier_box.style.border =
                  window.rs_minicart.lang.border_css_when_product_does_not_match;
            }
          }
        }
        if (shippingBarText) {
          if (window.foundTierIndex != tiers.length) {
            if (tiers[window.foundTierIndex].products[0].variantID != 0)
              shippingBarText.innerHTML =
                "\uD83D\uDE80 \xDCcretsiz " +
                tiers[window.foundTierIndex].products[0].title +
                " i\xE7in " +
                parseFloat(
                  (tiers[window.foundTierIndex].products[0].min_price -
                    cart.original_total_price) /
                    100
                ).toFixed(2) +
                "\u20BA kald\u0131!";
            else
              shippingBarText.innerHTML =
                "\uD83D\uDE80 " +
                tiers[window.foundTierIndex].products[0].title +
                " i\xE7in " +
                parseFloat(
                  (tiers[window.foundTierIndex].products[0].min_price -
                    cart.original_total_price) /
                    100
                ).toFixed(2) +
                "\u20BA kald\u0131!";
            progressValue =
              cart.original_total_price /
              tiers[tiers.length - 1].products[0].min_price;
          } else {
            if (window.foundTierIndex == 1) {
              shippingBarText.innerHTML =
                "\uD83C\uDF89 " +
                tiers[window.foundTierIndex - 1].products[0].title +
                " kazand\u0131n\u0131z!";
            } else {
              shippingBarText.innerHTML =
                window.rs_minicart.lang.when_all_tiers_are_applied;
            }
            progressValue = 1;
          }
        }
      } else {
        if (shippingBarText) {
          for (box = 1; box <= tiers.length; box++) {
            tier_box = document.getElementById("tier-" + box);
            if (tier_box)
              tier_box.style.border =
                window.rs_minicart.lang.border_css_when_product_does_not_match;
          }
  
          if (cart.items && cart.items.length > 0) {
            shippingBarText.innerHTML =
              "\uD83D\uDE80 " +
              tiers[window.foundTierIndex].products[0].title +
              " i\xE7in " +
              parseFloat(
                (tiers[window.foundTierIndex].products[0].min_price -
                  cart.original_total_price) /
                  100
              ).toFixed(2) +
              "\u20BA kald\u0131!";
  
            progressValue =
              cart.original_total_price /
              tiers[window.foundTierIndex].products[0].min_price;
          } else {
            shippingBarText.innerHTML =
              window.rs_minicart.lang.when_no_tier_is_applied;
  
            progressValue = 0;
          }
        }
      }
      if (shippingBarElement) {
        //progressValue = Math.round(progressValue * 100) / 100;
        progressValue = Math.min(cart.original_total_price / tiers[tiers.length - 1].products[0].min_price, 1);
        shippingBarElement.style.setProperty("--progress", progressValue);
      }
      for (box = 1; box <= tiers.length; box++) {
        if (tiers[box - 1].type == "product") {
          if (box <= window.foundTierIndex) {
            let productControl = false;
            EXIT_ADDTOCART_CARTINDEX: for (
              let cartIndex = 0;
              cartIndex < cart.items.length;
              cartIndex++
            ) {
              for (product of tiers[box - 1].products) {
                if (cart.items[cartIndex].variant_id == product.variantID) {
                  productControl = true;
                  that.addGiftProduct = product.variantID;
                  that.renderDrawerCart(cart);
                  break EXIT_ADDTOCART_CARTINDEX;
                }
              }
            }
            if (productControl == false) {
              that.addItemToCartQuick(tiers[box - 1].products[0].variantID);
              break;
            }
          } else {
            let productControl = false;
            let removefromCart__cartIndex = 0;
            EXIT_REMOVEFROMCART_CARTINDEX: for (
              let cartIndex = 0;
              cartIndex < cart.items.length;
              cartIndex++
            ) {
              for (product of tiers[box - 1].products) {
                if (cart.items[cartIndex].variant_id == product.variantID) {
                  productControl = true;
                  removefromCart__cartIndex = cartIndex;
                  break EXIT_REMOVEFROMCART_CARTINDEX;
                }
              }
            }
            if (productControl == true) {
              that.removeItem(Number(removefromCart__cartIndex + 1));
              break;
            }
          }
        }
      }
      //CartBox - Campaing - End Block

  }
  addItemToCartHandler(product) {
    window
      .fetch("/cart.js", {
        credentials: "same-origin",
        method: "GET",
      })
      .then((response) => response.json())
      .then((cart) => {
        var items_json = '{ "items": ' + JSON.stringify(cart.items) + "}";
        const options = {
          method: "POST",
          headers: {
            accept: "text/html",
            "content-type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            data:
              '{"token": "QpfiMk", "event": "Added to Cart", "customer_properties": {"$email": "' +
              window.customerEmail +
              '"}, "properties": ' +
              JSON.stringify(JSON.parse(items_json)) +
              "}",
          }),
        };
        fetch("https://a.klaviyo.com/api/track", options)
          .then((response) => response.json())
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        this.ajaxRequestFail();
        throw new Error(error);
      });
    return this.displayModal
      ? this.fetchAndOpenModal(product)
      : this.fetchAndOpenCart();
  }
  ajaxRequestFail() {
    this.openFailModal();
    this.openCartOverlay();
  }
  renderCartModal(product) {
    this.clearCartModal();
    let productVariant = product.variant_title;
    if (productVariant === null) {
      productVariant = "";
    } else {
      productVariant = `(${productVariant})`;
    }
    const cartSingleProduct = `
                              <div class="go-cart-modal-item">
                                  <div class="go-cart-item__image" style="background-image: url(${product.image});"></div>
                                  <div class="go-cart-item__info">
                              <a href="${product.url}" class="go-cart-item__title">${product.product_title} ${productVariant}</a> ${this.labelAddedToCart}
                                  </div>
                              </div>      `;
    this.cartModalContent.innerHTML += cartSingleProduct;
  }
  renderDrawerCart(cart) {
    this.clearCartDrawer();
    var totalProduct = 0;
    
    cart.items.forEach((item, index) => {
      var that = this;
      totalProduct = totalProduct + item.quantity;
      let itemVariant = item.variant_title;
      if (itemVariant === null) {
        itemVariant = "";
      }

      let cartSingleProduct = `
                                  <div class="go-cart-item__single" data-line="${Number(
                                    index + 1
                                  )}">
                              <div class="go-cart-item__info-wrapper">
                                  <div class="go-cart-item__image" style="background-image: url(${
                                    item.image
                                  });"></div>
                                  <div class="go-cart-item__info">
                              <a href="${
                                item.url
                              }" class="go-cart-item__title">${
        item.product_title
      }</a>
                              <div class="go-cart-item__variant">${itemVariant}</div>`;
      if (this.getGiftProducts.length > 0) {
        this.getGiftProducts.forEach(function (e) {
          if (e !== item.variant_id || item.line_price !== 1) {
            cartSingleProduct =
              cartSingleProduct +
              `
                              <div class="go-cart-item__quantity">
                                  <span class="go-cart-item__quantity-label">${that.labelQuantity} </span>
                                  <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>
                                  <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="${item.quantity}" disabled>
                                  <span class="go-cart-item__quantity-button js-go-cart-quantity-plus" data-variantid="${item.variant_id}">+</span>
                              </div>`;
          }
        });
      } else {
        
        cartSingleProduct =
          cartSingleProduct +
          `
                                  <div class="go-cart-item__quantity">
                                  <span class="go-cart-item__quantity-label">${that.labelQuantity} </span>
                                      <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>
                                      <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="${item.quantity}" disabled>
                                      <span class="go-cart-item__quantity-button js-go-cart-quantity-plus" data-variantid="${item.variant_id}">+</span>
                                  </div>`;
      }
      cartSingleProduct =
        cartSingleProduct +
                            `</div>
                              </div>
                              <div class="go-cart-item__price">`;
      if( item.original_line_price != item.line_price ) {
        cartSingleProduct = cartSingleProduct + `<span class="discounted">${formatMoney( item.line_price, this.moneyFormat )}</span>`;
      }
                              cartSingleProduct = cartSingleProduct +   
                              `<span class="original">${formatMoney( item.original_line_price, this.moneyFormat )}</span>
                              </div>
                              <a class="go-cart-item__remove ${ this.removeFromCartNoDot }">${ this.labelRemove }</a>
                              </div>`;

      this.cartDrawerContent.innerHTML += cartSingleProduct;
    });
    var that = this;
    this.cartDrawerSubTotal.forEach((el) => {
      el.innerHTML = formatMoney(cart.total_price, this.moneyFormat);
      el.parentNode.classList.remove("is-invisible");
      // document.querySelector(".policy-input").classList.remove("is-invisible");
    });
    this.cartDrawerDiscount.forEach((el) => {
      if (cart.total_discount > 0) {
        that.cartDrawerBasketTotal.forEach((total) => {
          document.querySelector(
            ".go-cart-drawer__basket_total"
          ).style.display = "flex";
          total.innerHTML = formatMoney(cart.original_total_price, this.moneyFormat);
          total.parentNode.classList.remove("is-invisible");
        });
        document.querySelector(".go-cart-drawer__discount").style.display =
          "flex";

        var discountedPrice = Math.abs(cart.original_total_price - cart.total_price)
        el.innerHTML = "-" + formatMoney(discountedPrice, this.moneyFormat) + " (10%)";
        el.parentNode.classList.remove("is-invisible");
      } else {
        that.cartDrawerBasketTotal.forEach((total) => {
          document.querySelector(
            ".go-cart-drawer__basket_total"
          ).style.display = "none";
        });
        document.querySelector(".go-cart-drawer__discount").style.display =
          "none";
      }
    });
    this.cartDrawerItemCount.forEach((el) => {
      el.innerHTML = totalProduct;
    });
    const removeFromCart = document.querySelectorAll(this.removeFromCart);
    removeFromCart.forEach((item) => {
      item.addEventListener("click", () => {
        GoCart.removeItemAnimation(item.parentNode);
        const line = item.parentNode.getAttribute("data-line");
        this.removeItem(line);
      });
    });
    const itemQuantityPlus = document.querySelectorAll(this.itemQuantityPlus);
    itemQuantityPlus.forEach((item) => {
      item.addEventListener("click", () => {
        const line =
          item.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "data-line"
          );
        const product_variant_ID = item.dataset.variantid;
        const quantity =
          Number(item.parentNode.querySelector(this.itemQuantity).value) + 1;
        that.changeItemQuantity(line, quantity);
      });
    });
    const itemQuantityMinus = document.querySelectorAll(this.itemQuantityMinus);
    itemQuantityMinus.forEach((item) => {
      item.addEventListener("click", () => {
        const line =
          item.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "data-line"
          );
        const quantity =
          Number(item.parentNode.querySelector(this.itemQuantity).value) - 1;
        this.changeItemQuantity(line, quantity);
        if (
          Number(item.parentNode.querySelector(this.itemQuantity).value - 1) ===
          0
        ) {
          GoCart.removeItemAnimation(
            item.parentNode.parentNode.parentNode.parentNode
          );
        }
      });
    });
  }
  renderMiniCart(cart) {
    this.clearMiniCart();
    cart.items.forEach((item, index) => {
      let itemVariant = item.variant_title;
      if (itemVariant === null) {
        itemVariant = "";
      }
      const cartSingleProduct = `        <div class="go-cart-item__single" data-line="${Number(
        index + 1
      )}">            <div class="go-cart-item__info-wrapper">
                               <div class="go-cart-item__image" style="background-image: url(${
                                 item.image
                               });"></div>
                               <div class="go-cart-item__info">
                              <a href="${
                                item.url
                              }" class="go-cart-item__title">${
        item.product_title
      }</a>
                              <div class="go-cart-item__variant">${itemVariant}</div>
                              <div class="go-cart-item__quantity">
                                  <span class="go-cart-item__quantity-label">${
                                    this.labelQuantity
                                  } </span>
                                  <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>
                                  <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="${
                                    item.quantity
                                  }" disabled>
                                  <span class="go-cart-item__quantity-button js-go-cart-quantity-plus">+</span>
                              </div>
                              </div>            </div>            <div class="go-cart-item__price">${formatMoney(
                                cart.total_price,
                                this.moneyFormat
                              )}</div>            <a class="go-cart-item__remove ${
        this.removeFromCartNoDot
      }">${this.labelRemove}</a>        </div>      `;
      this.cartMiniCartContent.innerHTML += cartSingleProduct;
    });
    this.cartMiniCartSubTotal.innerHTML = formatMoney(
      cart.total_price,
      this.moneyFormat
    );
    this.cartMiniCartSubTotal.parentNode.classList.remove("is-invisible");
    document.querySelector(".policy-input").classList.remove("is-invisible");
    const removeFromCart = document.querySelectorAll(this.removeFromCart);
    removeFromCart.forEach((item) => {
      item.addEventListener("click", () => {
        GoCart.removeItemAnimation(item.parentNode);
        const line = item.parentNode.getAttribute("data-line");
        this.removeItem(line);
      });
    });
    const itemQuantityPlus = document.querySelectorAll(this.itemQuantityPlus);
    itemQuantityPlus.forEach((item) => {
      item.addEventListener("click", () => {
        const line =
          item.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "data-line"
          );
        const quantity =
          Number(item.parentNode.querySelector(this.itemQuantity).value) + 1;
        this.changeItemQuantity(line, quantity);
      });
    });
    const itemQuantityMinus = document.querySelectorAll(this.itemQuantityMinus);
    itemQuantityMinus.forEach((item) => {
      item.addEventListener("click", () => {
        const line =
          item.parentNode.parentNode.parentNode.parentNode.getAttribute(
            "data-line"
          );
        const quantity =
          Number(item.parentNode.querySelector(this.itemQuantity).value) - 1;
        this.changeItemQuantity(line, quantity);
        if (
          Number(item.parentNode.querySelector(this.itemQuantity).value - 1) ===
          0
        ) {
          GoCart.removeItemAnimation(
            item.parentNode.parentNode.parentNode.parentNode
          );
        }
      });
    });
  }
  renderBlankCartDrawer() {
    var that = this;
    this.cartDrawerSubTotal.forEach((el) => {
      el.parentNode.classList.add("is-invisible");
    });
    // document.querySelector(".policy-input").classList.add("is-invisible");
    this.clearCartDrawer();
    this.cartDrawerContent.innerHTML = `<div class="go-cart__empty">${this.labelCartIsEmpty}</div>`;
  }
  renderBlankMiniCart() {
    this.cartMiniCartSubTotal.parentNode.classList.add("is-invisible");
    this.clearMiniCart();
    this.cartMiniCartContent.innerHTML = `<div class="go-cart__empty">${this.labelCartIsEmpty}</div>`;
  }
  clearCartDrawer() {
    this.cartDrawerContent.innerHTML = "";
  }
  clearMiniCart() {
    this.cartMiniCartContent.innerHTML = "";
  }
  clearCartModal() {
    this.cartModalContent.innerHTML = "";
  }
  openCartDrawer() {
    this.cartDrawer.classList.add("is-open");
    document.querySelector("body").classList.add("drawer-opened");
  }
  closeCartDrawer() {
    this.cartDrawer.classList.remove("is-open");
    document.querySelector("body").classList.remove("drawer-opened");
  }
  openMiniCart() {
    this.cartMiniCart.classList.add("is-open");
  }
  closeMiniCart() {
    this.cartMiniCart.classList.remove("is-open");
  }
  openFailModal() {
    this.cartModalFail.classList.add("is-open");
  }
  closeFailModal() {
    this.cartModalFail.classList.remove("is-open");
  }
  openCartModal() {
    this.cartModal.classList.add("is-open");
  }
  closeCartModal() {
    this.cartModal.classList.remove("is-open");
  }
  openCartOverlay() {
    this.cartOverlay.classList.add("is-open");
  }
  closeCartOverlay() {
    this.cartOverlay.classList.remove("is-open");
  }
  static removeItemAnimation(item) {
    item.classList.add("is-invisible");
  }
  setDrawerDirection() {
    this.cartDrawer.classList.add(`go-cart__drawer--${this.drawerDirection}`);
  }
}

function formatMoney(cents, format) {
  if (typeof cents == "string") {
    cents = cents.replace(".", "");
  }
  var value = "";
  // var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var placeholderRegex = /<span class='money'>TL{{(\w+)}}<\/span>/;
  var formatString = "<span class='money'>TL{{amount}}</span>";

  // Extract the placeholder
  var placeholder = formatString.match(placeholderRegex)[1];

  function defaultOption(opt, def) {
    return typeof opt == "undefined" ? def : opt;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ",");
    decimal = defaultOption(decimal, ".");

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split("."),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
      cents = parts[1] ? decimal + parts[1] : "";

    return dollars + cents;
  }

  switch (placeholder) {
    case "amount":
      value = formatWithDelimiters(cents, 2);
      break;
    case "amount_no_decimals":
      value = formatWithDelimiters(cents, 0);
      break;
    case "amount_with_comma_separator":
      value = formatWithDelimiters(cents, 2, ".", ",");
      break;
    case "amount_no_decimals_with_comma_separator":
      value = formatWithDelimiters(cents, 0, ".", ",");
      break;
  }

  return formatString.replace(placeholderRegex, value) + "₺";
}

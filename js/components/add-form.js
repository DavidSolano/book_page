Vue.component('products', {
    props: {
        booklist: {
            type: Array,
            required: true
        }
    },

    template: `
    <b-container class="p-0 m-0">
        <b-row fluid="lg" v-for="book in booklist" class="justify-content-md-center">
            <book v-bind:book="book" v-bind:booklist="booklist" @add-to-cart="updateCart"></book> 
        </b-row>
    </b-container>
    
    `,
    methods: {
        addToCart: function () {
            const button = document.querySelectorAll('button');
            this.$emit('add-to-cart')
            this.inventory -=1;

            if (this.inventory <= 0){
                this.inStock = false;

                if(this.inStock === false){
                    button.disabled = true;
                }
            }
            else {
                button.disabled = false;
            }
        }
    },
})



Vue.component('book', {
    props: {
        book: {
            type: Object,
            required: true
        },

        booklist: {
            type: Array,
            required: true
        },


    },

    template: `
<b-col cols="6" style="padding: 5px">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
            <b-col md="4">
                <b-card-img :src="book.image" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
                <b-card-body :title="book.product">
                    <div v-for="stuff in book.details">
                        <b-card-text>
                            {{stuff}}
                        </b-card-text>
                    </div>
                    <b-card-text>
                        <b-alert v-model="book.getProductDetails" variant="dark" dismissible>
                            <h4>Book Information</h4>
                            <hr>
                            <p>
                                {{ book.bookDetails }}
                            </p>
                        </b-alert>
                    </b-card-text>
                    <hr>
                    <!--add to cart button-->
                    <b-button v-on:click="book.addToCart"
                              :disabled="!book.inStock"
                              :class="{ disabledButton: !book.inStock }" variant="primary">Add to Cart</b-button>

                    <!--info button-->
                    <b-button @click="book.getProductDetails=true" variant="primary">Get Info</b-button>
                    
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</b-col>

<!--<b-col cols="4">
    <b-card
    :title="book.product"
    
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 d-inline p-0"
    thumbnail
  >
    <div v-for="stuff in book.details">
        <b-card-text>
            {{stuff}}
        </b-card-text>
    </div>
    <hr>
    <b-alert v-model="book.getProductDetails" variant="dark" dismissible>
        <h4>Book Information</h4>
        <hr>
        <p>
            {{ book.bookDetails }}
        </p>
    </b-alert>
    
    &lt;!&ndash;add to cart button&ndash;&gt;
    <b-button v-on:click="book.addToCart"
     :disabled="!book.inStock"
      :class="{ disabledButton: !book.inStock }" variant="primary">Add to Cart</b-button>
      
      &lt;!&ndash;info button&ndash;&gt;
    <b-button @click="book.getProductDetails=true" variant="primary">Get Info</b-button>
  </b-card>
</b-col>-->
    `
})

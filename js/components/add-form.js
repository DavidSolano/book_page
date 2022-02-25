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
            <book class="" v-bind:book="book" v-bind:booklist="booklist"></book> 
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
        }
    },

    template: `

<b-col cols="4">
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
    
    <!--add to cart button-->
    <b-button v-on:click="book.addToCart"
     :disabled="!book.inStock"
      :class="{ disabledButton: !book.inStock }" variant="primary">Add to Cart</b-button>
      <!--info button-->
    <b-button @click="book.getProductDetails=true" variant="primary">Get Info</b-button>
  </b-card>
</b-col>
    `
})

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
            <book v-bind:book="book" v-bind:booklist="booklist"></book>
        </b-row>
    </b-container>
    `,
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
                        price: {{book.bookPrice}}
                    </b-card-text>
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
                    <b-button @click="book.inCart=true" variant="primary">Add to Cart</b-button>

                    <!--info button-->
                    <b-button @click="book.getProductDetails=true" variant="primary">Get Info</b-button>
                    
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</b-col>
    `
})

Vue.component ('shopping-cart', {
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

    methods: {
        addToCart: function () {
            this.$emit('add-to-cart')

        }
    },

    template: `
    <b-card :title="book.product">
        <b-card-text>
          {{stuff}}
        </b-card-text>
        
        <b-card-text>
            price: {{book.bookPrice}}
        </b-card-text>
    </b-card>
    
    `
})

const InventoryComponent = Vue.component('Inventory', {
    props: {
        showsthecart: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            library: [
                new Book('Oblomov', 576, 'Ivan Goncharov', 18.53),
                new Book('No Longer Human', 271, 'Osamu Dazai', 13.43),
                new Book('The Bridge to Lucy Dunne', 166, 'Exurb1a', 3.99),
                new Book('The Sweet Spot', 304, 'Paul Bloom', 19.85),
                new Book('Discourses and Selected Writings', 304, 'Epictetus', 15.99),
                new Book('The Daily Stoic', 416, 'Ryan Holiday', 17.32),
                new Book('Anxious: The Modern Mind in the Age of Anxiety', 482, 'Joseph LeDoux'),
                new Book('Unwinding Anxiety', 304, 'Judson Brewer', 19.99),

                new Magazines('Local Man Drowns In River', 23, 'Kenny Bob', 'People', 4.55),
                new Magazines('Local Hero Saves Man From Drowning', 4, 'Billy Smith', 'Vouge', 4.55),
                new Magazines('Local Man Condemned For Not Helping Drowning Man', 34, 'Kelly Clarkson', 'TIme', 4.55),
                new Magazines('10 Healthy Dishes that Will Change Your Life', 20, 'Jimmy Osborne', 'Time', 4.55)
            ],
            cartStuff: []
        }
    },
    methods: {
        addsToCart(a){
            this.cartStuff.push(a);
            console.log(this.cartStuff)
        }
    },

    template: `
    <div>
        
        <div class="card-columns" >
            <inventory-item v-show="!showsthecart" @add-cart="addsToCart" v-for="item in library" :item="item" :key="item.title"></inventory-item>
        </div>
    
        <div v-if="showsthecart === true">
            <h2 class="text-center">Cart</h2>
            <ShoppingCart v-bind:cartStuff="cartStuff"></ShoppingCart>
        </div>
        
    </div>
    
    `
});

const InventoryItemComponent = Vue.component('InventoryItem', {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    methods:{
        changesThing(){
            this.$emit('add-cart',this.item)
            console.log('penis')
        }
    },

    computed: {
        typeOfItem() {
            return this.item.constructor.name;
        }
    },

    template: `
        <b-card>
            <component @add-cart="changesThing" :is="typeOfItem" :item="item"></component>
        </b-card>
        
    `
});


const BookComponent = Vue.component('Book', {
    extends: InventoryItemComponent,
    template: `
        <div class="book" style="max-width: 450px; max-height: 400px">
            <b-card>
                <h3>{{item.title}}</h3>
            </b-card>
            <b-card-text>
                <ul>
                    <li>Author: {{item.author}}</li>
                    <li>Page Count: {{item.pageCount}}</li>
                    <li>Price: {{item.price}}</li>
                </ul>
            </b-card-text>
            
            <b-button pill variant="primary" type="button" @click="changesThing" v-if="item.status === 'available'">Add to Cart</b-button>
        </div>
    `
});

const MagazineComponent = Vue.component('Magazines', {
    extends: InventoryItemComponent,
    template: `
        <div class="magazine" style="max-width: 450px; max-height: 400px">
            
            <b-card>
                <h3>{{item.title}}</h3>
            </b-card>
            <b-card-text>
                <ul>
                    <li>Author: {{item.author}}</li>
                    <li>Company: {{item.company}}</li>
                    <li>Page Count: {{item.pageCount}}</li>
                    <li>Price: {{item.price}}</li>
                </ul>
            </b-card-text>
            
            <b-button pill variant="primary" type="button" @click="changesThing" v-if="item.status === 'available'">Add to Cart</b-button>
        </div>
    `
});

const CartItemComponent = Vue.component('cart-item', {
    extends: InventoryItemComponent,
    template: `
        <div>
            <b-card>
                <b-card-text>
                    {{item.title}}
                </b-card-text>

                <b-card-text>
                    {{item.price}}
                </b-card-text>
            </b-card>
        </div>
    `
})

const ShoppingCartComponent = Vue.component('ShoppingCart', {
    props: {
        cartStuff: {
            type: Array,
            required: true
        }
    },

    computed: {
        cartTotal(){
            let total = 0;
            for (let i = 0; i < this.cartStuff.length; i++){
                total += this.cartStuff[i].price
            }

            return total;
        }
    },

    template: `
        <div>
            <cart-item v-on:change="cartTotal" style="display: inline-block" v-for="item in cartStuff" :key="item.title" :item="item">
                <b-card>
                    <h3 class="card-title">{{item.title}}</h3>
                    <b-card-text>
                        {{item.price}}
                    </b-card-text>
                    <h1>Total: {{cartTotal}}</h1>
                </b-card>
            </cart-item>
        </div>
    `
})
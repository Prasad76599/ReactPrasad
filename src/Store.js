import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        VegItems: [
            { name: "Totato", price: 100.50, image: "https://wallpapercave.com/wp/wp5329505.jpg"},
            { name: "Pomato", price: 200.33, image: "https://tse2.mm.bing.net/th?id=OIP.uoojFWmYCwo4y59SWqqKkgHaHE&pid=Api&P=0&h=180" },
            { name: "Brinjal", price: 300.50, image: "https://tse2.mm.bing.net/th?id=OIP.FIOjVASE6F1pAakMl58HNgHaEw&pid=Api&P=0&h=180" },
            { name: "Ladyfinger", price: 250.10, image: "https://tse4.mm.bing.net/th?id=OIP.FU_kNrVoiin4KCAQf6cjsQHaE4&pid=Api&P=0&h=180" },
            { name: "Carrot", price: 150.60, image: "https://tse4.mm.bing.net/th?id=OIP.duhGXai7-uEuQY0iN5TxBgHaEK&pid=Api&P=0&h=180" },
            { name: "Capsicum", price: 150.30, image: "https://tse2.mm.bing.net/th?id=OIP.FHF0hHUVh75x9NrT89Rp8gHaEK&pid=Api&P=0&h=180" },
        ],  

        NonVegItems: [
            { name: "Mutton", price: 500.50, image: "https://tse1.mm.bing.net/th?id=OIP.QyEgvp61eXjUWgWNcNLRqQHaE7&pid=Api&P=0&h=180" },
            { name: "Chicken", price: 300.45, image: "https://tse3.mm.bing.net/th?id=OIP.B2iNAzbbYuKy0LRUQvtAowHaFf&pid=Api&P=0&h=180" },
            { name: "Fish", price: 200.30, image: "https://tse1.mm.bing.net/th?id=OIP.Sa6YN9cTPSlqzgTp5luiogHaEK&pid=Api&P=0&h=180" },
            { name: "Egg", price: 350.20, image: "https://tse2.mm.bing.net/th?id=OIP.zpEVxeFS37d3cyMWGBGCTgHaE5&pid=Api&P=0&h=180" },
            { name: "Prawns", price: 400.60, image: "http://www.wikihow.com/images/6/64/Prepare-and-Cook-Prawns-Step-23.jpg" },
            { name: "Crab", price: 600.55, image: "https://tse2.mm.bing.net/th?id=OIP.Ql5DxmohaqBKYK8t9KRwCgHaD4&pid=Api&P=0&h=180" },
        ],
        MilkItems: [
            { name: "Jersy", price: 50.50, image: "https://tse1.mm.bing.net/th?id=OIP.pRWiKgchmpTnWU1-DfDF1wHaHS&pid=Api&P=0&h=180" },
            { name: "Heritage", price: 30.40, image: "https://5.imimg.com/data5/VC/YE/KS/ANDROID-28596165/product-jpeg.jpg" },
            { name: "Vijaya", price: 20.30, image: "https://m.media-amazon.com/images/I/81jBF9Sg8vL._SL1500_.jpg" },
            { name: "Amul", price: 35.15, image: "https://5.imimg.com/data5/ANDROID/Default/2022/2/ZB/HX/DK/7349419/product-jpeg-500x500.jpg" },
            { name: "Sudha", price: 40.55, image: "https://5.imimg.com/data5/NU/LA/GLADMIN-10870697/sudha-healthy-toned-milk-1000x1000.png" },
            { name: "Nandini", price: 45.50, image: "http://manmul.coop/wp-content/uploads/2022/01/Pasteurised-Toned-Milk-b.png" }
        ]
    },
    reducers: {}
});

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        clearCart: () => [],
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        }
    }
});

const purchaseDetailsSlice = createSlice({
    name: "purchaseDetails",
    initialState: [],
    reducers: {
        addPurchaseDetails: (state, action) => {
            state.push(action.payload);
        }
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false,
        user: localStorage.getItem("username") || "",
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("username", action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = "";
            localStorage.removeItem("username");
        },
    }
});

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
        purchaseDetails: purchaseDetailsSlice.reducer,
        auth: authSlice.reducer
    }
});

export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;
export default store;

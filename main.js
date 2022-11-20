const menus = [
    {
        id: 1,
        name: 'Khoai tây nghiền gà BBQ mè rang',
        img: './assets/khoai tay nghien ga bbq sot ngot.jpg',
        calo: 580,
        protein: '31g',
        carb: '67g',
        fat: '18g',
        price: '60',
        detail: {
            'chicken breast': {
                gam: '85g',
                protein: '26.3g',
                fat: '3.1',
                calories: '165',
            },
            potato: {
                gam: '300g',
                carb: '61g',
                protein: '5.6g',
                calories: '261',
            },
            'kewpie sốt mè rang': {
                gam: '40g',
                fat: '14.4g',
                calories: '154',
            },
        },
    },
    {
        id: 2,
        name: 'Món chay',
        img: './assets/mon chay.jpg',
        calo: 645,
        protein: '25g',
        carb: '64.7g',
        fat: '38g',
        price: '72',
        detail: {
            'sweet potato': {
                gam: '100g',
                carb: '20.7g',
                protein: '2g',
                calories: '90',
            },
            'brussels Sprouts': {
                gam: '85g',
                carb: '8g',
                protein: '3g',
                calories: '45 ',
            },
            'Vegan Cheddar': {
                slices: '4',
                carb: '16g',
                fat: '18g',
                calories: '240',
            },
            'thịt chay': {
                gam: '100g',
                carb: '5g',
                protein: '20g',
                fat: '20g',
                calories: '270',
            },
        },
    },
    {
        id: 3,
        name: 'Cơm lá chanh gà BBQ sốt cay',
        img: './assets/com la chanh ga bbq sot cay.jpg',
        calo: 663,
        protein: '34g',
        carb: '84g',
        fat: '22g',
        price: '66',
        detail: {
            vegetable: {
                gam: '100g',
                carb: '7g',
            },
            'jasmine rice': {
                gam: '269g',
                protein: '6g',
                calories: '348',
            },
            'chicken breast': {
                gam: '87g',
                protein: '27g',
                fat: '3.1',
                calories: '144',
            },
        },
    },
    {
        id: 4,
        name: 'Khoai tây nghiền bò nướng sốt bơ',
        img: './assets/khoai tay nghien bo nuong sot bo.jpg',
        calo: 418,
        protein: '31g',
        carb: '67g',
        fat: '18g',
        price: '99',
        detail: {
            'beef tenderloin': {
                gam: '100g',
                protein: '27.7g',
                fat: '11.5',
                calories: '222',
            },
            potato: {
                gam: '300g',
                carb: '61g',
                protein: '5.6g',
                calories: '261',
            },
            'La costena': {
                gam: '20g',
                fat: '8g',
                calories: '120',
            },
        },
    },
    {
        id: 5,
        name: 'Khoai lang gà ngũ vị sốt mè rang',
        img: './assets/khoai lang ga ngu vi sot ngot.jpg',
        calo: 463,
        protein: '31g',
        carb: '67g',
        fat: '18g',
        price: '60',
        detail: {
            vegetable: {
                gam: '100g',
                carb: '7g',
            },
            'sweet potato': {
                gam: '300g',
                carb: '62g',
                protein: '6g',
                calories: '270',
            },
            'chicken breast': {
                gam: '85g',
                protein: '26.3g',
                fat: '3.1',
                calories: '165',
            },
            'kewpie sốt mè rang': {
                gam: '40g',
                fat: '14.4g',
                calories: '154',
            },
        },
    },
    {
        id: 6,
        name: 'Cơm gạo lứt bò nướng sốt cay',
        img: './assets/com gao lut bo nuong sot cay.jpg',
        calo: 618,
        protein: '34.7g',
        carb: '77.5g',
        fat: '27g',
        price: '96',
        detail: {
            vegetable: {
                gam: '100g',
                carb: '7g',
            },
            'Brown rice': {
                gam: '300g',
                carb: '70.5g',
                protein: '7g',
                fat: '2.5g',
                calories: '336',
            },
            'beef tenderloin': {
                gam: '100g',
                protein: '27.7g',
                fat: '11.5g',
                calories: '222',
            },
            'kewpie sốt phô mai': {
                gam: '20g',
                fat: '7.4g',
                calories: '71',
            },
        },
    },
    {
        id: 7,
        name: 'Pasta bò nướng sốt kem',
        img: './assets/pasta bo nuong sot kem.jpg',
        calo: 492,
        protein: '31.7g',
        fat: '18.9g',
        price: '79',
        detail: {
            pasta: {
                gam: '100g',
                protein: '4g',
                carb: '70g',
                calories: '320',
            },
            vegetable: {
                gam: '100g',
                carb: '7g',
            },
            'beef tenderloin': {
                gam: '100g',
                protein: '27.7g',
                fat: '11.5g',
                calories: '222',
            },
            'kewpie sốt phô mai': {
                gam: '20g',
                fat: '7.4g',
                calories: '71',
            },
        },
    },
    {
        id: 8,
        name: 'Cơm lá chanh bò nướng sôt bơ',
        img: './assets/com la chanh bo nuong sot bo.jpg',
        calo: 645,
        protein: '34.5g',
        fat: '19.5g',
        price: '77',
        detail: {
            'jasmine rice': {
                gam: '269g',
                protein: '6g',
                calories: '348',
            },
            vegetable: {
                gam: '100g',
                carb: '7g',
            },
            'beef tenderloin': {
                gam: '100g',
                protein: '27.7g',
                fat: '11.5g',
                calories: '222',
            },
            'La costena': {
                gam: '20g',
                fat: '8g',
                calories: '120',
            },
        },
    },
    {
        id: 9,
        name: 'Donut',
        img: './assets/donut.jpg',
        calo: 220,
        protein: '2g',
        carb: '22g',
        fat: '12g',
        price: '60',
    },
];

const scrollMenuContainer = document.getElementById('products');

scrollMenuContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollMenuContainer.scrollLeft += e.deltaY;
});

const detailEles = document.getElementsByClassName('detail-dish');

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const showInfo = (element) => {
    const cloneNode = element.cloneNode(true);
    showModal(cloneNode);
};

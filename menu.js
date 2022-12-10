const menus = [
    {
        id: 1,
        name: 'Khoai tây nghiền gà BBQ sốt mè rang',
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
        name: 'Thịt chay rau củ',
        img: './assets/mon chay.jpg',
        calo: 645,
        protein: '25g',
        carb: '64.7g',
        fat: '38g',
        price: '60',
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
        name: 'Cơm lá chanh, gà BBQ sốt thousand island',
        img: './assets/com la chanh ga bbq sot cay.jpg',
        calo: 663,
        protein: '34g',
        carb: '84g',
        fat: '22g',
        price: '60',
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
        price: '65',
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
        price: '65',
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
        name: 'Pasta, bò nướng sốt kem',
        img: './assets/pasta bo nuong sot kem.jpg',
        calo: 492,
        protein: '31.7g',
        fat: '18.9g',
        price: '65',
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
        name: 'Cơm lá chanh bò nướng sốt bơ',
        img: './assets/com la chanh bo nuong sot bo.jpg',
        calo: 645,
        protein: '34.5g',
        fat: '19.5g',
        price: '65',
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
        name: 'Bánh Donut',
        img: './assets/donut.jpg',
        calo: 220,
        protein: '2g',
        carb: '22g',
        fat: '12g',
        price: '15',
    },
];

const rootModal = document.getElementById('root-modal');
rootModal.style.display = 'none';

const detailEles = document.getElementsByClassName('woocommerce-mini-cart-item');

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const showModal = (element) => {
    const container = document.getElementById('modal-container');
    // container.replaceChildren();

    const id = element.getAttribute('id');
    const info = menus.find((i) => i.id == id);

    const calo = container.querySelector('.calo');
    calo.replaceChildren();

    const goalVal = localStorage.getItem('goal') || 1600;
    const carbVal = Math.ceil((55 / 100) * goalVal);
    const proteinVal = Math.ceil((20 / 100) * goalVal);
    const fatVal = Math.ceil((20 / 100) * goalVal);

    for (let key in info) {
        let value = info[key];

        if (key === 'name') {
            document.getElementById('detail-item-name').textContent = value;
        } else if (key === 'img') {
            document.getElementById('detail-image').src = value;
        } else if (key === 'detail') {
            const detailElement = container.querySelector('.calo-detail');
            detailElement.replaceChildren();
            Object.entries(value).forEach(([key, infoValue]) => {
                const detailNameEle = document.createElement('span');
                detailNameEle.textContent = key;
                detailNameEle.classList.add('detail-name');
                const detailUl = document.createElement('ul');
                detailUl.classList.add('detail-ul');
                detailUl.appendChild(detailNameEle);

                Object.entries(infoValue).forEach(([infoValueKey, detailInfo]) => {
                    const detailItem = document.createElement('li');
                    detailItem.innerHTML = '<span>' + infoValueKey + '</span>' + ': ' + detailInfo;
                    detailUl.appendChild(detailItem);
                });

                detailElement.appendChild(detailUl);
            });
        } else if (key === 'price') {
            const priceEle = document.getElementById('detail-price');
            priceEle.textContent = value + '.000 đ';
        } else if (key === 'id') {
        } else {
            switch (key) {
                case 'calo':
                    addPercentEle(calo, key, value, value, goalVal);
                    addProgressEle(calo, value, goalVal);
                    break;
                case 'carb':
                    addPercentEle(calo, key, value, value.slice(0, -1), carbVal);
                    addProgressEle(calo, value.slice(0, -1), carbVal);
                    break;
                case 'fat':
                    addPercentEle(calo, key, value, value.slice(0, -1), fatVal);
                    addProgressEle(calo, value.slice(0, -1), fatVal);
                    break;
                case 'protein':
                    addPercentEle(calo, key, value, value.slice(0, -1), proteinVal);
                    addProgressEle(calo, value.slice(0, -1), proteinVal);
                    break;
            }
        }
    }

    rootModal.style.setProperty('display', 'block', 'important');
};

const addPercentEle = (root, key, value, val, total) => {
    const caloItem = document.createElement('li');
    caloItem.style.position = 'relative';
    caloItem.innerHTML =
        '<span>' +
        capitalize(key) +
        '</span>' +
        ': ' +
        value +
        "<span class='progress-number'>" +
        calculatePercent(val, total) +
        '</span>';
    root.appendChild(caloItem);
};

const addProgressEle = (root, val, total) => {
    const progressLi = document.createElement('li');
    progressLi.classList.add('progress');
    progressLi.style.marginBottom = '4px';
    const realProgress = document.createElement('div');
    realProgress.style.height = '100%';
    realProgress.style.width = calculatePercent(val, total);
    realProgress.style.backgroundColor = '#88c544';
    progressLi.appendChild(realProgress);
    root.appendChild(progressLi);
};

const calculatePercent = (val, total) => {
    return Math.ceil((+val / total) * 100) + '%';
};

const showInfo = (element) => {
    const cloneNode = element.cloneNode(true);
    showModal(cloneNode);
};

const closeModal = () => {
    rootModal.style.setProperty('display', 'none', 'important');
};

[...detailEles].forEach((element) => {
    element.addEventListener('click', () => showInfo(element));
});

document.getElementById('modal-close').addEventListener('click', () => {
    closeModal();
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') {
        closeModal();
    }
});

document.getElementById('cart-add').addEventListener('click', () => {
    location.href = './menu.html';
});

$(document).ready(function () {
    let flag = false
    $('.hoocah').click(function () {
        if (!flag) {
            $('.drop-one').slideDown();
            $('.up').slideUp();
            $('.img-drop-one').css('transform', 'rotate(360deg)')
            $('.img-drop').css('transform', 'rotate(-90deg)')
        } else {
            $('.drop-one').slideUp();
            $('.img-drop-one').css('transform', 'rotate(-90deg)')
        }
        flag = !flag
    })

    


    $('.tabbaco').click(function () {
        if (!flag) {
            $('.drop-two').slideDown();
            $('.drop-one').slideUp();
            $('.img-drop').css('transform', 'rotate(360deg)')
            $('.img-drop-one').css('transform', 'rotate(-90deg)')
        } else {
            $('.drop-two').slideUp();
            $('.img-drop').css('transform', 'rotate(-90deg)')
        }
        flag = !flag
    })


    // __________________________________________________________420

    $('.menu-elem-drop').click(function () {
        if (!flag) {
            $('.subdrop-one').slideUp()

        } else {
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-six').slideUp();
            $('.up-five').slideUp();
            $('.up-seven').slideUp();
            $('.subdrop-one').slideDown()
        }
        flag = !flag
    })

    // __________________________________________________________DARKSIDE

    $('.menu-elem-drop-two').click(function () {
        if (!flag) {
            $('.subdrop-two').slideUp()

        } else {
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-two').slideDown()
        }
        flag = !flag
    })

    // __________________________________________________________ELEMENT

    $('.menu-elem-drop-three').click(function () {
        if (!flag) {
            $('.subdrop-three').slideUp()

        } else {
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-four').slideUp();
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-three').slideDown()
        }
        flag = !flag
    })

    // __________________________________________________________SERBETLI

    $('.menu-elem-drop-four').click(function () {
        if (!flag) {
            $('.subdrop-four').slideUp()

        } else {
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-four').slideDown()
        }
        flag = !flag
    })

    // __________________________________________________________BUTA

    $('.menu-elem-drop-five').click(function () {
        if (!flag) {
            $('.subdrop-five').slideUp()

        } else {
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-five').slideDown()
        }
        flag = !flag
    })

    // __________________________________________________________TANGIRES

    $('.menu-elem-drop-six').click(function () {
        if (!flag) {
            $('.subdrop-six').slideUp()

        } else {
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-five').slideUp();
            $('.subdrop-six').slideDown()
        }
        flag = !flag
    })

    // __________________________________________________________CULT

    $('.menu-elem-drop-seven').click(function () {
        if (!flag) {
            $('.subdrop-seven').slideUp()

        } else {
            $('.up-one').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-seven').slideDown()
        }
        flag = !flag
    })

    let hookahImg = document.querySelector('.hookahImg');
    let tabbacoImg = document.querySelector('.tabbacoImg');
    let addBut = document.querySelector('.button');
    const f1 = document.forms['f1'];
    const orders = [];

    function Order(name, taste, weight, price) {
        this.name = name;
        this.taste = taste;
        this.weight = weight;
        this.price = price;

    }
    document.querySelector('.dymnyy').onclick = function () {
        addBut.style.display = 'flex';
        addBut.style.animation = '1s moveUp';
        hookahImg.style.display = 'block';
        tabbacoImg.style.display = 'none';
        hookahImg.style.animation = '1s moveUp';
        f1.name.value = 'Hookah';
        f1.taste.value = 'Dymnyy';
        f1.weight.value = '1.5 kg';
        f1.price.value = 140 +'$';
    }

    let tbody = document.querySelector('#tbody')

    document.querySelector('.add').onclick = function () {
        hookahImg.style.animation = '1s moveDown';
        tabbacoImg.style.animation = '1s moveDown';
        tbody.innerHTML = '';

        console.log(tbody);

        let name = f1.name.value;
        let taste = f1.taste.value;
        let weight = f1.weight.value;
        let price = f1.price.value;
        const newO = new Order(name, taste, weight, price);

        orders.push(newO);

        document.querySelector('.total').innerHTML = 0;
        for (let i = 0; i < orders.length; i++) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = '<p class="orange">#</p>';
            tr.appendChild(td);
            for (const key in orders[i]) {
                let td = document.createElement('td');
                td.textContent = orders[i][key];
                td.classList.add('myStyle');
                tr.appendChild(td);
            }
            tbody.appendChild(tr);

            let total = 0;
            for (let i = 0; i < orders.length; i++) {
                numm = parseInt(orders[i].price);
                total += numm;
            }
            document.querySelector('.total').innerHTML = total +'$';
            orders.total = total;

        }
        document.querySelector('.cart').style.display = 'none';
        document.querySelector('.bottom').style.display = 'flex';
        f1.reset();
    }


    let sel = document.querySelector('.sel');
    const li = sel.getElementsByTagName('li');
    let ul = sel.getElementsByTagName('ul');

    for (let j = 0; j < ul.length; j++) {
        ul[j].onclick = function () {
            for (let i = 0; i < li.length; i++) {
                li[i].onclick = function () {
                    addBut.style.display = 'flex';
                    tabbacoImg.style.display = 'block';
                    hookahImg.style.display = 'none';
                    tabbacoImg.style.animation = '1s moveUp';
                    f1.name.value = ul[j].innerHTML.substr(1);
                    f1.taste.value = li[i].innerHTML;
                    f1.weight.value = '15 g';
                    f1.price.value = 80 +'$';
                }
            }
        }
    }

    document.querySelector('.confirm').onclick = function () {
        console.log('orders',orders );
        document.querySelector('.modal-window').style.display = 'block'
        document.querySelector('.modal-window').style.paddingLeft = '30%'
        document.querySelector('body').style.overflow = 'hidden'
    }

        let ch = document.querySelector('.ch');
        ch.onclick = function(){;
        ch.style.display = 'none';
        document.querySelector('.hide').style.display = 'block';
        document.querySelector('.hide').style.animation = '1s moveLeft'
        document.querySelector('#tbody').style.zIndex = '999999';
        document.querySelector('.box').style.zIndex = '999999';
    }

    let hide = document.querySelector('.hide')

    hide.onclick = function(){
        ch.style.display = 'block'
        hide.style.display = 'none'
        document.querySelector('.box').style.zIndex = '0';
        document.querySelector('#tbody').style.zIndex = '0';
    }

    let conf = document.querySelector('.conf')

    conf.onclick = function(){
        document.querySelector('.modal-window').style.display = 'none'
    }

   

})

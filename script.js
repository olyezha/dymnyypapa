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

    $('.burger').click(function () {
        if (!flag) {
            $('.burger-menu').slideDown();
            $('.line-one').css('transform', 'rotate(45deg)')
            $('.line-two').css('margin-top', -14)
            $('.line-two').css('transform', 'rotate(-45deg)')
            $('.line-three').css('width', '0px')
        } else {
            $('.burger-menu').slideUp();
            $('.line-one').css('transform', 'rotate(0deg)')
            $('.line-two').css('margin-top', 0)
            $('.line-two').css('transform', 'rotate(0deg)')
            $('.line-three').css('width', '80%')
        }
        flag = !flag
    })

    $('.basket-btn').click(function () {
        if (!flag) {
            $('#basket').slideDown();
            $('.basket-btn-close').slideDown();
        } else {
            $('#basket').slideUp();
            $('.basket-btn-close').slideUp();
        }
        flag = !flag
    })

    $('.basket-btn-close').click(function () {
        if (!flag) {
            $('#basket').slideUp();
            $('.basket-btn-close').slideUp();
        } else {
            $('#basket').slideDown();
        }
        flag = !flag
    })


    $('#prod-close').click(function () {
        if (!flag) {
            $('.mobile-v').slideUp();
        } else {
            $('.mobile-v').slideDown();
        }
        flag = !flag
    })

    $('.conf').click(function(){
        if(!flag){
            $('.shadow').slideDown();
        }else{
            $('.shadow').slideUp();
        }
    })

    let hookahImg = document.querySelector('.hookahImg');
    let tabbacoImg = document.querySelector('.tabbacoImg');
    let addBut = document.querySelector('.button');
    let pr = document.querySelector('.products')
    const f1 = document.forms['f1'];
    const orders = [];

    function Order(name, taste, weight, price) {
        this.name = name;
        this.taste = taste;
        this.weight = weight;
        this.price = price;

    }
    document.querySelector('.dymnyy').onclick = function () {
        pr.style.display = 'flex';
        addBut.style.display = 'flex';
        addBut.style.animation = '1s moveUp';
        hookahImg.style.display = 'block';
        tabbacoImg.style.display = 'none';
        hookahImg.style.animation = '1s moveUp';
        f1.name.value = 'Кальян';
        f1.taste.value = 'Димний';
        f1.weight.value = '1.5 kg';
        f1.price.value = 140 + '₴';
    }

    let tbody = document.querySelector('#tbody')

    document.querySelector('.add').onclick = function () {
        pr.style.display = 'none';
        hookahImg.style.animation = '1s moveDown';
        tabbacoImg.style.animation = '1s moveDown';

        let name = f1.name.value;
        let taste = f1.taste.value;
        let weight = f1.weight.value;
        let price = f1.price.value;
        const newO = new Order(name, taste, weight, price);

        orders.push(newO);
        render();
    }
    // function res() {
    //     tbody.innerHTML = '';
    //     document.querySelector('.total').innerHTML = 0;
    // }
    function render() {
        tbody.innerHTML = '';
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
            document.querySelector('.total').innerHTML = total + '$';
            orders.total = total;

        }
        document.querySelector('.cart').style.display = 'none';
        document.querySelector('.bottom').style.display = 'flex';
    }


    let sel = document.querySelector('.sel');
    let product = document.querySelector('.products')
    const li = sel.getElementsByTagName('li');
    let ul = sel.getElementsByTagName('ul');
    let pi = sel.getElementsByTagName('p');

    for (let j = 0; j < ul.length; j++) {
        ul[j].onclick = function () {

            for (let i = 0; i < li.length; i++) {
                li[i].onclick = function () {
                    product.style.display = 'flex';
                    addBut.style.display = 'flex';
                    tabbacoImg.style.display = 'block';
                    hookahImg.style.display = 'none';
                    tabbacoImg.style.animation = '1s moveUp';
                    f1.name.value = ul[j].innerHTML.substr(1);
                    f1.taste.value = li[i].innerHTML;
                    f1.weight.value = '15 g';
                    f1.price.value = pi[i].innerHTML;
                }
            }
        }
    }


    document.querySelector('.confirm').onclick = function () {
        // console.log('orders', orders);
        document.querySelector('.modal-window').style.display = 'block'
        document.querySelector('body').style.overflow = 'hidden'
    }

    let ch = document.querySelector('.ch');
    ch.onclick = function () {
        ;
        ch.style.display = 'none';
        document.querySelector('.hide').style.display = 'block';
        document.querySelector('.hide').style.animation = '1s moveLeft'
        document.querySelector('#tbody').style.zIndex = '999999';
        document.querySelector('.box').style.zIndex = '999999';
    }

    let hide = document.querySelector('.hide')

    hide.onclick = function () {
        ch.style.display = 'block'
        hide.style.display = 'none'
        document.querySelector('.box').style.zIndex = '0';
        document.querySelector('#tbody').style.zIndex = '0';
    }

    let conf = document.querySelector('.conf');
    const data1 = document.forms['data1'];
    const data2 = document.forms['data2'];
    let cash = document.getElementById('three')
    let card = document.getElementById('four')

    conf.onclick = function () {
        document.querySelector('.modal-window').style.display = 'none';
        document.querySelector('.shadow').style.display = 'flex';
        document.querySelector('.thanks-for-orders').style.margin = '40%, ';
        orders.fullName = data1.fullName.value;
        orders.number = data1.number.value;
        orders.CommentToOrder = data1.CommentToOrder.value;
        if (rad.checked) {
            orders.city = data2.city.value;
            orders.street = data2.street.value;
            orders.house = data2.house.value;
        }
        if (cash.checked) {
            orders.payment = 'cash';
        }
        if (card.checked) {
            orders.payment = 'card';
        }
        data1.reset();
        data2.reset();
        // res();
        console.log('orders', orders);
    }

    let close = document.querySelector('.close-window');

    close.onclick = function(){
        document.querySelector('.shadow').style.display = 'none';
    }


    let rad = document.getElementById('one')
    let radio = document.getElementById('two')
    let f = false
    let t = true

    radio.onclick = function () {
        if (!f) {

            document.querySelector('.pick-up').disabled = !document.querySelector('.pick-up').disabled
            document.querySelector('.pick-up-t').disabled = !document.querySelector('.pick-up-t').disabled
            document.querySelector('.pick-up-h').disabled = !document.querySelector('.pick-up-h').disabled
        }
        f = !f

    }
    rad.onclick = function () {
        if (f) {
            document.querySelector('.pick-up').disabled = !document.querySelector('.pick-up').disabled
            document.querySelector('.pick-up-t').disabled = !document.querySelector('.pick-up-t').disabled
            document.querySelector('.pick-up-h').disabled = !document.querySelector('.pick-up-h').disabled
        }
        f = !f
    }

    let bbtn = document.querySelector('.basket-btn')

    bbtn.onclick = function () {
        document.querySelector('#basket').style.display = 'block'
    }




})

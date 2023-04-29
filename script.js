let quantity =0;
let total=0;

function addQuantity(){
    quantity=quantity + 1;
    document.getElementById('quantity-tag').innerHTML=quantity;
    total=total+ 8926.00;
    document.getElementById('Subtotal').innerHTML="SubTotal: " + total;
    document.getElementById('QTY').innerHTML="QTY: " + quantity;
    document.getElementById('total').innerHTML="Total: " + (total + 50);

}

function subQuantity(){
    quantity=quantity - 1;
    document.getElementById('quantity-tag').innerHTML=quantity;
}

function subTotal(){
    
}
function showBox(){
    document.getElementById('box1').style.display= 'none';
    document.getElementById('box2').style.display= 'flex';
    document.getElementById('box3').style.display= 'flex';
}
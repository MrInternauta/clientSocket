const socket = io('http://localhost:5000');
socket.on('connect', function(){
    console.log("conectado al servidor sockets");
    
});

// Escuchar nuevos pedidos creados
socket.on('CreatePedidoWeb', function(pedido){
    alert(pedido.message);
    console.log(pedido);
    if (pedido.status) {
        var pedidoshtml = document.getElementById('pedidos');
        var html = '<div><h3>Creado:' + pedido.data.id +'</h3></div>'
        pedidoshtml.innerHTML = pedidoshtml.innerHTML + html;
    }
});

// Escuchar cancelados
socket.on('CancelPedidoWeb', function(pedido){
    alert('Pedido cancelado');
    console.log(pedido);
    if (pedido.status) {
        var pedidoshtml = document.getElementById('pedidos');
        var html = '<div><h3>Cancelado: ' + pedido.data.id +'</h3></div>'
        pedidoshtml.innerHTML = pedidoshtml.innerHTML + html;
    }
});

// Simulación de pedido actualizado
socket.emit('UpdatePedido',
{
        "id": "55c871bd-5292-4e9a-83ee-289526f9",
        "idusuario": "73cd3279eb3e2a261e878d171d7e5960",
        "folio": 0,
        "metodopag": "Efectivo",
        "neto": "110.00",
        "envio": "10",
        "total": "120.00",
        "iddireccion": "73cd3279eb3e2a261e878d171d7e5968",
        "creacion": "2020-04-27T00:00:00.000Z",
        "estado": 0  
}, function(pedido){
    alert('Pedido actualizado', pedido);
});


socket.on('disconnect', function(){
    console.log("desconectado al servidor sockets");

});
//Declaracion del objeto con sus propiedades

var usuario = new Object();

usuario.nombres= new Array();
usuario.apellidos= new Array();
usuario.correo= new Array();
usuario.direccion= new Array();
usuario.pregunta= new Array();
usuario.respuesta= new Array();
usuario.dui= new Array();
usuario.NIT= new Array();
usuario.celular= new Array();
usuario.fecha= new Array();
usuario.user= new Array();
usuario.contra = new Array();

//AGREGUE NUEVOS CAMPOS PARA EL BALANCE
usuario.estado = new Array(); 
usuario.monto = new Array();
usuario.balance = new Array();
usuario.numerocuentas = new Array();
usuario.banco = new Array();
usuario.ncuenta = new Array();
usuario.saldo = new Array();

usuario.posicion_actual = 0;

usuario.numerotarjetas = new Array();
usuario.bancotarjeta = new Array();
usuario.ntarjeta = new Array();
usuario.saldotarjeta = new Array();
usuario.interesanual = new Array();
usuario.fechavenc = new Array();


usuario.numeroingresos = new Array();
usuario.fechaingreso = new Array();
usuario.desingreso = new Array();
usuario.montoingreso = new Array();
usuario.cuentaingreso = new Array();

usuario.numerogastos = new Array();
usuario.fechagasto = new Array();
usuario.desgasto = new Array();
usuario.montogasto = new Array();
usuario.cuentagasto = new Array();

usuario.estadobalance = new Array();

var j; //Varible que guarda la cantidad de cuentas
var k; //Varible que guarda la cantidad de cuentas
var ingresos; //Variable que guarda la cantidad de ingresos
var gastos; // Variable que guarda la cantidad de gastos
 
var cont = 0;

//Funcion que maneja los enventos click

function iniciar(){

        /*localStorage.removeItem('nom');
        localStorage.removeItem('ape');
        localStorage.removeItem('email');
        localStorage.removeItem('direc');
        localStorage.removeItem('pre');
        localStorage.removeItem('res');
        localStorage.removeItem('dui');
        localStorage.removeItem('nit');
        localStorage.removeItem('cel');
        localStorage.removeItem('fech');
        localStorage.removeItem('user');
        localStorage.removeItem('contra');
        localStorage.removeItem('estado');
        localStorage.removeItem('monto');
        localStorage.removeItem('balance');
        localStorage.removeItem('numerocuentas');
        localStorage.removeItem('banco');
        localStorage.removeItem('ncuentas');
        localStorage.removeItem('saldo');
        localStorage.removeItem('numerotarjetas');
        localStorage.removeItem('bancotarjeta');
        localStorage.removeItem('ntarjeta');
        localStorage.removeItem('saldotarjeta');
        localStorage.removeItem('interesanual');
        localStorage.removeItem('fechavenc');*/

        var nombresl = JSON.parse(localStorage.getItem('nom'));
        var apellidosl = JSON.parse(localStorage.getItem('ape'));
        var correol = JSON.parse(localStorage.getItem('email'));
        var direccionl = JSON.parse(localStorage.getItem('direc'));
        var preguntal = JSON.parse(localStorage.getItem('pre'));
        var respuestal = JSON.parse(localStorage.getItem('res'));
        var duil = JSON.parse(localStorage.getItem('dui'));
        var NITl = JSON.parse(localStorage.getItem('nit'));
        var celularl = JSON.parse(localStorage.getItem('cel'));
        var fechal = JSON.parse(localStorage.getItem('fech'));
        var userl = JSON.parse(localStorage.getItem('user'));
        var contral = JSON.parse(localStorage.getItem('contra'));
        var cantusuarios = JSON.parse(localStorage.getItem('cantus'));
        var estado = JSON.parse(localStorage.getItem('estado'));
        var montol = JSON.parse(localStorage.getItem('monto'));
        var balancel = JSON.parse(localStorage.getItem('balance'));
        var numerocuentasl = JSON.parse(localStorage.getItem('numerocuentas'));
        var bancol = JSON.parse(localStorage.getItem('banco'));
        var ncuental = JSON.parse(localStorage.getItem('ncuentas'));
        var saldol = JSON.parse(localStorage.getItem('saldo'));

        var numerotarjetasl = JSON.parse(localStorage.getItem('numerotarjetas'));
        var bancotarjetal = JSON.parse(localStorage.getItem('bancotarjeta'));
        var ntarjetal = JSON.parse(localStorage.getItem('ntarjeta'));
        var saldotarjetal = JSON.parse(localStorage.getItem('saldotarjeta'));
        var interesanuall = JSON.parse(localStorage.getItem('interesanual'));
        var fechavencl = JSON.parse(localStorage.getItem('fechavenc'));

        var numeroingresosl = JSON.parse(localStorage.getItem('numeroingresos'));
        var fechaingresol = JSON.parse(localStorage.getItem('fechaingreso'));
        var desingresol = JSON.parse(localStorage.getItem('desingreso'));
        var montoingresol = JSON.parse(localStorage.getItem('montoingreso'));
        var cuentaingresol = JSON.parse(localStorage.getItem('cuentaingreso'));

        var numerogastosl = JSON.parse(localStorage.getItem('numerogastos'));
        var fechagastol = JSON.parse(localStorage.getItem('fechagasto'));
        var desgastol = JSON.parse(localStorage.getItem('desgasto'));
        var montogastol = JSON.parse(localStorage.getItem('montogasto'));
        var cuentagastol = JSON.parse(localStorage.getItem('cuentagasto'));

        var estadobalancel = JSON.parse(localStorage.getItem('estadobalance'));

    if (nombresl === null) {

        nombresl = []
        apellidosl = []
        correol = []
        direccionl = []
        preguntal = []
        respuestal = []
        duil = []
        NITl = []
        celularl = []
        fechal = []
        userl = []
        contral = []
        

        alert("No hay cuentas");
    } else {

            alert("hay cuentas");

            for (var i = 0; i < cantusuarios; i++) {  
                
                usuario.nombres[i] = nombresl[i];
                usuario.apellidos[i] = apellidosl[i];
                usuario.correo[i] = correol[i];
                usuario.direccion[i] = direccionl[i];
                usuario.pregunta[i] = preguntal[i];
                usuario.respuesta[i] = respuestal[i];
                usuario.dui[i] = duil[i];
                usuario.NIT[i] = NITl[i];
                usuario.celular[i] = celularl[i];
                usuario.fecha[i] = fechal[i];
                usuario.user[i] = userl[i];
                usuario.contra[i] = contral[i]; 
                
            }

            cont = cantusuarios;
        
    }

    if (estado === null) {

        estado = []

    }else{

        if (estadobalancel===null){
        estadobalancel = [];
    }else{
        for (var i=0; i < cantusuarios; i++){
            usuario.estadobalance[i] = estadobalancel[i];
        }
    }
    
        for (var i = 0; i < cantusuarios; i++) {
            usuario.estado[i] = estado[i];
        }
        
    }

    if (montol === null) {

            montol = []
            balancel = []
            numerocuentasl = []
            bancol = []
            ncuental = []
            saldol = []

            for (var i = 0; i < cantusuarios; i++) {

                montol[i] = new Array();
                balancel[i] = new Array();
                numerocuentasl[i] = new Array();
                bancol[i] = new Array();
                ncuental[i] = new Array();
                saldol[i] = new Array();
                
            }

        }else{

            for (var i = 0; i < cantusuarios; i++) {

                usuario.numerocuentas[i] = numerocuentasl[i];
                usuario.monto[i] = montol[i];
                usuario.balance[i] = balancel[i];
                usuario.banco[i] = new Array();
                usuario.ncuenta[i] = new Array();
                usuario.saldo[i] = new Array();

                for (var j = 0; j < numerocuentasl[i]; j++) {

                    
                    usuario.banco[i][j]= bancol[i][j];
                    usuario.ncuenta[i][j] = ncuental[i][j];
                    usuario.saldo[i][j] = saldol[i][j];
                    
                }
            }

        }

    if (numerotarjetasl === null) {

            numerotarjetasl = []
            bancotarjetal = []
            ntarjetal = []
            saldotarjetal = []
            interesanuall = []
            fechavencl = []

            for (var i = 0; i < cantusuarios; i++) {

                bancotarjetal[i] = new Array();
                ntarjetal[i] = new Array();
                saldotarjetal[i] = new Array();
                interesanuall[i] = new Array();        
                fechavencl[i] = new Array();
                
            }

        }else{

            for (var i = 0; i < cantusuarios; i++) {

                usuario.numerotarjetas[i] = numerotarjetasl[i];
                
                usuario.bancotarjeta[i] = new Array();
                usuario.ntarjeta[i] = new Array();
                usuario.saldotarjeta[i] = new Array();
                usuario.interesanual[i] = new Array();
                usuario.fechavenc[i] = new Array();

                for (var j = 0; j < numerotarjetasl[i]; j++) {

                    usuario.bancotarjeta[i][j] = bancotarjetal[i][j];
                    usuario.ntarjeta[i][j] = ntarjetal[i][j];
                    usuario.saldotarjeta[i][j]= saldotarjetal[i][j];
                    usuario.interesanual[i][j] = interesanuall[i][j];
                    usuario.fechavenc[i][j] = fechavencl[i][j];
                    
                }
            }

        }

        if (numeroingresosl === null) {

            numeroingresosl = []
            fechaingresol = []
            desingresol = []
            montoingresol = []
            cuentaingresol = []

            for (var i = 0; i < cantusuarios; i++) {

                fechaingresol[i] = new Array();
                desingresol[i] = new Array();
                montoingresol[i] = new Array();        
                cuentaingresol[i] = new Array();
                
            }

        }else{

            for (var i = 0; i < cantusuarios; i++) {

                usuario.numeroingresos[i] = numeroingresosl[i];
                
                usuario.fechaingreso[i] = new Array();
                usuario.desingreso[i] = new Array();
                usuario.montoingreso[i] = new Array();
                usuario.cuentaingreso[i] = new Array();

                for (var j = 0; j < numerotarjetasl[i]; j++) {

                    usuario.fechaingreso[i][j] = fechaingresol[i][j];
                    usuario.desingreso[i][j] = desingresol[i][j];
                    usuario.montoingreso[i][j]= montoingresol[i][j];
                    usuario.cuentaingreso[i][j] = cuentaingresol[i][j];
                    
                }
            }

        }


        if (numerogastosl === null) {

            numerogastosl = []
            fechagastol = []
            desgastol = []
            montogastol = []
            cuentagastol = []

            for (var i = 0; i < cantusuarios; i++) {

                fechagastol[i] = new Array();
                desgastol[i] = new Array();
                montogastol[i] = new Array();        
                cuentagastol[i] = new Array();
                
            }

        }else{

            for (var i = 0; i < cantusuarios; i++) {

                usuario.numerogastos[i] = numerogastosl[i];
                
                usuario.fechagasto[i] = new Array();
                usuario.desgasto[i] = new Array();
                usuario.montogasto[i] = new Array();
                usuario.cuentagasto[i] = new Array();

                for (var j = 0; j < numerotarjetasl[i]; j++) {

                    usuario.fechagasto[i][j] = fechagastol[i][j];
                    usuario.desgasto[i][j] = desgastol[i][j];
                    usuario.montogasto[i][j]= montogastol[i][j];
                    usuario.cuentagasto[i][j] = cuentagastol[i][j];
                    
                }
            }

        }


//Evento click
    var respuesta_actual = "";
	document.frmlogin.btningresar.onclick = function(){

        if (usuario.estado[usuario.posicion_actual] !== false){
            usuario.estado[usuario.posicion_actual] = true;
        }

		usuario.login();

        document.getElementById('welcome').innerHTML = "Bienvenido " + usuario.user[usuario.posicion_actual];
        usuario.verificar_balance();


    };

	
    document.frmregistro.btnregistro.onclick=function(){

        //Validacion de todos los campos del registro
        if((usuario.validacion(frmregistro.txtnombre))==true){
            if((usuario.validacion(frmregistro.txtapellido))==true){
                if ((usuario.validacion(frmregistro.txtcorreo))==true){
                    if((usuario.validacion(frmregistro.txtusername))==true){
                        if ((usuario.validacion(frmregistro.txtcontra))==true){
                            if((usuario.validacion(frmregistro.txtdirec))==true){
                                if ((usuario.validacion(frmregistro.txtrespuesta))==true){
                                    if ((usuario.validacion(frmregistro.txtdui))==true){
                                        if ((usuario.validacion(frmregistro.txtnit))==true){
                                            if((usuario.validacion(frmregistro.txtcelular))==true){
                                                if ((usuario.validacion(frmregistro.txtdate))==true){
                                                    usuario.registrar();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
        //MODIFICACION END HERE!!!!!
    };
    
    document.getElementById("linkregistro").onclick=function(){
        
        document.getElementById("registro").style.display="block";
        document.getElementById("login").style.display="none";
    }

    document.getElementById("linkcontra").onclick=function(){
        document.getElementById("recuperacion").style.display="block";
        document.getElementById("login").style.display="none";

        document.getElementById("btnsiguiente").style.display="block";
        document.getElementById("btnresponder").style.display="none";
        document.getElementById("us").style.display="block";
        document.getElementById("pr").style.display="none";
        document.getElementById("res").style.display="none";
     }

     //Boton que muestra la pregunta de recuperacion
     document.getElementById("btnsiguiente").onclick=function(){
        var usuario_actual1 = "";
        var pregunta_actual = "";
        var validar1 = 0;
        for(var i=0;i<=cont;){
            if(usuario.user[i] == document.getElementById('txtrecu_user').value){
                usuario_actual1 = usuario.user[i];
                pregunta_actual = usuario.pregunta[i];
                respuesta_actual = usuario.respuesta[i];
                validar1 = 1;
            }
            i++;
        }
            //validar
            if (validar1==1) { 
            document.getElementById("btnsiguiente").style.display="none";
            document.getElementById("btnresponder").style.display="block";
            document.getElementById("us").style.display="none";
            document.getElementById("pr").style.display="block";
            document.getElementById("res").style.display="block";
            document.getElementById("us").value="";
            document.getElementById("txtpregunta").innerHTML=pregunta_actual;
            }else{
            alert("El usuario ingresado no existe");
        }
     }
     document.getElementById("regresar").onclick=function(){
        document.getElementById("registro").style.display="none";
        document.getElementById("login").style.display="block"; 
     }

     document.getElementById("regresar1").onclick=function(){
        document.getElementById("recuperacion").style.display="none";
        document.getElementById("login").style.display="block";
     }

     document.getElementById("btnresponder").onclick=function(){
        
        if(respuesta_actual == document.getElementById("txtrespuesta2").value){
            document.getElementById("mostrar").style.display = "block";
            usuario.recuperacion();
        }
        
     }
      document.getElementById("acep").onclick=function(){
            document.getElementById("mostrar").style.display = "none";
            document.getElementById("recuperacion").style.display = "none";
            document.getElementById("login").style.display = "block"; 
     }

     document.getElementById("linkcuenta").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("cuentas").style.display="block";

     }

     document.getElementById("linkingreso").onclick=function(){
        usuario.llenado_datos_select();
        document.getElementById("menu").style.display="none";
        document.getElementById("ingresos").style.display="block";

     }
     document.getElementById("linkgasto").onclick=function(){
        usuario.llenado_datos_select();
        document.getElementById("menu").style.display="none";
        document.getElementById("gastos").style.display="block";

     }
     document.getElementById("linkestadistica").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("estadistica").style.display="block";

     }
     document.getElementById("linkajuste").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="block";

     }

     document.getElementById("regresarcuenta").onclick=function(){
        document.getElementById("cuentas").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresaringreso").onclick=function(){
        document.getElementById("ingresos").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresargasto").onclick=function(){
        document.getElementById("gastos").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresarestadistica").onclick=function(){
        document.getElementById("estadistica").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresarconfig").onclick=function(){
        document.getElementById("configuracion").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("minicio").onclick=function(){
        document.getElementById("menu").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("mcuenta").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("mingresos").onclick=function(){
        usuario.llenado_datos_select();
        document.getElementById("menu").style.display="none";
        document.getElementById("ingresos").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
       
    }

    document.getElementById("mgastos").onclick=function(){
        usuario.llenado_datos_select();
        document.getElementById("menu").style.display="none";
        document.getElementById("gastos").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("mestadistica").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("estadistica").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("majuste").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("regresartarjeta").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("regresargestion").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("regresartarjeta").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("regresargestion").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("subcuenta1").onclick=function(){

        document.getElementById('mostrarefectivo').innerHTML = "$" + usuario.monto[usuario.posicion_actual];

        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="block";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("subcuenta2").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="block";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("subcuenta3").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="block";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("acep1").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
    }

    document.getElementById("btndatos").onclick=function(){
        usuario.nuevacuentas();
    }

    document.getElementById("btnfinalizar").onclick=function(){
        usuario.calculo_balance();
        document.getElementById("datos").style.display= "none";
        document.getElementById("folo").style.display= "block";

        usuario.estado[usuario.posicion_actual] = false;

        localStorage.setItem('estado', JSON.stringify(usuario.estado));
        localStorage.setItem('monto', JSON.stringify(usuario.monto));
        localStorage.setItem('balance', JSON.stringify(usuario.balance));
        localStorage.setItem('numerocuentas', JSON.stringify(usuario.numerocuentas));
        localStorage.setItem('banco', JSON.stringify(usuario.banco));
        localStorage.setItem('ncuentas', JSON.stringify(usuario.ncuenta));
        localStorage.setItem('saldo', JSON.stringify(usuario.saldo));

    }

    document.getElementById("msalir").onclick=function(){
        document.getElementById("folo").style.display="none";
        document.getElementById("menu").style.display="none";
        document.getElementById("login").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
        document.getElementById("efectivo").style.display="none";
        document.getElementById("gestioncuentas").style.display="none";
        document.getElementById("tarjetascredito").style.display="none";
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";

        document.getElementById('frmlogin').reset();
       
    }

    //navegacion de los submenus condiguracion
    document.getElementById("imgconfig").onclick=function(){
        document.getElementById("configuracion").style.display="none";
        document.getElementById("tipo_pago").style.display="block";
    }
    document.getElementById("imgbalance").onclick=function(){
        document.getElementById("configuracion").style.display="none";
        document.getElementById("balance").style.display="block";
    }

    document.getElementById("regresarsubconfig").onclick=function(){
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("configuracion").style.display="block";
    }
    document.getElementById("regresarsubconfig2").onclick=function(){
        document.getElementById("balance").style.display="none";
        document.getElementById("configuracion").style.display="block";
    }
    // ***************************************//


    document.getElementById('btnvercuenta').onclick=function(){

        document.getElementById('tg').style.display="none";
        document.getElementById('vtcuentas').style.display="block";
        document.getElementById('btnregcuenta').style.display="block"

        document.getElementById('datoscuenta').innerHTML = "";

        for (var j = 0; j < usuario.numerocuentas[usuario.posicion_actual]; j++) {
            document.getElementById('datoscuenta').innerHTML += "<tr><td>" + usuario.banco[usuario.posicion_actual][j] + "</td>" + 
            "<td>" + usuario.ncuenta[usuario.posicion_actual][j] + "</td>" + "<td>$" + usuario.saldo[usuario.posicion_actual][j] + "</td></tr>";
        }

    }

    document.getElementById('btnregcuenta').onclick=function(){
        document.getElementById('tg').style.display="block";
        document.getElementById('vtcuentas').style.display="none";
        document.getElementById('btnregcuenta').style.display="none";
    }

    document.getElementById('btnagregarcuenta').onclick=function(){
        usuario.nuevacuentas1();
        localStorage.setItem('balance', JSON.stringify(usuario.balance));
        localStorage.setItem('numerocuentas', JSON.stringify(usuario.numerocuentas));
        localStorage.setItem('banco', JSON.stringify(usuario.banco));
        localStorage.setItem('ncuentas', JSON.stringify(usuario.ncuenta));
        localStorage.setItem('saldo', JSON.stringify(usuario.saldo));
    }

    document.getElementById('btndagregartarjeta').onclick=function(){
        usuario.nuevatarjeta();

        localStorage.setItem('balance', JSON.stringify(usuario.balance));
        localStorage.setItem('numerotarjetas', JSON.stringify(usuario.numerotarjetas));
        localStorage.setItem('bancotarjeta', JSON.stringify(usuario.bancotarjeta));
        localStorage.setItem('ntarjeta', JSON.stringify(usuario.ntarjeta));
        localStorage.setItem('saldotarjeta', JSON.stringify(usuario.saldotarjeta));
        localStorage.setItem('interesanual', JSON.stringify(usuario.interesanual));
        localStorage.setItem('fechavenc', JSON.stringify(usuario.fechavenc));

    }

    document.getElementById('btnvertarjeta').onclick=function(){

        document.getElementById('tg1').style.display="none";
        document.getElementById('vttarjetas').style.display="block";
        document.getElementById('btnregtarjeta').style.display="block"

        document.getElementById('datostarjeta').innerHTML = "";

        for (var j = 0; j < usuario.numerotarjetas[usuario.posicion_actual]; j++) {
            
            document.getElementById('datostarjeta').innerHTML += "<tr><td>" + usuario.bancotarjeta[usuario.posicion_actual][j] + "</td>" + 
            "<td>" + usuario.ntarjeta[usuario.posicion_actual][j] + "</td>" + "<td>$" + usuario.saldotarjeta[usuario.posicion_actual][j] + "</td>"
            + "<td>" + usuario.interesanual[usuario.posicion_actual][j] + "</td>" + "<td>" + usuario.fechavenc[usuario.posicion_actual][j] + "</td></tr>";
        }

    }

    document.getElementById('btnregtarjeta').onclick=function(){
        document.getElementById('tg1').style.display="block";
        document.getElementById('vttarjetas').style.display="none";
        document.getElementById('btnregtarjeta').style.display="none";
    }

    document.getElementById('btnnuevoingreso').onclick=function(){
        if(usuario.validacion(document.getElementById("monto_ingreso"))){
        usuario.nuevo_ingreso();

        ingresos = usuario.numeroingresos[usuario.posicion_actual];

        j = usuario.numerocuentas[usuario.posicion_actual];

        usuario.balance[usuario.posicion_actual] = parseFloat(usuario.balance[usuario.posicion_actual]) + parseFloat(usuario.montoingreso[usuario.posicion_actual][ingresos]);

        document.getElementById("titulo").innerHTML= "E-Wallet Balance:" + " $" + usuario.balance[usuario.posicion_actual];
       
        localStorage.setItem('numeroingresos', JSON.stringify(usuario.numeroingresos));
        localStorage.setItem('fechaingreso', JSON.stringify(usuario.fechaingreso));
        localStorage.setItem('desingreso', JSON.stringify(usuario.desingreso));
        localStorage.setItem('montoingreso', JSON.stringify(usuario.montoingreso));
        localStorage.setItem('cuentaingreso', JSON.stringify(usuario.cuentaingreso));
        localStorage.setItem('balance', JSON.stringify(usuario.balance));

        usuario.numeroingresos[usuario.posicion_actual]++;

        }
    }

    document.getElementById('btnnuevogasto').onclick=function(){
         if(usuario.validacion(document.getElementById("monto_gasto"))){
        usuario.nuevo_costo();

        ingresos = usuario.numerogastos[usuario.posicion_actual];

        j = usuario.numerocuentas[usuario.posicion_actual];

        usuario.balance[usuario.posicion_actual] = parseFloat(usuario.balance[usuario.posicion_actual]) - parseFloat(usuario.montogasto[usuario.posicion_actual][ingresos]);

        document.getElementById("titulo").innerHTML= "E-Wallet Balance:" + " $" + usuario.balance[usuario.posicion_actual];
       
        localStorage.setItem('numeroingresos', JSON.stringify(usuario.numerogastos));
        localStorage.setItem('fechaingreso', JSON.stringify(usuario.fechagasto));
        localStorage.setItem('desingreso', JSON.stringify(usuario.desgasto));
        localStorage.setItem('montoingreso', JSON.stringify(usuario.montogasto));
        localStorage.setItem('cuentaingreso', JSON.stringify(usuario.cuentagasto));
        localStorage.setItem('balance', JSON.stringify(usuario.balance));

        usuario.numerogastos[usuario.posicion_actual]++;

        }
    }

 }

usuario.verificar_balance=function(){
    if (parseFloat(usuario.balance[usuario.posicion_actual]) > parseFloat(usuario.estadobalance[usuario.posicion_actual])){
        document.getElementById("titulo").style.color="red";
    }else{
        document.getElementById("titulo").style.color="green";
    }
    
}

usuario.indicar_balance=function(){
    var resultado_balance = document.getElementById("txtbalance").value;
    usuario.estadobalance[usuario.posicion_actual]=resultado_balance;
    document.getElementById("balance_salida").innerHTML="El nuevo balance es de: $" + resultado_balance;
    usuario.verificar_balance();
}

usuario.llenado_datos_select=function(){
    var select1=document.getElementById("slcingresos").innerHTML="";
    var select2=document.getElementById("slcgastos").innerHTML="";
    var opcion1 = document.createElement("option");
    var text1 = document.createTextNode("Efectivo");
    var text2 = document.createTextNode("Efectivo");
    opcion1.appendChild(text1);
    var opcion2 = document.createElement("option");
    opcion2.appendChild(text2);
    var select1 = document.getElementById("slcingresos");
    var select2 = document.getElementById("slcgastos");
    opcion1.setAttribute("id","tipo_cuenta_ingreso"); 
    opcion2.setAttribute("id","tipo_cuenta_gasto");
    select2.appendChild(opcion2);
    select1.appendChild(opcion1);

    for(var i=0;i<usuario.numerocuentas[usuario.posicion_actual];i++){
        //indicando etiqueta principal "Select"

            var select1 = document.getElementById("slcingresos");
            //creando elemento nodo "option" compatible con la etiqueta principal
            var opcion1 = document.createElement("option");
            //Creando variable de texto para nodos que contiene la cuenta
            var textopcion = document.createTextNode(usuario.banco[usuario.posicion_actual][i]);
            //insertando texto de cuenta en el nodo option
            opcion1.appendChild(textopcion);
            //Insertando un atributo Id="tipo_cuenta_ingreso" al elemento nodo "option"
            opcion1.setAttribute("id","tipo_cuenta_ingreso");
            //Integrando elemento nodo option al select
            select1.appendChild(opcion1);
            
            var select2 = document.getElementById("slcgastos");
            var opcion2 = document.createElement("option");
            var textopcion = document.createTextNode(usuario.banco[usuario.posicion_actual][i]);
            opcion2.appendChild(textopcion);
            opcion2.setAttribute("id","tipo_cuenta_gasto");
            select2.appendChild(opcion2);
        }
    for(var i=0; i<usuario.numerotarjetas[usuario.posicion_actual];i++){
        var select1 = document.getElementById("slcingresos");
        var opcion1 = document.createElement("option");
        var textopcion = document.createTextNode(usuario.bancotarjeta[usuario.posicion_actual][i]);
        opcion1.appendChild(textopcion);
        opcion1.setAttribute("id","tipo_cuenta_ingreso");
        select1.appendChild(opcion1);

        var select2 = document.getElementById("slcgastos");
        var opcion2 = document.createElement("option");
        var textopcion = document.createTextNode(usuario.bancotarjeta[usuario.posicion_actual][i]);
        opcion2.appendChild(textopcion);
        opcion2.setAttribute("id","tipo_cuenta_gasto");
        select2.appendChild(opcion2);
    }

}
// Proceso que ingresa nuevos ingresos a la tabla
usuario.nuevo_ingreso=function(){
    //Capturando datos de los campos de la tabla
    ingresos = usuario.numeroingresos[usuario.posicion_actual];

    usuario.fechaingreso[usuario.posicion_actual][ingresos]=document.getElementById("fecha_ingreso").value;
    usuario.desingreso[usuario.posicion_actual][ingresos]=document.getElementById("descripcion_ingreso").value;
    usuario.montoingreso[usuario.posicion_actual][ingresos]=document.getElementById("monto_ingreso").value;
    //capturando valor del opcion dentro del select
    usuario.cuentaingreso[usuario.posicion_actual][ingresos]=document.getElementById("slcingresos");
    var celda4pro = usuario.cuentaingreso[usuario.posicion_actual][ingresos].options[usuario.cuentaingreso[usuario.posicion_actual][ingresos].selectedIndex].value;

    //indicando etiqueta principal
    var table = document.getElementById("tabla_ingresos");
    //creando nodo tr
    var tr = document.createElement("tr"); 
    //insertando nodo tr a etiqueta principal (nueva fila)
    table.appendChild(tr);

    //Creando contenido para las celdas de la nueva fila
    var td1 = document.createElement("td");
    var text1 = document.createTextNode(usuario.fechaingreso[usuario.posicion_actual][ingresos]);
    td1.appendChild(text1);   
    var td2 = document.createElement("td");
    var text2 = document.createTextNode(usuario.desingreso[usuario.posicion_actual][ingresos]);
    td2.appendChild(text2);
    var td3 = document.createElement("td");
    var text3 = document.createTextNode(usuario.montoingreso[usuario.posicion_actual][ingresos]);
    td3.appendChild(text3);
    var td4 = document.createElement("td");
    var text4 = document.createTextNode(celda4pro);
    td4.appendChild(text4);

    //integrando nuevas celdas a la fila
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

}

usuario.nuevo_costo=function(){

    gastos = usuario.numerogastos[usuario.posicion_actual];

    usuario.fechagasto[usuario.posicion_actual][gastos]=document.getElementById("fecha_gasto").value;
    usuario.desgasto[usuario.posicion_actual][gastos]=document.getElementById("slcmotivo");
    var celda2pro=usuario.desgasto[usuario.posicion_actual][gastos].options[usuario.desgasto[usuario.posicion_actual][gastos].selectedIndex].value;
    usuario.montogasto[usuario.posicion_actual][gastos]=document.getElementById("monto_gasto").value;
    usuario.cuentagasto[usuario.posicion_actual][gastos]=document.getElementById("slcgastos");
    var celda4pros = usuario.cuentagasto[usuario.posicion_actual][gastos].options[usuario.cuentagasto[usuario.posicion_actual][gastos].selectedIndex].value;

    var table = document.getElementById("tabla_gastos");
    var tr = document.createElement("tr"); 
    table.appendChild(tr);

    var td1 = document.createElement("td");
    var text1 = document.createTextNode(usuario.fechagasto[usuario.posicion_actual][gastos]);
    td1.appendChild(text1);   
    var td2 = document.createElement("td");
    var text2 = document.createTextNode(celda2pro);
    td2.appendChild(text2);
    var td3 = document.createElement("td");
    var text3 = document.createTextNode(usuario.montogasto[usuario.posicion_actual][gastos]);
    td3.appendChild(text3);
    var td4 = document.createElement("td");
    var text4 = document.createTextNode(celda4pros);
    td4.appendChild(text4);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
}
//Metodo que genera el login

usuario.login = function(){

    document.getElementById("titulo").innerHTML="";
    
    if(document.getElementById('txtuser').value!="" & document.getElementById('txtpassword').value!=""){

    var usuario_actual = "";
    var validar = 0;



    for(var i=0;i<=cont;){

        if(usuario.user[i] == document.getElementById('txtuser').value & usuario.contra[i] == document.getElementById('txtpassword').value){

        usuario_actual = usuario.user[i];

        


        //MODIFICACION PARA BALANCE EMPIEZA AQUI!
        usuario.posicion_actual= i; //guardo la posicion del usuario para usarla en el balance
        if(usuario.estado[i]!==false){
            
            document.getElementById("datos").style.display="block";
            document.getElementById("login").style.display="none";

            usuario.numerocuentas[i] = 0;
            usuario.balance[i] = 0;

            usuario.banco[i] = new Array;
            usuario.ncuenta[i] = new Array;
            usuario.saldo[i] = new Array;

            usuario.numerotarjetas[i] = 0;
            usuario.bancotarjeta[i] = new Array();
            usuario.ntarjeta[i] = new Array();
            usuario.interesanual[i] = new Array();
            usuario.fechavenc[i] = new Array();
            usuario.saldotarjeta[i] = new Array();

            usuario.numeroingresos[i] = 0;
            usuario.fechaingreso[i] = new Array();
            usuario.desingreso[i] = new Array();
            usuario.montoingreso[i] = new Array();
            usuario.cuentaingreso[i] = new Array();

            usuario.numerogastos[i] = 0;
            usuario.fechagasto[i] = new Array();
            usuario.desgasto[i] = new Array();
            usuario.montogasto[i] = new Array();
            usuario.cuentagasto[i] = new Array();
            

        }else{
            //aqui se muestra de una vez el menú principal
             document.getElementById("folo").style.display="block";
             document.getElementById("menu").style.display="block";
             document.getElementById("login").style.display="none";
            
             document.getElementById("titulo").innerHTML= "E-Wallet Balance:" + " $" + usuario.balance[usuario.posicion_actual];
        }
        

        validar = 1;
        i = cont;

        }
        i++;
        //MODIFICACION PARA PALANCE TERMINA AQUI!
    }

    if (validar == 1) {
        

            
        

    }else{
        alert("Usuario o contraseña incorrecta")
    }
        
    }else{
        alert("Debe completar todos los campos");
    }
}


//metodo que muestra la contraseña
usuario.recuperacion = function(){
    var validar2 = 0;
    var correo_actual, contra_actual;

    for(var i=0;i<=cont;){

        if(usuario.user[i] == document.getElementById('txtrecu_user').value){

            correo_actual = usuario.correo[i];

            contra_actual = usuario.contra[i];

            validar2 = 1;

        }

        i++;
    }


    if (validar2 == 1) {
        document.getElementById("mcontra").innerHTML = contra_actual;
    }
}


//Metodo que registra usuarios
usuario.registrar = function(){
    var nombres = document.getElementById('txtnombre').value;
    var apellidos= document.getElementById('txtapellido').value;
    var correo= document.getElementById('txtcorreo').value;
    var direccion= document.getElementById('txtdirec').value;
    var pregunta= document.getElementById('slcpregunta').value;
    var respuesta= document.getElementById('txtrespuesta').value;
    var dui= document.getElementById('txtdui').value;
    var NIT= document.getElementById('txtnit').value;
    var celular= document.getElementById('txtcelular').value;
    var fecha= document.getElementById('txtdate').value;  
    var user= document.getElementById('txtusername').value;
    var contra = document.getElementById('txtcontra').value;
    
    var re = "//";
    

    if(nombres!="" && apellidos!="" && correo!="" && direccion!="" && pregunta!="" && respuesta!="" && dui!="" && NIT!="" && celular!="" && user!="" && contra!=""){
        

        usuario.nombres[cont]= nombres;
        usuario.apellidos[cont]= apellidos;
        usuario.correo[cont]= correo;
        usuario.direccion[cont]= direccion;
        usuario.pregunta[cont]= pregunta;
        usuario.respuesta[cont]= respuesta;
        usuario.dui[cont]= dui;
        usuario.NIT[cont]= NIT;
        usuario.celular[cont]= celular;
        usuario.fecha[cont]= fecha;
        usuario.estado[cont]=true; //Agrego esta asignacion para el balance
        usuario.user[cont] = document.getElementById('txtusername').value;
        usuario.contra[cont] = document.getElementById('txtcontra').value;
        
        cont += 1;

        alert("Usuario registrado exitosamente");

        document.getElementById("login").style.display="block";
        document.getElementById("registro").style.display="none";

        localStorage.setItem('nom', JSON.stringify(usuario.nombres));
        localStorage.setItem('ape', JSON.stringify(usuario.apellidos));
        localStorage.setItem('email', JSON.stringify(usuario.correo));
        localStorage.setItem('direc', JSON.stringify(usuario.direccion));
        localStorage.setItem('pre', JSON.stringify(usuario.pregunta));
        localStorage.setItem('res', JSON.stringify(usuario.respuesta));
        localStorage.setItem('dui', JSON.stringify(usuario.dui));
        localStorage.setItem('nit', JSON.stringify(usuario.NIT));
        localStorage.setItem('cel', JSON.stringify(usuario.celular));
        localStorage.setItem('fech', JSON.stringify(usuario.fecha));
        localStorage.setItem('user', JSON.stringify(usuario.user));
        localStorage.setItem('contra', JSON.stringify(usuario.contra));
        localStorage.setItem('cantus', JSON.stringify(cont));

    }else{

        alert("Debe completar todos los campos");

    }   

}

//FUNCIONONES PARA BALANCE
usuario.nuevacuentas1=function(){

    j = usuario.numerocuentas[usuario.posicion_actual];

    usuario.banco[usuario.posicion_actual][j] = document.getElementById("txtbanco1").value;
    usuario.ncuenta[usuario.posicion_actual][j] = document.getElementById("txtNcuenta1").value;
    usuario.saldo[usuario.posicion_actual][j] = document.getElementById("txtsaldo1").value;
       
    usuario.numerocuentas[usuario.posicion_actual]= parseInt(usuario.numerocuentas[usuario.posicion_actual])+parseInt(1);
    alert("cuenta agregada correctamente");


    usuario.balance[usuario.posicion_actual] = parseFloat(usuario.balance[usuario.posicion_actual]) + parseFloat(usuario.saldo[usuario.posicion_actual][j]);


    document.getElementById("titulo").innerHTML= "E-Wallet Balance:" + " $" + usuario.balance[usuario.posicion_actual];

    document.getElementById("txtbanco1").value = "";
    document.getElementById("txtNcuenta1").value = "";
    document.getElementById("txtsaldo1").value = "";

}

usuario.nuevacuentas=function(){

    j = usuario.numerocuentas[usuario.posicion_actual];

    
    usuario.banco[usuario.posicion_actual][j] = document.getElementById("txtbanco").value;
    usuario.ncuenta[usuario.posicion_actual][j] = document.getElementById("txtNcuenta").value;
    usuario.saldo[usuario.posicion_actual][j] = document.getElementById("txtsaldo").value;
       
    usuario.numerocuentas[usuario.posicion_actual]= parseInt(usuario.numerocuentas[usuario.posicion_actual])+parseInt(1);
    alert("cuenta agregada correctamente");

}

usuario.calculo_balance=function(){

    usuario.monto[usuario.posicion_actual] = document.getElementById("txtmontoI").value;

    var montoinicio = document.getElementById("txtmontoI").value;
    usuario.balance[usuario.posicion_actual] = montoinicio;

    for (var i = 0; i <= j; i++) {

        usuario.balance[usuario.posicion_actual] = parseFloat(usuario.balance[usuario.posicion_actual]) + parseFloat(usuario.saldo[usuario.posicion_actual][i]);
        
    }
    
    document.getElementById("titulo").innerHTML= "E-Wallet Balance:" + " $" + usuario.balance[usuario.posicion_actual];
    usuario.verificar_balance();
}

usuario.nuevatarjeta=function(){

    k = usuario.numerotarjetas[usuario.posicion_actual];

    usuario.bancotarjeta[usuario.posicion_actual][k] = document.getElementById("txtbancotarjeta").value;
    usuario.ntarjeta[usuario.posicion_actual][k] = document.getElementById("txtNtarjeta").value;
    usuario.saldotarjeta[usuario.posicion_actual][k] = document.getElementById("txtsaldotarjeta").value;
    usuario.interesanual[usuario.posicion_actual][k] = document.getElementById("porcentajetarjeta").value;
    usuario.fechavenc[usuario.posicion_actual][k] = document.getElementById("fechatarjeta").value;
       
    usuario.numerotarjetas[usuario.posicion_actual] = parseInt(usuario.numerotarjetas[usuario.posicion_actual])+parseInt(1);
    alert("Tarjeta agregada correctamente");

    usuario.balance[usuario.posicion_actual] = parseFloat(usuario.balance[usuario.posicion_actual]) + parseFloat(usuario.saldotarjeta[usuario.posicion_actual][k]);

    document.getElementById("titulo").innerHTML= "E-Wallet Balance:" + " $" + usuario.balance[usuario.posicion_actual];

}

//Validacion del registro
usuario.validacion=function(campo){
    var validacion = null;
    var valido = false;
    switch(campo.id){
        case "txtnombre":
            validacion = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Nombre inválido, ingrese solo letras");
               
            }
            return valido;
        break;
        
        case "txtapellido":
            validacion = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(validacion.test(campo.value)){
            valido = true;
            
        }
            if(valido==true){
                
            }else{
                alert("Apellido Invalido, ingrese solo letras");
                }
                return valido;
        break;
        
         case "txtcorreo":
            validacion = /^(\S)+(@hotmail.com|@yahoo.com|@gmail.com)$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("correo Invalido, debe terminar en @hotmail.com, @yahoo.com o @gmail.com");}
            return valido;
        break;
        
         case "txtusername":
            validacion = /(\S)(\w)+/;

        if(validacion.test(campo.value)){
            
        }
          
        for(var i=0;i<=cont;){
            if (usuario.user[i]==campo.value){
                alert("Nombre de usuario no disponible");
                return valido;
            }else{
                valido=true;
            }
            i++;
        }
          if(valido==true){
                
            }else{
                alert("Usuario invalido, debe llenar el campo");}
            return valido;
        break;

        case "txtcontra":
        
            validacion = /[A-Z]+[a-z]+[\$\_\-\&]+(\d)+/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                if(campo.value.length <8){//VALIDACION DE CONTRASEÑA
                    alert("Contraseña debe contener minimo 8 caracteres!");
                    valido=false;
                    return valido;
                }
            }else{
                alert("contraseña Invalido, debe contener al menos: 1 mayuscula, 1 minuscula, 1 numero y 1 simbolo ($, &, -, _)");}
            return valido;
        break;

        case "txtdirec":
        
            validacion = /(\w)+(\,)(\s)(\w)+(\,)(\s)(\w)+(\,)(\s)(\w)+(\,)(\s)(\w)+/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                return valido;
            }else{
                alert("La direccion debe ir separada por 4 comas ',' ejemplo: departamento, ciudad, col, #casa");}
            return valido;
        break;

        case "txtrespuesta":
            validacion = /(\S)(\w)+/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Debe colocar una respuesta");}
                return valido;
        break;
        
        case "txtdui":
            validacion = /(\d){8}-(\d){1}/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Dui Invalido, formato del Dui es: ########-#");}
                return valido;
        break;

        case "txtnit":
            validacion = /^(\d){4}-(\d){6}-(\d){3}-(\d){1}$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("NIT Invalido, formato del NIT es ####-######-###-#");}
                return valido;
        break;

        case "txtcelular":
            validacion = /^(\d){4}-(\d){4}$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Celular Invalido, formato del celular es: ####-####");}
                return valido;
        break;
        
         case "txtdate":
            var fecha = new Date(campo.value);
            var anionac = fecha.getFullYear();
            var hoy = new Date()
            var anio = hoy.getFullYear();

            
        if((anio - anionac)>18){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Este programa es solo para mayores de 18 años");}
                return valido;
        break;

        case "monto_ingreso": case "monto_gasto":
            validacion=/^(\d+)[.](\d){2}$/;
            if (validacion.test(campo.value)){
                valido=true;
            }
            if(valido==true){
            }else{
                alert("El monto debe ser positivo y terminar en decimal .00");}
                return valido;
        break;              
    }  
}



//Carga eventos
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}




const reproductorMusica = {
    estado: "apagado",
    play : function(cancion){ 
        if(this.estado === "apagado"){
            console.log(`comenzando reproduccion de cancion ${cancion}..`)
            //cambiar el estado
            this.estado = "play"
        }else{
            console.log(`cancion en ejecucion: stop para terminar`)
        }
    },
    stop: function(){
        if (this.estado === "apagado"){
            console.log(`reproductor ya esta apagado`)
        }else{
            console.log(`apagando reproductor...`)
            this.estado = "apagado"
        }   
    }
}

reproductorMusica.play("Himno macional");
//reproductorMusica.stop();
//reproductorMusica.stop();


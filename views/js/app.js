$("#mag-date").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#fecha-reserva-mag").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#fecha-reserva").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#fecha-recordatorio").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-ins-ciclo1").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-cur-ciclo1").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#cierre-ins-ciclo1").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-ins-ciclo2").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-cur-ciclo2").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#cierre-ins-ciclo2").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-ins-ciclo3").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-cur-ciclo3").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#cierre-ins-ciclo3").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-ins-ciclo4").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#inicio-cur-ciclo4").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#cierre-ins-ciclo4").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"}),$("#notificacion-fecha").datepicker({weekStart:1,format:"dd/mm/yyyy",color:"green"});
$("#mensaje-mag").click(function(){$(".leadcheck").attr("form","em-mag-form"),$("#em-mag-form").submit()}),$("#nota-mag").click(function(){$("#tipo-accion-mag").val("agregar-nota"),$("#es-llamada-mag").css("display","block"),$("#titulo-modal-multi-mag").html("Agregar nota personalizada")}),$("#mag-reminder-btn").click(function(a){a.preventDefault(),$("#tipo-accion-mag").val("recordatorio"),$("#mag-form").submit()}),$("#lista-mag").click(function(){$("#tipo-accion-mag").val("lista-general"),$("#titulo-modal-multi-mag").html("Enviar a lista general"),$("#es-llamada-mag").css("display","none")}),$("#reservar-mag").click(function(){$("#tipo-accion-mag").val("reservar")}),$("#eliminar-mag").click(function(){$("#tipo-accion-mag").val("eliminar")}),$("#mag-form").on("submit",function(a){a.preventDefault(),$.ajax({data:$("#mag-form").serialize(),type:"POST",dataType:"json",url:"controllers/procesar.php"}).done(function(a,i,o){console.log("La solicitud se ha completado correctamente."),console.log(a),$("#alerta-exito").html(a.mensaje),document.location.reload(),$(".modal").modal("hide"),$("#alerta-exito").addClass("muestra"),setTimeout(function(){$("#alerta-exito").removeClass("muestra")},1200)}).fail(function(a,i,o){console&&console.log&&console.log("La solicitud a fallado: "+i),$("#trace-block .datos").html("La solicitud a fallado: "+i),$(".contenido").css("display","block"),$(".modal").modal("hide")})});
$(".mensaje").click(function(){var a=$(this).closest(".lead").attr("id");$("#lead-id-em").val(a),$("#em-form").submit()}),$(".nota").click(function(){var a=$(this).closest(".lead").attr("id"),i=($(this).attr("tipo-accion"),$("#modal-multi"));$("#comentario-multi").val(""),$("#es-llamada").css("display","block"),$("#lead-id").val(a),$("#tipo-accion").val("agregar-nota"),i.find("#titulo-modal-multi").html("Agregar nota personalizada")}),$(".llamada").click(function(){var a=$(this).closest(".lead").attr("id"),i=$(this).attr("tipo-accion"),o=$("#modal-multi");$("#lead-id").val(a),$("#tipo-accion").val(i),o.find("#titulo-modal-multi").html("Registrar llamada")}),$(".inscripcion").click(function(){var a=$(this).closest(".lead").attr("id"),i=$(this).attr("tipo-accion"),o=$("#modal-multi");$("#comentario-multi").val(""),$("#es-llamada").css("display","none"),$("#lead-id").val(a),$("#tipo-accion").val(i),o.find("#titulo-modal-multi").html("Inscribir a Musinetwork")}),$(".lista").click(function(){var a=$(this).closest(".lead").attr("id"),i=($(this).attr("tipo-accion"),$("#modal-multi"));$("#comentario-multi").val(""),$("#es-llamada").css("display","none"),$("#lead-id").val(a),$("#tipo-accion").val("lista-general"),i.find("#titulo-modal-multi").html("Enviar a lista general")}),$(".reservar").click(function(){var a=$(this).closest(".lead").attr("id");$(this).attr("tipo-accion");$("#comentario-reservar").val(""),$("#lead-id").val(a),$("#tipo-accion").val("reservar")}),$(".recordatorio").click(function(){var a=$(this).closest(".lead").attr("id");$(this).attr("tipo-accion");$("#lead-id").val(a),$("#tipo-accion").val("recordatorio")}),$(".editar-prospecto").click(function(){var a=$(this).closest(".lead").attr("id");$(this).attr("tipo-accion");$("#lead-id").val(a),$("#tipo-accion").val("solicitar-datos"),$("#leads-form").submit()}),$(".historial").click(function(){var a=$(this).closest(".lead").attr("id");$("#lead-id").val(a),$("#tipo-accion").val("ver-historial"),$("#leads-form").submit()}),$(".eliminar").click(function(){var a=$(this).closest(".lead").attr("id"),i=$(this).attr("tipo-accion"),o=$("#nombre-prospecto"+a).text();$("#lead-id").val(a),$("#tipo-accion").val(i),$("#nombre-a-eliminar").html(o)}),$(".prioridad-verde").click(function(){var a=$(this).closest(".lead").attr("id");$("#lead-id").val(a),$("#tipo-accion").val("cambiar-prioridad"),$("#prioridad").val("verde"),$("#leads-form").submit()}),$(".prioridad-roja").click(function(){var a=$(this).closest(".lead").attr("id");$("#lead-id").val(a),$("#tipo-accion").val("cambiar-prioridad"),$("#prioridad").val("roja"),$("#leads-form").submit()}),$(".prioridad-azul").click(function(){var a=$(this).closest(".lead").attr("id");$(this).attr("tipo-accion");$("#lead-id").val(a),$("#tipo-accion").val("cambiar-prioridad"),$("#prioridad").val("azul"),$("#leads-form").submit()}),$("#leads-form").on("submit",function(a){a.preventDefault(),$.ajax({data:$("#leads-form").serialize(),type:"POST",dataType:"json",url:"controllers/procesar.php"}).done(function(a,o,e){if(console&&console.log&&(console.log("La solicitud se ha completado correctamente."),console.log(a)),"registrar-llamada"==a.tipo_accion&&($("#status-"+a.lead_id).html('<span class="date-status">'+a.fecha_estatus+"</span> "+a.estatus),$("#alerta-exito").html(a.mensaje)),"agregar-nota"==a.tipo_accion&&($("#status-"+a.lead_id).html('<span class="date-status">'+a.fecha_estatus+"</span> "+a.estatus),$("#alerta-exito").html(a.mensaje)),"inscribir"==a.tipo_accion&&($("#"+a.lead_id).remove(),$("#alerta-exito").html(a.mensaje)),"reservar"==a.tipo_accion&&($("#"+a.lead_id).remove(),$("#alerta-exito").html(a.mensaje)),"lista-general"==a.tipo_accion&&($("#"+a.lead_id).remove(),$("#alerta-exito").html(a.mensaje)),"recordatorio"==a.tipo_accion&&(document.location.reload(),$("#alerta-exito").html(a.mensaje)),"solicitar-datos"==a.tipo_accion&&($("#nombre-prospecto").val(a.lead_info.nombre),$("#apellidos-prospecto").val(a.lead_info.apellidos),$("#correo-prospecto").val(a.lead_info.email),$("#telefono-prospecto").val(a.lead_info.telefono),$("#pais-prospecto").val(a.lead_info.pais),$("#ciudad-prospecto").val(a.lead_info.ciudad),$("#instrumento-prospecto").val(a.lead_info.instrumento),$("#lead-id").val(a.lead_id),$("#tipo-accion").val("editar-datos")),"editar-datos"==a.tipo_accion&&($("#nombre-prospecto"+a.lead_id).html(a.nombre+" "+a.apellidos),$("#alerta-exito").html(a.mensaje)),"ver-historial"==a.tipo_accion){var t="";i=0;for(interaccion in a.historial){var l="interaccion_"+i;i++,t+='<div class="panel panel-default panel-historial">',t=t+'<div class="panel-heading" role="tab" id="heading-'+i+'">',t=t+'<a role="button" data-toggle="collapse" href="#collapse-'+i+'" aria-expanded="false" aria-controls="collapse-'+i+'" class="bar-title">',t+='<h4 class="panel-title">',t=t+"<span>"+a.historial[l].fecha+"</span>",t+=a.historial[l].tipo,t+="</h4>",t+="</a>",t+="</div>",t=t+'<div id="collapse-'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-1">',t+='<div class="panel-body">',""!=a.historial[l].mensaje_int&&(t+="<h4>Mensaje del interesado</h4>",t=t+"<p>"+a.historial[l].mensaje_int+"</p>"),""!=a.historial[l].mensaje_op&&(t+="<h4>Mensaje del operador</h4>",t=t+"<p>"+a.historial[l].mensaje_op+"</p>"),""!=a.historial[l].observaciones&&(t+="<h4>Observaciones</h4>",t=t+"<p>"+a.historial[l].observaciones+"</p>"),""!=a.historial[l].alerta&&(t+="<h5>Alerta</h5>",t=t+"<p>"+a.historial[l].alerta+"</p>"),t+="</div>",t+="</div>",t=t.concat("</div>")}$("#acordeon-historial").html(t)}"eliminar"==a.tipo_accion&&($("#"+a.lead_id).remove(),$("#alerta-exito").html(a.mensaje)),"cambiar-prioridad"==a.tipo_accion&&(document.location.reload(),$("#alerta-exito").html(a.mensaje)),"ver-historial"!=a.tipo_accion&&"solicitar-datos"!=a.tipo_accion&&($(".modal").modal("hide"),$("#alerta-exito").addClass("muestra"),setTimeout(function(){$("#alerta-exito").removeClass("muestra")},1200))}).fail(function(a,i,o){console&&console.log&&console.log("La solicitud a fallado: "+i),$("#trace-block .datos").html("La solicitud a fallado: "+i),$(".contenido").css("display","block"),$(".modal").modal("hide")})});
0!=$("#ciclo-esc-conf").length&&(cicloEscolarConf=$("#ciclo-esc-conf").attr("seleccionado"),$("#ciclo-esc-conf option").each(function(){$(this).val()==cicloEscolarConf&&$(this).attr("selected","selected")})),$("#nuevo-usuario").click(function(){$("#usuario-tipo-accion").val("crear-usuario"),$("#titulo-modal-usuario").html("Agregar nuevo usuario"),$("#modal-usuario-submit").html("Agregar nuevo usuario")}),$(".editar-usuario").click(function(){var a=$(this).closest(".user").attr("id");$("#usuario-tipo-accion").val("solicitar-datos"),$("#titulo-modal-usuario").html("Editar datos de usuario"),$("#modal-usuario-submit").html("Editar datos de usuario"),$("#usuario-id").val(a),$("#usuarios-form").submit()}),$(".eliminar-usuario").click(function(){$("#usuario-tipo-accion").val("eliminar-usuario");var a=$(this).closest(".user").attr("id");usuario=$("#"+a);var i=usuario.find(".nombre").text();$("#nombre-a-eliminar").html(i),$("#usuario-id").val(a),$("#usuario-username").val("xx"),$("#usuario-nombre").val("xx"),$("#usuario-email").val("xx@xx.xx"),$("#usuario-clave").val("xx")}),$("#usuarios-form").on("submit",function(a){a.preventDefault(),$.ajax({data:$("#usuarios-form").serialize(),type:"POST",dataType:"json",url:"controllers/procesar.php"}).done(function(a,i,o){if(console.log("La solicitud se ha completado correctamente."),console.log(a),"solicitar-datos"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),$("#usuario-username").val(a.username),$("#usuario-nombre").val(a.nombre),$("#usuario-email").val(a.email),$("#usuario-clave").val(a.clave),tipoUsuario=a.tipo,$("#usuario-tipo option").each(function(){$(this).val()==tipoUsuario&&$(this).attr("selected","selected")}),$("#usuario-tipo-accion").val("editar-usuario")),"editar-usuario"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),e=$("#"+a.usuario_id),e.find(".usernamedata").html(a.username),e.find(".nombre").html(a.nombre),e.find(".correo").html(a.email),e.find(".tipo").html(a.tipo),$(".modal").modal("hide")),"eliminar-usuario"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),e=$("#"+a.usuario_id),e.remove(""),$(".modal").modal("hide")),"crear-usuario"==a.tipo_accion){$("#alerta-exito").html(a.mensaje);var e="";e=e+'<div id=" '+a.usuario_id+'" class="user">',e+="<!-- Usuario -->",e+='<span class="username">',e+='<i class="fa fa-user userimg"></i>',e+=a.username,e+="</span>",e+="<!-- Nombre -->",e+='<span class="nombre">',e+=a.nombre,e+="</span>",e+="<!-- Correo -->",e+='<span class="correo">',e+=a.email,e+="</span>",e+="<!-- Acciones -->",e+='<aside class="actions">',e+="<!-- Editar usuario -->",e+='<a href="#" class="action editar-usuario" data-toggle="modal" data-target="#modal-usuario"><i class="fa fa-pencil" data-toggle="tooltip" data-placement="top" title="Editar usuario"></i></a> ',e+="<!-- Eliminar usuario -->",e+='<a href="#" class="action eliminar-usuario" data-toggle="modal" data-target="#modal-usuario-eliminar" tipo-accion="eliminar"><i class="fa fa-close" data-toggle="tooltip" data-placement="top" title="Eliminar usuario"></i></a>',e+="</aside>",e=e.concat("</div>"),$("#user-list").append(e)}"solicitar-datos"!=a.tipo_accion&&($(".modal").modal("hide"),$("#alerta-exito").addClass("muestra"),setTimeout(function(){$("#alerta-exito").removeClass("muestra")},1200))}).fail(function(a,i,o){console&&console.log&&console.log("La solicitud a fallado: "+i),$("#trace-block .datos").html("La solicitud a fallado: "+i),$(".contenido").css("display","block"),$(".modal").modal("hide")})});
$("#nueva-plantilla").click(function(){$("#plantilla-tipo-accion").val("crear-plantilla"),$("#titulo-modal-plantilla").html("Agregar nueva plantilla"),$("#modal-plantilla-submit").html("Agregar nueva plantilla")}),$(".editar-plantilla").click(function(){var a=$(this).closest(".template").attr("id");$("#plantilla-tipo-accion").val("solicitar-datos"),$("#titulo-modal-plantilla").html("Editar datos de plantilla"),$("#modal-plantilla-submit").html("Editar datos de plantilla"),$("#plantilla-id").val(a),$("#plantillas-form").submit()}),$(".eliminar-plantilla").click(function(){$("#plantilla-tipo-accion").val("eliminar-plantilla");var a=$(this).closest(".template").attr("id");plantilla=$("#"+a);var i=plantilla.find(".templatename").text();$("#nombre-a-eliminar").html(i),$("#plantilla-id").val(a),$("#plantilla-nombre").val("xx"),$("#plantilla-asunto").val("xx")}),$("#plantillas-form").on("submit",function(a){a.preventDefault(),$.ajax({data:$("#plantillas-form").serialize(),type:"POST",dataType:"json",url:"controllers/procesar.php"}).done(function(a,i,o){if(console.log("La solicitud se ha completado correctamente."),console.log(a),"solicitar-datos"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),$("#plantilla-nombre").val(a.nombre),$("#plantilla-asunto").val(a.asunto),$("#plantilla-contenido").val(a.contenido),$("#plantilla-tipo-accion").val("editar-plantilla")),"editar-plantilla"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),e=$("#"+a.plantilla_id),e.find(".templatename").html(a.nombre),$(".modal").modal("hide")),"eliminar-plantilla"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),e=$("#"+a.plantilla_id),e.remove(""),$(".modal").modal("hide")),"crear-plantilla"==a.tipo_accion){$("#alerta-exito").html(a.mensaje);var e="";e=e+'<div id=" '+a.plantilla_id+'" class="template">',e+="<!-- plantilla -->",e+='<span class="templateimg">',e+='<i class="fa fa-file-code-o userimg"></i>',e+="</span>",e+="<!-- Nombre -->",e+='<span class="templatename">',e+=a.nombre,e+="</span>",e+="<!-- Acciones -->",e+='<aside class="actions">',e+="<!-- Editar plantilla -->",e+='<a href="#" class="action editar-plantilla" data-toggle="modal" data-target="#modal-plantilla"><i class="fa fa-pencil" data-toggle="tooltip" data-placement="top" title="Editar plantilla"></i></a> ',e+="<!-- Eliminar plantilla -->",e+='<a href="#" class="action eliminar-plantilla" data-toggle="modal" data-target="#modal-plantilla-eliminar" tipo-accion="eliminar"><i class="fa fa-close" data-toggle="tooltip" data-placement="top" title="Eliminar plantilla"></i></a>',e+="</aside>",e=e.concat("</div>"),$("#user-list").append(e)}"solicitar-datos"!=a.tipo_accion&&($(".modal").modal("hide"),$("#alerta-exito").addClass("muestra"),setTimeout(function(){$("#alerta-exito").removeClass("muestra")},1200))}).fail(function(a,i,o){console&&console.log&&console.log("La solicitud a fallado: "+i),$("#trace-block .datos").html("La solicitud a fallado: "+i),$(".contenido").css("display","block"),$(".modal").modal("hide")})});
$(".Notificaciones-toggleBtn").click(function(){$("#notificaciones").toggleClass("is-hidden")}),$("#notificacion-nueva").click(function(){$("#notificacion-titulo-modal").html("Crear una nueva notificación");var a="";a+='<button  id="modal-notificacion-crear" class="Notificaciones-formCrear btn btn-primary" type="submit">',a+='<i class="fa fa-check"></i> Crear nueva notificación',a=a.concat("</button>"),$("#notificacion-acciones-btns").html(a),$("#notificacion-fecha").val(""),$("#notificacion-titulo").val(""),$("#notificacion-descripcion").val(""),$("#notificacion-tipo-accion").val("crear_notificacion")}),$(".notice").click(function(){$("#notificacion-titulo-modal").html("Modificar notificación");var a=$(this).closest(".Notificaciones-notificacion").attr("id"),i=$(this).attr("desc"),o=$(this).attr("titulo"),e=$(this).attr("fecha");$(this).attr("tipo");$("#notificacion-id").val(a),$("#notificacion-fecha").val(e),$("#notificacion-titulo").val(o),$("#notificacion-descripcion").val(i)}),$("#modal-notificacion-eliminar").click(function(a){a.preventDefault(),$("#notificacion-tipo-accion").val("eliminar_notificacion"),$("#notificaciones-form").submit()}),$("#modal-notificacion-editar").click(function(a){a.preventDefault(),$("#notificacion-tipo-accion").val("editar_notificacion"),$("#notificaciones-form").submit()}),$("#modal-notificacion-completar").click(function(a){a.preventDefault(),$("#notificacion-tipo-accion").val("completar_notificacion"),$("#notificaciones-form").submit()}),$("#notificaciones-form").on("submit",function(a){a.preventDefault(),$.ajax({data:$("#notificaciones-form").serialize(),type:"POST",dataType:"json",url:"controllers/procesar.php"}).done(function(a,i,o){console.log("La solicitud se ha completado correctamente."),console.log(a),"editar_notificacion"==a.tipo_accion&&(document.location.reload(),$(".modal").modal("hide")),"eliminar_notificacion"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),notificacion=$("#"+a.ID),notificacion.remove(),$(".modal").modal("hide")),"completar_notificacion"==a.tipo_accion&&($("#alerta-exito").html(a.mensaje),notificacion=$("#"+a.ID),notificacion.remove(""),$(".modal").modal("hide")),"crear_notificacion"==a.tipo_accion&&document.location.reload(),a.tipo-accion!="solicitar-datos"&&($(".modal").modal("hide"),$("#alerta-exito").addClass("muestra"),setTimeout(function(){$("#alerta-exito").removeClass("muestra")},1200))}).fail(function(a,i,o){console&&console.log&&console.log("La solicitud a fallado: "+i),$("#trace-block .datos").html("La solicitud a fallado: "+i),$(".contenido").css("display","block"),$(".modal").modal("hide")})});
function cambiarContenido(a){var i=CKEDITOR.instances.mensaje_op,o=a;console.log(o);var e=document.getElementById("contenidoPlantilla"+a).value,t=document.getElementById("asuntoPlantilla"+a).innerHTML,l=document.getElementsByName("asunto")[0];l.value=t,i.setData(e)}if($(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#acordeon-historial").children().click(function(a){return $(a.currentTarget).siblings().children(".collapsing").length>0?!1:void 0}),$("input:checked + .check-icon").addClass("fa-check-square-o"),$("input:checked + .check-icon").removeClass("fa-square-o"),$("input:not(:checked) + .check-icon").addClass("fa-square-o"),$("input:not(:checked) + .check-icon").removeClass("fa-check-square-o"),$(function(){$("#leads-form").tshift()}),$("#uncheck-all").click(function(a){a.preventDefault(),$(".check").prop("checked",!1),$("input:not(:checked) + .check-icon").addClass("fa-square-o"),$("input:not(:checked) + .check-icon").removeClass("fa-check-square-o")}),$("input[type=checkbox]").change(function(){$("input:checked + .check-icon").addClass("fa-check-square-o"),$("input:checked + .check-icon").removeClass("fa-square-o"),$("input:not(:checked) + .check-icon").addClass("fa-square-o"),$("input:not(:checked) + .check-icon").removeClass("fa-check-square-o")}),$("input[type=radio]").change(function(){$("input:checked + .radio-icon").addClass("fa-dot-circle-o"),$("input:checked + .radio-icon").removeClass("fa-circle-o "),$("input:not(:checked) + .radio-icon").addClass("fa-circle-o "),$("input:not(:checked) + .radio-icon").removeClass("fa-dot-circle-o")}),$(document).ajaxStart(function(){$(".loading").css("display","block")}),$(document).ajaxComplete(function(){$(".loading").css("display","none")}),0!=$("#mensaje_op").length){var asunto=document.getElementsByName("asunto")[0];asunto.value="",CKEDITOR.replace("mensaje_op",{extraPlugins:"serverpreview,autogrow",serverPreview_Url:"lib/ckeditor/plugins/serverpreview/preview.php",autoGrow_minHeight:200,autoGrow_maxHeight:600,autoGrow_bottomSpace:50,removePlugins:"resize",removePlugins:"resize",toolbar:[{name:"document",groups:["mode","document","doctools"],items:["Source","-","Preview","-","Templates"]},{name:"clipboard",groups:["clipboard","undo"],items:["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"]},{name:"editing",groups:["find","selection","spellchecker"],items:["Find","Replace","-","SelectAll","-","Scayt"]},"/",{name:"basicstyles",groups:["basicstyles","cleanup"],items:["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"],items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"insert",items:["Image","Table","HorizontalRule","Smiley","SpecialChar"]},"/",{name:"styles",items:["Styles","Format","Font","FontSize"]},{name:"colors",items:["TextColor"]},{name:"tools",items:["Maximize","ShowBlocks"]},{name:"others",items:["-"]},{name:"about",items:["About"]}],templates_files:["lib/ckeditor/plugins/templates/templates/cs-mail-templates.php"]}),CKEDITOR.on("instanceReady",function(a){document.getElementById("plantillasBotones").style.display="block"})}

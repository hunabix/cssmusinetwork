<div id="content">



	<h1 class="titulo">Casos de seguimiento</h1>  



	<div id="controles-colectivos">	

		<!-- FORMULARIO DE CASOS DE SEGUIMIENTO COLECTIVO-->

		<form method="post" id="casos-seguimiento-col" name="casos-seguimiento-col" action="" onsubmit="doSomething(this)">

			<select name="tipo_accion" id="inp" name="inp" style="float:left; margin-right: 20px;">

				<option value="componer-mensaje?tipo=responder">Responder por correo</option>

				<option value="componer-mensaje?tipo=informacion">Correo de información</option>

				<option value="componer-mensaje?tipo=seguimiento">Correo de seguimiento</option>

				<option value="componer-mensaje?tipo=inicio">Correo de inicio de cursos</option>

				<option value="nueva-interaccion?tipo=llamada">Registrar llamada</option>

				<option value="componer-mensaje?tipo=recordatorio">Recordatorio de pago</option>

				<option value="nueva-interaccion?tipo=lista">Enviar a lista general</option>

				<option value="nueva-interaccion?tipo=inscribir">Registrar inscripción</option>	

				<option value="nueva-interaccion?tipo=nota">Agregar nota personalizada</option>	

				<option value="borrar-caso" onclick="return window.confirm('Advertencia: ¿Estas seguro de querer borrar éstos casos de manera permanente?');">Eliminar permanentemente</option>	

			</select>



			<button type="submit" name="btn-casos-seguimiento-col" class="btn" style="float:left; margin-right: 20px;">Aplicar</button>

			

			<label style="float:left; line-height: 40px; margin-right: 20px; font-weight: bold;">Reprogramar recordatorio</label>

				<input name="reprogramar" type="text" id="datepicker" onchange="form.submit()" style="margin-right: 20px;"/>					

			

			<script>

				$(function() {

							$( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+11M +10D" });

						  });

				function doSomething(form) {

					form.action = form.inp.value;

					return true;

				}

			</script>

		</form>

	</div> <!-- fin controles-colectivos -->



	<div id="casos" class="contenedor full">	

	

		<!-- FORMULARIO DE CASOS DE SEGUIMIENTO INDIVIDUAL-->

		<h3 class="titulo titulos-fila">

			<span class="tc-nombre">Nombre del interesado</span>

			<span class="tc-estatus">Estatus actual</span>

			<span class="tc-sugerencia">Recordatorio y sugerencia</span>

		</h3>



		<?php $casos_set = obten_casos(); //obtengo array con los casos

			  $temporada = obten_temporada(); //obtengo temporada actual	?>

		

		<!-- FORMULARIO DE CASOS DE SEGUIMIENTO INDIVIDUAL-->



		<form method="post" id="casos-seguimiento-ind" >

		<ul>

			<?php $num_caso = 0; ?>

			<?php while ($caso = mysql_fetch_array($casos_set)) { ?>

			<!-- SE OBTIENEN LA INFORMACIÓN DEL ESTATUS DE CADA CASO -->

			<?php 

			$id_interesado = utf8_encode($caso["ID"]);

			$nombre = utf8_encode($caso["nombre"]);			

			$recordatorio = utf8_encode($caso['recordatorio']);	

			$prioridad = $caso["prioridad"];			

			$fecha_recordatorio = substr($recordatorio, 8, 2) . ' ' .  mes_en_texto(substr($recordatorio, 5, 2));

			$interacciones = obten_utima_interaccion($id_interesado);

			$estatus = mysql_fetch_array($interacciones); 

			$tipo = utf8_encode($estatus['tipo']);

			$fecha = utf8_encode($estatus['fecha']);

			$mes_estatus = substr($fecha, 5, 2);

			$dia_estatus = substr($fecha, 8, 2);

			$mes_estatus = mes_en_texto($mes_estatus);

			$fecha_estatus = $dia_estatus. ' ' . $mes_estatus;

			$info_caso = utf8_encode($estatus['observaciones']);

			$alerta = utf8_encode($estatus['alerta']);

			?>



			<!-- CASO DE SEGUIMIENTO -->

			<li id="caso<?php echo $num_caso = $num_caso + 1; ?>" class="caso <?php echo $prioridad;  ?>">



				<!-- chechbox -->

				<input name="caso<?php echo $num_caso = $num_caso + 1; ?>" value="<?php echo $id_interesado; ?>" type="checkbox" class="caso-check" form="casos-seguimiento-col">



				<!-- nombre del interesado -->	

				<span class="caso-nombre">

					<button type="submit"  formaction="historial" value="<?php echo $id_interesado;?>" name="casohist-btn"><?php echo $nombre; ?></button>					

				</span>



				<!-- estatus -->

				<span class="caso-estatus"><span class="fecha-estatus"><?php echo $fecha_estatus ?></span>

					<span style="float:left; line-height: 28px;"><?php echo $tipo; ?></span>

					<span class="caso-notice-ico"><?php if ($alerta != '') { ?><img src="imagenes/date.png" width="20" height="20"title="<?php echo $alerta; ?>"/><?php } ?></span>

					<span class="caso-notice-ico"><?php if ($info_caso != '') { ?><img src="imagenes/info.png" width="20" height="20" title="<?php echo $info_caso; ?>"/><?php } ?></span>

				</span>



				<!-- recordatorio -->

				<span class="caso-recordatorio">

					<span class="fecha-recordatorio"><?php echo $fecha_recordatorio ?></span>	

				</span>



				<!-- sugerencia -->

				<span class="caso-sugerencia"><?php imprime_sugerencia($temporada, $tipo); ?></span>

			

				<!-- Barra de controles individuales -->

				<div class="ci-wrap">

				<div class="controles-individuales">	

					<ul>

						<!-- Enviar correo -->

						<button type="submit" name="accion-ind-btn" formaction="componer-mensaje?tipo=responder" value="<?php echo $id_interesado; ?>" class="accion-ind-btn">

							<span class="accion-ind-ico"><img src="imagenes/email-16.png" /></span>Enviar correo

						</button>

						<!-- Agregar nota -->

						<button type="submit" name="accion-ind-btn" formaction="nueva-interaccion?tipo=llamada" value="<?php echo $id_interesado; ?>" class="accion-ind-btn">

							<span class="accion-ind-ico"><img src="imagenes/file.png" /></span>Otras acciones

						<!-- Lista general -->

						<button type="submit" name="accion-ind-btn" formaction="nueva-interaccion?tipo=lista" value="<?php echo $id_interesado; ?>" class="accion-ind-btn">

							<span class="accion-ind-ico"><img src="imagenes/list-16.png" /></span>Enviar a lista general

						</button>

						<!-- Inscribir -->

						<button type="submit" name="accion-ind-btn" formaction="nueva-interaccion?tipo=inscribir" value="<?php echo $id_interesado; ?>" class="accion-ind-btn">

							<span class="accion-ind-ico"><img src="imagenes/insc-16.png" /></span>Registrar inscripción

						</button>

						<!-- Reprogramar recordatorio -->

						<label  class="accion-ind-btn" >

							<span class="accion-ind-ico" style="margin: 1px 5px 0 1px;"><img src="imagenes/time-16.png" /></span>Reprogramar recordatorio

							<input name="reprogramar<?php  echo $num_caso; ?>" type="text" onchange="form.submit()" id="datepicker<?php echo $num_caso; ?>" class="dp-ind" />	

						</label>					

						<input type="hidden" name="casos_rp" value="<?php echo $num_caso; ?>" />

						<input type="hidden" name="id_rp<?php echo $num_caso; ?>" value="<?php echo $id_interesado; ?>" />

						<script>

						  $(function() {

							$( "#datepicker<?php echo $num_caso; ?>" ).datepicker({ minDate: 0, maxDate: "+11M +10D"} );

						  });

						</script>
						
						<!-- Borrar definitivamente -->

						<!-- Lista general -->

						<button type="submit" name="accion-ind-btn" formaction="borrar-caso" value="<?php echo $id_interesado; ?>" class="accion-ind-btn" onclick="return window.confirm('Advertencia: ¿Estas seguro de querer borrar éste caso de manera permanente?');">

							<span class="accion-ind-ico"><img src="imagenes/x-mark-16.png" /></span>Eliminar

						</button>	
						<button type="submit" class="prioridad-roja" name="accion-ind-btn" formaction="cambiar-prioridad?color=roja" value="<?php echo $id_interesado; ?>" ></button>
						<button type="submit" class="prioridad-verde" name="accion-ind-btn" formaction="cambiar-prioridad?color=verde" value="<?php echo $id_interesado; ?>" ></button>
						<button type="submit" class="prioridad-azul" name="accion-ind-btn" formaction="cambiar-prioridad?color=azul" value="<?php echo $id_interesado; ?>" ></button>
					</ul>

				</div><!-- fin #controles-individuales -->

				</div><!-- fin #ci-wrap -->



			</li><!-- fin .caso -->



			<?php }	 // fin while ?>

		</ul>



		<input type="hidden" name="num_casos" value="<?php echo $num_caso ?>" form="casos-seguimiento-col"/>



		</form>



	</div><!-- fin #casos -->



</div>  		



</div><!-- fin #content-->  



<?php  require_once("includes/footer.php"); ?>
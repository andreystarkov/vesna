<? include "backend/engine.php"; ?>

<!DOCTYPE HTML>

<html>
	<head>

		<title>Весенний квартал</title>

		<meta http-equiv="content-type" content="text/html; charset=utf-8" />

		<meta name="description" content="" />
		<meta name="keywords" content="" />

		<link rel="icon" type="image/png" href="images/fav.png" />

        <!-- by Andrey Starkov
             im@andreystarkov.ru
             webscapes.ru -->

		<link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

		<link rel="stylesheet" type="text/css" href="css/root.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

		<link rel="stylesheet" type="text/css" href="css/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/component.css" />

		<link rel="stylesheet" href="css/font-awesome.min.css">
		<link href="font/font.css" rel="stylesheet" type="text/css" />

		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->

		<script src="js/modernizr.custom.js"></script>

		<script src="js/skel.min.js"></script>
		<script src="js/skel-panels.js"></script>

		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-wide.css" />
		</noscript>

		<!--[if lte IE 9]><link rel="stylesheet" href="css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie8.css" /><![endif]-->

		<style>
		    #logo h1 { font-family: 'Hagin Caps Medium'; font-size: 43px; color: #493d35; }
		</style>

	</head>
	<body>

 <!-- Button trigger modal -->


			<div id="header" class="skel-panels-fixed">

				<div class="top">

						<div id="logo">
							<h1>Весенний квартал</h1>
						</div>

						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-home"></i> О проекте</span></a></li>

								<li><a href="#design" id="design-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-pencil-square-o"></i> Дизайн квартир</span></a></li>

							<!--	<li><a href="#struct" id="struct-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-hospital"></i> Инфраструктура</span></a></li> -->

								<li><a href="#tech" id="tech-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-cogs"></i> Технологии строительства</span></a></li>

								<li><a href="#time" id="time-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-calendar"></i> Сроки строительства</span></a></li>

								<li><a href="#cart" id="cart-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-shopping-cart"></i> Условия покупки</span></a></li>

								<li><a href="#map" id="map-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-map-marker"></i> Схема проезда</span></a></li>

								<li><a href="#photo" id="photo-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-camera-retro"></i> Фотоотчет</span></a></li>

								<li><a href="#contact" id="contact-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-phone"></i> Контактная информация</span></a></li>

							</ul>
						</nav>

				</div>

				<div class="bottom">

			<!--	<div class="form-feedback">
					<h1>Задайте вопрос</h1>
					<form>
						<textarea name="text"></textarea>
						<div class="btn-send"><i class="icn fa fa-comment-o icn-btn"></i> Отправить сообщение</div>
					<form>
				</div>  -->

				</div>

			</div>

			<div id="main">

                    <section id="top" class="one">
                        <div class="container no-auto">

                            <div class="header-image">
                                <ul id="scene" class="scene">
                                    <li class="layer" data-depth="0.30"><div class="layer-bg layer-px"></div></li>
                                    <li class="layer" data-depth="1.70"><div class="layer-house layer-px"></div></li>
                                </ul>

                            </div>

                            <div class="logo-top"><h1>Весенний квартал</h1></div>

                            <header class="first-sub" style="margin-top: 1.5em">
                                <h1>Загородный жилой квартал будущего поколения.</h1>
                                <h2>Экологичное пространство для людей, стремящихся к совершенству.</h2>
                            </header>

                            <div class="box-info s1"><i class="icn fa-leaf fa grn"></i><p>Расположение вблизи леса, в далеке от промышленных зон и крупных автомагистралей, создает благоприятную экологическую обстановку. Воздух не загрязнен смогом и вредными веществами. Вы и Ваша семья будет дышать только чистым воздухом.</p></div>

                            <footer>
                                <a href="#design" class="btn-go scrolly btn btn-1 round"></a>
                            </footer>

                        </div>
                    </section>

                    <?
                        includeContent();
                    ?>



			</div>

	<!-- Footer -->
		<div id="footer">

			<!-- Copyright -->
				<div class="copyright">
					<p>&copy; 2013 &mdash; Andrey Starkov.</p>
					<ul class="menu">
						<li></li>
						<li></li>
					</ul>
				</div>

		</div>

    <? include "content/_modals.inc.php"; ?>

	<script src="js/jquery-1.10.2.min.js"></script>

    <script src="js/bootstrap.js"></script>

	<script src="js/colors.js"></script>
	<script src="js/transit.js"></script>
	<script src="js/shadow.js"></script>
	<script src="js/easing.js"></script>

	<script src="js/parallax.js"></script>
	<script src="js/engine.js"></script>
	<script src="js/init.js"></script>


	<script src="js/classie.js"></script>
	<script src="js/requestAnimationFrame.js"></script>
	<script src="js/img-grid.js"></script>


	</body>

</html>
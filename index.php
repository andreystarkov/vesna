<? include "backend/engine.php"; ?>

<!DOCTYPE HTML>

<html>
	<head>

		<title>Весенний квартал</title>

		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link rel="icon" type="image/png" href="images/fav.png" />

        <!-- im@andreystarkov.ru
             webscapes.ru

        <link rel="stylesheet/less" type="text/css" href="css/root.less" />
		-->
		<link rel="stylesheet" type="text/css" href="css/root.css" />

        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="css/tooltipster.css" />
		<link rel="stylesheet" type="text/css" href="css/component.css" />
		<link rel="stylesheet" type="text/css" href="css/imagelightbox.css" />

		<link rel="stylesheet" href="css/font-awesome.min.css">
		<link href="fonts/hagincaps/font.css" rel="stylesheet" type="text/css" />

		<!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->

		<script src="js/modernizr.custom.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-panels.js"></script>

		<!--
        <script src="js/vendor/less-1.7.0.min.js"></script>
        <script type="text/javascript" charset="utf-8">
          less.env = "development";
          less.watch();
        </script>
		-->

		<script type="text/javascript" charset="utf-8"
		src="//api-maps.yandex.ru/services/constructor/1.0/js/?sid=eiWJZzQZ6XCiygBYkHxMNNpfX19Dkdpk&id=mymap"></script>

		<noscript>
			<link rel="stylesheet" href="css/skel-noscript.css" />
			<link rel="stylesheet" href="css/style.css" />
			<link rel="stylesheet" href="css/style-wide.css" />
		</noscript>

		<!--[if lte IE 9]><link rel="stylesheet" href="css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie8.css" /><![endif]-->

	</head>
	<body>				<a href="#contact-form" id="ask-btn" class="ask-question skel-panels-ignoreHref">Задать вопрос <i class="fa fa-comment-o"></i></a>


			<div class="top-panel" id="top-panel"></div>
			<div id="header" class="skel-panels-fixed">

				<div class="top">

						<div id="logo"></div>

						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-home"></i> О проекте</span></a></li>

							<!--	<li><a href="#news" id="design-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-lightbulb-o"></i> Новости проекта</span></a></li>  -->

								<li><a href="#design" id="design-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-pencil-square-o"></i> Дизайн квартир</span></a></li>

								<li><a href="#struct" id="struct-link" class="skel-panels-ignoreHref">
									<span><i class="icn icn fa fa-hospital"></i> Инфраструктура</span></a></li>

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

				</div>

			</div>

			<div id="main">
                <? includeContent(); ?>
			</div>

	<!-- Footer -->
		<div id="footer">
			<!-- Copyright -->
				<div class="copyright">
					<p>&copy; 2013 &mdash; Строительная компания &laquo;Весна&raquo;</p>
					<div class="cells">
					<a href="files/project.docx"><i class="fa fa-download"></i> Проектная декларация (изменения)</a>
					<a href="files/project.docx"><i class="fa fa-download"></i> Проектная декларация</a>
					<a target="_blank" href="images/docs/razr.jpg"><i class="fa fa-download"></i> Разрешение на строительство</a>
					<a target="_blank" href="images/docs/inn.jpg"><i class="fa fa-download"></i> Свидетельство ИНН</a>
					<a target="_blank" href="images/docs/ogrn.jpg"><i class="fa fa-download"></i> Свидетельство ОГРН</a>
					</div>
				</div>
		</div>

    <? include "content/_modals.inc.php"; ?>

	<script src="js/vendor/jquery-1.11.0.min.js"></script>
    <script src="js/vendor/bootstrap.js"></script>

	<script src="js/colors.js"></script>
	<script src="js/transit.js"></script>
	<script src="js/shadow.js"></script>
	<script src="js/easing.js"></script>
    <script src="js/cookie.js"></script>
    <script src="js/tooltipster.js"></script>
	<script src="js/parallax.js"></script>
    <script src="js/waypoints.js"></script>
    <script src="js/imagelightbox.min.js"></script>
    <script src="js/imagelightbox-init.js"></script>
	<script src="js/init.js"></script>
    <script src="js/engine.js"></script>
    <script src="js/mail.js"></script>

	<script src="js/classie.js"></script>
	<script src="js/requestAnimationFrame.js"></script>
	<script src="js/img-grid.js"></script>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-48985751-1', 'vesna56.ru');
	  ga('send', 'pageview');

	</script>
	</body>

</html>
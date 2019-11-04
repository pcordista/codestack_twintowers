<?php
$file = basename($_SERVER['PHP_SELF']); // your file name 
$last_modified_time = filemtime($file);
$etag = md5_file($file);

header("Last-Modified: " . gmdate("D, d M Y H:i:s", $last_modified_time) . " GMT");
header("Etag: $etag");
?>

<?php include 'header.php'; ?>
<?php include 'menu.php'; ?>

<?php include 'components/content-auditorio-banner.php'; ?>

<?php include 'components/content-auditorio-presentation.php'; ?>

<?php include 'components/content-auditorio-gallery.php'; ?>

<?php include 'components/content-home-map.php'; ?>

<?php include 'footer.php'; ?>
<?php include 'assets/js/JS_includes.php'; ?>
<script src="assets/devlop/live.js"></script>
<script src="assets/js/writer.js"></script>

</body>

</html>